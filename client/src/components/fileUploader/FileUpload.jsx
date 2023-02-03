import React from "react";
import { useState } from "react";
import "./style.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

export default function FileUpload() {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState("No selected file");

  function getTextFile() {
    console.log("adfadf")
  
  }

  console.log("file",file)
  console.log("fileName",fileName)

  return (
    <main>
      <div className="wrapper">
      <form 
      onClick={() => document.querySelector(".input-field").click()}
      // onClick={getTextFile}
      >
        <input
          type="file"
          accept=".txt"
          id="input-field"
          className="input-field"
          hidden
          onClick={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setFile(files[0]);
            }
          }}
        />
        {file ? (
          <img src={file} width={60} height={60} alt={fileName} />
        ) : (
          <div className="uploadingIcon">
            <MdCloudUpload className="input-field" color="#1475cf" size={60} />
            <p className="input-field">Choose Your Text File</p>
          </div>
        )}
      </form>
      <section className="uploaded-row">
        <AiFillFileImage color="#1475cf" />
        <span>
          {fileName}
          <MdDelete
          onClick={() => {
            setFileName("No Selected File")
            setFile(null)
          }}
          />
        </span>
      </section>
      </div>
    </main>
  );
}
