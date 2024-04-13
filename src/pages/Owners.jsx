import React from "react";
import { Heading, Img, Text } from "../components";

const Owners = () => {
  return (
    <div>
      <Heading as="h2" className="mt-[37px] text-center">
        Owners
      </Heading>
      <Text
        size="md"
        as="p"
        className="mt-[11px] text-center tracking-[0.40px]"
      >
        Meet the Visionaries Behind Nathkrupa Developers Ploting: Swapnil Pawar
        and Eshwar Budhwant.
      </Text>
      <div className="mx-auto mt-[51px] flex w-full max-w-[1244px] items-center justify-center gap-[41px] p-[38px] md:flex-col md:p-5">
        <Img
          src="images/img_whatsapp_image_2024_03_28.png"
          alt="whatsappimage"
          className="mb-[5px] h-[409px] w-[28%] object-cover md:w-full"
        />
        <Text
          size="md"
          as="p"
          className="w-[72%] !font-nexaregular leading-[160%] tracking-[0.40px] md:w-full"
        >
          <>
            Swapnil Pawar, a dynamic entrepreneur with a keen eye for
            innovation, brings years of expertise in real estate development to
            the helm of Nathkrupa Developers Ploting. His visionary leadership
            and strategic acumen have been instrumental in driving the
            company&#39;s growth and success.
            <br />
            Eshwar Budhawant, a seasoned businessman renowned for his integrity
            and dedication, co-founds Nathkrupa Developers Ploting with a
            passion for excellence. With a wealth of experience in the real
            estate sector, he ensures that every project reflects the highest
            standards of quality and craftsmanship.
            <br />
            Together, Swapnil and Eshwar form an unstoppable duo, united by a
            shared commitment to customer satisfaction and a relentless pursuit
            of excellence.{" "}
          </>
        </Text>
      </div>
    </div>
  );
};

export default Owners;
