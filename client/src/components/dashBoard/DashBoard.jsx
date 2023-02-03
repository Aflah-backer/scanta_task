import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css";

function DashBoard() {
  const nouns = 10;
  const verbs = 70;
  const adjectves = 50;
  const adverbs = 40;

  return (
    <div className="dashBoardContainer">
      <div className="wrapper">
        <div className="box">
          <div className="card">
            <CircularProgressbar  value={nouns} text={`${nouns}%`} />
            <div className="text"><span>NOUN</span></div>
          </div>
        </div>
        <div className="box">
          <div className="card">
            <CircularProgressbar value={verbs} text={`${verbs}%`} />
            <div className="text"><span>VERB</span></div>
          </div>
        </div>
        <div className="box">
          <div className="card">
            <CircularProgressbar value={adjectves} text={`${adjectves}%`} />
            <div className="text"><span>ADJECTIVE</span></div>
          </div>
        </div>
        <div className="box">
          <div className="card">
            <CircularProgressbar value={adverbs} text={`${adverbs}%`} />
            <div className="text"><span>ADVERB</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
