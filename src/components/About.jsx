import React from "react";
import aboutImg from "../assets/images/Profile Pic.jpg";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8" style={{marginTop:"30px"}}>
        <h3 className="text-4xl font-semibold">
          ABOUT <span className="text-cyan-600">ME</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hello, I am SARAN,Engineering graduate student.
                Aspiring full-stack web developer with a focus on the MERN
                stack who is passionate and dedicated.
                 I want to use my technical knowledge and skills to build and develop
                high-quality, user-friendly platforms.
                 I'm looking for a challenging position at a fast-paced company where I can expand my knowledge and contribute to exciting projects.
              </p>
              <br />
              <br />
              <a href="https://drive.google.com/file/d/1ukwK9JpO-fadNGZXplVCrFQiZgenA2Wf/view?usp=share_link" target="_blank">
                <button className="btn-primary animate-bounce" >View Resume</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
