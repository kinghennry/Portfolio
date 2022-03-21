import React from "react";
import "./Portfolio.css";
import { projects } from "../../data";

function Portfolio() {
  return (
    <article className="form-animation">
      <div className="container px">
        <h1 style={{ padding: "30px 0" }}>
          Check out my {projects.length} projects
        </h1>
        <div className="grid__box">
          {projects.map((project) => {
            const { id, name, img, desc, git, site, tech } = project;
            return (
              <div className="portfl" key={id}>
                <div
                  className="portfl__img"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="portfl__text">
                  <h2>{name}</h2>
                  <p>{desc}</p>
                  <h3> Tech : {tech}</h3>
                  <div className="portfl__btn">
                    <a
                      href={git}
                      className="git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB REPO
                    </a>
                    <a
                      href={site}
                      className="portfl__live"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW PROJECT LIVE
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Portfolio;
