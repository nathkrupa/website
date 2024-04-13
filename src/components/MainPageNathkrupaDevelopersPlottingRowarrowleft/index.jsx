import React from "react";
import { Img, Button, Text, Heading, Slider } from "./..";

export default function MainPageNathkrupaDevelopersPlottingRowarrowleft({
  name = "Rajvir Plots",
  description = "The attention to detail by Nathkrupa Developers Ploting surpassed our expectations",
  btn = "Learn More",
  ...props
}) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div {...props}>
      <Img
        src="images/img_arrow_left.svg"
        alt="arrowleft_one"
        className="mt-[147px] h-[37px] rounded-sm md:w-full"
      />
      <div className="w-[80%]">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="mx-auto flex h-[352px] items-center bg-[url(/public/images/img_component_12.png)] bg-cover bg-no-repeat shadow-xs md:h-auto">
                <div className="flex w-full flex-col items-start bg-gradient p-[30px] sm:p-5">
                  <Heading
                    size="xs"
                    as="h1"
                    className="ml-[26px] mt-[138px] !text-white-A700 md:ml-0"
                  >
                    {name}
                  </Heading>
                  <Text
                    size="s"
                    as="p"
                    className="ml-[26px] w-[66%] leading-[138.5%] tracking-[0.32px] !text-white-A700 md:ml-0 md:w-full"
                  >
                    {description}
                  </Text>
                  <Button
                    size="xs"
                    shape="square"
                    rightIcon={
                      <Img
                        src="images/img_settings.svg"
                        alt="settings"
                        className="h-[12px] w-[14px]"
                      />
                    }
                    className="ml-[26px] mt-[9px] min-w-[118px] gap-3.5 md:ml-0"
                  >
                    {btn}
                  </Button>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
      <Img
        src="images/img_arrow_right.svg"
        alt="arrowright_one"
        className="mt-[147px] h-[37px] rounded-sm md:w-full"
      />
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Carousel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === items.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="relative w-full">
//       <div className="absolute top-0 left-0 w-full flex justify-between items-center">
//         <button
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//           onClick={prevSlide}
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//           onClick={nextSlide}
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//       <div className="flex transition-transform duration-500 ease-in-out">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 w-full ${
//               index === currentIndex ? 'opacity-100' : 'opacity-0'
//             } transform ${
//               index === currentIndex ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             <div className="bg-gray-200 rounded-lg p-4">
//               <img src={item.image} alt={item.title} className="w-full mb-4" />
//               <h2 className="text-lg font-bold mb-2">{item.title}</h2>
//               <p className="text-sm text-gray-600 mb-4">{item.description}</p>
//               <button className="text-blue-500 hover:underline">
//                 Show More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
