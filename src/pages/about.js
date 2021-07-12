import { div } from "prelude-ls";
import * as React from "react"
import { Helmet } from "react-helmet";

const AboutPage = () =>{
  return (
    <div>
    <Helmet>
    <title>My Gatsby Site</title>
    <meta name="description" content="My first gatby website" />
    </Helmet>
    <p>Hello Gatsby</p>
    </div>
  );
};

export default AboutPage