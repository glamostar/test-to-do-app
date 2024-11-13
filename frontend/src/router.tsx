import Layout from "layout";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Home from 'views/Home';
import Todo from "views/Todo";

const element = createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todo />} />
    </Route>
  </>
)
export const router = createBrowserRouter(element);