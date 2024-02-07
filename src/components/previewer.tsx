import type { RootState } from "../app/store";
import { useSelector } from "react-redux";
import Markdown from "react-markdown";

function Previewer(){

    const text = useSelector((state: RootState) => state.previewer.text)
    return(
        <div>
            <Markdown>
                {text}
            </Markdown>
        </div>
    )

}

export default Previewer;