import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export function Header(): ReactElement {
    return (
        <header className="header">
            <h1 className="headline">ToDo Compilator</h1>
            <div className="links">
                <Link to="/about" className="link">
                    About
                </Link>
                <Link to="/" className="link">
                    List
                </Link>
                <Link to="/add-todo" className="link">
                    Add new
                </Link>
            </div>
        </header>
    )
}