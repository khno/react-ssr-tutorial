import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import HomePage from "../client/components/homepage/index.js";

let app = express();

// 静态资源
app.use("/dist", express.static("dist"));

app.get("/", (req, res) => {
  res.write(
    "<!DOCTYPE html><html><head><title>Hello HomePage</title></head><body>"
  );
  res.write('<div id="app">');
  res.write(renderToString(<HomePage />));
  res.write("</div></body>");
  res.write(
    '<script type="text/javascript" client="../dist/vendor.bundle.js"></script><script type="text/javascript" client="../dist/js/app.js"></script>'
  );
  res.write("</html>");
});

app.listen(8080, () => {
  console.log("server is start:", 8080);
});
