import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Work } from '../types/microcms';

interface Props {
  works: Work[];
}

const HeroSlider: React.FC<Props> = ({ works }) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {works.map((work) => (
          <SwiperSlide key={work.id}>
            <img src={work.eyecatch?.url} alt={work.title} className="w-full" />
            <p className="text-right text-sm mt-2">{work.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
