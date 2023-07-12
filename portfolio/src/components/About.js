import React, { Component } from "react";
import { Icon } from "@iconify/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import htmlIcon from "@iconify/icons-logos/html-5";
import cssIcon from "@iconify/icons-logos/css-3";
import nodeIcon from "@iconify/icons-logos/nodejs";
import bootIcon from "@iconify/icons-logos/bootstrap"
import azureIcon from "@iconify/icons-logos/azure";
import mongoIcon from "@iconify/icons-logos/mongodb";
import dotnetIcon from "@iconify/icons-logos/dotnet";
import unityIcon from "@iconify/icons-logos/unity";
import expressIcon from "@iconify/icons-logos/express";
import csharpIcon from "@iconify/icons-logos/c-sharp";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "white" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    width="500px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={javascriptIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={htmlIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={cssIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /><Icon
                  icon={nodeIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                /><Icon
                icon={bootIcon}
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              /><Icon
                  icon={dotnetIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                /><Icon
                icon={mongoIcon}
                style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
              />
                <Icon
                icon={azureIcon}
                style={{ fontSize: "300%", margin: "9% 5% 0 1%" }}
              />
                <Icon
                icon={unityIcon}
                style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
              />
                <Icon
                icon={expressIcon}
                style={{ fontSize: "200%", margin: "9% 5% 0 5%" }}
              />
                <Icon
                icon={csharpIcon}
                style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
              />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
