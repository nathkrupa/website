import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import MainPageNathkrupaDevelopersPlotting from "pages/MainPageNathkrupaDevelopersPlotting";
import Rajvirplots from "pages/Rajvirplots";
import Yashpark from "pages/Yashpark";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "mainpagenathkrupadevelopersplotting",
      element: <MainPageNathkrupaDevelopersPlotting />,
    },
    {
      path: "rajvirplots",
      element: <Rajvirplots />,
    },
    {
      path: "yashpark",
      element: <Yashpark />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
