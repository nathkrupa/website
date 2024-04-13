import React from "react";
import { Img } from "./..";

export default function MainPageNathkrupaDevelopersPlottingRow({ ...props }) {
  return (
    <div {...props}>
      <div className="mx-auto my-3 flex w-full max-w-[2528px] items-center justify-between gap-5 md:flex-col">
        <div className="flex w-[40%] gap-[53px] md:w-full md:flex-col">
          <Img
            src="images/img_rectangle_2684.png"
            alt="rectangle"
            className="h-[251px] w-[25%] object-cover md:w-full"
          />
          <Img
            src="images/img_rectangle_2684_400x400.png"
            alt="rectangle"
            className="h-[400px] w-[40%] object-cover md:w-full"
          />
          <Img
            src="images/img_rectangle_2684_251x251.png"
            alt="rectangle"
            className="h-[251px] w-[25%] object-cover md:w-full"
          />
        </div>
        <Img src="images/img_rectangle_2684_1.png" alt="image" className="h-[251px] w-[251px] object-cover md:w-full" />
        <Img
          src="images/img_rectangle_2684.png"
          alt="image_one"
          className="h-[251px] w-[251px] object-cover md:w-full"
        />
        <Img
          src="images/img_rectangle_2684_2.png"
          alt="image_two"
          className="h-[251px] w-[251px] object-cover md:w-full"
        />
        <Img
          src="images/img_rectangle_2684_3.png"
          alt="image_three"
          className="h-[251px] w-[251px] object-cover md:w-full"
        />
        <Img
          src="images/img_rectangle_2684_4.png"
          alt="image_four"
          className="h-[251px] w-[251px] object-cover md:w-full"
        />
      </div>
    </div>
  );
}
