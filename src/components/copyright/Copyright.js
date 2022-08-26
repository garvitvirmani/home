import React, { useState, useEffect } from "react";
import useContentful from "../../useContentful";
import "./copyright.css";

function CopyRight() {
  const { getCopyright } = useContentful();
  const [data, setData] = useState();

  useEffect(() => {
    console.log("foterrrr");
    getCopyright().then((response) => setData(response));
    console.log(data);
  }, []);

  return <div className="copy">{data && data[0].title}</div>;
}

export default CopyRight;
