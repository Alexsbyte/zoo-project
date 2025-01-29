import React from 'react'
import "bulma/css/bulma.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function AnimalCard({animal}) {
    const images = [
        "https://www.zastavki.com/pictures/originals/2013/Animals__039637_.jpg",
        "https://avatars.mds.yandex.net/i?id=4934e90e425014b1913d833ee4548dbe699f5d28-12323508-images-thumbs&n=13",
        "https://kuda-spb.ru/uploads/ff58af1d7ca4171ea6e133b277553930.jpg"
      ]
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
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <figure className="image is-4by3">
              <img src={img} alt={`Фото ${animal.title}`} />
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
