import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Tab, Tabs } from "@mui/material";

import useContentful from "../../useContentful";

function Navbar() {
  const [navBarSelected, setSelected] = useState();
  const [fields, setFields] = useState();
  const { getNavbar } = useContentful();

  useEffect(() => {
    getNavbar().then((response) => setFields(response));
  }, []);

  return (
    <AppBar sx={{ background: "#fffefe" }} position="sticky" elevation={0}>
      <Toolbar>
        <Tabs
          textColor="secondary"
          sx={{ marginLeft: "auto" }}
          value={navBarSelected}
          indicatorColor="secondary"
          onChange={(e, value) => setSelected(value)}
        >
          {fields && fields.map(({ title }) => <Tab label={title} />)}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
