import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, GoogleMap, Button, Text } from "../../components";
import Header from "../../components/Header";
import MainPageNathkrupaDevelopersPlottingRow from "../../components/MainPageNathkrupaDevelopersPlottingRow";
import YashParkList from "../../components/YashParkList";
import YashParkRowpanchshil from "../../components/YashParkRowpanchshil";

export default function YashparkPage() {
  return (
    <>
      <Helmet>
        <title>Yashodeep's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="flex flex-col items-center">
          <Header className="flex items-center justify-between gap-5 self-stretch bg-gray-100 p-[17px] md:flex-col" />
          <Heading as="h1" className="mt-8 text-center">
            Yash Park Phase 7
          </Heading>
          <Text size="md" as="p" className="mt-1 text-center tracking-[0.40px]">
            Discover Tranquil Living at Rajvir Plots – Where Serenity Meets Convenience.
          </Text>
          <YashParkList className="mx-auto mt-[76px] flex w-full max-w-[1179px] gap-[45px] pb-[118px] md:flex-col md:p-5 md:pb-5" />
          <Text size="md" as="p" className="mt-[129px] text-center tracking-[0.40px]">
            Location: Choki Dhani road, Near Panchshil Towers, Kharadi
          </Text>
          <div className="mx-auto mt-[50px] flex w-full max-w-[1179px] items-start justify-between gap-5 md:flex-col md:p-5">
            <Text size="md" as="p" className="w-[49%] !font-nexaregular leading-[138.5%] tracking-[0.40px] md:w-full">
              <>
                Yash Park, strategically positioned in the heart of Kharadi, offers an exceptional opportunity to own
                prime real estate in one of Pune&#39;s most coveted locations. Nestled in front of YOO Villas by
                Panchshil Towers and alongside Panchshil Towers, this meticulously planned project provides spacious
                plots surrounded by lush greenery and modern amenities. <br />
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
            <GoogleMap showMarker={false} className="mt-2 h-[300px] w-[47%] bg-white-A700" />
          </div>
          <div className="mx-auto mt-[57px] grid w-full max-w-[1174px] grid-cols-[repeat(auto-fill,_minmax(121px_,_1fr))] justify-center gap-11 md:p-5">
            <div className="flex w-full flex-col items-center gap-[19px] bg-gray-50 p-[19px] shadow-sm">
              <Img
                src="images/img_image_7.png"
                alt="highway_5_mins"
                className="mt-[9px] h-[67px] w-[63%] object-cover"
              />
              <Text as="p" className="mb-[19px] text-center tracking-[0.30px]">
                Highway 5 mins
              </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-[19px] bg-gray-50 p-[21px] shadow-sm sm:p-5">
              <Img
                src="images/img_image_8.png"
                alt="imageeight_one"
                className="mt-[3px] h-[72px] w-[72px] object-cover"
              />
              <Text as="p" className="mb-[18px] text-center tracking-[0.30px]">
                Airport 10 mins
              </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-[19px] bg-gray-50 p-[18px] shadow-sm">
              <Img src="images/img_image_9.png" alt="imagenine_one" className="mt-1.5 h-[72px] w-[72px] object-cover" />
              <Text as="p" className="w-[82%] text-center leading-[138.5%] tracking-[0.30px] md:w-full">
                <>
                  IT Companies
                  <br />
                  100 mtrs
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col items-center justify-end gap-3.5 bg-gray-50 p-4 shadow-sm">
              <Img src="images/img_image_10.png" alt="imageten_one" className="mt-2.5 h-[75px] w-[75px] object-cover" />
              <Text as="p" className="w-[98%] text-center leading-[138.5%] tracking-[0.30px] md:w-full">
                <>
                  Entertainment &<br />
                  Malls 10 mins
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col items-center justify-end gap-[17px] bg-gray-50 p-[17px] shadow-sm">
              <Img
                src="images/img_image_11.png"
                alt="imageeleven_one"
                className="mt-[7px] h-[74px] w-[74px] object-cover"
              />
              <Text as="p" className="text-center leading-[138.5%] tracking-[0.30px]">
                <>
                  Health Facilities <br />3 mins
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-3.5 bg-gray-50 p-[18px] shadow-sm">
              <Img
                src="images/img_image_12.png"
                alt="imagetwelve_one"
                className="mt-1.5 h-[77px] w-[77px] object-cover"
              />
              <Text as="p" className="w-[89%] text-center leading-[138.5%] tracking-[0.30px] md:w-full">
                <>
                  Dhole Patil <br />
                  College 5 mins
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col items-center justify-end gap-2.5 bg-gray-50 p-4 shadow-sm">
              <Img
                src="images/img_image_13.png"
                alt="imagethirteen"
                className="mt-[13px] h-[76px] w-[76px] object-cover"
              />
              <Text as="p" className="text-center leading-[138.5%] tracking-[0.30px]">
                <>
                  OXFORD School
                  <br />2 mins
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-2.5 bg-gray-50 p-[30px] shadow-sm sm:p-5">
              <Img
                src="images/img_image_14.png"
                alt="imagefourteen"
                className="mt-[3px] h-[72px] w-[72px] object-cover"
              />
              <Text as="p" className="mb-[9px] text-center tracking-[0.30px]">
                Street Lights
              </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-2.5 bg-gray-50 p-[18px] shadow-sm">
              <Img
                src="images/img_image_15.png"
                alt="imagefifteen"
                className="mr-[17px] mt-1.5 h-[81px] w-[81px] self-end object-cover md:mr-0"
              />
              <Text as="p" className="w-[92%] text-center leading-[138.5%] tracking-[0.30px] md:w-full">
                <>
                  Kharadi Gaon <br />
                  Bus Stop 5 min
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-2.5 bg-gray-50 p-[18px] shadow-sm">
              <Img src="images/img_image_16.png" alt="imagesixteen" className="mt-2 h-[79px] w-[79px] object-cover" />
              <Text as="p" className="w-[93%] text-center leading-[138.5%] tracking-[0.30px] md:w-full">
                <>
                  Karadi Main
                  <br />
                  Market 10 mins
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2.5 bg-gray-50 p-[18px] shadow-sm">
              <Img
                src="images/img_image_17.png"
                alt="imageseventeen"
                className="mt-[5px] h-[82px] w-[82px] object-cover"
              />
              <Text as="p" className="w-[87%] text-center leading-[138.5%] tracking-[0.30px] md:w-full">
                <>
                  Butterfly Park
                  <br />2 mins
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col items-center gap-2.5 bg-gray-50 p-[18px] shadow-sm">
              <Img
                src="images/img_image_18.png"
                alt="imageeighteen"
                className="mt-1.5 h-[81px] w-[81px] object-cover"
              />
              <Text as="p" className="w-[84%] text-center leading-[138.5%] tracking-[0.30px] md:w-full">
                <>
                  Panchshil <br />
                  Towers 1 mins
                </>
              </Text>
            </div>
          </div>
          <div className="mt-[81px] h-px w-full self-stretch bg-black-900_66" />
          <Heading as="h2" className="mt-8 text-center">
            Special Attractions
          </Heading>
          <YashParkRowpanchshil className="mx-auto mt-16 flex w-full max-w-[1132px] items-center justify-center px-1.5 pb-1.5 md:p-5" />
          <Button shape="square" className="mt-[110px] min-w-[191px] sm:px-5">
            Check Layout
          </Button>
          <GoogleMap showMarker={false} className="mt-[47px] h-[696px] w-[59%] shadow-lg" />
          <div className="mt-[104px] h-px w-full self-stretch bg-black-900_66" />
          <Heading as="h2" className="mt-[31px] text-center">
            Satisfied Customers
          </Heading>
          <MainPageNathkrupaDevelopersPlottingRow className="mx-auto mt-[73px] flex w-full max-w-[1079px] items-center justify-center overflow-auto py-[33px] pl-[33px] md:p-5 sm:py-5 sm:pl-5" />
          <div className="mt-[81px] h-px w-full self-stretch bg-black-900_66" />
          <footer className="relative mt-[-1px] self-stretch">
            <Img
              src="images/img_image_4_411x1440.png"
              alt="imagefour_one"
              className="h-[411px] w-full object-cover md:h-auto"
            />
          </footer>
        </div>
      </div>
    </>
  );
}
