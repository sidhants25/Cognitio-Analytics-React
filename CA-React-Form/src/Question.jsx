function Question(props) {
    const { title, inputType, mySvg} = props;
  
    return (
      
    <div className="form-group" >
                <div className="file-icons">
                    <label htmlFor="name">{title}</label>
                   <div className = "icon"> {mySvg} </div>
                </div>
                <div className = "wrapper" >  <input type={inputType} className="text" id="name" name="name" required /> </div>
               
            </div>
    );
  };


export default Question;