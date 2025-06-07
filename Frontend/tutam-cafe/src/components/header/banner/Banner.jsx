import { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  const API_URL = '/api/banner-images'; // Expecting [{ url, link, topic, description, backgroundUrl }]

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setBanners(data);
      })
      .catch((err) => console.error('Failed to load banner images', err));
  }, []);

  const onSlideChanged = ({ item }) => {
    if (banners.length > 1) {
      setActiveIndex(item);
    }
  };

  const items = banners.map((banner, index) => (
    <div className="item w-full mx-auto max-w-7xl pt-20" data-value={index + 1} key={index}>
      <a
        href={banner.link || '#'}
        className="block w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mx-4 my-1">
          <div
            className="md:flex w-full h-auto rounded-lg p-2"
            style={{
              backgroundImage: `url(${banner.backgroundUrl || ''})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: 'var(--color-secondary)',
            }}
          >
            <div className="md:w-1/5 md:h-auto rounded-lg p-2 bg-white/80">
              <img
                src={banner.url}
                alt={`Banner ${index + 1}`}
                className="w-full object-cover"
              />
            </div>

            <div className="md:w-3/5 h-auto rounded-lg px-3 py-4 bg-white/80">
              <h1 className="text-xl font-bold">TUTAM Cafe</h1>
              <h2 className="text-2xl font-bold">{banner.topic}</h2>
              <p className="text-base">{banner.description}</p>
            </div>

            <div className="flex flex-col justify-between md:w-1/5 rounded-lg p-2 bg-white/80">
              <small className="flex justify-end">*T&C Apply</small>
              <div className="flex justify-end">
                <button className="bg-[var(--color-accent)] text-base font-bold w-30 rounded-full p-3">
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>
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
