import React from "react";

export const Header = (props) => {

  return (
    <nav className="navigation">
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/"><i className="fa fa-home pr-2"></i>Home</a>
          </li>
          <li>
            <a href="/image"><i class="fa fa-image pr-2"></i>Image</a>
          </li>
          <li>
            <a href="/poster" ><i class="fa fa-file pr-2"></i>Poster</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
