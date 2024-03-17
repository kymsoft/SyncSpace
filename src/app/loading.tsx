import { Loader } from "lucide-react";

export default function Loading(){
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Loader className="h-20 w-20 animate-spin text-[#4942E4]" />
        </div>
    )
}