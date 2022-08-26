/*eslint-disable*/
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import useContentful from "../../useContentful";
import "./whypoints.css";
import { Header } from "../stories/Header";

function Whypoints() {
  const { getWhypoints } = useContentful();
  const [data, setData] = useState();

  useEffect(() => {
    getWhypoints().then((response) => setData(response));
  }, []);

  return (
    <Grid container spacing={4} xs={12}>
      {data &&
        data.map(({ title, desc }) => (
          <Grid item xs={4}>
            {/* StoryBook component for each point  */}
            <Header title={title} desc={desc}></Header>
          </Grid>
        ))}
    </Grid>
  );
}

export default Whypoints;
