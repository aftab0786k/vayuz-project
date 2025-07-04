import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ServiceImg from "../assets/code3.svg"; // replace with actual image path

const services = [
  {
    title: "Flutter App Development",
    description:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience?",
    linkText: "Let’s get started today!",
    linkHref: "#"
  },
  { title: "UI/UX Design",
    description:
      "Transform your ideas into stunning visuals with our UI/UX Design services. We create intuitive, user-friendly interfaces that captivate and engage your audience. Ready to elevate your design game?",
    linkText: "Contact us for a consultation!",
    linkHref: "#"
   },
  { title: "Customization & Integration" ,
    description:
      "Tailor your applications to perfection with our Customization & Integration services. Seamlessly integrate with existing systems and customize features to meet your unique business needs. Let’s make it happen!",
    linkText: "Get in touch for a personalized solution!",
    linkHref: "#"
  },
  { title: "Performance Optimization",
    description:
      "Boost your app’s performance with our Performance Optimization services. We analyze and enhance your application to ensure it runs smoothly and efficiently, providing the best user experience possible. Ready to optimize?",
    linkText: "Reach out for a performance audit!",
    linkHref: "#"
   },
  { title: "Cross-Platform Development",
    description:
      "Expand your reach with Cross-Platform Development. Build applications that work seamlessly across multiple platforms, saving time and resources while maximizing your audience. Let’s go cross-platform!",
    linkText: "Contact us to learn more!",
    linkHref: "#"
   },
  { title: "Backend Development",
    description:
      "Power your applications with robust Backend Development. We create scalable, secure, and efficient backend systems that support your app’s functionality and growth. Ready to build a strong foundation?",
    linkText: "Let’s discuss your backend needs!",
    linkHref: "#"
  },
  { title: "Testing & Quality Assurance",
    description:
      "Ensure your applications are flawless with our Testing & Quality Assurance services. We rigorously test your apps to identify and fix issues, ensuring a smooth user experience. Ready for a quality check?",
    linkText: "Get in touch for a QA consultation!",
    linkHref: "#"
   },
  { title: "Maintenance & Support",
    description:
      "Keep your applications running smoothly with our Maintenance & Support services. We provide ongoing support and updates to ensure your apps remain functional and up-to-date. Let’s keep your app in top shape!",
    linkText: "Contact us for ongoing support!",
    linkHref: "#"
   },
  { title: "Consulting & Training",
    description:
      "Empower your team with our Consulting & Training services. We offer expert guidance and training to help you leverage the full potential of your applications. Ready to enhance your skills?",
    linkText: "Let’s schedule a training session!",
    linkHref: "#"
   },
  { title: "Migration & Upgrades",
    description:
      "Stay current with our Migration & Upgrades services. We help you transition to the latest technologies and platforms, ensuring your applications remain competitive and efficient. Ready to upgrade?",
    linkText: "Contact us for a migration plan!",
    linkHref: "#"
   },
];

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="text-[#FFFFFFCC] px-4 md:px-20 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-[40px] leading-[100%] font-[Playfair_Display] text-[#FFFFFF] capitalize font-normal mb-2">
          Our Dynamic Services Suite!
        </h2>
        <p className="text-[22px] font-medium mb-2 leading-[100%]">
          Embrace Innovation: Let’s Create Together!
        </p>
        <p className="text-base font-medium leading-[100%] max-w-3xl mx-auto mt-6">
          Step into Innovation! Explore our range of services and let’s create something extraordinary together.
          Your vision, our expertise. Let’s begin!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          {services.map((service, index) => (
            <div key={index} className="border-b border-white/20 py-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleIndex(index)}>
                <h3 className="text-xl md:text-[26px] leading-[100%] tracking-[4%] capitalize font-medium font-[Playfair_Display]">
                  {service.title}
                </h3>
                {activeIndex === index ? <Minus /> : <Plus />}
              </div>
              {activeIndex === index && service.description && (
                <div className="mt-3 text-sm font-medium leading-[100%] tracking-normal text-[#FFFFFF99]">
                  <p>{service.description} <a href={service.linkHref} className="text-cyan-400 cursor-pointer">{service.linkText}</a></p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2">
          <img src={ServiceImg} alt="Service Image" className="rounded-lg w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
