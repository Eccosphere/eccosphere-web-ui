import React from "react";
import styles from "./style.module.css";
import OurStory from "./component/OurStory/OurStory";
import OurMissionAndVision from "./component/OurMissionAndVision/OurMissionAndVision";
import WhyChooseUs from "./component/WhyChooseUs/WhyChooseUs";
import OurTeam from "./component/OurTeam/OurTeam";
import CallToAction from "./component/CallToAction/CallToAction";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className={styles["about"]}>
      <Helmet>
        <title>About Us | Eccosphere Coworking</title>
        <meta
          name="description"
          content="Learn more about Eccosphere Coworking, our mission, team, and services."
        />
        <meta
          name="keywords"
          content="about eccosphere, coworking space, team, story"
        />
        <meta name="author" content="Eccosphere Coworking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.eccosphere.com/about" />
      </Helmet>
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
