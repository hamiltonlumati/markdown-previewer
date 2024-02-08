import { preview } from "../features/previewer/previewerSlice";
import { useDispatch } from "react-redux";


function TextArea(){
    const dispatch = useDispatch();
    return(
        <form className="">
            <label htmlFor="tetxArea" className="">Text</label>
            <textarea 
                className= "border-2 rounded mx-2 w-1/2 h-36" 
                id= "textArea"
                onChange={() => dispatch(preview())}
            />
        </form>
    )
}

export default TextArea;