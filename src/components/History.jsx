import React from "react";
import { ArrowUpRight } from "lucide-react";

const History = () => {
  return (
    <section className="text-white py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 rounded-[56px] p-6 md:p-10">
        {/* Left title section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="head text-[40px] leading-[106%]">
            Flutter's <br /> Dawn
          </h2>
          <p className="text-base leading-[100%] mt-2 font-semibold">History of flutter</p>
        </div>

        {/* Middle description */}
        <div className="md:w-2/4 text-center md:text-left font-semibold text-base leading-[160%]">
          <p className="text-[#FFFFFFCC]">
            Uncover the fascinating story of Flutter in ‘Flutter’s Dawn: History of Flutter.’ From humble
            origins to global acclaim, delve into its captivating narrative. Explore milestones, triumphs,
            and challenges. Whether tech enthusiast or curious mind, join us on this captivating journey!{' '}
            <span className="text-cyan-400 cursor-pointer">Click to begin!</span>
          </p>
        </div>

        {/* Right button */}
        <div className="mt-6 md:mt-0 md:w-auto self-end">
          <button className="flex items-center gap-2 btn">
            BEGIN <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default History;
