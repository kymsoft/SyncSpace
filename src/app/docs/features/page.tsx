import Collaboration from "./collaboration/page";
import CreateSpace from "./create-space/page";
import Customizer from "./customizable-workspace/page";
import DocsManager from "./docs-manager/page";
import Productivity from "./productivity/page";
import Security from "./security/page";

export default function Features(){
    return(
        <div>
            Featues
            <Security/>
            <Productivity/>
            <Customizer/>
            <DocsManager/>
            <CreateSpace/>
            <Collaboration/>

        </div>
    )
}