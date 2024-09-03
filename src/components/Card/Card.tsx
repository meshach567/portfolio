import React from "react";
import "./Card.css";

interface CardProps {
  emoji: string;
  heading: string;
  detail: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: color || "transparent" }}>
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
