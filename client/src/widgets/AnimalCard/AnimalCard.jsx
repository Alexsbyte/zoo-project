import React from 'react'
import "bulma/css/bulma.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function AnimalCard({animal}) {
  console.log(animal);
  

  return (
    <div className="card">
    {/* Карусель Swiper */}
    <div className="card-image">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="swiper-container"
      >
        {animal.photos.map((el) => (
          <SwiperSlide key={el.id}>
            <figure className="image is-4by3">
              <img src={`${import.meta.env.VITE_IMAGES}/public/images/${el.url}`} alt={`Фото ${animal.title}`} />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Контент карточки */}
    <div className="card-content">
      <p className="title">{animal.title}</p>
      <p className="content">{animal.description}</p>

    </div>
  </div>
  )
}
