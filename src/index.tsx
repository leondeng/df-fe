import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";

ReactDOM.render(
    <Hello compiler={APP_NAME} framework={APP_VERSION} />,
    document.getElementById("example")
);