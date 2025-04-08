import React from "react";
import styles from "./style.module.css";
import BlogCard from "./component/BlogCard";
import { blogData } from "./config/blogData";
import HelmetSeo from "../../utils/HelmetSeo";

const Blog = () => {
  return (
    <div className={styles["blog"]}>
      <HelmetSeo
        title="Blog | Eccosphere Coworking Insights"
        description={
          "Explore coworking tips, productivity hacks, workspace trends, and updates from Eccosphere Coworking."
        }
        keywords={
          "coworking blog, office tips, productivity, startup workspace, Eccosphere blog"
        }
        author={"Eccosphere Coworking"}
        url={"https://www.eccosphere.com/blog"}
      />

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
