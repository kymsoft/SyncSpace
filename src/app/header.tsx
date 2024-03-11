'use client'


import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./globals.css"

export function Header() {
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

useEffect(() => {
  const theme = localStorage.getItem('theme');
  // rest of your code
}, []);
const theme = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;



  return (
    <div className={
      header
        ? `${theme ==="dark" ? "bg-[#0F1723]" : "bg-[#f3f3f3]"} p-4 fixed w-[100%] border-b-20 border-black shadow-2xl z-10`
        : "bg-[transparent] p-4"
    }>
      <div className="items-center container mx-auto justify-between flex">
        <Link href="/" className="flex gap-2 items-center text-xl">
        <Image
              src="/assets/sync.png"
              alt="SyncSpace Logo"
              width={25}
              height={25}
              className=""
            />
          SyncSpace
        </Link>

        <SignedIn>
          
            <Link href="/dashboard/files"><Button variant={"outline"}>Your Files</Button></Link>
          
        </SignedIn>

        <div className="flex gap-2">
          <SignedIn>
          <Button className=" pb-1 bg-[#BADAF7] hover:bg-[#f9f9f9]"> <OrganizationSwitcher>Create Space</OrganizationSwitcher> </Button>
          </SignedIn>
         
         
          <div className="user">
          <UserButton />
          </div>
          
          <SignedOut>
            <SignInButton>
            <Button className="bg-[#4942E4] rounded-lg hover:bg-[#0C0960] text-white">
              Sign In
            </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

