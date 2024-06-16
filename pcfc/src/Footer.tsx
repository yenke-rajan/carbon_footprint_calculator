import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-3 md:gap-y-4 gap-x-8 border-t border-blue-gray-200 bg-white w-full p-3 h-12">
      {/* Logo */}
      <img
        alt="Site logo"
        className="h-12 w-23"
        src="./cw.png"
        loading="lazy"
      />

      {/* Text */}
      <Typography color="black" className="text-center sm:text-left mb-12 leading-6 sm:mx-6 md:mt-2 md:max-w-2xl lg:mt-16 lg:ml-6">
      Carbon Footprint Calculator is Owned by Code Weavers Pvt. Ltd. under Nepal's constitution 2072.
      </Typography>
    </footer>
  );
}
