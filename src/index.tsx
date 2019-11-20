import * as React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion"; //keep trying man
import axios from "axios"; // zucht waarom werkt dit niet

import "./styles.css";

const variants = {
  visible: {
    opacity: 1,
    x: 0
  },
  invisible: {
    opacity: 0,
    x: "-100vw"
  }
};

function App() {
  const error = "Karel";
  const queue = axios.get("api.radiobag.ga/v1/queue");
  console.log(queue);
  return (
    <motion.div
      variants={variants}
      initial="invisible"
      animate="visible"
      className="App"
    >
      <h1>BAGGAAAA</h1>
      <h2>WElkom!</h2>
      <h5>
        Alleen de hardste pokoes op <a href="radiobag.ga">radiobag.ga</a> je
        weet
      </h5>
      {error}
    </motion.div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
"";
