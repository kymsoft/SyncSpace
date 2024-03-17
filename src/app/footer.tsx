import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="gap-4 my-5 p-2 z-10 flex justify-center items-center w-fill">
      <p>@Final Year Project 2024</p>
      <div className=" flex gap-4">
      <Link href="" className="text-xl">
      <IoLogoWhatsapp />
      </Link>
      <Link href="https://www.linkedin.com/company/syncspace-project/" className="text-xl">
      <FaLinkedin />
      </Link>
      </div>
      

      
    </div>
  );
}
