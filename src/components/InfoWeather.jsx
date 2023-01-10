import React from "react";
import imagen from "../images/LightCloud.png";

const InfoWeather = () => {
  return (
    <div className="d-flex flex-column justify-content-around align-items-center">
      <div class="container d-flex justify-content-around align-items-center text-center text-white">
        <div className="contenedor">
          <div class="row justify-content-center">
            <div class="col-6 col-xl-2" style={{ width: 120 }}>
              <div className="box">
                <p className="mt-3">Tomorrow</p>
                <img className="tomorrow" src={imagen} alt="" />
                <div className="d-flex justify-content-center mt-3">
                  <p className="max">16 °C - 13 °C</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-xl-2" style={{ width: 120 }}>
              <div className="box">
                <p className="mt-3">Tomorrow</p>
                <img className="tomorrow" src={imagen} alt="" />
                <div className="d-flex justify-content-evenly mt-3">
                  <p className="max">16 °C - 13 °C</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-xl-2" style={{ width: 120 }}>
              <div className="box">
                <p className="mt-3">Tomorrow</p>
                <img className="tomorrow" src={imagen} alt="" />
                <div className="d-flex justify-content-evenly mt-3">
                  <p className="max">16 °C - 13 °C</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-xl-2" style={{ width: 120 }}>
              <div className="box">
                <p className="mt-3">Tomorrow</p>
                <img className="tomorrow" src={imagen} alt="" />
                <div className="d-flex justify-content-evenly mt-3">
                  <p className="max">16 °C - 13 °C</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-xl-2" style={{ width: 120 }}>
              <div className="box">
                <p className="mt-3">Tomorrow</p>
                <img className="tomorrow" src={imagen} alt="" />
                <div className="d-flex justify-content-center mt-3">
                  <p className="max">16 °C - 13 °C</p>
                </div>
              </div>
            </div>
            <div class="col-6"></div>
          </div>
        </div>
      </div>
      <div class="container d-flex justify-content-center align-items-center flex-column text-center text-white">
        <p className="mt-4 fs-1">Today’s Hightlights </p>
        <div className="contenedor1">
          <div class="row justify-content-center">
            <div class="col-12 col-xl-6" style={{ width: 180 }}>
              <div className="box1">
                <p>Wins Status</p>
                <p className="millas">7mph</p>
                <p>Play</p>
              </div>
            </div>
            <div class="col-12 col-xl-6" style={{ width: 180 }}>
              <div className="box1">
                <p>Wins Status</p>
                <p className="millas">7mph</p>
                <p>Play</p>
              </div>
            </div>
            <div class="col-12 col-xl-6" style={{ width: 180 }}>
              <div className="box1">
                <p>Wins Status</p>
                <p className="millas">7mph</p>
                <p>Play</p>
              </div>
            </div>
            <div class="col-12 col-xl-6" style={{ width: 180 }}>
              <div className="box1">
                <p>Wins Status</p>
                <p className="millas">7mph</p>
                <p>Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoWeather;
