import React from "react";

const sizes = {
  s: "text-[80px] font-bold md:text-5xl",
  xs: "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-notoserif ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
