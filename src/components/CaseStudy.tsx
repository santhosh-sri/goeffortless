// import Image from "next/image";
// import React from "react";

// const CaseStudy = () => {
//   return (
//     <div className="min-h-screen bg-[#242424] flex items-center justify-center p-6">
//       <div className="bg-white p-8 md:p-12">
//         <div className="flex items-center gap-4">
//           <div className="h-[100px] min-w-[122px] rounded-2xl bg-[#BC48DC]" />
//           <h1 className="text-[#000000] text-[40px] font-normal leading-[100%] -tracking-[3%]">
//             How This Customer in Gurugram Did Field Sales &amp; Reimbursements
//             Under One Roof
//           </h1>
//         </div>
//         <div className="grid grid-cols-3 gap-0">
//           <div className="col-span-2 p-4">
//             <div className="mt-6">
//               <h2 className="text-4xl font-normal text-[#000000] leading-[100%] -tracking-[1%]">
//                 Fragmented Sales Data Driving Confusion and Losses
//               </h2>
//               <p className="mt-2 font-light text-2xl text-[#000000] leading-[100%] tracking-0">
//                 Field sales ran on WhatsApp and Google Sheets, leaving managers
//                 blind to ground activity, routes, performance, and
//                 reimbursements—causing delays, confusion, and lost productivity
//               </p>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-4xl font-normal text-[#000000] leading-[100%] tracking-0">
//                 Key Challenges
//               </h3>
//               <ul className="mt-3 list-disc list-inside space-y-1">
//                 <li className="font-light text-2xl text-[#000000] leading-[100%] tracking-0">
//                   Missed/delayed orders from manual processes
//                 </li>
//                 <li className="font-light text-2xl text-[#000000] leading-[100%] tracking-0">
//                   No real-time team movement tracking
//                 </li>
//                 <li className="font-light text-2xl text-[#000000] leading-[100%] tracking-0">
//                   Late/incorrect manual reimbursements
//                 </li>
//                 <li className="font-light text-2xl text-[#000000] leading-[100%] tracking-0">
//                   Hard-to-track branch performance
//                 </li>
//                 <li className="font-light text-2xl text-[#000000] leading-[100%] tracking-0">
//                   No reliable data for route planning
//                 </li>
//               </ul>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-4xl font-normal text-[#000000] leading-[100%] tracking-0">
//                 The Effortless Fix
//               </h3>
//               <p className="mt-2 font-light text-2xl text-[#000000] leading-[100%] -tracking-[1%]">
//                 Effortless replaced WhatsApp and Excel with a real-time app,
//                 streamlining field sales. Teams now follow planned routes, place
//                 orders, and track reimbursements in sync—giving leadership full
//                 control and visibility.
//               </p>
//             </div>
//           </div>
//           <div>
//             <div className="grid grid-cols-2 gap-6">
//               <div className="flex flex-col items-start">
//                 <p className="text-[#F08B32] font-bold text-[56px]">↓100%</p>
//                 <p className="text-xl font-normal leading-[100%] tracking-0 text-[#08090A] mt-1">
//                   Visibility into team activities
//                 </p>
//               </div>
//               <div className="flex flex-col items-start">
//                 <p className="text-[#F08B32] font-bold text-[56px]">4x</p>
//                 <p className="text-xl font-normal leading-[100%] tracking-0 text-[#08090A] mt-1">
//                   Faster order tracking and billing cycle
//                 </p>
//               </div>
//               <div className="flex flex-col items-start">
//                 <p className="text-[#F08B32] font-bold text-[56px]">↑80%</p>
//                 <p className="text-xl font-normal leading-[100%] tracking-0 text-[#08090A] mt-1">
//                   Reduction in manual coordination
//                 </p>
//               </div>
//               <div className="flex flex-col items-start">
//                 <p className="text-[#F08B32] font-bold text-[56px]">2x</p>
//                 <p className="text-xl font-normal leading-[100%] tracking-0 text-[#08090A] mt-1">
//                   Improvement in payment follow-ups
//                 </p>
//               </div>
//             </div>

//             <div className="mt-8 bg-[#F0F0F0] rounded-xl p-5">
//               <p className="text-[#000000] text-2xl font-light leading-[100%] tracking-0">
//                 “We dumped the WhatsApp chaos. With Effortless, sales reps stick
//                 to planned routes, orders are tracked live, and reimbursements
//                 just happen. It’s like giving our field ops a command center.”
//               </p>
//               <p className="mt-3 text-[#000000] text-2xl font-medium">Operation Head</p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 grid md:grid-cols-4 items-center gap-6 pt-6">
//           <div className="flex flex-col items-start gap-2">
//             {/* <Phone size={16} className="text-[#F08B32]" /> */}
//             <p className="font-medium text-2xl text-[#F08B32] leading-[100%] tracking-0">
//               Help Desk
//             </p>
//             <p className="font-light text-2xl text-[#000000] leading-[100%] tracking-0">
//               +91 91765 44422
//             </p>
//           </div>
//           <div className="flex flex-col items-start gap-2">
//             {/* <Globe size={16} className="text-[#F08B32]" /> */}
//             <p className="font-medium text-2xl text-[#F08B32] leading-[100%] tracking-0">
//               Website
//             </p>
//             <p className="font-light text-2xl text-[#000000] leading-[100%] tracking-0">
//               <a href="https://www.goefortless.ai" target="_blank">
//                 www.goefortless.ai
//               </a>
//             </p>
//           </div>
//           <div className="flex flex-col items-start gap-2">
//             {/* <Mail size={16} className="text-[#F08B32]" /> */}
//             <p className="font-medium text-2xl text-[#F08B32] leading-[100%] tracking-0">
//               Email
//             </p>
//             <p className="font-light text-2xl text-[#000000] leading-[100%] tracking-0">
//               <a href="mailto:hello@goefortless.ai">hello@goefortless.ai</a>
//             </p>
//           </div>
//           <div>
//             <Image
//               src={"/casestudylogo.svg"}
//               alt="Effortless"
//               height={48}
//               width={188}
//               className="w-full"
//               unoptimized={true}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudy;

// components/CaseStudy.tsx
import { CaseStudyProps } from "@/interface/type";
import Image from "next/image";
import React from "react";

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  subtitle,
  fullDescription,
  challenges,
  fixTitle,
  fixDescription,
  stats,
  testimonial,
  contacts,
  logo,
  onClose,
}) => {
  return (
    <>
      <div className="z-50">
        <div className="flex justify-end">
          <div className="flex gap-3 bg-white py-2 px-4 items-center">
            <button onClick={onClose}>
              <Image
                className="cursor-pointer"
                src="/download.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </button>
            <div className="h-[24px] w-[1px] bg=[#646464]" />
            <button onClick={onClose}>
              <Image
                className="cursor-pointer"
                src="/customer-mail.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </button>
            <div className="h-[24px] w-[1px] bg=[#646464]" />
            <button onClick={onClose}>
              <Image
                className="cursor-pointer"
                src="/connected-dots.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </button>
            <div className="h-[24px] w-[1px] bg=[#646464]" />
            <button onClick={onClose}>
              <Image
                className="cursor-pointer"
                src="/print.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </button>
            <div className="h-[24px] w-[1px] bg=[#646464]" />
            <button onClick={onClose}>
              <Image
                className="cursor-pointer"
                src="/e-remove.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
        <div className="bg-white p-3 md:p-6">
          <div className="flex items-center gap-4">
            <div className="h-[80px] min-w-[122px]">
              <Image
                src={"/slide-logo.svg"}
                alt="Effortless Logo"
                height={80}
                width={122}
              />
            </div>
            <h1 className="text-[#000000] text-xl text-[32px] font-normal leading-[100%] -tracking-[3%]">
              {title}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg md:text-2xl font-normal text-[#000000] leading-[100%] -tracking-[1%]">
                  {subtitle}
                </h2>
                <p className="mt-2 font-light text-base md:text-xl text-[#000000] leading-[100%] tracking-0">
                  {fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-2xl font-normal text-[#000000] leading-[100%] tracking-0">
                  Key Challenges
                </h3>
                <ul className="mt-3 list-disc list-inside space-y-2">
                  {challenges.map((item, idx) => (
                    <li
                      key={idx}
                      className="font-light text-base md:text-xl text-[#000000] leading-[100%] tracking-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg md:text-2xl font-normal text-[#000000] leading-[100%] tracking-0">
                  {fixTitle}
                </h3>
                <p className="mt-2 font-light text-base md:text-xl text-[#000000] leading-[100%] -tracking-[1%]">
                  {fixDescription}
                </p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {stats.map((s, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <p className="text-[#F08B32] font-bold text-2xl md:text-5xl">
                      {s.value}
                    </p>
                    <p className="text-sm md:text-base font-normal leading-[100%] tracking-0 text-[#08090A] mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 md:mt-8 bg-[#F0F0F0] rounded-xl p-5">
                <p className="text-[#000000] text-base md:text-xl font-light leading-[100%] tracking-0">
                  “{testimonial.quote}”
                </p>
                <p className="mt-3 text-[#000000] text-base md:text-xl font-medium flex items-center gap-1">
                  <Image
                    className="cursor-pointer"
                    src="/circle-user.svg"
                    alt="Close"
                    width={24}
                    height={24}
                  />{" "}
                  <span>{testimonial.author}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-2 md:pt-4">
            {contacts.map((c, idx) => (
              <div key={idx} className="flex flex-col items-start gap-2">
                <p className="font-medium text-base md:text-xl text-[#F08B32] leading-[100%] tracking-0">
                  {c.label}
                </p>
                <p className="font-light text-base md:text-xl text-[#000000] leading-[100%] tracking-0">
                  {c.value}
                </p>
              </div>
            ))}

            <div className="flex items-center">
              <Image
                src={"/casestudylogo.svg"}
                alt="Effortless Logo"
                height={48}
                width={188}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
