import { ReactElement } from "react";
import { useToDoContext } from "../hooks";
import "../css/AboutPage.css";

export function AboutPage(): ReactElement {
    const { taskCounter } = useToDoContext();

    return (
        <section className="aboutSection">
            <h1>Currently there are {taskCounter} tasks in the list</h1>
            <p>The purpose of this ToDo compilator is lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum nulla quo veritatis dolore ipsum sint beatae iusto ab in.</p>
        </section>
    )
}