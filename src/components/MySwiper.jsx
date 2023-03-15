
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MySwiper(props) {
  return (
    <Swiper>
      <SwiperSlide>
        <div data-aos="fade-up" className="card">
          <div className="card__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="card__content">
            <h3 className="card__title">{props.title}</h3>
            <p className="card__description">{props.desc}</p>
            <a className="btn-outline card__button" href={props.link} target="_blank">
              View Project
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
