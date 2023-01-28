import React from "react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import reactImage from "../assets/images/react.png";
import node from "../assets/images/node.png";
import expressjs from "../assets/images/expressjs.png";
import mongodb from "../assets/images/mongodb.png";
import msql from "../assets/images/msql.png";
import bootstrap from "../assets/images/bootstrap.png";
import github from "../assets/images/github.png";
import mui from "../assets/images/mui.png";
import postman from "../assets/images/postman.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src:bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: mui,
      title: "MUI",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src:postman,
      title: "Postman",
      style: "shadow-indigo-500",
    },
    {
      id: 8,
      src:node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src:expressjs,
      title: "ExpressJs",
      style: "shadow-white",
    },
    {
      id: 10,
      src:mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src:msql,
      title: "MySQL",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    }
  
  
  ];

  return (
    <div
      id="skills"
      className=" h-screen mt-96 py-96" 
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center"style={{marginTop:"130px"}}>
        <h3 className="text-4xl font-semibold">
          MY <span className="text-cyan-600">SKILLS</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default  Skills;