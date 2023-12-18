import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center font-semibold text-rose-600 text-[14px] md:text-lg">
      <Link href="/">Andry Ariadi &copy; 2023 Food App. All rights reserved!</Link>
    </footer>
  );
};

export default Footer;
