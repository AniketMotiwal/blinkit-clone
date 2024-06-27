import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Harvest Gold - White Bread",
      category: "Bread & Buns",
      brand: "Harvest Gold",
      img: "https://www.bigbasket.com/media/uploads/p/xxl/40026514_3-harvest-gold-bread-white.jpg",
      weight: "350g",
      price: "28",
      details: {
        type: "White Bread",
        keyFeatures: "Small loaf. With goodness of wheat.",
        ingredients: "Wheat flour (Maida) (53%), Sugar, Wheat protein (Gluten), Yeast, Salt, Edible Refined Vegetable Oil, Soya Flour, Class II Preservatives (E282), Permitted Emulsifier (E481i), Acidity Regulator (E260) and Antioxidant (E300)",
        unit: "350 g",
        shelfLife: "5 days",
        manufacturerDetails: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        marketedBy: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        countryOfOrigin: "India",
        fssaiLicense: "10013031000755",
        customerCare: "info@linkintl.com",
        returnPolicy: "This item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Kick start your day with Harvest Gold Bread. A small loaf of soft bread enriched with goodness of wheat and a characteristic aroma of brick-oven bakeries. Pave your way towards a healthy life with a hearty breakfast.",
        disclaimer: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
      }
    },
    {
      id: 2,
      name: "Mother Dairy Classic Curd pack",
      category: "curd",
      brand: "Mother dairy",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913",
      weight: "1kg",
      price: "75",
      details: {
        type: "curd",
        keyFeatures: "Prepared by pasteurized toned milk",
        ingredients: "Standardized Milk, Water, Milk Solids and Active Lactic Culture",
        unit: "400gg",
        shelfLife: "5 days",
        manufacturerDetails: "Mother Dairy Fruit & Vegetable Pvt. Ltd., Unit- Pilkhuwa Dairy, 18 Km. Stone, Ghaziabad-Hapur Road, Pilkhuwa, District- Hapur, Uttar Pradesh-245304",
        marketedBy: "Mother Dairy Fruit & Vegetable Pvt. Ltd., Unit- Pilkhuwa Dairy, 18 Km. Stone, Ghaziabad-Hapur Road, Pilkhuwa, District- Hapur, Uttar Pradesh-245304",
        countryOfOrigin: "India",
        fssaiLicense: "10014011001895",
        customerCare: "info@linkintl.com",
        returnPolicy: "This Item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Enriched with nutrients, Mother Dairy Dahi (Polypack) makes for a healthy and tasty addition to everyday meals. It tastes best when served chilled and can be relished anytime of the day..",
        disclaimer: "Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.."
      }
    },
    {
      id: 3,
      name: "Amul Gold Full Cream Fresh Milk",
      category: "milk",
      brand: "Amul",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      weight: "500ml",
      price: "31",
      details: {
        type: "fullcream",
        keyFeatures: " Wholesome taste  milk for daily use",
        ingredients: "Amul Taazas Toned Milk is one such product that is made for the health conscious consumer. Creating toned milk is an Indian born process that involves adding water, skim milk and skim milk powder to buffalos milk in order to bring down the excess fat that the body does not need.",
        unit: "350 g",
        shelfLife: "5 days",
        manufacturerDetails: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        marketedBy: "Amul milk Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        countryOfOrigin: "India",
        fssaiLicense: "1001202100007",
        customerCare: "info@linkintl.com",
        returnPolicy: "The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Kick start your day with Harvest Gold Bread. A small loaf of soft bread enriched with goodness of wheat and a characteristic aroma of brick-oven bakeries. Pave your way towards a healthy life with a hearty breakfast.",
        disclaimer: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
      }
    },
    {
      id: 4,
      name: "Amul Butter",
      category: "Dairy",
      brand: "Amul",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315https://minutebag.com/wp-content/uploads/2018/04/butter_cream_1100_1-1024x1024.jpghttps://th.bing.com/th/id/OIP.xWUaX0Qk-RYWJzQduT5evQHaHa?rs=1&pid=ImgDetMainhttps://www.vhv.rs/dpng/d/518-5188209_amul-butter-500-g-hd-png-download.png",
      weight: "500g",
      price: "250",
      details: {
        type: "Butter",
        keyFeatures: "Made from fresh cream. Amul Butter has been a vital part of the breakfast table of almost every Indian household.",
        ingredients: "Butter (Pasteurized Cream, Common Salt), Milk Solid",
        unit: "500 g",
        shelfLife: "12 months",
        manufacturerDetails: "Gujarat Cooperative Milk Marketing Federation Ltd., Anand - 388001, Gujarat",
        marketedBy: "Gujarat Cooperative Milk Marketing Federation Ltd., Anand - 388001, Gujarat",
        countryOfOrigin: "India",
        fssaiLicense: "10013013000755",
        customerCare: "amul.butter@amul.coop",
        returnPolicy: "This item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Amul Butter is a high-quality butter made from fresh cream. It is a favorite choice for spreading on bread, toast, or parathas, and it enhances the taste of various dishes.",
        disclaimer: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
      }
    },
    {
      id: 5,
      name: "Mother Dairy Paneer",
      category: "Panneer &tofu",
      brand: " Mother Dairy Paneer",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2d037337-0ca2-463c-9f98-a6cba298d7a5.jpg?ts=1707312317",
      weight: "200g",
      price: "95",
      details: {
        type: "Panner",
        keyFeatures: "Rich in protiens with soft and smotth mixtures",
        ingredients: "Milk Solids",
        unit: "200 g",
        shelfLife: "15 days",
        manufacturerDetails: "Mother Dairy Fruit & Vegetable Pvt Ltd, A-3, Sector-1, Noida, Uttar Pradesh- 201 301 (India)",
        marketedBy: "Mother dairy India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        countryOfOrigin: "India",
        fssaiLicense: "10014011001895",
        customerCare: "info@linkintl.com",
        returnPolicy: "This Item is non-returnable. For a damaged, defective, incorrect or expired item, you",
        description: "With smooth, soft and uniform texture, Mother Dairy Paneer is rich in protein and fat",
        disclaimer: "Every effort is made to maintain the accuracy of all information. However, actual not to solely rely on the information presented."
      }
    },
    {
      id: 6,
      name: "Harvest Gold - White Bread",
      category: "Bread & Buns",
      brand: "Harvest Gold",
      img: "https://www.bigbasket.com/media/uploads/p/xxl/40026514_3-harvest-gold-bread-white.jpg",
      weight: "350g",
      price: "28",
      details: {
        type: "White Bread",
        keyFeatures: "Small loaf. With goodness of wheat.",
        ingredients: "Wheat flour (Maida) (53%), Sugar, Wheat protein (Gluten), Yeast, Salt, Edible Refined Vegetable Oil, Soya Flour, Class II Preservatives (E282), Permitted Emulsifier (E481i), Acidity Regulator (E260) and Antioxidant (E300)",
        unit: "350 g",
        shelfLife: "5 days",
        manufacturerDetails: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        marketedBy: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        countryOfOrigin: "India",
        fssaiLicense: "10013031000755",
        customerCare: "info@linkintl.com",
        returnPolicy: "This item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Kick start your day with Harvest Gold Bread. A small loaf of soft bread enriched with goodness of wheat and a characteristic aroma of brick-oven bakeries. Pave your way towards a healthy life with a hearty breakfast.",
        disclaimer: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
      }
    },
    {
      id: 7,
      name: "Harvest Gold - White Bread",
      category: "Bread & Buns",
      brand: "Harvest Gold",
      img: "https://www.bigbasket.com/media/uploads/p/xxl/40026514_3-harvest-gold-bread-white.jpg",
      weight: "350g",
      price: "28",
      details: {
        type: "White Bread",
        keyFeatures: "Small loaf. With goodness of wheat.",
        ingredients: "Wheat flour (Maida) (53%), Sugar, Wheat protein (Gluten), Yeast, Salt, Edible Refined Vegetable Oil, Soya Flour, Class II Preservatives (E282), Permitted Emulsifier (E481i), Acidity Regulator (E260) and Antioxidant (E300)",
        unit: "350 g",
        shelfLife: "5 days",
        manufacturerDetails: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        marketedBy: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        countryOfOrigin: "India",
        fssaiLicense: "10013031000755",
        customerCare: "info@linkintl.com",
        returnPolicy: "This item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Kick start your day with Harvest Gold Bread. A small loaf of soft bread enriched with goodness of wheat and a characteristic aroma of brick-oven bakeries. Pave your way towards a healthy life with a hearty breakfast.",
        disclaimer: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
      }
    },
    {
      id: 8,
      name: "Harvest Gold - White Bread",
      category: "Bread & Buns",
      brand: "Harvest Gold",
      img: "https://www.bigbasket.com/media/uploads/p/xxl/40026514_3-harvest-gold-bread-white.jpg",
      weight: "350g",
      price: "28",
      details: {
        type: "White Bread",
        keyFeatures: "Small loaf. With goodness of wheat.",
        ingredients: "Wheat flour (Maida) (53%), Sugar, Wheat protein (Gluten), Yeast, Salt, Edible Refined Vegetable Oil, Soya Flour, Class II Preservatives (E282), Permitted Emulsifier (E481i), Acidity Regulator (E260) and Antioxidant (E300)",
        unit: "350 g",
        shelfLife: "5 days",
        manufacturerDetails: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        marketedBy: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        countryOfOrigin: "India",
        fssaiLicense: "10013031000755",
        customerCare: "info@linkintl.com",
        returnPolicy: "This item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Kick start your day with Harvest Gold Bread. A small loaf of soft bread enriched with goodness of wheat and a characteristic aroma of brick-oven bakeries. Pave your way towards a healthy life with a hearty breakfast.",
        disclaimer: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
      }
    },

    {
      id: 9,
      name: "Harvest Gold - White Bread",
      category: "Bread & Buns",
      brand: "Harvest Gold",
      img: "https://www.bigbasket.com/media/uploads/p/xxl/40026514_3-harvest-gold-bread-white.jpg",
      weight: "350g",
      price: "28",
      details: {
        type: "White Bread",
        keyFeatures: "Small loaf. With goodness of wheat.",
        ingredients: "Wheat flour (Maida) (53%), Sugar, Wheat protein (Gluten), Yeast, Salt, Edible Refined Vegetable Oil, Soya Flour, Class II Preservatives (E282), Permitted Emulsifier (E481i), Acidity Regulator (E260) and Antioxidant (E300)",
        unit: "350 g",
        shelfLife: "5 days",
        manufacturerDetails: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        marketedBy: "Ready Roti India Pvt. Ltd., RZ-167(I), A-Block, Road No.4, Mahipalpur Extension, Delhi-110037",
        countryOfOrigin: "India",
        fssaiLicense: "10013031000755",
        customerCare: "info@linkintl.com",
        returnPolicy: "This item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Kick start your day with Harvest Gold Bread. A small loaf of soft bread enriched with goodness of wheat and a characteristic aroma of brick-oven bakeries. Pave your way towards a healthy life with a hearty breakfast.",
        disclaimer: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
      }
    },
    {
      id: 10,
      name: "Amul Butter",
      category: "Dairy",
      brand: "Amul",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315https://minutebag.com/wp-content/uploads/2018/04/butter_cream_1100_1-1024x1024.jpghttps://th.bing.com/th/id/OIP.xWUaX0Qk-RYWJzQduT5evQHaHa?rs=1&pid=ImgDetMainhttps://www.vhv.rs/dpng/d/518-5188209_amul-butter-500-g-hd-png-download.png",
      weight: "500g",
      price: "250",
      details: {
        type: "Butter",
        keyFeatures: "Made from fresh cream. Amul Butter has been a vital part of the breakfast table of almost every Indian household.",
        ingredients: "Butter (Pasteurized Cream, Common Salt), Milk Solid",
        unit: "500 g",
        shelfLife: "12 months",
        manufacturerDetails: "Gujarat Cooperative Milk Marketing Federation Ltd., Anand - 388001, Gujarat",
        marketedBy: "Gujarat Cooperative Milk Marketing Federation Ltd., Anand - 388001, Gujarat",
        countryOfOrigin: "India",
        fssaiLicense: "10013013000755",
        customerCare: "amul.butter@amul.coop",
        returnPolicy: "This item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Amul Butter is a high-quality butter made from fresh cream. It is a favorite choice for spreading on bread, toast, or parathas, and it enhances the taste of various dishes.",
        disclaimer: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
      }
    },
    {
      id: 11,
      name: "Amul Butter",
      category: "Dairy",
      brand: "Amul",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/7514beed-37f7-4c8c-b50a-4b39842009b8.jpg?ts=1707312315https://minutebag.com/wp-content/uploads/2018/04/butter_cream_1100_1-1024x1024.jpghttps://th.bing.com/th/id/OIP.xWUaX0Qk-RYWJzQduT5evQHaHa?rs=1&pid=ImgDetMainhttps://www.vhv.rs/dpng/d/518-5188209_amul-butter-500-g-hd-png-download.png",
      weight: "500g",
      price: "250",
      details: {
        type: "Butter",
        keyFeatures: "Made from fresh cream. Amul Butter has been a vital part of the breakfast table of almost every Indian household.",
        ingredients: "Butter (Pasteurized Cream, Common Salt), Milk Solid",
        unit: "500 g",
        shelfLife: "12 months",
        manufacturerDetails: "Gujarat Cooperative Milk Marketing Federation Ltd., Anand - 388001, Gujarat",
        marketedBy: "Gujarat Cooperative Milk Marketing Federation Ltd., Anand - 388001, Gujarat",
        countryOfOrigin: "India",
        fssaiLicense: "10013013000755",
        customerCare: "amul.butter@amul.coop",
        returnPolicy: "This item is non-returnable. For a damaged, defective, incorrect or expired item, you can request a replacement within 72 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.",
        expiryDate: "Please refer to the packaging of the product for expiry date.",
        description: "Amul Butter is a high-quality butter made from fresh cream. It is a favorite choice for spreading on bread, toast, or parathas, and it enhances the taste of various dishes.",
        disclaimer: "Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented."
      }
    },
    
    // Add more products here if needed
  ];

  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
      <div className='flex flex-col gap-6 lg:w-1/4' style={{ marginLeft: '12rem' }}>
        <img src={product.img} alt="Product" className='w-full h-full aspect-square object-cover rounded-xl' />
        <hr />
        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg text-left" style={{ marginLeft: '1rem' }}>
          <h1 className="text-2xl font-bold mb-4">Product Details</h1>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">{product.details.type}</h2>
            <p className="mt-1"><span className="font-semibold">Type</span></p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Key Features</h2>
            <p className="mt-1">{product.details.keyFeatures}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Ingredients</h2>
            <p className="mt-1">{product.details.ingredients}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Unit</h2>
            <p className="mt-1">{product.details.unit}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Shelf Life</h2>
            <p className="mt-1">{product.details.shelfLife}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Manufacturer Details</h2>
            <p className="mt-1">{product.details.manufacturerDetails}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Marketed By</h2>
            <p className="mt-1">{product.details.marketedBy}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Country Of Origin</h2>
            <p className="mt-1">{product.details.countryOfOrigin}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">FSSAI License</h2>
            <p className="mt-1">{product.details.fssaiLicense}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Customer Care Details</h2>
            <p className="mt-1">{product.details.customerCare}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Return Policy</h2>
            <p className="mt-1">{product.details.returnPolicy}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Expiry Date</h2>
            <p className="mt-1">{product.details.expiryDate}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="mt-1">{product.details.description}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Disclaimer</h2>
            <p className="mt-1">{product.details.disclaimer}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 lg:w-1/2' style={{ marginBottom: '112rem' }}>
        <div className="p-8 prose dark:prose-invert">
          <div className="p-4 max-w-md mx-auto bg-white rounded-xl space-y-4">
            <div className="text-sm text-zinc-500" style={{ marginLeft: '-13rem' }}>
              <Link to="/">Home</Link> /
              <Link to={`/${product.category.replace(/ /g, '-').toLowerCase()}`}>{product.category}</Link> /
              <Link to={`/product/${product.id}`}>{product.brand}</Link>
            </div>
            <h1 className="text-2xl font-bold" style={{ marginLeft: '-9rem' }}>{product.name}</h1>
            <Link to="/" className="text-green-600 hover:underline" style={{ marginLeft: '-17rem' }}>View all by {product.brand}</Link>
            <hr />
            <div className="rounded-lg p-4 flex items-center">
              <div className="flex flex-col items-center mr-3 mb-3">
                <p className="text-xs text-zinc-500">{product.weight}</p>
                <p className="text-lg font-bold">MRP {product.price}</p>
              </div>
              <button className="mt-2 bg-green-100 text-green-700 px-4 py-1 rounded border border-green-700 h-8" style={{ marginLeft: '12rem' }}>
                <span>ADD</span>
              </button>
            </div>
            <div>
              <h2 className="text-lg font-bold" style={{ marginLeft: '-15rem' }}>Why shop from blinkit?</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" alt="Superfast Delivery" className='w-1/2 h-10 object-contain mb-4' style={{ marginLeft: '-3rem' }} />
                  <div>
                    <div className="font-bold mb-0" style={{ marginLeft: '-15rem' }}>Superfast Delivery</div>
                    <div className="first-row__description text-center text-sm text-gray-800 p-4" style={{ marginLeft: '-5rem' }}>
                      Get your order delivered to your doorstep at the earliest from dark stores near you.
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" alt="Best Prices & Offers" className='w-1/2 h-10 object-contain mb-4' style={{ marginLeft: '-3rem' }} />
                  <div>
                    <div className="font-bold mb-0" style={{ marginLeft: '-15rem' }}>Best Prices & Offers</div>
                    <div className="first-row__description text-center text-sm text-gray-800 p-4" style={{ marginLeft: '-5rem' }}>
                      Cheaper prices than your local supermarket, great cashback offers to top it off.
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" alt="Wide Assortment" className='w-1/2 h-10 object-contain mb-4' style={{ marginLeft: '-3rem' }} />
                  <div>
                    <div className="font-bold mb-0" style={{ marginLeft: '-15rem' }}>Wide Assortment</div>
                    <div className="first-row__description text-center text-sm text-gray-800 p-4" style={{ marginLeft: '-5rem' }}>
                      Choose from 5000+ products across food, personal care, household & other categories.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
