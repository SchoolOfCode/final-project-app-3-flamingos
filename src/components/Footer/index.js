import React from "react";
import css from "react";

const Footer = () => {
  return (
    <footer className={css.footerContainer}>
      <p>Posted by: Hege Refsnes</p>
      <p>
        Contact information:{" "}
        <a href="mailto:someone@example.com">someone@example.com</a>.
      </p>
    </footer>
  );
};

export default Footer;
