import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Tours = () => {
  const ongoingTours = [
    {
      title: 'Manali Adventure',
      date: 'April 28 - May 2, 2025',
      description: 'Enjoy the snowy hills and breathtaking landscapes of Manali with guided adventures.',
      price: '₹15,999',
      image: 'https://th.bing.com/th/id/OIP.BRKi6V-a4c7KyRpf-TfrhQHaFi?rs=1&pid=ImgDetMain',
    },
    {
      title: 'Goa Beach Trip',
      date: 'April 30 - May 5, 2025',
      description: 'Relax at the beaches of Goa with exciting parties and serene sunsets.',
      price: '₹12,499',
      image: 'https://tse1.mm.bing.net/th/id/OIP.l5FEghcTEhefJ-rCVncsCAHaE6?rs=1&pid=ImgDetMain',
    },
    {
      title: 'Shimla Tour',
      date: 'May 10 - May 14, 2025',
      description: 'Explore the beautiful mall road and scenic valleys of Shimla.',
      price: '₹10,999',
      image: 'https://static.toiimg.com/thumb/msid-102383896,width-748,height-499,resizemode=4,imgsize-238460/Most-beautiful-pictures-of-Shimla-youll-see-on-the-internet-today.jpg',
    },
    {
      title: 'Shimla Tour',
      date: 'May 10 - May 14, 2025',
      description: 'Explore the beautiful mall road and scenic valleys of Shimla.',
      price: '₹10,999',
      image: 'https://th.bing.com/th/id/OIP.7SJieURuQiPzttI9nacJbQHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    },
  ];

  const upcomingTours = [
    {
      title: 'Leh-Ladakh Expedition',
      date: 'June 10 - June 20, 2025',
      description: 'Explore the mesmerizing valleys and lakes of Leh-Ladakh.',
      price: '₹25,000',
      image: 'https://th.bing.com/th/id/OIP.FZZzSTobLkvq31VbMczu4gHaFj?w=257&h=193&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    },
    {
      title: 'Kerala Backwaters',
      date: 'July 5 - July 10, 2025',
      description: 'Cruise through the serene backwaters and lush greenery of Kerala.',
      price: '₹18,500',
      image: 'https://th.bing.com/th/id/OIP.KVJuxRRZxjd-bA8E5vQnxgHaE8?w=220&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    },
    {
      title: 'Rajasthan Royal Tour',
      date: 'August 15 - August 20, 2025',
      description: 'Visit the forts and deserts of Rajasthan in royal style.',
      price: '₹14,800',
      image: 'https://th.bing.com/th/id/OIP.msrJ1p0ghp50bFoTzMJJ_wHaEK?w=322&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    },
    {
      title: 'Rajasthan Royal Tour',
      date: 'August 15 - August 20, 2025',
      description: 'Visit the forts and deserts of Rajasthan in royal style.',
      price: '₹14,800',
      image: 'https://th.bing.com/th/id/OIP.703JrqNntD3BIgK0s6ItxgHaE7?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const TourCard = ({ tour, type }) => {
    const numericPrice = parseInt(tour.price.replace(/[^\d]/g, ''), 10);
    const isPremium = numericPrice >= 12000;

    const priceBadgeStyle = isPremium
      ? 'bg-gradient-to-r from-yellow-400 to-yellow-200 text-black'
      : 'bg-secondary text-dark';

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="bg-primary rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all relative group"
      >
        <div className="absolute top-4 left-4 bg-secondary text-dark text-xs font-bold py-1 px-3 rounded-full shadow-md z-10">
          {type === 'ongoing' ? '🔥 Ongoing' : '🌟 Upcoming'}
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out rounded-2xl"
          />
        </div>

        <div className="p-4 flex flex-col justify-between h-48">
          <div>
            <h3 className="text-xl font-bold mb-1">{tour.title}</h3>
            <p className="text-sm mb-1 text-secondary">{tour.date}</p>
            <p className="text-sm mb-3">{tour.description}</p>
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <span className={`inline-block ${priceBadgeStyle} font-bold py-1 px-4 rounded-full text-sm shadow-sm`}>
              {tour.price}
            </span>
            {isPremium && (
              <span className="text-xs bg-black text-yellow-400 px-2 py-0.5 rounded-full">Premium</span>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  const NoToursMessage = ({ type }) => (
    <div className="text-center py-10">
      <h3 className="text-xl font-semibold">
        {type === 'ongoing' ? 'No ongoing tours available right now!' : 'No upcoming tours available at the moment!'}
      </h3>
    </div>
  );

  return (
    <div className="bg-dark text-accent min-h-screen p-6">
      <div className="container mx-auto">
        <motion.h1 
          className="text-3xl font-bold mb-8 text-center"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          Our <span className="text-secondary">Tours</span>
        </motion.h1>

        {/* Ongoing Tours */}
        <motion.section 
          className="mb-12"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-secondary inline-block">
            Ongoing Tours
          </h2>
          {ongoingTours.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
            >
              {ongoingTours.map((tour, index) => (
                <SwiperSlide key={index}>
                  <TourCard tour={tour} type="ongoing" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <NoToursMessage type="ongoing" />
          )}
        </motion.section>

        {/* Upcoming Tours */}
        <motion.section
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-secondary inline-block">
            Upcoming Tours
          </h2>
          {upcomingTours.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
            >
              {upcomingTours.map((tour, index) => (
                <SwiperSlide key={index}>
                  <TourCard tour={tour} type="upcoming" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <NoToursMessage type="upcoming" />
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default Tours;
