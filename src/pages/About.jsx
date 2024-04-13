import React from "react";
import { Heading, Img, Text } from "../components";

const About = () => {
  return (
    <div className="flex flex-col items-center ">
      <Heading as="h2" className="relative mt-[-52px] text-center">
        About Us
      </Heading>
      <Text
        size="md"
        as="p"
        className="mt-3 w-[73%] text-center leading-[138.5%] tracking-[0.40px] md:w-full md:p-5"
      >
        “Success is not just about making deals; it&#39;s about building
        relationships, creating value, and leaving a lasting legacy.”
      </Text>
      <div className="mx-auto mt-[73px] flex w-full max-w-[1165px] items-center justify-between gap-5 md:flex-col md:p-5">
        <Img
          src="images/img_img_20240329_wa0043.png"
          alt="img20240329_one"
          className="h-[395px] w-[45%] object-cover md:w-full"
        />
        <Text
          size="md"
          as="p"
          className="w-[47%] !font-nexaregular leading-[160%] tracking-[0.40px] md:w-full"
        >
          <>
            Welcome to Nathkrupa Developers Ploting, where visionary planning
            meets unparalleled execution. Founded by esteemed businessmen
            Swapnil Pawar and Eshwar Budhawant, our company stands as a beacon
            of excellence in the real estate industry. With a steadfast
            commitment to integrity, quality, and innovation, we specialize in
            crafting exceptional plots in prime locations such as Kharadi,
            Awalwadi, and Wagoli. Backed by a legacy of success and a passion
            for exceeding expectations, we invite you to embark on your journey
            towards finding the perfect plot with us.
            <br />
            Backed by a team of seasoned professionals.
          </>
        </Text>
      </div>
    </div>
  );
};

export default About;
