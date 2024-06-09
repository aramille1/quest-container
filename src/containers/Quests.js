import React, { useEffect, useState } from "react";
import QuestList from "../components/QuestList/QuestList";
import api from "../services/api";

const Quests = () => {
  const [quests, setQuests] = useState([]);
  useEffect(() => {
    api
      .getQuests()
      .then(setQuests)
      .catch((error) => console.error("Error fetching quests:", error));
  }, []);
  return <QuestList quests={quests} />;
};

export default Quests;
