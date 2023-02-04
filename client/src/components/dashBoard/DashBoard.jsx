import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import PulseLoader from "react-spinners/PulseLoader";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

function DashBoard({ response, reset }) {
  const [persentage, setPersentage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (response.data) {
      setLoading(false);
    }
    setPersentage(response.data);
  }, [response.data]);

  const nouns = persentage?.nounsPercentage;
  const verbs = persentage?.verbsPercentage;
  const adjectves = persentage?.adjectivesPercentage;
  const adverbs = persentage?.adverbsPercentage;

  if (loading) {
    return (
      <div className="load">
        <PulseLoader />
      </div>
    );
  }

  return (
    // <>
    <div className="dashboardWrapper">
      <div className="dashBoardContainer">
        <div className="wrapper">
          <div className="box">
            <div className="card">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#a445b2",
                  pathColor: "#a445b2",
                })}
                value={nouns}
                text={`${nouns}%`}
              />
              <div className="text">
                <span>NOUN</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="card">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#a445b2",
                  pathColor: "#a445b2",
                })}
                value={verbs}
                text={`${verbs}%`}
              />
              <div className="text">
                <span>VERB</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="card">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#a445b2",
                  pathColor: "#a445b2",
                })}
                value={adjectves}
                text={`${adjectves}%`}
              />
              <div className="text">
                <span>ADJECTIVE</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="card">
              <CircularProgressbar
                styles={buildStyles({
                  textColor: "#a445b2",
                  pathColor: "#a445b2",
                })}
                value={adverbs}
                text={`${adverbs}%`}
              />
              <div className="text">
                <span>ADVERB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btnForUploadNew">
        <button className="uploadNew" onClick={reset}>
          upload new File
        </button>
      </div>
    </div>
    // </>
  );
}

export default DashBoard;
