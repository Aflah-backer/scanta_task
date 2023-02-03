import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import PulseLoader from "react-spinners/PulseLoader";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

function DashBoard({ response}) {
  const [persentage, setPersentage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (response.data) {
      setLoading(false);
    }
    setPersentage(response.data);
  }, [response.data]);

  const nouns = Math.floor(persentage?.nounsPercentage);
  const verbs = Math.floor(persentage?.verbsPercentage);
  const adjectves = Math.floor(persentage?.adjectivesPercentage);
  const adverbs = Math.floor(persentage?.adverbsPercentage);

  if(loading){
    return(
        <div className="load">
          <PulseLoader />
        </div>
    )
  }

  return (
    // <>
    <div className="dashboardWrapper">
        <div className="dashBoardContainer">
          <div className="wrapper">
            <div className="box">
              <div className="card">
                <CircularProgressbar  value={nouns} text={`${nouns}%`} />
                <div className="text">
                  <span>NOUN</span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <CircularProgressbar value={verbs} text={`${verbs}%`} />
                <div className="text">
                  <span>VERB</span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <CircularProgressbar value={adjectves} text={`${adjectves}%`} />
                <div className="text">
                  <span>ADJECTIVE</span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="card">
                <CircularProgressbar value={adverbs} text={`${adverbs}%`} />
                <div className="text">
                  <span>ADVERB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="btnForUploadNew">
          <button className="uploadNew" onClick={() => {
                   
                  }}>upload new File</button>
      </div>
    </div>
    // </>
  );
}

export default DashBoard;
