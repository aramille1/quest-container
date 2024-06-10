import React from "react";
import "./Quest.scss";
import LinkIcon from "../../assets/images/link.svg";
import { questEnum } from "../../utils/helpers";

const Quest = ({ type, contact, company, job, due_date }) => (
  <div className="quest">
    <img
      src={type.includes("contact") ? company?.logo_url : questEnum[type]?.logo}
      className={
        questEnum[type].logo === "" ||
        type.includes("linkedin") ||
        type.includes("email")
          ? "quest__company-logo"
          : `quest__logo quest__logo-${questEnum[type]?.logoColor}`
      }
    />
    <div className="quest__wrapper">
      <h2 className="quest__title">
        {type.includes("linkedin") ||
        type.includes("email") ||
        type.includes("coffee") ||
        type === "add_new_contact"
          ? `${questEnum[type]?.title} ${contact?.first_name} ${contact?.last_name} at ${company?.name}`
          : type === "add_contact" || type === "submit_application"
          ? `${questEnum[type]?.title} ${job?.title} at ${company?.name}`
          : questEnum[type]?.title}
      </h2>
      <p className="quest__desc">
        {type.includes("email")
          ? `${contact?.first_name} ${contact?.last_name} at ${company?.name} to get a conversation started.`
          : type.includes("add_contact")
          ? `You recently saved ${company.name}. The next step is to now save a contact who’s working there to start networking with.`
          : type === "submit_application"
          ? `${questEnum[type].desc} ${due_date
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("/")}`
          : questEnum[type]?.desc}
      </p>
    </div>
    <a href={questEnum[type]?.link} className="quest__link">
      <img src={LinkIcon} alt="link" />
    </a>
  </div>
);

export default Quest;
