import React from "react"

import "../../ui/profileCard.css"
import { lightTextColor } from "../../styles/styles"

const TeamCard = ({
  name,
  image,
  imageAlt,
  designation,
  description,
  linkedIn,
  github,
  twitter,
  instagram,
}) => {
  return (
    <div className="card px-4 py-10 rounded-xl col-span-6 lg:col-span-4 mt-14">
      <div className="flex min-h-[400px] w-full items-center justify-center">
        <div className="group relative aspect-video h-[500px] w-[22rem] sm:w-[36rem] transition-all cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg">
          <img
            className="absolute inset-0 h-full w-full object-cover object-top opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:duration-300"
            src={image}
            alt={imageAlt}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent to-100% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black group-hover:transition-all group-hover:duration-300">
            <h2 className="absolute bottom-8 left-8 m-0 transition-all delay-300 duration-100 ease-out group-hover:bottom-1/3 group-hover:delay-0 group-hover:duration-300 text-[18px]">
              {name} <br />
              <span className={`text-[13px] ${lightTextColor}`}>
                {designation}
              </span>
            </h2>

            <p
              className={`absolute left-8 bottom-24 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-300 group-hover:duration-300 text-[14px] font-thin`}
            >
              {description}
            </p>

            <div className="absolute bottom-8 max-w-[80%] px-4 py-2 opacity-0 transition-opacity ease-out group-hover:opacity-100 group-hover:transition-opacity group-hover:delay-300 group-hover:duration-300">
              <div className="social-overlap process-scetion">
                <div className="row justify-content-center">
                  <div className="social-bar">
                    <div className="social-icons iconpad text-center flex">
                      {github && (
                        <a
                          href={github}
                          rel="noreferrer"
                          target="_blank"
                          className="slider-nav-item"
                        >
                          <i
                            className="fab fa-github"
                            aria-label="GitHub Link"
                          ></i>
                        </a>
                      )}
                      {linkedIn && (
                        <a
                          href={linkedIn}
                          rel="noreferrer"
                          target="_blank"
                          className="slider-nav-item"
                        >
                          <i
                            className="fab fa-linkedin"
                            aria-label="Linkedin Link"
                          ></i>
                        </a>
                      )}
                      {instagram && (
                        <a
                          href={instagram}
                          rel="noreferrer"
                          target="_blank"
                          className="slider-nav-item"
                        >
                          <i
                            className="fab fa-instagram"
                            aria-label="Instagram Link"
                          ></i>
                        </a>
                      )}
                      {twitter && (
                        <a
                          href={twitter}
                          rel="noreferrer"
                          target="_blank"
                          className="slider-nav-item"
                        >
                          <i
                            className="fab fa-twitter"
                            aria-label="Twitter Link"
                          ></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
