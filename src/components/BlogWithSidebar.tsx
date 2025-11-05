"use client";
import { useRef, useState } from "react";
import parse from "html-react-parser";
import { Content } from "@/interface/type";
import PageTitle from "./PageTitle";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface BlogWithSidebarProps {
  sections: Section[];
}

const sections = [
  {
    id: "01",
    title: "Introduction",
    content: [
      "India's dynamic and fast-growing market is powered by a vast network of distributors, retailers, and field sales teams. From FMCG to pharma to consumer durables, field sales professionals are the engine that drives customer reach and revenue growth.",
      "Yet, managing field sales in India isn't easy. Sales leaders struggle with issues ranging from late payments and manual processes to real-time visibility of their teams. In fact, studies suggest that Indian SMBs lose 15-25% productivity due to operational inefficiencies in sales and distribution.",
      "So, what are the biggest roadblocks for field sales teams—and more importantly, how can businesses overcome them? Let's break down the 10 most common challenges of field sales in India and explore practical solutions.",
    ],
  },
  {
    id: "02",
    title: "Limited Real-Time Visibility of Sales Teams",
    challenge:
      "Sales managers often have no idea where their field reps are during the day. Misreporting, idle time, and lack of transparency reduce efficiency and accountability.",
    fix: "Implement GPS-based live tracking and geo-fencing. Tools like Effortless provide managers with real-time dashboards to monitor visits, routes, and check-ins, ensuring field reps stay focused on the right activities.",
  },
  {
    id: "03",
    title: "Delayed or Missed Collections",
    challenge:
      "Cash flow is the lifeblood of Indian SMBs. Unfortunately, delayed collections from customers and retailers are a recurring issue. Manual records only worsen the situation.",
    fix: "Digital platforms can automate reminders, track overdue payments, and even integrate with banking systems. With Effortless, companies can streamline receivables, send automated alerts, and ensure faster reconciliation.",
  },
  {
    id: "04",
    title: "Manual Order Taking & Billing Errors",
    challenge:
      "Paper-based order taking is still common, especially in Tier-2 and Tier-3 markets. This leads to errors, duplication, and frustrated buyers.",
    fix: "Adopt digital buyer portals and mobile order booking apps. Effortless’s buyer e-commerce module allows distributors and retailers to place accurate orders directly, reducing friction and eliminating costly mistakes.",
  },
  {
    id: "05",
    title: "Lack of Integration Between Sales & Finance",
    challenge:
      "Sales data often lives in silos, disconnected from accounting and finance. As a result, businesses struggle with reconciliations, duplicate entries, and compliance headaches.",
    fix: "Look for platforms that integrate with Tally, GST systems, and ERP tools. Effortless syncs sales data with accounting, ensuring smooth compliance (GST, TDS, e-invoicing, eWay bills) and faster financial reporting.",
  },
  {
    id: "06",
    title: "Ineffective Communication Across Teams",
    challenge:
      "Field sales, warehouse staff, and finance teams rarely stay in sync. This misalignment leads to shipment delays, unhappy customers, and lost deals.",
    fix: "Centralize communication on one platform. Effortless enables multi-level approvals, customer access, and notifications, ensuring teams stay aligned across functions.",
  },
  {
    id: "07",
    title: "Difficulty in Managing Multi-Branch Operations",
    challenge:
      "Many businesses in India operate across multiple states and cities. Without centralized oversight, inventory mismatch, local compliance rules, and reporting delays are common.",
    fix: "Use a unified platform that provides a single source of truth for all branches. Effortless allows leaders to track sales, receivables, and expenses across branches in real time.",
  },
  {
    id: "08",
    title: "Fraud & Misreporting",
    challenge:
      "Cash leakages, fake invoices, or inflated expenses are unfortunately common in field sales operations. These hidden costs eat into margins.",
    fix: "Implement AI based invoice GSTN validation, role-based access controls, and approval workflows. Effortless provides built-in safeguards that reduce fraud risks while keeping a verifiable digital trail.",
  },
  {
    id: "09",
    title: "Time-Consuming Expense Approvals",
    challenge:
      "Field reps often spend days waiting for expense claims and reimbursements to get approved, creating frustration and low morale.",
    fix: "With OCR-led expense management and multi-level workflows, tools like Effortless simplify approvals and keep employees motivated by ensuring faster settlements.",
  },
  {
    id: "10",
    title: "Poor Sales Forecasting",
    challenge:
      "When data is fragmented across spreadsheets and manual ledgers, leaders cannot forecast demand accurately. This leads to overstocking or missed opportunities.",
    fix: "AI-enabled dashboards and predictive analytics can help. Effortless consolidates data across orders, collections, and inventory to generate realistic forecasts for better decision-making.",
  },
  {
    id: "11",
    title: "Regulatory & Compliance Complexity",
    challenge:
      "With GST, e-invoicing, TDS, and eWay bills, compliance in India is more complex than ever. Manual management increases errors and penalties.",
    fix: "Effortless automates compliance by digitally generating GST invoices on the go, syncing with Tally, and ensuring accurate filings—so businesses stay compliant without extra headaches.",
  },
  {
    id: "12",
    title: "Conclusion",
    content: [
      "Field sales in India will continue to be the backbone of growth for SMBs and distribution-led businesses. But scaling without the right systems often means dealing with inefficiencies, poor visibility, and compliance risks.",
      "By embracing digital platforms like Effortless, businesses can:\nBoost productivity of field teams\nAutomate collections & invoicing\nImprove real-time visibility\nStay compliant effortlessly",
      "In short, technology transforms field sales from a daily struggle into a strategic growth driver.",
    ],
  },
];

const BlogWithSidebar = () => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    setActiveId(id);
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="flex flex-col md:gap-6 gap-4 items-center justify-center mt-[64px] md:mt-0 py-[32px] max-w-[1350px] mx-auto max-md:px-5 md:py-[80px] scroll-mt-20">
        <PageTitle pageHeading={"Blogs"} />
        <h1
          className={`font-[300] md:font-medium text-[24px] md:text-[72px] md:leading-[90px] leading-[30px] text-center md:tracking-[-3px] bg-clip-text text-transparent`}
          style={{
            background: "linear-gradient(90deg, #F08B32 59.38%, #FFF 96.86%)",
            WebkitBackgroundClip: "text",
          }}
        >
          <span className="text-white font-light">
            10 Common Challenges of{" "}
          </span>
          <br /> <span className="font-medium">Field Sales in India</span>
        </h1>
        <p
          className={`md:text-2xl text-sm md:mt-[4px] text-[#E4E4E7] text-center font-[400] md:font-[300]`}
        >
          Discover the top 10 challenges faced by field sales teams in India,
          from delayed collections to inefficient tracking, and learn proven
          strategies to overcome them with digital tools like Effortless.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-7xl mx-auto px-4 py-10">
        <aside className="md:w-1/4 w-full md:sticky md:top-20 h-fit p-5 pt-0">
          <h3 className="font-medium text-xl text-white mb-3">In this Blog</h3>
          <ul className="flex flex-col gap-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full text-white text-base font-normal py-2 px-3 rounded ${
                    activeId === section.id &&
                    "border-t-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/0 border border-white/10 border-r-white/0 shadow-sm shadow-black/5 drop-shadow-sm"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="md:w-3/4 w-full space-y-12 overflow-y-auto scroll-smooth">
          {sections.map((section, index) => {
            const isFirst = index === 0;
            const isLast = index === sections.length - 1;
            const displayNumber = !isFirst && !isLast ? `${index}. ` : "";
            return (
              <div
                key={index}
                id={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-medium text-[#FFFFFF] mb-4 flex items-start gap-1">
                  <span>{displayNumber}</span>
                  {section.title}
                </h2>
                {section.content && (
                  <div className="text-[#E4E4E7] text-xl font-light space-y-5">
                    {section.content.map((paragraph, pIndex) => {
                      const [beforeColon, afterColon] = paragraph.split(":\n");
                      const hasBullets = paragraph.includes(":\n");

                      return (
                        <div key={pIndex}>
                          {hasBullets ? (
                            <>
                              <p>{beforeColon}:</p>
                              <ul className="list-disc list-inside pl-6 md:pl-8 mt-2 space-y-1">
                                {afterColon.split("\n").map((line, i) => (
                                  <li key={i}>{line.trim()}</li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <p>{paragraph}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {section.challenge && (
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      The Challenge:
                    </h3>
                    <p className="text-[#E4E4E7] text-xl font-light">
                      {section.challenge}
                    </p>
                  </div>
                )}
                {section.fix && (
                  <div>
                    <h3 className="text-xl font-medium text-white">The Fix:</h3>
                    <p className="text-[#E4E4E7] text-xl font-light">
                      {parse(section.fix)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogWithSidebar;
