import React, { useState, useEffect } from "react";
import { orange } from "@mui/material/colors";
import "./news.css";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useContentful from "../../useContentful";

function News() {
  const { getNews } = useContentful();
  const [data, setData] = useState();

  useEffect(() => {
    console.log("newssssssssssssss");
    getNews().then((response) => setData(response));
    console.log(data);
  }, []);

  return (
    <div>
      <div className="newsHead">
        <h1>Latest News</h1>
        <Button variant="contained" color="secondary" className="newsBtn">
          View All
        </Button>
      </div>
      <div className="newsCnt">
        {data
          && data.map(({
            nimg, desc, btnText, author,
          }) => (
            <div>
              <img src={nimg.fields.file.url} className="nimg" />
              <div className="auth">{author}</div>
              <div className="newsDesc">{desc}</div>
              <a className="newsLink" href="">
                {btnText}
                <ArrowForwardIcon
                  sx={{ marginLeft: "2%", position: "relative", top: "2%" }}
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default News;
