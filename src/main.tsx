import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Normalize } from "styled-normalize";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <RecoilRoot>
                <Normalize />
                <App />
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>
);
