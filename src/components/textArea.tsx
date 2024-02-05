

function TextArea(){
    return(
        <form className="">
            <label htmlFor="tetxArea" className="">Text</label>
            <textarea 
                className= "border-2 rounded mx-2 w-1/2 h-36" 
                id= "textArea"
            />
            <button type="submit" className="">
                Submit
            </button>
        </form>
    )
}

export default TextArea;