import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, GoogleMap, Button, Text } from "../../components";
import Header from "../../components/Header";
import RajvirPlotsRajvirPlots from "../../components/RajvirPlotsRajvirPlots";
import RajvirPlotsRajvirPlots1 from "../../components/RajvirPlotsRajvirPlots1";

export default function RajvirplotsPage() {
  return (
    <>
      <Helmet>
        <title>Yashodeep's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="flex flex-col items-center">
          <Header className="flex items-center justify-between gap-5 self-stretch bg-gray-100 p-[17px] md:flex-col" />
          <div className="mt-[41px] flex flex-col items-center">
            <Heading as="h1" className="text-center">
              Rajvir Plots{" "}
            </Heading>
            <Text size="md" as="p" className="relative mt-[-4px] text-center tracking-[0.40px]">
              Discover Tranquil Living at Rajvir Plots – Where Serenity Meets Convenience.
            </Text>
          </div>
          <div className="relative mx-auto mt-[86px] h-[1477px] w-full max-w-[1179px] md:p-5">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center gap-[50px]">
              <Text size="md" as="p" className="text-center tracking-[0.40px]">
                Location: Awalwadi Road, near BIOVET PRIVATE LIMITED
              </Text>
              <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                <Text
                  size="md"
                  as="p"
                  className="w-[49%] !font-nexaregular leading-[138.5%] tracking-[0.40px] md:w-full"
                >
                  <>
                    Rajvir Plots offers a unique opportunity to own a piece of prime real estate in the vibrant locale
                    of Awalwadi Road. Nestled in close proximity to BIOVET PRIVATE LIMITED, this meticulously planned
                    project boasts of spacious plots surrounded by lush greenery and scenic views. <br />
                    <br />
                    Health Facilities in 3 Mins
                    <br />
                    IT and Workspaces in 100 meters
                    <br />
                    Education Institutes in 1 Mins
                    <br />
                    Pune Airport 10 Mins
                    <br />
                    Entertainment and malls 10 Mins
                  </>
                </Text>
                <GoogleMap showMarker={false} className="h-[300px] w-[47%] bg-white-A700" />
              </div>
            </div>
            <RajvirPlotsRajvirPlots className="absolute bottom-0 left-0 right-0 top-0 m-auto grid w-full grid-cols-[repeat(auto-fill,_minmax(554px_,_1fr))] justify-center gap-[70px]" />
          </div>
          <Button shape="square" className="mt-[91px] min-w-[191px] sm:px-5">
            Check Layout
          </Button>
          <GoogleMap showMarker={false} className="mx-auto mt-[58px] h-[656px] w-full max-w-[990px] md:p-5" />
          <div className="mt-[133px] h-px w-full self-stretch bg-black-900_66" />
          <Heading as="h2" className="mt-[31px] text-center">
            Satisfied Customers
          </Heading>
          <RajvirPlotsRajvirPlots1 className="ml-[159px] mt-[29px] flex w-[82%] gap-[53px] self-start py-8 pl-8 md:ml-0 md:w-full md:flex-col md:p-5 sm:py-5 sm:pl-5" />
          <div className="mt-[52px] h-px w-full self-stretch bg-black-900_66" />
          <footer className="relative mt-[-1px] self-stretch">
            <Img src="images/img_image_4.png" alt="imagefour_one" className="h-[389px] w-full object-cover md:h-auto" />
          </footer>
        </div>
      </div>
    </>
  );
}
