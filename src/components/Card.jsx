import React from "react";
import "../card.css";
import { recipeItem, Posts } from "../UsersData";
export default function Card() {
  return (
    <>
      <div className="btncontainer">
        <button className="switchbtn">Switch view</button>
      </div>
      <div className="cards-container">
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">{recipeItem.title}</h5>
              </div>
            </div>

            <img className="card-image" src={Posts[0].photo} alt="Logo" />
            <div>
              <button className="connect-btn">Lets connect</button>
              <button className="info-btn">More info</button>
            </div>
            <br />
            <div className="card-text">{recipeItem.description}</div>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">{recipeItem.title}</h5>
              </div>
            </div>

            <img className="card-image" src={Posts[0].photo} alt="Logo" />
            <div>
              <button className="connect-btn">Lets connect</button>
              <button className="info-btn">More info</button>
            </div>
            <br />
            <div className="card-text">{recipeItem.description}</div>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">{recipeItem.title}</h5>
              </div>
            </div>

            <img className="card-image" src={Posts[0].photo} alt="Logo" />
            <div>
              <button className="connect-btn">Lets connect</button>
              <button className="info-btn">More info</button>
            </div>
            <br />
            <div className="card-text">{recipeItem.description}</div>
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">{recipeItem.title}</h5>
              </div>
            </div>

            <img className="card-image" src={Posts[0].photo} alt="Logo" />
            <div>
              <button className="connect-btn">Lets connect</button>
              <button className="info-btn">More info</button>
            </div>
            <br />
            <div className="card-text">{recipeItem.description}</div>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">{recipeItem.title}</h5>
              </div>
            </div>

            <img className="card-image" src={Posts[0].photo} alt="Logo" />
            <div>
              <button className="connect-btn">Lets connect</button>
              <button className="info-btn">More info</button>
            </div>
            <br />
            <div className="card-text">{recipeItem.description}</div>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">{recipeItem.title}</h5>
              </div>
            </div>

            <img className="card-image" src={Posts[0].photo} alt="Logo" />
            <div>
              <button className="connect-btn">Lets connect</button>
              <button className="info-btn">More info</button>
            </div>
            <br />
            <div className="card-text">{recipeItem.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
