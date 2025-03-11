import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./BlogCard.module.css";
import PopModal from "../../../components/PopModal";
import BlogDetailCard from "./BlogDetailCard";

const BlogCard = ({ blog }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={blog.id} className={styles["blog-card"]}>
      <img src={blog.img} className={styles["blog-image"]} alt={blog.title} />
      <div className={styles["blog-content"]}>
        <p className={styles["blog-title"]}>{blog.title}</p>
        <p className={styles["blog-description"]}>{blog.description}</p>
        <button
          className={styles["blog-button"]}
          onClick={() => setIsOpen(true)}
        >
          Read More
        </button>
      </div>
      <PopModal onClose={() => setIsOpen(false)} isOpen={isOpen} size="lg">
        <BlogDetailCard blog={blog} />
      </PopModal>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
