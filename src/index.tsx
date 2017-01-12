import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";

declare const APP_NAME: string;
declare const APP_ENV: string;

ReactDOM.render(
    <Hello compiler={APP_NAME} framework={APP_ENV} />,
    document.getElementById("example")
);