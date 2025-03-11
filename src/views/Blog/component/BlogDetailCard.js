import React from "react";
import styles from "./BlogDetailCard.module.css";
import PropTypes from "prop-types";

const BlogDetailCard = ({ blog }) => {
  return (
    <div className={styles.blogCard}>
      <img src={blog.img} alt={blog.title} className={styles.blogImage} />
      <div className={styles.blogContent}>
        <h2 className={styles.blogTitle}>{blog.title}</h2>
        <p className={styles.blogMeta}>
          By <span className={styles.author}>{blog.author}</span> | {blog.date}
        </p>
        <p className={styles.blogText}>{blog.content}</p>
      </div>
    </div>
  );
};

BlogDetailCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogDetailCard;
