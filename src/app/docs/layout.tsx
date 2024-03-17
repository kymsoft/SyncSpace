import { Metadata } from "next";
import BackButton from "../dashboard/_components/back-button";
import { SubNavigation } from "../dashboard/_components/sub-nav";
import { SideNavigation } from "./sidebar";

export const metadata: Metadata = {
  title: {
    absolute: "Docs | SyncSpace",
  },
  description: "Final Year Project",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center">
        <SubNavigation />
      </div>

      <div className="w-full m-5">
        <div className="flex">
          <div className="">
            <SideNavigation/>
          </div>
          <div>
           <BackButton/>
          </div>
          <div>
          {children}
          </div>
        </div>
        </div>
    </div>
  );
}
