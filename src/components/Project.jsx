import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/PizzaApp.JPG";
import project2 from "../assets/images/YoutubeClone.JPG";
import project3 from "../assets/images/EmployeesCreatingApp.JPG";
import project4 from "../assets/images/TodolistApp.JPG";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "PIZZA APP",
      github_link: "https://github.com/SARAN0209/pizza-app-webcode-frontend",
      live_link: "https://wonderful-sfogliatella-fc20ed.netlify.app/",
      skills: ["HTML", "CSS", "REACT.JS", "NODE.JS", "MONGODB", "MATERIALUI", "JWT"]
    },
    {
      img: project2,
      name: "YOUTUBE CLONE",
      github_link: "https://github.com/SARAN0209/youtubeCloneCapstone-Frontend",
      live_link: "https://benevolent-buttercream-c4accf.netlify.app/",
      skills: ["HTML", "CSS", "REACT.JS", "NODE.JS", "MONGODB", "MONGOOSE", "JWT"]
    },
    {
      img: project3,
      name: "EMPLOYEES CREATING APP",
      github_link: "https://github.com/SARAN0209/day-42-task-fullstack-demo-frontend",
      live_link: "https://prismatic-daffodil-3c960a.netlify.app/",
      skills: ["HTML", "CSS", "REACT.JS", "NODE.JS", "MONGODB", "BOOTSTRAP"]
    },
    {
      img: project4,
      name: "TODOLIST APP",
      github_link: "https://github.com/SARAN0209/Todolist-Frontend",
      live_link: "https://fastidious-rabanadas-aef8fa.netlify.app/",
      skills: ["HTML", "CSS", "REACT.JS", "NODE.JS", "MONGODB", "MONGOOSE"]
    },
  ];
  return (
    <section id="projects" className="text-white mt-96 pt-40">
      <div className="text-center"style={{marginTop:"-90px"}}>
        <h3 className="text-4xl font-semibold">
          MY <span className="text-cyan-600">PROJECTS</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative justify-center">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4 text-center" style={{color:"sandybrown"}} ><b>{project_info.name}</b></h3>
                  <div className="flex gap-3 " style={{flexWrap:"wrap",paddingLeft:"50px"}}>
                    {
                      project_info.skills.map((items, i) => (
                        <span className="text-center flex rounded-lg p-1 mr-1 text-white text-sm bg-black " key={i} >
                          {items}
                        </span>
                      ))}
                  </div> <br/>
                  <div className="flex gap-3" style={{paddingLeft:"50px"}}> 
                  
                    <a
                      href={project_info.github_link}
                     
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg btn btn-primary" rel="noreferrer" 
                    ><button>
                      GITHUB
                      </button>
                    </a>
                    
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-lg btn btn-primary" rel="noreferrer"
                    ><button>
                      Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;