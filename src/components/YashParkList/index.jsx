import React from "react";
import { Img } from "./..";

export default function YashParkList({ ...props }) {
  return (
    <div {...props}>
      <Img
        src="images/img_whatsapp_image_2024_04_12.png"
        alt="whatsappimage"
        className="h-[348px] w-[22%] object-cover md:w-full"
      />
      <Img
        src="images/img_whatsapp_image_2024_04_12_348x261.png"
        alt="whatsappimage"
        className="h-[348px] w-[22%] object-cover md:w-full"
      />
      <Img
        src="images/img_whatsapp_image_2024_04_12_1.png"
        alt="whatsappimage"
        className="h-[348px] w-[22%] object-cover md:w-full"
      />
      <Img
        src="images/img_whatsapp_image_2024_04_12_2.png"
        alt="whatsappimage"
        className="h-[348px] w-[22%] object-cover md:w-full"
      />
    </div>
  );
}
