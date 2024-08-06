import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

/*
  ############# STEP 1 #############

  1) List all ToDo's in a easy-to-see list/way     ##DONE##
  2) Adding new ToDo's to the list/array       ##DONE##
  3) Mark ToDo's as "completed", maybe move them to a different array so user can always see their completed ToDo's      ##DONE##
  4) Removeable ToDo's, these get deleted     ##DONE##
  5) Timestamps should be added to the ToDo's automatically   ##DONE##
  6) ToDo's should have an Author to show who made the ToDo   ##DONE##

  COMPONENTS NEEDED:
  ToDo, List of ToDo's, List of completed ToDo's, Form to create new ToDo's, Buttons for add, complete and remove.

  ############# STEP 2 #############

  1) Seperate out the page from adding new ToDo's   ###DONE###
  2) Seperate out an "about" page, shows purpose of the list and the ammount of ToDo's    ###DONE###

  COMPONENTS NEEDED:
  Pages for AddToDo and About, new About component, Router
*/

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
