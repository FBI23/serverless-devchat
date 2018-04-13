import React from "react";
import ReactDOMServer from "react-dom/server";

// import main App component
import App from "../client/src/App";

import path from "path";
import fs from "fs";

export default (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve("./build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      return res.send(err).end();
    }

    // render the app as a string
    const html = ReactDOMServer.renderToString(<App />);

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
