import React from "react";

export default function Header() {
  return (
    <div className="header_box">
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <div>
        <p>Some content</p>
      </div>
      <div className="header_nav">
          <a href="/">page 1</a>
          <a href="/">page 2</a>
          <a href="/">page 3</a>
      </div>
    </div>
  );
}
