import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
          <Image
            src={"/logo/balck_logo_DS.jpg"}
            width={10000}
            height={10000}
            className="w-40"
            alt="image"
          />{" "}
        </h1>
        <p className="text-left  text-xl  text-gray-500">+1 (469) 796-6964</p>
        <p className="text-left  text-xl  text-gray-500">+91 87674 39978</p>
        <Link
          href={"mailto:mail@dreamskrin.com"}
          className="text-left  text-xl  text-gray-500"
        >
          mail@dreamskrin.com
        </Link>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2024 Dream Skrin. All Rights Reserved.
        <Link href="/" className="text-blue-500">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
