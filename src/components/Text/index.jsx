import React from "react";

const sizes = {
  xs: "text-[15px] font-normal",
  lg: "text-[35px] font-normal md:text-[33px] sm:text-[31px]",
  s: "text-base font-normal",
  md: "text-xl font-normal",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-nexabold ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
