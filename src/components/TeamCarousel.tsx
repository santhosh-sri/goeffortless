// components/TeamCarousel.tsx
import { TeamGroup } from "@/interface/type";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import TeamPhoto from "./TeamPhoto";

/** How many cards fan out on each side of the active one. */
const WINGS = 3;
/** Auto-advance interval; pauses while the pointer is over the stage. */
const AUTOPLAY_MS = 3500;

/**
 * Fanned team carousel, after the "Going global" rail on getsphere.com.
 *
 * Every member sits on one ring. The active photo stands upright in the
 * centre with its team as a chip and the name/title pills beneath; the
 * neighbours tilt away and sink the further they are from the middle, and
 * the outermost pair fades. One tick per member underneath doubles as the
 * scrubber. Side cards, ticks, arrow keys and the autoplay all drive the
 * same `active` index.
 */
export default function TeamCarousel({ groups }: { groups: TeamGroup[] }) {
  const members = useMemo(
    () =>
      groups.flatMap((group) =>
        group.members.map((member) => ({ ...member, group: group.title }))
      ),
    [groups]
  );
  const count = members.length;

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Centre-to-centre distance between cards. Tightened on narrow screens so
  // at least one tilted neighbour stays in view either side.
  const [spacing, setSpacing] = useState(310);

  const go = useCallback(
    (index: number) => setActive(((index % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => go(active + 1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [active, paused, count, go]);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSpacing(w < 640 ? 170 : w < 1024 ? 240 : 310);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (count === 0) return null;
  const current = members[active];

  return (
    <div
      className="flex w-full flex-col items-center gap-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Stage. Cards are absolutely positioned off the centre line and the
          wings overflow the container on purpose — the clip at the edges is
          part of the look. Height covers the upright card, the sink of the
          outermost wing and the pill row beneath. */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Team members"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(active + 1);
          if (e.key === "ArrowLeft") go(active - 1);
        }}
        className="relative h-[380px] w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus sm:h-[430px]"
      >
        {members.map((member, index) => {
          // Signed ring distance from the active card, so the fan wraps
          // instead of running off one end.
          let d = index - active;
          if (d > count / 2) d -= count;
          if (d < -count / 2) d += count;
          const abs = Math.abs(d);
          const shown = abs <= WINGS;
          const isActive = d === 0;

          return (
            <button
              key={member.name}
              type="button"
              tabIndex={-1}
              aria-hidden={!isActive}
              disabled={!shown || isActive}
              onClick={() => go(index)}
              style={{
                transform: `translateX(calc(-50% + ${d * spacing}px)) translateY(${
                  Math.pow(abs, 1.35) * 44
                }px) rotate(${d * 9}deg) scale(${isActive ? 1 : 0.92})`,
                opacity: !shown ? 0 : abs === WINGS ? 0.4 : 1,
                zIndex: WINGS + 1 - abs,
              }}
              className={cn(
                "absolute left-1/2 top-2 w-[190px] origin-bottom sm:w-[230px]",
                shown
                  ? "transition-[transform,opacity] duration-500 ease-out"
                  : "pointer-events-none transition-none",
                !isActive && shown && "cursor-pointer"
              )}
            >
              <span className="relative block overflow-hidden rounded-xl shadow-card">
                <TeamPhoto
                  imageSrc={member.imageSrc}
                  crop={member.crop}
                  alt={isActive ? member.name : ""}
                  sizes="230px"
                />
                {/* Sphere fades the wings' feet into the page. */}
                {!isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent"
                  />
                )}
                {isActive && (
                  <span className="absolute left-2 top-2 rounded-md bg-black/55 px-2.5 py-1 text-caption font-medium text-white backdrop-blur-sm">
                    {member.group}
                  </span>
                )}
              </span>
            </button>
          );
        })}

        {/* Name / title / LinkedIn pills under the active card. Re-keyed on
            change so the fade runs again for each member. */}
        <div
          key={current.name}
          aria-live="polite"
          className="absolute left-1/2 top-[calc(190px*440/372+1rem)] flex w-[260px] -translate-x-1/2 flex-wrap justify-center gap-1.5 animate-[fadeIn_400ms_ease-out] sm:top-[calc(230px*440/372+1rem)] sm:w-[320px]"
        >
          <span className="rounded-md bg-bg-subtle px-2.5 py-1 text-label font-semibold text-content">
            {current.name}
          </span>
          <span className="rounded-md bg-bg-subtle px-2.5 py-1 text-label text-content-muted">
            {current.title}
          </span>
          {current.linkedInUrl && (
            <a
              href={current.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${current.name} on LinkedIn`}
              className="inline-flex items-center rounded-md bg-bg-subtle px-2 py-1 transition-colors hover:bg-accent-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
            >
              <Image src="/team/linkedin.svg" alt="" width={16} height={16} />
            </a>
          )}
        </div>
      </div>

      {/* Scrubber: a hairline per member, the active one taller and inked. */}
      <div className="flex items-end gap-2" role="tablist" aria-label="Choose a team member">
        {members.map((member, index) => {
          const isActive = index === active;
          return (
            <button
              key={member.name}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={member.name}
              onClick={() => go(index)}
              className="flex h-6 w-2 items-end justify-center focus-visible:outline-none"
            >
              <span
                className={cn(
                  "block w-px rounded-full transition-all duration-300",
                  isActive ? "h-6 w-[3px] bg-content" : "h-3 bg-line hover:bg-content-subtle"
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
