import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () =>  (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Enjoy the new flavour" />
        <h1 className="app__header-h1">Your Ultimate Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Sit tellus labortis sed senectus vivamus molestie.
          Condimentum volutpat morbi facilisis quam scelerisque
          sapien. Et,penatibus aliquam amet tellus.
        </p>
        <button type="button" className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcomefood} alt='header img' />
      </div>
    </div>
  );


export default Header;