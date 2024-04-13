import React from "react";
import { Text, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <Img
        src="images/img_image_1.png"
        alt="imageone_one"
        className="ml-[105px] h-[115px] w-[6%] object-cover md:ml-0 md:w-full"
      />
      <ul className="mr-[111px] flex w-[56%] justify-center gap-[68px] md:mr-0 md:w-full md:flex-col">
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
              <Text size="md" as="p">
                Amenities
              </Text>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="flex">
              <Text size="md" as="p" className="self-start">
                Layout
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
    </header>
  );
}
