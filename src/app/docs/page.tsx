import Features from "./features/page";
import Introduction from "./introduction/page";
import Team from "./team/page";



export default function Docs(){
    return(
        <div>
            <Introduction />
            <Features/>
        </div>
    )
}