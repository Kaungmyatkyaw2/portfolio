import { useRef } from "react";
import { BiEnvelope, BiHomeAlt } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSetInview from "../helper/useSetInview";

const Contact = () => {
  const ref = useSetInview("isContact");

  const form = useRef();
  const data = [
    {
      icon: BiHomeAlt,
      title: "Address",
      content: "Yangon Tarmwe",
    },
    {
      icon: BiEnvelope,
      title: "Email",
      content: "kaungmyatkyaw2030@gmail.com",
      link: "mailto:kaungmyatkyaw2030@gmail.com",
    },
    {
      icon: BsFillTelephoneFill,
      title: "Phone Number",
      content: "09941863024",
      link: "tel:09941863024",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      form.current[0].value &&
      form.current[1].value &&
      form.current[2].value
    ) {
      emailjs
        .sendForm(
          "service_vsk8wpm",
          "template_foflite",
          form.current,
          "Ux--M9mnQI2UPAgyG"
        )
        .then(
          (result) => {
            toast.success("Message Sent");
          },
          (error) => {
            toast.error(error);
          }
        );
    } else {
      toast.error("All input must be filled!");
    }
  };

  return (
    <div
      ref={ref}
      className="w-full toCenter min-h-[100vh] bg-black"
      id="contact"
    >
      <div className="lg:w-[75%] md:w-[70%] w-[90%] flex flex-wrap lg:space-y-[0px] space-y-[70px] lg:py-0 py-[90px]">
        <div className="lg:w-[60%] w-full">
          <h1 className="short-section-title title after:!w-0">
            Let's be awesome together!
          </h1>
          <p className="lg:w-[90%] w-full text-gray-600 py-[10px] pb-[25px]">
            As a dev, I do love coding and always looking for new challenges.
            Thus, if you have some opportunities/challenges or just want to
            build awesome things together, don't hesitate to contact me!
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:w-[75%] w-full space-y-[20px]"
          >
            <input
              type="search"
              id="default-search"
              className="blur-bg block w-full p-3 pl-[10px] text-sm text-gray-200 border border-gray-400 rounded-[2px] bg-gray-50 focus:ring-primary focus:border-primary outline-none"
              placeholder="Mrs. Example"
              required
              name="user_name"
              autoComplete="false"
            />
            <input
              type="search"
              id="default-search"
              className="blur-bg block w-full p-3 pl-[10px] text-sm text-gray-200 border border-gray-400 rounded-[2px] bg-gray-50 focus:ring-primary focus:border-primary outline-none"
              placeholder="example@gmail.com"
              required
              name="email"
              autoComplete="false"
            />
            <textarea
              name="message"
              className="blur-bg block w-full p-3 pl-[10px] text-sm text-gray-200 border border-gray-400 rounded-[2px] bg-gray-50 focus:ring-primary focus:border-primary outline-none h-[100px] resize-none"
              placeholder="Enter Your Message ...."
              autoComplete="false"
            ></textarea>
            <div className="flex justify-end pt-[10px]">
              <button className="border-btn !px-[40px]" onClick={sendEmail}>
                Send Me
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-[40%] w-full flex items-center lg:justify-start justify-start">
          <div className="space-y-[20px]">
            <h1 className="short-section-title !text-[20px] text-primary">
              Get in touch with me !
            </h1>
            {data.map((i, index) => (
              <div
                key={index}
                className="flex items-center text-white space-x-[20px]"
              >
                <a
                  href={i?.link}
                  className="w-[40px] h-[40px] rounded-[10px] bg-primary bg-opacity-20 text-[20px] toCenter text-white cursor-pointer"
                >
                  <i.icon />
                </a>
                <div className="">
                  <p className="font-bold text-[15px] text-gray-400">
                    {i.title}
                  </p>
                  <a href={i?.link} className="text-[14px] cursor-pointer">
                    {i.content}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
