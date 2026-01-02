import ReactDOM from "react-dom/client";
import React from "react";
import "./main.css";

//Importação de paginas
import HomePage from "./pages/Home/Home.tsx";

const root: ReactDOM.Root = ReactDOM.createRoot(document.querySelector("#root")!);
root.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);