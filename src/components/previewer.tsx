import type { RootState } from "../app/store";
import { useSelector } from "react-redux";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

function Previewer(){

    const text = useSelector((state: RootState) => state.previewer.text)
    return(
        <div>
            <div className="textAreaTitle">
                Previewer
            </div>

            <div className="previewer" id="previewer">
                <Markdown remarkPlugins={[remarkBreaks]}>
                    {text}
                </Markdown>
            </div>
        </div>
    )

}

export default Previewer;