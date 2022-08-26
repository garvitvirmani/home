/*eslint-disable*/
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import useContentful from "../../useContentful";
import "./why.css";

function Whychooseus() {
  const { getWhychooseus } = useContentful();
  const [data, setData] = useState();

  useEffect(() => {
    getWhychooseus().then((response) => setData(response));
    console.log(data);
  }, []);

  return (
    <div className="whyContainer">
      {data &&
        data.map(({ title }) => (
          <Typography variant="h1" className="title">
            {title}
          </Typography>
        ))}
      {data &&
        data.map(({ moto }) => (
          <Typography variant="h2" className="moto">
            {moto}
          </Typography>
        ))}
    </div>
  );
}

export default Whychooseus;
