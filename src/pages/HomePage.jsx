import React from "react";
import { Button, Heading, Text } from "../components/index";

const HomePage = () => {
  return (
    <div className="h-[801px] bg-[url(/public/images/img_group_4.png)] bg-cover bg-no-repeat md:h-auto mt-32">
      <div className="flex flex-col items-start gap-[35px] bg-gradient2 py-[110px] pl-[110px] pr-14 md:p-5">
        <Heading
          as="h1"
          className="ml-3 w-[73%] leading-[121%] !text-white-A700 md:ml-0 md:w-full"
        >
          <>
            Nathkrupa Developers
            <br />
            Plotting
          </>
        </Heading>
        <Text
          size="md"
          as="p"
          className="ml-3 w-[70%] !text-white-A700 md:ml-0 md:w-full"
        >
          Discover Your Dream Plot with Nathkrupa Developers Ploting – Where
          Quality Meets Affordability. Explore Prime Locations in Kharadi,
          Awalwadi, and Wagoli for Your Perfect Investment.
        </Text>
        <Button
          shape="round"
          className="mb-[183px] ml-3 min-w-[191px] md:ml-0 sm:px-5"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
