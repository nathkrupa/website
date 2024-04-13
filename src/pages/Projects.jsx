import React from "react";
import { Heading, Text } from "../components";
import MainPageNathkrupaDevelopersPlottingRowarrowleft from "../components/MainPageNathkrupaDevelopersPlottingRowarrowleft";
const Projects = () => {
  return (
    <div>
      <Heading as="h2" className="mt-[45px] text-center">
        Our Projects
      </Heading>
      <Text size="md" as="p" className="mt-1 text-center tracking-[0.40px]">
        Explore the portfolio of exceptional projects delivered by Nathkrupa
        Developers Ploting
      </Text>
      <MainPageNathkrupaDevelopersPlottingRowarrowleft className="mx-auto mt-[51px] flex w-full max-w-[1134px] items-start justify-between gap-5 md:flex-col md:p-5" />
    </div>
  );
};

export default Projects;
