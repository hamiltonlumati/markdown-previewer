import type { RootState } from "../app/store";
import { useSelector } from "react-redux";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkBehead from "remark-behead";

function Previewer(){

    const text = useSelector((state: RootState) => state.previewer.text)
    return(
        <div>
            <Markdown remarkPlugins={[remarkBreaks, remarkBehead]}>
                {text}
            </Markdown>
        </div>
    )

}

export default Previewer;