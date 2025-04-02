import React, { useEffect, useRef, useState } from "react";
import styles from "./AmenitiesSlider.module.css";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AmenitiesSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide] = useState(true);

  const scrollLeftRight = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(images.length - 1);
    } else if (newIndex >= images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      scrollLeftRight(currentIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, 3000]);

  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth <= 768 ? "100%" : 250;
      sliderRef.current.scrollLeft = currentIndex * scrollAmount;
    }
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer}>
      <button
        className={styles.navButton}
        onClick={() => scrollLeftRight(currentIndex - 1)}
      >
        <FaChevronLeft />
      </button>
      <div className={styles.imageSlider} ref={sliderRef}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.amenityCard} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <div className={styles.imageWrapper}>
              <img
                key={index}
                src={src.img}
                alt={`Slide ${index}`}
                className={styles.image}
              />
            </div>
            <p className={styles.amenityName}>{src.title}</p>
          </div>
        ))}
      </div>
      <button
        className={styles.navButton}
        onClick={() => scrollLeftRight(currentIndex + 1)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

AmenitiesSlider.propTypes = {
  images: PropTypes.array.isRequired,
};
export default AmenitiesSlider;
