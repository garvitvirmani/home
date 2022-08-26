/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./team.css";
import { Button, Typography } from "@mui/material";
import useContentful from "../../useContentful";

function Team() {
  const { getTeam } = useContentful();
  const [data, setData] = useState();

  useEffect(() => {
    getTeam().then((response) => setData(response));
  }, []);

  return (
    <div>
      {data &&
        data.map(({ title, desc, btnText, suptitle, pimg }) => (
          <div className="teamCnt">
            <img src={pimg.fields.file.url} className="poster" alt="poster" />
            <div className="teamInfo">
              {" "}
              <Typography color="secondary" className="supTitle">
                {suptitle}
              </Typography>
              <Typography variant="h1" className="teamTitle">
                {title}
              </Typography>
              <Typography variant="h3" className="teamDesc">
                {desc}
              </Typography>
              <Button variant="contained" color="secondary" className="teamBtn">
                {btnText}
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Team;
