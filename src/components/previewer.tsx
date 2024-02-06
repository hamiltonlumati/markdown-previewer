import type { RootState } from "../app/store";
import { useSelector } from "react-redux";

function Previewer(){
    const text = useSelector((state: RootState) => state.previewer.text)

    return(
        <div>
            {text}
        </div>
    )

}

export default Previewer;