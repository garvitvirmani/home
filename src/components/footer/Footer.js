/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { orange } from "@mui/material/colors";
import { Grid } from "@mui/material";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import useContentful from "../../useContentful";

function Footer() {
  const { getFooter } = useContentful();
  const [data, setData] = useState();
  const myUrl = "https://www.linkedin.com/in/garvitvirmani/";
  useEffect(() => {
    getFooter().then((response) => setData(response));
  }, []);

  return (
    <div className="footer">
      <div className="footerIcons">
        <FacebookIcon
          onClick={() => window.open(myUrl)}
          sx={{ color: orange[500] }}
        />
        <LinkedInIcon
          onClick={() => window.open(myUrl)}
          sx={{ color: orange[500] }}
        />
        <InstagramIcon
          onClick={() => window.open(myUrl)}
          sx={{ color: orange[500] }}
        />
      </div>
      <Grid container xs={6} spacing={2} className="links">
        {data &&
          data[0].link.map((each) => (
            <Grid item xs={4} className="link">
              <a href={myUrl} className="link">
                {" "}
                {each}
              </a>
            </Grid>
          ))}
      </Grid>
      {data && <div className="adress">{data[0].adress}</div>}
    </div>
  );
}

export default Footer;
