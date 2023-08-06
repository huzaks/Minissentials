"use client";

import Slider from "react-slick";
import styles from "@/components/Wheel.module.css";
import WheelList from "@/components/WheelList";

export default function Wheel({ products }) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.slider_container}>
        <h1 className={styles.h1}>Catalog</h1>
        <Slider {...settings}>
          {products.map((product) => (
            <WheelList key={product.slug} product={product}></WheelList>
          ))}
        </Slider>
      </div>
    </>
  );
}
