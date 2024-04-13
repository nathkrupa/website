import React from "react";
import { Img } from "./..";

export default function RajvirPlotsRajvirPlots1({ ...props }) {
  return (
    <div {...props}>
      <Img
        src="images/img_whatsapp_image_2024_04_10.png"
        alt="whatsappimage"
        className="h-[184px] w-[27%] object-cover md:w-full"
      />
      <Img
        src="images/img_whatsapp_image_2024_04_10_293x438.png"
        alt="whatsappimage"
        className="my-[3px] h-[293px] w-[43%] object-cover md:my-0 md:w-full"
      />
      <Img
        src="images/img_whatsapp_image_2024_03_29_184x184.png"
        alt="whatsappimage"
        className="h-[184px] w-[18%] object-cover md:w-full"
      />
      <Img
        src="images/img_whatsapp_image_2024_04_09.png"
        alt="whatsappimage"
        className="h-[184px] w-[-38px] object-cover md:w-full"
      />
    </div>
  );
}
