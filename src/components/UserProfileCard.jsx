import React from "react";
import PropTypes from "prop-types";
import "./CSS/UserProfileCard.css";
import { cardConfig } from "./CSS/cardConfig";

const UserProfileCard = ({
  profilePic,
  userName,
  postTitle,
  shortDescription,
  description,
  backgroundImage,
  cardId,
}) => {

  console.log("cardConfig:", cardConfig);
  console.log("cardId:", cardId);


  if(!cardConfig[cardId]){
    console.error(`cardConfig does not have a property with key ${cardId}`);
    return null;
  }

  const {backgroundColor, h2Color, h3Color, h4Color, pColor} = cardConfig[cardId];

  const cardStyle = {
    backgroundColor: backgroundColor || "white",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundSize: "auto",
    backgroundPosition: "top ",
    backgroundRepeat: 'no-repeat',
    backgroundPositionX : '170px', 
  };
  return (
    <div className={`user-profile-card text-{textColor}`}>
      <div className="card" style={cardStyle }>
        <div className="profile-header">
          <img
            src={profilePic}
            alt={`${userName}'s profile`}
            className="profile-pic"
          />
          <div className="sub-head">
            <h2 style={{color :h2Color}}>{userName}</h2>
            <h3 style={{color :h3Color}}>{postTitle}</h3>
          </div>
        </div>
        <h4 style={{color :h4Color}}>{shortDescription}</h4>
        <p style={{color :pColor}}>{description}</p>
      </div>
    </div>
  );
};

UserProfileCard.propTypes = {
  profilePic: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  cardId: PropTypes.string.isRequired,
};

export default UserProfileCard;
