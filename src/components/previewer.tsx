import type { RootState } from "../app/store";
import { useSelector } from "react-redux";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

function Previewer(){

    const text = useSelector((state: RootState) => state.previewer.text)
    return(
        <div className="previewer">
            <Markdown remarkPlugins={[remarkBreaks]}>
                {text}
            </Markdown>
        </div>
    )

}

export default Previewer;