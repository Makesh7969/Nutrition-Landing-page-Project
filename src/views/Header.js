import React from "react";

export const Header = (props) => {

  return (
    <nav className="navigation navbar-demo">
      <div className="navigation-menu lines nav-bar">
        <ul>
          <li>
            <a href="/"><i className="fa fa-home pr-2"></i>Home</a>
          </li>
          <li>
            <a href="/image"><i className="fa fa-image pr-2"></i>Image</a>
          </li>
          <li>
            <a href="/poster" ><i className="fa fa-file pr-2"></i>Poster</a>
          </li>
          <li>
            <a href="/ppt"><i className="fa fa-file pr-2"></i>PPT File</a>
          </li>
          <li>
            <a href="/feedback"><i className="fa fa-comments pr-2"></i>Feedback</a>
          </li>
          <li>
            <a href="/contact" ><i className="fa fa-user pr-2"></i>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
