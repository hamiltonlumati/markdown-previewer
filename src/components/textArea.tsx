import { preview } from "../features/previewer/previewerSlice";
import { useDispatch } from "react-redux";


function TextArea(){
    const dispatch = useDispatch();
    return(<div>
            <div className="textAreaTitle">
                Area Title
            </div>
            <textarea 
                className= "border-2 rounded mx-2 w-1/2 h-36" 
                id= "textArea"
                onChange={() => dispatch(preview())}
            />
        </div>
    )
}

export default TextArea;