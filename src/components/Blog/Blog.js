import React from "react";
import styles from "./Blog.module.css";
import OrangeSection from "../OrangeSection/OrangeSection";
import BlogPost from "./BlogPost";
class Blog extends React.Component {
  render() {
    return (
      <div className={styles.Blog}>
        <OrangeSection
          title="BLOG"
          description="Sve zanimljivosti na jednom mjestu"
        />
        <div className={styles.Main}>
          <div className={styles.blogGrid}>
            <div className={styles.leftColumn}>
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
            </div>
            <div className={styles.rightColumn}>
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
