import React, { useState, useEffect } from "react";
import useContentful from "../../useContentful";
import "./banner.css";

function Banner() {
  const { getBanner } = useContentful();
  const [banner, setBanner] = useState();

  useEffect(() => {
    getBanner().then((response) => setBanner(response));
    console.log(banner);
  }, []);

  return (
    <div>
      {banner &&
        banner.map(({ file }) => <img src={file.url} className="styimg" />)}
    </div>
  );
}

export default Banner;
