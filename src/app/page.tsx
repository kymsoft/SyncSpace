"use client"

import Image from "next/image";
import Link from "next/link";
import { SubNavigation } from "./dashboard/_components/sub-nav";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";



export default function LandingPage() {

  useEffect(() => {
    const theme = localStorage.getItem('theme');
  
  }, []);
  const theme = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
  
  return (
    <div className="">
      <div className="w-full flex justify-center items-center">
        <SubNavigation />
      </div>

      <div className="flex w-full mt-20 mb-20 flex-col md:flex-row items-center">
        <div className="my-10 w-full md:text-left md:w-1/2 text-center flex items-center justify-center">
          <div className="text-center m-10">
            <p className="text-2xl font-bold">
              Get the best of collaboration experience with{" "}
              <span className="text-[#4942E4] animate-pulse">SYNC</span>
              <span className="text-[#9400FF] animate-pulse">SPACE</span>
            </p>
            <p className="text-lg mt-3 ">
              Share and manage your documents seamlessly with the best
              collaborative platform in the 21st Century
            </p>
            <div className="my-7 ">
              <Link
                href="/dashboard/files"
                className=" rounded-md bg-[#9400FF] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#551A80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden w-full flex items-center justify-center md:block w-full md:w-1/2">
          <Image src="/assets/doc.png" alt="Docs" height={600} width={600} />
        </div>
      </div>
      <div className="mt-30">
        <h1 className="text-center my-5">Features</h1>
        <div className="text-center w-full justify-center items-center flex">
          <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-2 p-3">
            <Card className="w-[350px] bg-secondary mr-2">
              <CardHeader>
                <div className="flex w-full justify-center items-center">
                <Image 
                   src="/assets/file.png"
                   alt="file"
                   height={40}
                   width={40}
                   className="text-center"
                />
                </div>
                
                <CardTitle>Manage Documents</CardTitle>
                <CardDescription>
                  Upload and share local document 
                </CardDescription>
              </CardHeader>
              <CardContent>
              SyncSpace provides a reliable document management system that stores and manages your various important documents. 
              </CardContent>
              <CardFooter className="flex justify-between">
                <div></div>
                <Link href="/docs/features" className="text-right" >See More</Link>
              </CardFooter>
            </Card>
            <Card className="w-[350px] bg-secondary mr-2">
              <CardHeader>
              <div className="flex w-full justify-center items-center">
                <Image 
                   src="/assets/collab.png"
                   alt="collab"
                   height={40}
                   width={40}
                   className="text-center"
                />
                </div>
                <CardTitle>Collaboration made easy</CardTitle>
                <CardDescription>
                  Increase project productivity in one click
                </CardDescription>
              </CardHeader>
              <CardContent>
              You can now share your documents to fellow collegues and peers smoothly and seamlessly without hurdles. Workspace customization
              </CardContent>
              <CardFooter className="flex justify-between">
              <div></div>
                <Link href="/docs/features" className="text-right" >See More</Link>
              </CardFooter>
            </Card>
            <Card className="w-[350px] bg-secondary">
              <CardHeader>
              <div className="flex w-full justify-center items-center">
                <Image 
                   src="/assets/padlock.png"
                   alt="lock"
                   height={40}
                   width={40}
                   className="text-center"
                />
                </div>
                <CardTitle>Document Security</CardTitle>
                <CardDescription>
                 Clerk Authentication for Security
                </CardDescription>
              </CardHeader>
              <CardContent>
              Secure your documents from malicious eyes with SyncSpace today. In-built Clerk based Authentication enabled, the safest auth platform.{""}
              </CardContent>
              <CardFooter className="flex justify-between">
              <div></div>
                <Link href="/docs/features" className="text-right" >See More</Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <div className="mx-3 mt-30">
        <div className="mt-30">
          {/* <div className="blur-sm absolute my-3 flex justify-center items-center w-full">
            <Image
              src="/assets/collab.png"
              alt="Collaboration"
              height={100}
              width={100}
            />
          </div> */}
          <div className=" p-3 z-20 mx-3 mt-30">
            <div className="p-10">
              <p className="text-center">Workspace</p>
            </div>
            <div className=" w-full justify-center items-center flex">
              
                <Image
                src="/assets/workspace-dark.png"
                alt="Workspace"
                width={1000}
                height={1000}
                className="border rounded-lg"
              />
               
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
