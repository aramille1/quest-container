import React from "react";
import "./Quest.scss";

const Quest = ({ type, contact, company }) => (
  <div className="quest__wrapper">
    <img
      src={
        company ? company.logo_url : "https://100k-faces.glitch.me/random-image"
      }
      alt={company ? company.name : "image"}
      className="quest__logo"
    />
    <div>
      <h2 className="quest__title">
        Send a LinkedIn invitation to{" "}
        {contact && company
          ? `${contact.first_name} ${contact.last_name}`
          : "[contact name]"}{" "}
        at {contact && company ? company.name : "[Company]"}
      </h2>
      <p className="quest__desc">
        Send an invitation with a tailored message to your new contact. Our AI
        will help you!
      </p>
    </div>
    <a
      href={company ? company.linkedin_url : "www.google.com"}
      className="quest__link"
    >
      <svg
        width="28px"
        height="28px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#004850"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M15 13.5V9M15 9H10.5M15 9L9.00019 14.9999M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="$#004850"
            strokeWidth="0.4800000000000001"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </a>
  </div>
);

export default Quest;
