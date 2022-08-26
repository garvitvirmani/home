import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Whychooseus from "./components/whychooseus/Whychooseus";
import Whypoints from "./components/whypoints/Whypoints";
import Team from "./components/team/Team";
import News from "./components/news/News";
import Mcard from "./components/card/Card";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import CopyRight from "./components/copyright/Copyright";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ff9100",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "40px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "18px",
      fontWeight: 400,
    },
    h3: {
      fontWeight: 400,
      fontSize: "16px",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Banner />
        <Whychooseus />
        <Whypoints />
        <Team />
        <News />
        <Mcard />
        <Contact />
        <Footer />
        <CopyRight />
      </div>
    </ThemeProvider>
  );
}

export default App;
