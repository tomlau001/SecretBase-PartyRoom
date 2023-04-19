import React from "react";
import dice from "../photos/dicecup.jpg";
import mahjong from "../photos/mahjong.jpg";
import boardgame from "../photos/boardgame.jpg";
import beverage from "../photos/beverage.jpg";
import poker from "../photos/poker.jpg";
import hifi from "../photos/hifi.jpg";
import wifi from "../photos/wifi.jpg";
import gameboy from "../photos/gameboy.jpg";
import tv from "../photos/tv.jpg";

const Services = () => {
  return (
    <section id="services" className="services">
        <h2>Services</h2>
        <p>
          Enjoy a multitude of amenities in our versatile party venue.
        </p>
      <div className="services-content">
        <div className="img-container">
          <div className="overlay"> 
            <img src={dice} alt="" />
            <div className="text-overlay">
              <p >Dice Cup</p>
            </div>
          </div>
          <div className="overlay"> 
            <img src={tv} alt="" />
            <div className="text-overlay">
              <p >55-Inch 4K TV</p>
            </div>
          </div>
          <div className="overlay"> 
            <img src={poker} alt="" />
            <div className="text-overlay">
              <p >Poker </p>
            </div>
          </div>
          <div className="overlay"> 
            <img src={hifi} alt="" />
            <div className="text-overlay">
              <p >High-quality audio equipment</p>
            </div>
          </div>
          <div className="overlay"> 
            <img src={wifi} alt="" />
            <div className="text-overlay">
              <p >Free WI-FI </p>
            </div>
          </div>
          <div className="overlay"> 
            <img src={beverage} alt="" />
            <div className="text-overlay">
              <p >Various Types of Beverage</p>
            </div>
          </div>
          <div className="overlay"> 
            <img src={gameboy} alt="" />
            <div className="text-overlay">
              <p >Nintendo Switch</p>
            </div>
          </div>
          <div className="overlay"> 
            <img src={mahjong} alt="" />
            <div className="text-overlay">
              <p >MahJong</p>
            </div>
          </div>
          <div className="overlay"> 
            <img src={boardgame} alt="" />
            <div className="text-overlay">
              <p >Board Games</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
