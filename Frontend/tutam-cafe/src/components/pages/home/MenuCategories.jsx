import React from 'react';

const menuItems = [
  {
    label: 'Bestseller',
    image: 'src/assets/images/MenuCategories/Bestseller.jpg',
    link: '/Order/Bestseller',
  },
  {
    label: 'Drinks',
    image: 'src/assets/images/MenuCategories/Drinks.jpg',
    link: '/Order/Drinks',
  },
  {
    label: 'Food',
    image: 'src/assets/images/MenuCategories/Food.jpg',
    link: '/Order/Food',
  },
  {
    label: 'Merchandise',
    image: 'src/assets/images/MenuCategories/Merchandise.jpg',
    link: '/Order/Merchandise',
  },
  {
    label: 'Coffee At Home',
    image: 'src/assets/images/MenuCategories/CoffeeAtHome.jpg',
    link: '/Order/Coffee At Home',
  },
  {
    label: 'Ready to Eat',
    image: 'src/assets/images/MenuCategories/ReadyToEat.jpg',
    link: '/Order/Ready to Eat',
  },
];

function MenuCategories() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-15">
      <h3 className="font-bold text-3xl">Handcrafted Curations</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center"
          >
            <a href={item.link}>
              <img
              src={item.image}
              alt={`Handcrafted Curations - ${item.label}`}
              className="h-25 w-25 object-cover rounded-full hover:outline-2 hover:outline-offset-1 hover:outline-solid my-4"
            />
            </a>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCategories;