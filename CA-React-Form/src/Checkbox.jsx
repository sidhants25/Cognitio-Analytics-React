function Checkbox(props) {
    const { title, sentence, labels, mySvg } = props;
  
    return (
      <div className="form-group">
        <div className="file-icons">
          <label htmlFor="name">{title}</label>
          <div className="icon">{mySvg}</div>
        </div>
        <p>{sentence}</p>
        <div className="wrapper-checkbox">
          {labels.map((label, index) => (
            <label key={index} className="checkbox-label">
              <input type="checkbox" id={`checkbox-${index}`} name={`checkbox-${index}`} required />
              {label}
            </label>
          ))}
        </div>
      </div>
    );
  }
  
  export default Checkbox;
  