import React from "react";
import styles from "./style.module.css";
import BlogCard from "./component/BlogCard";
import { blogData } from "./config/blogData";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className={styles["blog"]}>
      <Helmet>
        <title>Blog | Eccosphere Coworking Insights</title>
        <meta
          name="description"
          content="Explore coworking tips, productivity hacks, workspace trends, and updates from Eccosphere Coworking."
        />
        <meta
          name="keywords"
          content="coworking blog, office tips, productivity, startup workspace, Eccosphere blog"
        />
        <meta name="author" content="Eccosphere Coworking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.eccosphere.com/blog" />
      </Helmet>
      <div className={styles["blog-container"]}>
        <div className={styles["header-div"]}>
          <h1 className={styles["heading-text"]}>
            Empowering Work & Creativity – Our Blog
          </h1>
          <h3 className={styles["heading-text"]}>
            Designing a Workspace for Creativity & Success
          </h3>
        </div>
      </div>

      <div className={styles["blog-grid"]}>
        {blogData.map((plan) => (
          <BlogCard blog={plan} key={plan.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
