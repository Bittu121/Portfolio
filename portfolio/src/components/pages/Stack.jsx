import React from "react";
import "../CSS/Stack.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
const Stack = () => {
  return (
    <section className="stack-section">
      <ul class="list-group stack-list">
        <li class="list-group-item active" aria-current="true">
          Stacks
        </li>
        <li class="list-group-item bg-warning ">
          <FaHtml5 className="stack-icon" />
          HTML5
        </li>
        <li class="list-group-item bg-warning">
          <FaCss3Alt className="stack-icon" />
          CSS3
        </li>
        <li class="list-group-item bg-warning">
          <RiJavascriptLine className="stack-icon" /> JavaScript
        </li>
        <li class="list-group-item bg-warning">
          <FaReact className="stack-icon" />
          ReactJs
        </li>
      </ul>
      <ul class="list-group stack-list">
        <li class="list-group-item active" aria-current="true">
          Year of experience
        </li>
        <li class="list-group-item bg-warning">1 Year</li>
        <li class="list-group-item bg-warning">1 Year</li>
        <li class="list-group-item bg-warning">6 months</li>
        <li class="list-group-item bg-warning">6 months</li>
      </ul>
    </section>
  );
};
export default Stack;
