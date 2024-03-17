import { Doc, Id } from "../../../../convex/_generated/dataModel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ExternalLink,
  FileIcon,
  FilePenLine,
  MoreVertical,
  Share,
  StarHalf,
  StarIcon,
  TrashIcon,
  UndoIcon,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useToast } from "@/components/ui/use-toast";
import { Protect } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";


export function FileCardActions({
  file,
  isFavorited,
}: {
  file: Doc<"files">;
  isFavorited: boolean;
}) {
  const deleteFile = useMutation(api.files.deleteFile);
  const restoreFile = useMutation(api.files.restoreFile);
  const toggleFavorite = useMutation(api.files.toggleFavorite);
  const { toast } = useToast();
  const me = useQuery(api.users.getMe);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <>
      <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will mark the file for our deletion process. Files are
              deleted periodically
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await deleteFile({
                  fileId: file._id,
                });
                toast({
                  variant: "default",
                  title: "File marked for deletion",
                  description: "Your file will be deleted soon",
                });
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              window.open(getFileUrl(file.fileId), "_blank");
            }}
            className="flex gap-1 items-center cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" /> Open
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {
              window.open(getFileUrl(file.fileId), "_blank");
            }}
            className="flex gap-1 items-center cursor-pointer"
          >
            <FileIcon className="w-4 h-4" /> Download
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {
              toggleFavorite({
                fileId: file._id,
              });
            }}
            className="flex gap-1 items-center cursor-pointer"
          >
            {isFavorited ? (
              <div className="flex gap-1 items-center">
                <StarIcon className="w-4 h-4" /> Unfavorite
              </div>
            ) : (
              <div className="flex gap-1 items-center">
                <StarHalf className="w-4 h-4" /> Favorite
              </div>
            )}
          </DropdownMenuItem>

          <Dialog>
            <DialogTrigger asChild>
              <li className="flex gap-1 items-center cursor-pointer p-2 text-sm rounded-sm hover:bg-secondary">
                <Share className="w-4 h-4" />
                Share
              </li>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader className="w-full">
                <DialogTitle className="text-center">Share Document</DialogTitle>
                <DialogDescription className="text-center">
                  Select Share Media
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-between my-3">
                <WhatsappShareButton
                  url={getFileUrl(file.fileId)}
                  title={"A Syncspace file has been shared to you:"}
                  separator=":: "
                  className="w-10 h-10"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <EmailShareButton
                  url={getFileUrl(file.fileId)}
                  subject={"Syncspace Document"}
                  body="A Syncspace document has been sent to you. Click the link below: "
                  className="w-10 h-10"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <TelegramShareButton
                  url={getFileUrl(file.fileId)}
                  title={
                    "Syncspace Document:"
                  }
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <LinkedinShareButton url={getFileUrl(file.fileId)}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
            </DialogContent>
          </Dialog>

          

          <Protect
            condition={(check) => {
              return (
                check({
                  role: "org:admin",
                }) || file.userId === me?._id
              );
            }}
            fallback={<></>}
          >
            <DropdownMenuItem
            onClick={() => {
              window.open(getFileUrl(file.fileId), "_blank");
            }}
            className="flex gap-1 items-center cursor-pointer"
          >
            <FilePenLine className="w-4 h-4" /> Edit
          </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                if (file.shouldDelete) {
                  restoreFile({
                    fileId: file._id,
                  });
                } else {
                  setIsConfirmOpen(true);
                }
              }}
              className="flex gap-1 items-center cursor-pointer"
            >
              {file.shouldDelete ? (
                <div className="flex gap-1 text-green-600 items-center cursor-pointer">
                  <UndoIcon className="w-4 h-4" /> Restore
                </div>
              ) : (
                <div className="flex gap-1 text-red-600 items-center cursor-pointer">
                  <TrashIcon className="w-4 h-4" /> Delete
                </div>
              )}
            </DropdownMenuItem>
          </Protect>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export function getFileUrl(fileId: Id<"_storage">): string {
  return `${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${fileId}`;
}
