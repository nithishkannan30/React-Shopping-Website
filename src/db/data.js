import { AiFillStar } from "react-icons/ai";
import React from 'react';


const data = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL.AC_UX575.jpg",
    title: "Nike Air Monarch IV",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "400",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL.AC_UX575.jpg",
    title: "Nike Air Vapormax Plus",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "250",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L.AC_UY695.jpg",
    title: "Nike Waffle One Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "350",
    newPrice: "300",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L.AC_UX575.jpg",
    title: "Nike Running Shoe",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "300",
    newPrice: "200",
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL.AC_SY625._SX._UX._SY._UY.jpg",
    title: "Flat Slip On Pumps",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "300",
    newPrice: "250",
    company: "Vans",
    color: "green",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL.AC_UX625.jpg",
    title: "Knit Ballet Flat",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "700",
    newPrice: "500",
    company: "Adidas",
    color: "black",
    category: "flats",
  },

  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L.AC_UY695.jpg",
    title: "Loafer Flats",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "800",
    newPrice: "700",
    company: "Vans",
    color: "white",
    category: "flats",
  },

  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL.AC_UY695.jpg",
    title: "Nike Zoom Freak",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "500",
    newPrice: "400",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL.AC_UY695.jpg",
    title: "Nike Men's Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "500",
    newPrice: "400",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS.AC_UX575.jpg",
    title: "PUMA BLACK-OCE",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "500",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL.AC_UY575.jpg",
    title: "Pacer Future Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "500",
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL.AC_UX575.jpg",
    title: "Unisex-Adult Super",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL.AC_UX575.jpg",
    title: "Roma Basic Sneaker",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "150",
    company: "Puma",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL.AC_UY575.jpg",
    title: "Pacer Future Doubleknit",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS.AC_UX575.jpg",
    title: "Fusion Evo Golf Shoe",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "100",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS.AC_UX575.jpg",
    title: "Rainbow Chex Skate",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "100",
    company: "Vans",
    color: "red",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL.AC_UX575.jpg",
    title: "Low-Top Trainers",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "100",
    company: "Vans",
    color: "white",
    category: "sandals",
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL.AC_UX575.jpg",
    title: "Vans Unisex Low-Top",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "100",
    company: "Vans",
    color: "blue",
    category: "sandals",
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL.AC_UY575.jpg",
    title: "Classic Bandana Sneakers",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "50",
    company: "Nike",
    color: "black",
    category: "sandals",
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML.AC_UX695.jpg",
    title: "Chunky High Heel",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "50",
    company: "Vans",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL.AC_UY695.jpg",
    title: "Slip On  High Heel",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "400",
    newPrice: "300",
    company: "puma",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL.AC_UY625.jpg",
    title: "DREAM PAIRS  Shoes",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "900",
    newPrice: "750",
    company: "Nike",
    color: "red",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL.AC_UX575.jpg",
    title: "Nike Air Vapormax",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "800",
    newPrice: "700",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },
  

  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L.AC_UY625.jpg",
    title: "Low Mid Heels",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "300",
    newPrice: "200",
    company: "Nike",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL.AC_UY675.jpg",
    title: "Chunky High Heel",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "200",
    newPrice: "150",
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L.AC_UY625.jpg",
    title: "Amore Fashion Stilettos",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "200",
    newPrice: "150",
    company: "Adidas",
    color: "white",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL.AC_UY625.jpg",
    title: "Bridal Sandals Glitter",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "700",
    newPrice: "600",
    company: "Adidas",
    color: "black",
    category: "heels",
  },
  {
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L.AC_UY695.jpg",
    title: "Wedding Prom Bridal",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "600",
    newPrice: "500",
    company: "Adidas",
    color: "black",
    category: "flats",
  },
];

export default data;