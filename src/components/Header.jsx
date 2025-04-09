import { useState, useNavigate } from "react";

export default function Header() {
  return (
    <header id="top">
      <nav>
        <h1>
          <a href="#first">Sona - Maven of the Strings</a>
        </h1>

        <form className="dropdown-form">
          <select
            className="dropdown"
            name="page"
            onChange={(e) => {
              if (e.target.value) window.location.href = e.target.value;
            }}
          >
            <option value="">Select a Champion</option>
            <option value="lux.html">Lux</option>
            <option value="seraphine.html">Seraphine</option>
            <option value="yuumi.html">Yuumi</option>
          </select>
        </form>

        <ul>
          <li>
            <a href="#first">Passive</a>
          </li>
          <li>
            <a href="#second">Q</a>
          </li>
          <li>
            <a href="#third">W</a>
          </li>
          <li>
            <a href="#fourth">E</a>
          </li>
          <li>
            <a href="#fifth">R</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
