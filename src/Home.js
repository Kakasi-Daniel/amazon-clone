import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12312312"
            title="Sapiens: A Brief History of Humankind"
            price={15.31}
            image="https://m.media-amazon.com/images/I/51XyWW6zEXL.jpg"
            rating={5}
          />
          <Product
            id="756312"
            title="Samsung MS14K6000AS 1.4 cu. ft. Countertop Microwave Oven with Sensor and Ceramic Enamel Interior, Stainless Steel"
            price={129.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71U4jX1C7OL._AC_SL1500_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="4345756"
            title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, Xbox One Controller(Adapter Not Included)"
            price={38.95}
            image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            id="48452656"
            title="Rammstein Flag"
            price={20.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61JdrF%2BdiRL._AC_SL1001_.jpg"
            rating={5}
          />
          <Product
            id="22988943"
            title="Hail To The King"
            price={6.23}
            image="https://images-na.ssl-images-amazon.com/images/I/81EbPydBuVL._SL1425_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="325442"
            title="BMW Genuine Roundel Cap - Black"
            price={15.49}
            image="https://images-na.ssl-images-amazon.com/images/I/61TrwO9pW%2BL._AC_SL1100_.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
