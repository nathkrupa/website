import React from "react";
import { Img } from "./Img";
import { Text } from "./Text";

const Navbar = () => {
  return (
    <header className="flex items-center justify-center bg-white-A700 p-5 fixed top-0 left-0 right-0">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 md:flex-col">
        <Img
          src="images/img_image_1.png"
          alt="imageone_one"
          className="min-h-[115px] w-[6%] object-cover md:w-full"
        />
        <ul className="flex gap-[68px] sm:flex-col">
          <li>
            <a href="#">
              <div className="flex">
                <Text size="md" as="p">
                  Home
                </Text>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex">
                <Text size="md" as="p" className="self-start">
                  About
                </Text>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex">
                <Text size="md" as="p" className="self-start">
                  Projects
                </Text>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex self-start">
                <Text size="md" as="p">
                  Customers
                </Text>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex self-start">
                <Text size="md" as="p">
                  Contact
                </Text>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
