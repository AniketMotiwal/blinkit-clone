import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home({ onAddToCart}) {
  const [counters, setCounters] = useState({});
  const [showCounter, setShowCounter] = useState({});

  const handleAddClick = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    setShowCounter(prevShowCounter => ({
      ...prevShowCounter,
      [product.id]: true
    }));
    setCounters(prevCounters => ({
      ...prevCounters,
      [product.id]: (prevCounters[product.id] || 0) + 1
    }));
    onAddToCart(product);
  };

  const handleSubtractClick = (e, productId) => {
    e.stopPropagation();
    e.preventDefault();
    if (counters[productId] === 1) {
      setShowCounter(prevShowCounter => ({
        ...prevShowCounter,
        [productId]: false
      }));
      setCounters(prevCounters => ({
        ...prevCounters,
        [productId]: 0
      }));
    } else {
      setCounters(prevCounters => ({
        ...prevCounters,
        [productId]: Math.max((prevCounters[productId] || 0) - 1, 0)
      }));
    }
  };
  

  const categories = [
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png', label: 'Plain Corner' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png', label: 'Dairy, Bread & Eggs' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png', label: 'Fruits & Vegetables' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png', label: 'Cold Drinks & Juices' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png', label: 'Snacks & Munchies' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png', label: 'Breakfast & Instant Food' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png', label: 'Sweet Tooth' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png', label: 'Bakery & Biscuits' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png', label: 'Tea, Coffee & Health Drink' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png', label: 'Atta, Rice & Daal' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png', label: 'Masala, Oil & More' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png', label: 'Sauces & Spreads' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png', label: 'Chicken, Meat & Fish' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png', label: 'Organic & Healthy Living' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png', label: 'Baby Care' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png', label: 'Pharma & Wellness' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png', label: 'Cleaning Essentials' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png', label: 'Home & Office' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-19.png', label: 'Personal Care' },
    { img: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png', label: 'Pet Care' },
  ];
  const products = [
    {
      id: 1,
      name: 'Ultimate Rolling Paper with Filter Tips',
      pack: '1 pack (32 pieces)',
      price: '₹50',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478728a.jpg?ts=1690814280',
    },
    {
      id: 2,
      name: 'Brown Rolling Paper Cones - Stash Pro',
      pack: '6 pieces',
      price: '₹50',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496996a.jpg?ts=1690814374',
    },
    {
      id: 3,
      name: 'Brown Rolling Paper (King Size) - Stash Pro',
      pack: '1 unit (32 pieces)',
      price: '₹50',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803',
    },
    {
      id: 4,
      name: 'White Rolling Paper Tips - Elements',
      pack: '1 pack (50 pieces)',
      price: '₹50',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480940a.jpg?ts=1701679974',
    },
    {
      id: 5,
      name: 'White Slim Rolling Paper (King Size)',
      pack: '1 pack (32 pieces)',
      price: '₹50',
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480951a.jpg?ts=1690814339',
    },
  ];

  const product = [
    {
      id: 1,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212",
      name: "Harvest Gold - White Bread",
      weight: "200 g",
      price: "₹30"
    },
    {
      id: 2,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913",
      name: "Mother Dairy Classic Curd pack",
      weight: "400g",
      price: "₹34"
    },
    {
      id: 3,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      name: "Amul Gold Full Cream Fresh Milk",
      weight: "500ml",
      price: "₹31"
    },
    {
      id: 4,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315",
      name: "Amul Salted Butter packs fresh",
      weight: "500g",
      price: "₹285"
    },
    {
      id: 5,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2d037337-0ca2-463c-9f98-a6cba298d7a5.jpg?ts=1707312317",
      name: "Mother Dairy Paneer pack combo",
      weight: "200g",
      price: "₹95"
    },
    {
      id: 6,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
      name: "Amul Pure Milk Cheese Slices",
      weight: "200g",
      price: "₹140"
    },
    {
      id: 7,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7d48ff24-6659-4107-be92-6d05b7230504.jpg?ts=1716382216",
      name: "Table White Eggs (6 pieces)",
      weight: "6 pieces",
      price: "₹49"
    },
    {
      id: 8,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6525a6e8-5d03-46db-b5e7-b5b4f778b693.jpg?ts=1708592369",
      name: "Amul Masti Curd pack of 1(offer)",
      weight: "400g",
      price: "₹35"
    },
    {
      id: 9,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
      name: "Amul Taaza Toned Fresh Milk",
      weight: "500ml",
      price: "₹28"
    },
    {
      id: 10,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3143599d-dcd8-4473-b8d0-2a2ad9b1d4ff.jpg?ts=1715591792",
      name: "Harvest Gold 100% Atta Whole Wheat Bread",
      weight: "450g",
      price: "₹98"
    },
    {
      id: 11,
      imageUrl: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/36176cdd-07ef-496f-8328-c293a110c148.jpg?ts=1709196676",
      name: "Amul Fresh Malai Paneer packs",
      weight: "200g",
      price: "₹91"
    },
  ];
  const product1 = [
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19266a.jpg?ts=1688625382",
      alt: "Harvest Gold - White Bread",
      name: "Haldiram's Bhujia family pack",
      weight: "400 g",
      price: "₹111"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/432818a.jpg?ts=1688444559",
      alt: "Product Name",
      name: "Doritos Cheese Nachos pack",
      weight: "60g",
      price: "₹30"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/240092a.jpg?ts=1687324818",
      alt: "Product Name",
      name: "Lay's India's Magic Masala Potato Chips",
      weight: "40g",
      price: "₹20"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19251a.jpg?ts=1687948393",
      alt: "Product Name",
      name: "Haldiram's Lite Mixture Namkeen",
      weight: "150g",
      price: "₹20"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/11150a.jpg?ts=1688463551",
      alt: "Product Name",
      name: "Uncle Chipps Spicy Treat Flavour Potato Chips",
      weight: "200g",
      price: "₹20"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
      alt: "Product Name",
      name: "Amul Pure Milk Cheese Slices",
      weight: "200g",
      price: "₹20"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7d48ff24-6659-4107-be92-6d05b7230504.jpg?ts=1716382216",
      alt: "Product Name",
      name: "Table White Eggs (6 pieces)",
      weight: "6 pieces",
      price: "₹20"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6525a6e8-5d03-46db-b5e7-b5b4f778b693.jpg?ts=1708592369",
      alt: "Product Name",
      name: "Amul Masti Curd fresh pack",
      weight: "400g",
      price: "₹20"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
      alt: "Product Name",
      name: "Amul Taaza Toned Fresh Milk",
      weight: "500ml",
      price: "₹20"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3143599d-dcd8-4473-b8d0-2a2ad9b1d4ff.jpg?ts=1715591792",
      alt: "Product Name",
      name: "Harvest Gold 100% Atta Whole Wheat Bread",
      weight: "450g",
      price: "₹20"
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/36176cdd-07ef-496f-8328-c293a110c148.jpg?ts=1709196676",
      alt: "Product Name",
      name: "Amul Fresh Malai Paneer",
      weight: "200g",
      price: "₹20"
    }
  ];


  
  const product2 = [
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480928a.jpg?ts=1687523762",
      alt: "Harvest Gold - White Bread",
      title: "Chief Commissioner Herbal Hookah Flavor (Tobacco Free) by Soex",
      weight: "400 g",
      price: "₹111",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480927a.jpg?ts=1689328456",
      alt: "Product Name",
      title: "Brain Freeze Up Herbal Hookah Flavor (Tobacco Free) by Soex",
      weight: "50g",
      price: "₹100",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480935a.jpg?ts=1687523763",
      alt: "Product Name",
      title: "Paan Raas Herbal Hookah Flavor (Tobacco Free) by Soex",
      weight: "50g",
      price: "₹200",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480933a.jpg?ts=1688628164",
      alt: "Product Name",
      title: "Paan Raas Herbal Hookah Flavor (Tobacco Free) by Soex",
      weight: "50g",
      price: "₹100",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480934a.jpg?ts=1688628164",
      alt: "Product Name",
      title: "Double Apple Herbal Hookah Flavor (Tobacco Free) by Soex",
      weight: "50g",
      price: "₹100",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f895474-ac1e-4f52-9587-891e32ab1ba9.jpg?ts=1707312315",
      alt: "Product Name",
      title: "Amul Pure Milk Cheese Slices",
      weight: "200g",
      price: "₹20",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7d48ff24-6659-4107-be92-6d05b7230504.jpg?ts=1716382216",
      alt: "Product Name",
      title: "Table White Eggs (6 pieces)",
      weight: "6 pieces",
      price: "₹20",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6525a6e8-5d03-46db-b5e7-b5b4f778b693.jpg?ts=1708592369",
      alt: "Product Name",
      title: "Amul Masti Curd",
      weight: "400g",
      price: "₹20",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
      alt: "Product Name",
      title: "Amul Taaza Toned Fresh Milk",
      weight: "500ml",
      price: "₹20",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3143599d-dcd8-4473-b8d0-2a2ad9b1d4ff.jpg?ts=1715591792",
      alt: "Product Name",
      title: "Harvest Gold 100% Atta Whole Wheat Bread",
      weight: "450g",
      price: "₹20",
    },
    {
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/36176cdd-07ef-496f-8328-c293a110c148.jpg?ts=1709196676",
      alt: "Product Name",
      title: "Amul Fresh Malai Paneer",
      weight: "200g",
      price: "₹20",
    },
  ];
  const product3 = [
    {
      id: 1,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/33216a.jpg?ts=1702622778",
      altText: "Harvest Gold - White Bread",
      title: "B Natural Mixed Fruit Juice",
      quantity: "11",
      price: "₹101"
    },
    {
      id: 2,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1f415f60-c955-4099-9056-a363383d51fb.jpg?ts=1709714322",
      altText: "Product Name",
      title: "Hamdard Rooh Afza Rose Sharbat",
      quantity: "750ml",
      price: "₹175"
    },
    {
      id: 3,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2217f2ec-4dc7-47ec-b67c-65fe1b848db4.jpg?ts=1707312716",
      altText: "Product Name",
      title: "Red Bull Energy Drink (250 ml)",
      quantity: "250ml",
      price: "₹125"
    },
    {
      id: 4,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cfeaa68b-2ce1-4c1e-95c5-450bbb9bb281.jpg?ts=1708591243",
      altText: "Product Name",
      title: "Bisleri Packaged Water(pure flittered  water)",
      quantity: "5l",
      price: "₹70"
    },
    {
      id: 5,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1e45115d-9068-429b-9edc-9f437dd351df.jpg?ts=1707312323",
      altText: "Product Name",
      title: "Maaza Mango Drink 600 ml",
      quantity: "600ml",
      price: "₹38"
    },
    {
      id: 6,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/071735a6-fd6a-49b0-af08-b634857645ea.jpg?ts=1708591243",
      altText: "Product Name",
      title: "Amul Pure Milk Cheese Slices",
      quantity: "750ml",
      price: "₹20"
    },
    {
      id: 7,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/455587a.jpg?ts=1690985838",
      altText: "Product Name",
      title: "Real Fruit Power Coconut Water",
      quantity: "1l",
      price: "₹106"
    },
    {
      id: 8,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6b98633c-7c6a-4708-a372-e2b49da568ab.jpg?ts=1707312322",
      altText: "Product Name",
      title: "Coca-Cola Soft Drink (750 ml)",
      quantity: "750ml",
      price: "₹40"
    },
    {
      id: 9,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
      altText: "Product Name",
      title: "Amul Taaza Toned Fresh Milk",
      quantity: "500ml",
      price: "₹20"
    },
    {
      id: 10,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3143599d-dcd8-4473-b8d0-2a2ad9b1d4ff.jpg?ts=1715591792",
      altText: "Product Name",
      title: "Harvest Gold 100% Atta Whole Wheat Bread",
      quantity: "450g",
      price: "₹20"
    },
    {
      id: 11,
      imgSrc: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/36176cdd-07ef-496f-8328-c293a110c148.jpg?ts=1709196676",
      altText: "Product Name",
      title: "Amul Fresh Malai Paneer pack(200g)",
      quantity: "200g",
      price: "₹20"
    },
  ];

  const product4 = [
    {
      id: 1,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897',
      alt: 'Harvest Gold - White Bread',
      title: 'Impact Sugar Free Mint Candy (Fresh Mints)',
      weight: '14g',
      price: '₹120'
    },
    {
      id: 2,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/163972a.jpg?ts=1690813224',
      alt: 'Impact Sugar Free Mint Candy (Peach)',
      title: 'Impact Sugar Free Mint Candy (Peach)',
      weight: '14g',
      price: '₹120'
    },
    {
      id: 3,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/92782095-1678-4146-aa8b-dcbbb3e43bdc.jpg?ts=1715166705',
      alt: 'Nicotex Mint Nicotine Gum (Sugar Free)',
      title: 'Nicotex Mint Nicotine Gum (Sugar Free)',
      weight: '250ml',
      price: '₹125'
    },
    {
      id: 4,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/105159a.jpg?ts=1704911342',
      alt: 'Orbit Spearmint Flavour Sugar Free Chewing Gum',
      title: 'Orbit Spearmint Flavour Sugar Free Chewing Gum',
      weight: '29 pieces',
      price: '₹256'
    },
    {
      id: 5,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/440073a.jpg?ts=1704911343',
      alt: 'Orbit Mixed Fruit Flavour Chewing Gum (Sugar Free)new pack',
      title: 'Orbit Mixed Fruit Flavour Chewing Gum (Sugar Free)new pack',
      weight: '22g',
      price: '₹50'
    },
    {
      id: 6,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/071735a6-fd6a-49b0-af08-b634857645ea.jpg?ts=1708591243',
      alt: 'Amul Pure Milk Cheese fresh Slices(750ml)',
      title: 'Amul Pure Milk Cheese fresh Slices(750ml)',
      weight: '750ml',
      price: '₹20'
    },
    {
      id: 7,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/455587a.jpg?ts=1690985838',
      alt: 'Real Fruit Power Coconut Water',
      title: 'Real Fruit Power Coconut Water',
      weight: '1l',
      price: '₹106'
    },
    {
      id: 8,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6b98633c-7c6a-4708-a372-e2b49da568ab.jpg?ts=1707312322',
      alt: 'Coca-Cola Soft Drink (750 ml)',
      title: 'Coca-Cola Soft Drink (750 ml)',
      weight: '750ml',
      price: '₹40'
    },
    {
      id: 9,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143',
      alt: 'Amul Taaza Toned Fresh Milk',
      title: 'Amul Taaza Toned Fresh Milk',
      weight: '500ml',
      price: '₹20'
    },
    {
      id: 10,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3143599d-dcd8-4473-b8d0-2a2ad9b1d4ff.jpg?ts=1715591792',
      alt: 'Harvest Gold 100% Atta Whole Wheat Bread',
      title: 'Harvest Gold 100% Atta Whole Wheat Bread',
      weight: '450g',
      price: '₹20'
    },
    {
      id: 11,
      imgSrc: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/36176cdd-07ef-496f-8328-c293a110c148.jpg?ts=1709196676',
      alt: 'Amul Fresh Malai Paneer fresh pack',
      title: 'Amul Fresh Malai Paneer fresh pack',
      weight: '200g',
      price: '₹20'
    },
  ];

  return (
    <div className="container mx-auto mb-4 md:mb-0 mt-4 ">
      <p className="text-lg mt-4 md:hidden">Your favorite paan shop is now online</p>
      <div className="hidden md:flex justify-center">
        <div className="relative">
          <a href="/shop" onClick={() => handleClick('/shop')}>
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
              alt="Paan corner items"
              className="w-full"
            />
          </a>
        </div>

      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-transparent dark:bg-transparent rounded-lg p-4 m-2 flex flex-col items-center text-center">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
            alt="Pharmacy at your doorstep!"
            className="w-full h-full object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-transparent dark:bg-transparent rounded-lg p-4 m-2 flex flex-col items-center text-center">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
            alt="Pet Care supplies in minutes"
            className="w-full h-full object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-transparent dark:bg-transparent rounded-lg p-4 m-2 flex flex-col items-center text-center">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
            alt="No time for a diaper run?"
            className="w-full h-full object-cover rounded-md mb-4"
          />
        </div>
        <div className="bg-transparent dark:bg-transparent rounded-lg p-4 m-2 flex flex-col items-center text-center">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2024-06/fathers-day_WEB-1_0.jpg"
            alt="Cheers to you amazing dad"
            className="w-full h-full object-cover rounded-md mb-4"
          />
        </div>
      </div>


      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={category.img} alt={category.label} className="w-24 h-13 object-cover" />
              <span className="mt-2 text-center text-sm">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Dairy, Bread & Eggs</h2>


          <a href="#" className="text-green-600">see all</a>
        </div>
        {/* dairy , Bread & Eggs */}
        <div className="flex space-x-4 overflow-x-auto">
      {product.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="min-w-[200px]">
          <div className="bg-white shadow rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={`Image of ${product.name}`}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
            <p className="text-xs text-zinc-500 mb-2">{product.weight}</p>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold mt-2">{product.price}</span>
              {showCounter[product.id] ? (
                <div className="flex items-center">
                  <button
                    onClick={(e) => handleSubtractClick(e, product.id)}
                    className="mt-2 bg-red-100 text-red-700 px-2 py-1 rounded border border-red-700"
                  >
                    -
                  </button>
                  <span className="mx-2">{counters[product.id] || 0}</span>
                  <button
                    onClick={(e) => handleAddClick(e, product)}
                    className="mt-2 bg-green-100 text-green-700 px-2 py-1 rounded border border-green-700"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={(e) => handleAddClick(e, product)}
                  className="mt-2 bg-green-100 text-green-700 px-3 py-1 rounded md:rounded-lg border border-green-700 h-[32px] ml-20 sm:ml-8 md:ml-12"
                >
                  ADD
                </button>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>


      </div>


      {/* roliing products list */}

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Rolling paper & tobacco</h2>
          <a href="#" className="text-green-600">see all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map(product => (
            <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="mb-4" />
              <h3 className="text-sm font-semibold text-center">{product.name}</h3>
              <p className="text-xs text-zinc-500">{product.pack}</p>
              <p className="text-lg font-bold">{product.price}</p>
              <button className="mt-2 bg-green-100 text-green-700 px-4 py-1 rounded ml-3 md:rounded-lg border border-green-700 h-[32px]">
                ADD
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* add more products */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Snacks & Munchies</h2>
          <a href="#" className="text-green-600">see all</a>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {product1.map((product, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 min-w-[200px]">
              <img
                src={product.imgSrc}
                alt={product.alt}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
              <p className="text-xs text-zinc-500 mb-2">{product.weight}</p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold">{product.price}</span>
                <button className="mt-2 bg-green-100 text-green-700 px-3 py-1 rounded md:rounded-lg border border-green-700 h-[32px] ml-20 sm:ml-8 md:ml-12">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* add more products  */}

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Hookah</h2>
          <a href="#" className="text-green-600">see all</a>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {product2.map((product, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 min-w-[200px]">
              <img src={product.imgSrc} alt={product.alt} className="w-full h-32 object-contain mb-4" />
              <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
              <p className="text-xs text-zinc-500 mb-2">{product.weight}</p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold">{product.price}</span>
                <button className="mt-2 bg-green-100 text-green-700 px-3 py-1 rounded md:rounded-lg border border-green-700 h-[32px] ml-20 sm:ml-8 md:ml-12">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* cold drink and juices */}

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Cold Drinks & Juices</h2>
          <a href="#" className="text-green-600">see all</a>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {product3.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-lg p-4 min-w-[200px]">
              <img
                src={product.imgSrc}
                alt={product.altText}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
              <p className="text-xs text-zinc-500 mb-2">{product.quantity}</p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold">{product.price}</span>
                <button className="mt-2 bg-green-100 text-green-700 px-3 py-1 rounded md:rounded-lg border border-green-700 h-[32px] ml-20 sm:ml-8 md:ml-12">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* candies and germs */}

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Candies & Gums</h2>
          <a href="#" className="text-green-600">see all</a>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {product4.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-lg p-4 min-w-[200px]">
              <img
                src={product.imgSrc}
                alt={product.altText}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
              <p className="text-xs text-zinc-500 mb-2">{product.quantity}</p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold">{product.price}</span>
                <button className="mt-2 bg-green-100 text-green-700 px-3 py-1 rounded md:rounded-lg border border-green-700 h-[32px] ml-20 sm:ml-8 md:ml-12">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
