import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import useContentful from "../../useContentful";
import "./copyright.css";

function CopyRight() {
  const { getCopyright } = useContentful();
  const [data, setData] = useState();

  useEffect(() => {
    getCopyright().then((response) => setData(response));
  }, []);

  return (
    <Typography variant="h3" className="copy">
      {data && data[0].title}
    </Typography>
  );
}

export default CopyRight;
