function TextArea(props) {
    const { title, sentence, mySvg} = props;
  
    return (
      
    <div className="form-group" >
                <div className="file-icons">
                    <label htmlFor="name">{title}</label>
                   <div className = "icon"> {mySvg} </div>
                </div>
                <p> {sentence} </p>
                <div className = "wrapper-ta" >  <textarea  id="name" name="name" required /> </div>
               
            </div>
    );
  };


export default TextArea;