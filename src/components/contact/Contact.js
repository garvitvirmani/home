/*eslint-disable*/
import React, { useState, useEffect } from "react";
import useContentful from "../../useContentful";
import "./contact.css";
import { Button } from "../stories/Button";

const myUrl = "https://www.linkedin.com/in/garvitvirmani/";

function Contact() {
  const { getContact } = useContentful();
  const [data, setData] = useState();

  useEffect(() => {
    console.log("expert");
    getContact().then((response) => setData(response));
    console.log(data);
  }, []);

  return (
    <div className="contact">
      {data &&
        data.map(({ title, desc, btnText }) => (
          <div>
            <div className="cTitle">{title}</div>
            <div className="cDesc">{desc}</div>
            {/*   Button made by StoryBook */}
            <Button
              label={btnText}
              onClick={() => window.open(myUrl)}
              primary="true"
            />
          </div>
        ))}
    </div>
  );
}

export default Contact;
