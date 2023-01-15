import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper';

import { girl1, girl2, girl3, girl4 } from '../../assets/models/clothes';

import { Product } from '../index';
import { Container } from '../../globalStyles';

export default function App() {
  return (
    <Container>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={5}
        pagination={{
          clickable: false,
          // dynamicBullets: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '"><img class="pagination-bullet"/></span>'
            );
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Product
            productImg={girl2}
            productTitle='21WN reversible angora cardigan'
            productPrice={120}
            ImgWidth='250px'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg={girl1}
            productTitle='21WN reversible angora cardigan'
            productPrice={120}
            ImgWidth='250px'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg={girl3}
            productTitle='21WN reversible angora cardigan'
            ImgWidth='250px'
            productPrice={120}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            productImg={girl4}
            productTitle='21WN reversible angora cardigan'
            ImgWidth='250px'
            productPrice={120}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}