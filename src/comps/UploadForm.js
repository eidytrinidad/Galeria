import React, { useState } from "react";
import useStorage from "../hooks/useStorage";
import ProgressBar from "./ProgressBar";

function UploadForm() {
  const [file, setFile] = useState(null);

  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  

  const changHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('')
    } else {
      setFile(null);
      setError("Please select a valid image file (png or jpg)");
    }
  };

  return (
    <form>
      <input type="file" onChange={changHandler} />
      <div className="ouput">
          {error && <div className='error'>{error}</div>}
          {file && <div className=''>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
    </form>
  );
}

export default UploadForm;
