import { preview } from "../features/previewer/previewerSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";



function TextArea(){
    const dispatch = useDispatch();
    const text = useSelector((state: RootState) => state.previewer.text)



    return(<div>
            <div className="textAreaTitle">
                Text Input Field
            </div>
            <textarea 
                className= "border-2 rounded mx-2 w-1/2 h-36" 
                id= "editor"
                onChange={() => dispatch(preview())}
            >
                {text}
            </textarea>
        </div>
    )
}

export default TextArea;