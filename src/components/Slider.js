import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TiSocialTwitterCircular, TiSocialPinterestCircular, TiSocialFacebookCircular } from 'react-icons/ti';
import 'swiper/css/navigation';

function Slider() {
  const { cars } = useSelector((state) => state.cars);
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div className="slider-title">
        <h2 className="vehicle-header">Latest Models</h2>
        <p className="vehicle-subheader">Please select a model</p>
        <p className="dot-header">..............................</p>
      </div>

      <div style={{ width: '90%', position: 'relative' }}>
        <div className="slider-btns">
          <div className="swiper-prev">
            <IoIosArrowBack />
          </div>
          <div className="swiper-next">
            <IoIosArrowForward />
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id} className="flex flex-col">
              <Link to={`/details/${car.id}`} className="wrapper">
                <div className="slide-container">
                  <img className="car" src={car.photo} alt="car" />
                </div>
                <div className="car-info">
                  <h3 className="car-title">{car.name}</h3>
                  <p className="dot">..............................</p>
                  <p className="car-description">{car.description}</p>
                  <div className="slide-socials">
                    <TiSocialFacebookCircular fill="thistle" className="icon" />
                    <TiSocialTwitterCircular fill="thistle" className="icon" />
                    <TiSocialPinterestCircular fill="thistle" className="icon" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
