import React from "react";
import { Text, Img } from "./..";

export default function YashParkRowpanchshil({ panchshil = "Panchshil Towers", ...props }) {
  return (
    <div {...props}>
      <div className="flex w-[67%] flex-col items-center gap-[45px] md:w-full">
        <div className="flex gap-[143px] self-stretch md:flex-col">
          <Img src="images/img_image_23.png" alt="image" className="h-[295px] w-[41%] object-cover md:w-full" />
          <Img src="images/img_image_22.png" alt="image" className="h-[295px] w-[41%] object-cover md:w-full" />
        </div>
        <Text size="lg" as="p" className="text-center tracking-[0.70px]">
          {panchshil}
        </Text>
      </div>
    </div>
  );
}
