import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          //   src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2020/img/Prime/XCM_Manual_ORIGIN_1259690_1329040_TR_tr_pv_launch_hero_banners_tr_tr_3347402_1500x600_1X_tr_TR._CB405452713_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="49538094"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51VHJk-mChL._SX320_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="49538095"
            title="Kenwood kMix Stand Mixer for Banking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51VHJk-mChL._SX320_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="49538096"
            title="Bir Başka Şeker Portakalı"
            price={2.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51VHJk-mChL._SX320_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="49538097"
            title="Portakal Şekeri Rengi"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51VHJk-mChL._SX320_BO1,204,203,200_.jpg"
            rating={1}
          />
          <Product
            id="49538098"
            title="Mandalinamsı portakal şekeri"
            price={10.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51VHJk-mChL._SX320_BO1,204,203,200_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="49538099"
            title="The Lean Startup - Edition 2"
            price={30.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51VHJk-mChL._SX320_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
