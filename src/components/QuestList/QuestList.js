import React from "react";
import Quest from "../Quest/Quest";
import "./QuestList.scss";
import InfoIcon from "../../assets/images/info.svg"

const QuestList = ({ quests }) => (
  <div className="quest__list">
    <div className="quest__list__header">
      <h2 className="quests__list__header-title">Quests</h2>
      <span className="quest__list__header-icon">
        <img src={InfoIcon} alt="info icon" />
      </span>
    </div>
    {quests.map((quest) => (
      <Quest key={quest.id} {...quest} />
    ))}
  </div>
);

export default QuestList;
