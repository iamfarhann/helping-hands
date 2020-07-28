import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const BlogPost = ({ className, thumbUrl, title, excerpt, link }) => {
  // Add all classes to an array
  const addAllClasses = ["blog_post"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Link href={link}>
      <div className={addAllClasses.join(" ")} style={{ cursor: "pointer" }}>
        <div className="thumbnail">
          <img src={thumbUrl} alt={title} />
        </div>
        <div className="content">
          <h3 className="title">{title}</h3>
          <p className="excerpt">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
  thumbUrl: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.element,
};

export default BlogPost;
