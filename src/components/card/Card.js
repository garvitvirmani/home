/*eslint-disable*/
import SupervisorAccountTwoToneIcon from "@mui/icons-material/SupervisorAccountTwoTone";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import React, { useState, useEffect } from "react";
import { orange, green } from "@mui/material/colors";
import { Typography } from "@mui/material";
import useContentful from "../../useContentful";
import "./card.css";

function Mcard() {
  const { getCard } = useContentful();
  const [data, setData] = useState();

  useEffect(() => {
    getCard().then((response) => setData(response));
    console.log(data);
  }, []);

  return (
    <div className="cardCnt">
      {data && (
        <div className="cardMain">
          <SupervisorAccountTwoToneIcon
            sx={{
              backgroundColor: orange[100],
              borderRadius: "20px",
              color: orange[500],
            }}
            fontSize="large"
          />
          <Typography variant="h1" className="cardTitle">
            {data[0].title}
          </Typography>
          <Typography variant="h2" className="cardDesc">
            {data[0].desc}
          </Typography>
          <a className="newsLink" href="">
            {data[0].btnText}
          </a>
        </div>
      )}
      {data && (
        <div className="cardMain">
          <WorkOutlineOutlinedIcon
            sx={{
              backgroundColor: green[100],
              borderRadius: "20px",
              color: green[500],
            }}
            fontSize="large"
          />
          <Typography variant="h1" className="cardTitle">
            {data[1].title}
          </Typography>
          <Typography variant="h2" className="cardDesc">
            {data[1].desc}
          </Typography>
          <a className="newsLink" href="">
            {data[1].btnText}
          </a>
        </div>
      )}
    </div>
  );
}

export default Mcard;
