//import Actions from "./actions";
//import Footer from "./footer";
//import Level from "./level";
//import MapExplorer from "./mapexplorer";
//import Minigraph from "./minigraph";
//import Search from "./search";
//import Table from "./table";
//import TimeSeriesExplorer from "./timeseriesexplorer";

//import "intersection-observer";

//import {MAP_META} from '../constants';
//import useStickySWR from "../hooks/usestickyswr";
//import { fetcher } from "../utils/commonfunctions";

import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useIsVisible } from "react-is-visible";

function Home(props) {
  // const [regionHighlighted, setRegionHighlighted] = useState({
  //   stateCode: "TT",
  //   districtName: null,
  // });

  const [anchor, setAnchor] = useState(null);
  //const [mapStatistic, setMapStatistic] = useState("confirmed");

  const [date, setDate] = useState("");

  /*const { data: timeseries } = useStickySWR(
    "https://api.covid19india.org/v3/min/timeseries.min.json",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const { data } = useStickySWR(
    `https://api.covid19india.org/v3/min/data${
      date ? `-${date}` : ""
    }.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
      revalidateOnFocus: false,
    }
  );*/

  const homeRightElement = useRef();
  const isVisible = useIsVisible(homeRightElement, { once: true });

  /*const stateCodes = [
    "TT",
    ...[
      ...new Set([
        ...Object.keys(MAP_META).filter((stateCode) => stateCode !== "TT"),
        ...Object.keys(data || {}).filter((stateCode) => stateCode !== "TT"),
      ]),
    ].sort(),
  ];*/

  return <React.Fragment></React.Fragment>;
}

export default Home;
