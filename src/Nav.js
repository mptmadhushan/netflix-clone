import React from "react";
import './Nav.css'
function Nav() {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />
      <img
        className="nav_avatar"
        src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        alt="netflix-logo"
      />
    </div>
  );
}

export default Nav;
