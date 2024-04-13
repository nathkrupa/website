import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import MainPageNathkrupaDevelopersPlottingRow from "../../components/MainPageNathkrupaDevelopersPlottingRow";
import MainPageNathkrupaDevelopersPlottingRowarrowleft from "../../components/MainPageNathkrupaDevelopersPlottingRowarrowleft";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import HomePage from "../HomePage";
import About from "pages/About";
import Owners from "pages/Owners";
import Projects from "pages/Projects";

export default function MainPageNathkrupaDevelopersPlottingPage() {
  return (
    <>
      <Helmet>
        <title>Yashodeep's Application2</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-100 shadow-md">
        <div className="flex flex-col items-center overflow-auto">
          <div className="flex flex-col items-center self-stretch">
            <div className="self-stretch bg-gradient1 pb-[90px] md:pb-5">
              <Navbar />
              <HomePage />
            </div>
          </div>
          <About />
          <div className="mt-32 h-px w-full self-stretch bg-black-900_66" />
          <Owners />

          <div className="mt-[103px] h-px w-full self-stretch bg-black-900_66" />
          <Projects />

          <div className="mt-[119px] h-px w-full self-stretch bg-black-900_66" />
          <Heading as="h2" className="mt-9 text-center">
            Satisfied Customers
          </Heading>
          <Text
            size="md"
            as="p"
            className="mt-[13px] text-center tracking-[0.40px]"
          >
            At Nathkrupa Developers Ploting, our success is defined by the
            satisfaction of our customers
          </Text>

          <MainPageNathkrupaDevelopersPlottingRow className="mx-auto mt-[51px] flex w-full max-w-[2528px] items-center justify-center self-end py-[33px] pl-[33px] md:p-5 sm:py-5 sm:pl-5" />
          <footer className="mt-[69px] flex flex-col gap-7 self-stretch">
            <div className="h-px bg-black-900_66" />
            <Img
              src="images/img_image_6.png"
              alt="imagesix_one"
              className="h-[411px] object-cover"
            />
          </footer>
        </div>
      </div>
    </>
  );
}
