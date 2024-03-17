"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function SideNavigation() {
  const pathname = usePathname();

  return (
    <div className="md:w-60 hidden md:block flex flex-col gap-4 p-2">
      <Link href="/dashboard/files">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/files"),
          })}
        >
          Introduction
        </Button>
      </Link>

      <Link href="/dashboard/favorites">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/favorites"),
          })}
        >
          Features
        </Button>
      </Link>

      <Link href="/dashboard/trash">
        <Button
          variant={"link"}
          className={clsx("flex gap-2", {
            "text-blue-500": pathname.includes("/dashboard/trash"),
          })}
        >
          FAQ
        </Button>
      </Link>
    </div>
  );
}
