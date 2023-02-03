import React from "react";
import { useState } from "react";
import "./style.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import axios from "axios";

export default function FileUpload() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("No selected file");
  
  const handleFileChange = (event) => {
  
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };



  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file)
    const responce = await axios.post(
        "http://localhost:5000/speech/addSpeech",
        formData
      );
     
    console.log(responce)
  };

 

  // console.log("fileBuffer", fileBuffer);

  return (
    <main>
      <div className="wrapper">
        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept=".txt"
            id="input-field"
            className="input-field"
            hidden
            onChange={handleFileChange}
          />
          {file ? (
            <img src={file} width={60} height={60} alt={fileName} />
          ) : (
            <div className="uploadingIcon">
              <MdCloudUpload
                className="input-field"
                color="#1475cf"
                size={60}
              />
              <p className="input-field">Choose Your Text File</p>
            </div>
          )}
        </form>
        <section className="uploaded-row">
          <AiFillFileImage color="#1475cf" />
          <span>
            {fileName}
            <MdDelete
              className="deleteIcon"
              onClick={() => {
                setFileName("No Selected File");
                setFile(null);
              }}
            />
          </span>
        </section>
        {file && (
          <div className="btnDiv">
            <button className="btn" onClick={submitData}>
              Submit
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
