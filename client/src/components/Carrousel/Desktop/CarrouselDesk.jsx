import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Container from './Container/Container';
import first from '../../../assets/models/DesktopCarrousel/first.jpg';
import second from '../../../assets/models/DesktopCarrousel/second.jpg';
import third from '../../../assets/models/DesktopCarrousel/third.jpg';
import fourth from '../../../assets/models/DesktopCarrousel/fourth.jpg';
import { Label } from '../../../constants/colors';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';

function swiperConfigDesktop() {
  if (window.innerWidth >= 1900) {
    return 2;
  } else if (window.innerWidth >= 1485) {
    return 1.5;
  } else {
    return 1.3;
  }
}

const CarrouselDesk = () => {
  return (
    <div>
      <>
        <Swiper
          slidesPerView={swiperConfigDesktop()}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={false}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
          scrollbar={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Container
              title='Hello world'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, atque?'
              src={first}
              bg={Label}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Container
              title='Hello world'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, atque?'
              src={second}
              bg={Label}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Container
              title='Hello world'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, atque?'
              src={third}
              bg={Label}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Container
              title='Hello world'
              paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, atque?'
              src={fourth}
              bg={Label}
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default CarrouselDesk;
