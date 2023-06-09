import React from "react";
import logo from "../logo.svg";
import {FormButton} from "./FormButton";

export function MainPage() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hello french.cafe :)!
                </p>
                <div>
                    {/*<Link className="button" to="books">Books</Link>*/}
                    <FormButton/>
                </div>
            </header>
        </div>
    );
}


