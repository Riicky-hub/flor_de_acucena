import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles';
import { Pagination } from 'swiper';

import { girl1, girl2, girl3, girl4 } from '../../assets/models/clothes';
// import { bulletOff, bulletOn } from '../../assets/icons';

import { Product } from '../index';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={10}
        pagination={{
          clickable: false,
          dynamicBullets: true,
          // renderBullet: function (index, className) {
          //   return (
          //     '<span class="' +
          //     className +
          //     '"><img class="pagination-bullet"/></span>'
          //   );
          // },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Product
            productImg={girl2}
            productTitle='21WN reversible angora cardigan'
            productPrice={120}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg={girl1}
            productTitle='21WN reversible angora cardigan'
            productPrice={120}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg={girl3}
            productTitle='21WN reversible angora cardigan'
            productPrice={120}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg={girl4}
            productTitle='21WN reversible angora cardigan'
            productPrice={120}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
