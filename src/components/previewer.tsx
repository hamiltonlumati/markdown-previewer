import type { RootState } from "../app/store";
import { useSelector } from "react-redux";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

function Previewer(){

    const text = useSelector((state: RootState) => state.previewer.text)
    return(
        <div>
            <div className="textAreaTitle">
                Previewer
            </div>

            <div className="previewer" id="previewer">
                <Markdown remarkPlugins={[remarkBreaks, remarkGfm]}>
                    {text}
                </Markdown>
            </div>
            <p id="author">By Hamilton Lumati</p>
        </div>
    )

}

export default Previewer;