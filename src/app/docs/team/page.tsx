"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon, WhatsappIcon } from "next-share";
import Image from "next/image";
import Link from "next/link";


export default function Team(){
    return(
        <div className="mt-30">
        <h1 className="text-center my-5">Team</h1>
        <div className="text-center w-full justify-center items-center flex">
          <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-2 p-3">
            <Card className="w-[350px] bg-secondary mr-2">
              <CardHeader>
                <CardTitle>
                    <div className="w-full flex justify-center items-center">
                        <Image 
                          src="/assets/profile-1.jpg"
                          alt="profile image"
                          height={150}
                          width={150}
                          className="rounded-full "
                        />
                    </div>
                </CardTitle>
        
              </CardHeader>
              <CardContent>
              Ifeanyichukwu Kemdinachi Lyonnet
              <CardDescription>Project Lead</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between ">
                <Link href="">
                <WhatsappIcon className="rounded-full h-10 w-10"/>
                </Link>
                <Link href="">
                <LinkedinIcon className="rounded-full h-10 w-10"/>
                </Link>
                <Link href="">
                <InstagramIcon className="rounded-full h-10 w-10"/>
                </Link>
                
              </CardFooter>
            </Card>
            <Card className="w-[350px] bg-secondary mr-2">
              <CardHeader>
                <CardTitle>
                    <div className="w-full flex justify-center items-center">
                        <Image 
                          src="/assets/giphy.gif"
                          alt="profile image"
                          height={150}
                          width={150}
                          className="rounded-full "
                        />
                    </div>
                </CardTitle>
        
              </CardHeader>
              <CardContent>
              Olu-Daniels Ilerioluwa Victor
              <CardDescription>Developer</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="">
                <WhatsappIcon className="rounded-full h-10 w-10"/>
                </Link>
                <Link href="">
                <LinkedinIcon className="rounded-full h-10 w-10"/>
                </Link>
                <Link href="">
                <InstagramIcon className="rounded-full h-10 w-10"/>
                </Link>
                
              </CardFooter>
            </Card>
            <Card className="w-[350px] bg-secondary mr-2">
              <CardHeader>
                <CardTitle>
                    <div className="w-full flex justify-center items-center">
                        <Image 
                          src="/assets/giphy.gif"
                          alt="profile image"
                          height={150}
                          width={150}
                          className="rounded-full "
                        />
                    </div>
                </CardTitle>
        
              </CardHeader>
              <CardContent>
              Ajuebor Chukwuemeke Precious
              <CardDescription>Developer</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="">
                <WhatsappIcon className="rounded-full h-10 w-10"/>
                </Link>
                <Link href="">
                <LinkedinIcon className="rounded-full h-10 w-10"/>
                </Link>
                <Link href="">
                <InstagramIcon className="rounded-full h-10 w-10"/>
                </Link>
                
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    )
}