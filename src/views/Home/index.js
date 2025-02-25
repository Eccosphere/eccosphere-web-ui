import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
import styles from "./style.module.css";
import { imageGallery } from "./config/homeData";
import MembershipPlan from "./component/MembershipPlan/MembershipPlan";
import WhyChooseUsHome from "./component/WhyChooseUsHome/WhyChooseUsHome";
import OurWorkspaces from "./component/OurWorkspaces/OurWorkspaces";
import CommunityTestimonials from "./component/CommunityTestimonials/CommunityTestimonials";
import HomeContent from "./component/HomeContent/HomeContent";

const Home = (props) => {
  const { setTitle } = props;
  const data = imageGallery;

  useEffect(() => {
    setTitle("Eccosphere The Coworking Sanctuary");
  }, [setTitle]);

  return (
    <div className="w-100">
      <div className={styles["image-container"]}>
        <Carousel
          className="w-100 h-70"
          slide={true}
          indicators={false}
          controls={false}
          pause="hover"
        >
          {data.map((img) => (
            <Carousel.Item interval={1000} className="h-100" key={img.id}>
              <img
                src={img.src}
                alt={`space-img-${img.id}`}
                className={styles["space-img"]}
              />
            </Carousel.Item>
          ))}
          <div className={styles["header-div"]}>
            <div className={styles["text-div"]}>
              <h1 className={styles["heading-text"]}>
                Community, creativity, comfort & more
              </h1>
              <button className={styles["btn"]}>Contact Us</button>
            </div>
          </div>
        </Carousel>
      </div>

      <div className={styles["home"]}>
        <div className={styles["home-container"]}>
          <h1 className={styles["header-text"]}>
            Welcome to the Future of Workspaces
          </h1>
        </div>

        <div className={styles["home-container"]}>
          <HomeContent />
        </div>
        <div className={styles["home-container"]}>
          <WhyChooseUsHome />
        </div>
        <div className={styles["home-container"]}>
          <OurWorkspaces />
        </div>
        <div className={styles["home-container"]}>
          <MembershipPlan />
        </div>
        <div className={styles["home-container"]}>
          <CommunityTestimonials />
        </div>
        {/* <Amenities /> */}
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  setTitle: PropTypes.func.isRequired,
};
