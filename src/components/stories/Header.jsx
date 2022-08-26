/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import Done from "@mui/icons-material/Done";

export const Header = ({ title, desc }) => (
  <header>
    <Done color="secondary" className="done"></Done>
    <div variant="h2" className="pointTitle">
      {title}
    </div>
    <div variant="h3" className="pointDesc">
      {desc}
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
