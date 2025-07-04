import React, {useState} from "react";

const ContactSection = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  return (
    <section className="text-white p-8 rounded-md max-w-full mb-4">
      <div className="flex flex-col md:flex-row justify-between h-full gap-8">
        {/* Left Content */}

        <div className="flex flex-col gap-40 justify-between max-w-[50%] h-full">
          <nav className="flex gap-12 font-Quicksand text-base font-semibold">
            <a href="#" className="hover:text-pink-500">Events</a>
            <a href="#" className="hover:text-pink-500">Gen AI</a>
            <a href="#" className="hover:text-pink-500">Careers</a>
            <a href="#" className="hover:text-pink-500">Case study</a>
            <a href="#" className="hover:text-pink-500">SME Talks</a>
          </nav>

          <div className="text-content font-Quicksand">
            <p className="text-2xl md:text-[28px] font-semibold mb-6">
              For any collaborative <br />
              projects or enquiries feel free <br />
              to connect with us.
            </p>
            <p className="text-3xl font-semibold">vayuz.com</p>
          </div>

          <div className="flex gap-10 font-Quicksand text-sm font-medium flex-wrap">
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Insights</a>
            <a href="#" className="hover:text-gray-300">Community</a>
            <a href="#" className="hover:text-gray-300">Privacy & Policies</a>
          </div>
        </div>


        {/* Right Form */}
        <div className="w-full md:w-[35%]">
          <h2 className="text-white head text-[75px] leading-[111.00000000000001%] tracking-[2%] text-right">
            Connect <br /> With Us
          </h2>
          <form className="flex flex-col gap-6 mt-4 text-[#FFFFFF99] text-sm font-medium">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                onFocus={() => setFocusedField("fullname")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                className={`w-full bg-transparent border-b outline-none py-2 placeholder-transparent peer transition-colors duration-300 ${
                  focusedField === "fullname" ? "border-cyan-400" : "border-white"
                }`}
              />
              <label
                htmlFor="fullname"
                className={`absolute left-0 transition-all duration-300 ${
                  focusedField === "fullname"
                    ? "top-[-0.75rem] text-xs text-cyan-400"
                    : fullname
                    ? "top-[-0.75rem] text-xs text-white"
                    : "top-2 text-base text-[#FFFFFF99]"
                }`}
              >
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                className={`w-full bg-transparent border-b outline-none py-2 placeholder-transparent peer transition-colors duration-300 ${
                  focusedField === "email" ? "border-cyan-400" : "border-white"
                }`}
              />
              <label
                htmlFor="email"
                className={`absolute left-0 transition-all duration-300 ${
                  focusedField === "email"
                    ? "top-[-0.75rem] text-xs text-cyan-400"
                    : email
                    ? "top-[-0.75rem] text-xs text-white"
                    : "top-2 text-base text-[#FFFFFF99]"
                }`}
              >
                Email
              </label>
            </div>

            {/* Phone Number */}
            <div className="relative">
              <input
                type="tel"
                id="phonenumber"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                onFocus={() => setFocusedField("phonenumber")}
                onBlur={() => setFocusedField(null)}
                placeholder=" "
                className={`w-full bg-transparent border-b outline-none py-2 placeholder-transparent peer transition-colors duration-300 ${
                  focusedField === "phonenumber" ? "border-cyan-400" : "border-white"
                }`}
              />
              <label
                htmlFor="phonenumber"
                className={`absolute left-0 transition-all duration-300 ${
                  focusedField === "phonenumber"
                    ? "top-[-0.75rem] text-xs text-cyan-400"
                    : phonenumber
                    ? "top-[-0.75rem] text-xs text-white"
                    : "top-2 text-base text-[#FFFFFF99]"
                }`}
              >
                Phone Number
              </label>
            </div>

            <button
              type="submit"
              className="self-end mt-4 bg-[#08A7CE66] hover:bg-[#08a6ce8e] cursor-pointer text-white font-bold px-6 py-2 text-[13px] leading-[160%] uppercase border border-[#08A7CE] rounded-full"
            >
              SUBMIT
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
