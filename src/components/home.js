import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useIsVisible } from "react-is-visible";

function Home(props) {
  const [anchor, setAnchor] = useState(null);

  const [date, setDate] = useState("");

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement, { once: true });

  return <React.Fragment></React.Fragment>;
}

export default Home;
