import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App, ListToDoPage, AddToDoPage, AboutPage } from "./index";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="about" element={<AboutPage />} />
            <Route index element={<ListToDoPage />} />
            <Route path="add-todo" element={<AddToDoPage />} />
        </Route>
    )
)