import React from "react";
import logo from "../logo.svg";
import {FormButton} from "./FormButton";

export const MainPage = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hello french.cafe v 0.1.1 :)!
                </p>
                <div>
                    <FormButton/>
                </div>
            </header>
        </div>
    );
}


