import { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  const API_URL = '/api/banner-images'; // Backend should return array of { url, link }

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setBanners(data); // Each item: { url, link }
      })
      .catch((err) => console.error('Failed to load banner images', err));
  }, []);

  const onSlideChanged = ({ item }) => {
    if (banners.length > 1) {
      setActiveIndex(item);
    }
  };

  const items = banners.map((banner, index) => (
    <div className="item w-full" data-value={index + 1} key={index}>
      <a
        href={banner.link || '#'}
        className="w-full h-full flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={banner.url}
          alt={`Banner ${index + 1}`}
          className="w-full object-cover"
        />
      </a>
    </div>
  ));

  return (
    <>
      {items.length > 1 ? (
        <AliceCarousel
          autoHeight
          autoWidth
          autoPlay
          autoPlayStrategy="action"
          autoPlayInterval={5000}
          animationDuration={5000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          activeIndex={activeIndex}
          onSlideChange={onSlideChanged}
          items={items}
          className="w-full"
        />
      ) : (
        <div className="w-full">{items[0]}</div>
      )}
    </>
  );
}

export default Banner;