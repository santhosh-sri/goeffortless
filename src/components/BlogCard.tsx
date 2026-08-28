import { BlogCardProps } from "@/interface/type";
import Image from "next/image";
import Link from "next/link";

/**
 * Blog listing tile: cover image over a white card body with the date,
 * title and summary — the product pages' card (12px radius, `line` stroke,
 * lift shadow on hover) instead of the dark gradient overlay.
 */
const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title,
  desc,
  date,
  href = "#",
}) => {
  return (
    <Link
      href={href}
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-shadow duration-300 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
    >
      <div className="relative h-[220px] w-full overflow-hidden bg-bg-subtle">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-label font-medium text-accent">{date}</p>
        <h3 className="text-body-lg font-semibold capitalize text-content">
          {title}
        </h3>
        <p className="line-clamp-3 text-body text-content-muted">{desc}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-label font-semibold text-content transition-colors group-hover:text-accent">
          Read article
          <Image
            src="/assets/shared/arrow-right.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
