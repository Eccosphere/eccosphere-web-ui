import React from "react";
import styles from "./style.module.css";
import OurStory from "./component/OurStory/OurStory";
import OurMissionAndVision from "./component/OurMissionAndVision/OurMissionAndVision";
import WhyChooseUs from "./component/WhyChooseUs/WhyChooseUs";
import OurTeam from "./component/OurTeam/OurTeam";
import CallToAction from "./component/CallToAction/CallToAction";
import HelmetSeo from "../../utils/HelmetSeo";

const About = () => {
  return (
    <div className={styles["about"]}>
      <HelmetSeo
        title="About Us | Eccosphere Coworking"
        description={
          "Learn more about Eccosphere Coworking, our mission, team, and services."
        }
        keywords={"about eccosphere, coworking space, team, story"}
        author={"Eccosphere Coworking"}
        url={"https://www.eccosphere.com/about"}
      />

      <div className={styles["about-container"]}>
        <div className={styles["header-div"]}>
          <h1 className={styles["heading-text"]}>
            Welcome to the Future of Workspaces
          </h1>
          <h3 className={styles["heading-text"]}>
            A coworking sanctuary designed for innovation, creativity, and
            collaboration.
          </h3>
        </div>
      </div>
      <div className={styles["about-container"]}>
        <OurStory />
      </div>
      <div className={styles["about-container"]}>
        <OurMissionAndVision />
      </div>

      <div className={styles["about-container"]}>
        <WhyChooseUs />
      </div>

      <div className={styles["about-container"]}>
        <OurTeam />
      </div>

      <div className={styles["about-container"]}>
        <CallToAction />
      </div>
    </div>
  );
};

export default About;
