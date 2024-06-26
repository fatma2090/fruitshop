import React from "react"
import * as ReactDOMClient from "react-dom/client"
import "bootstrap/dist/css/bootstrap-reboot.min.css"
import './index.css';

import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<App></App>);