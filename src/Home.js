import React from 'react';
import './Home.css';
import Product from './Product';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel className="home__carousel" >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <div className="home__row">
          <Product
            id="12312312"
            title="Sapiens: A Brief History of Humankind"
            price={15.31}
            image="https://libris.to/media/jacket/05073384_sapiens.jpg"
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
          <Product
            id="325442"
            title="Apple MacBook Air 13.3 &quot; with Retina Display, 1.2GHz Quad-Core Intel Core i7, 16GB Memory, 512GB SSD, Space Gray (Early 2020)"
            price={890.95}
            image="https://images-na.ssl-images-amazon.com/images/I/61wLbRLshAL._AC_SL1200_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
