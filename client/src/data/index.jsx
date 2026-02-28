import burger from "../assets/images/food-img14(1).png";
import suya from "../assets/images/food-img34.png";
import dessert from "../assets/images/food-img2.png";
import smoothie from "../assets/images/food-img31.png";
import pizza from "../assets/images/food-img3.jpg";
import chicken from "../assets/images/chicken.jpg";
import smallchops from "../assets/images/small-chops.png";
import sharwarma from "../assets/images/food-img25.png";

import burger2 from "../assets/images/food-img33.png";
import pizza2 from "../assets/images/food-img18.png";
import chickenandchips from "../assets/images/food-img8.png";
import sharwarma2 from "../assets/images/sharwarma.jpg";

import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export const categories = [
  { id: 1, name: "Burgers", image: burger },
  { id: 2, name: "Pizza", image: pizza },
  { id: 3, name: "Fried Chicken", image: chicken },
  { id: 4, name: "Shawarma", image: sharwarma },
  { id: 5, name: "Small Chops", image: smallchops },
  { id: 6, name: "Suya", image: suya },
  { id: 7, name: "Smoothie", image: smoothie },
  { id: 8, name: "Dessert", image: dessert },
];

export const menuItems = [
  {
    id: 1,
    name: "Smash Burger",
    price: "3,500",
    image: burger2,
    tag: "Popular",
  },
  { id: 2, name: "Pepperoni Pizza", price: "5,200", image: pizza2, tag: "New" },
  {
    id: 3,
    name: "Chicken and chips",
    price: "5,800",
    image: chickenandchips,
    tag: null,
  },
  {
    id: 4,
    name: "Chicken Shawarma",
    price: "3,500",
    image: sharwarma2,
    tag: "Popular",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "Regular Customer",
    review:
      "The Craving never disappoints. Their smash burger is honestly the best I have had in Lagos. Fast delivery too.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emeka Nwachukwu",
    role: "Food Lover",
    review:
      "I ordered the shawarma and small chops for my birthday and everyone was impressed. Will definitely order again.",
    rating: 5,
  },
  {
    id: 3,
    name: "Temi Adeleke",
    role: "Loyal Customer",
    review:
      "Best pizza in town and the portions are generous. The online ordering process is smooth and delivery is always on time.",
    rating: 5,
  },
];

export const footerLinks = {
  quickLinks: [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Menu", href: "#menu" },
    { id: 3, name: "About", href: "#about" },
    { id: 4, name: "Contact", href: "#booking" },
  ],
  menu: [
    { id: 1, name: "Burgers", href: "#categories" },
    { id: 2, name: "Pizza", href: "#categories" },
    { id: 3, name: "Shawarma", href: "#categories" },
    { id: 4, name: "Small Chops", href: "#categories" },
    { id: 5, name: "Desserts", href: "#categories" },
  ],
};

export const socialLinks = [
  { id: 1, icon: <FaFacebook />, href: "#" },
  { id: 2, icon: <FaInstagram />, href: "#" },
  { id: 3, icon: <FaTwitter />, href: "#" },
  { id: 4, icon: <FaTiktok />, href: "#" },
];

export const navLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Menu", href: "#menu" },
  { id: 3, name: "About Us", href: "#about" },
  { id: 4, name: "Contact Us", href: "#booking" },
];

export const aboutPoints = [
  "Delicious and Fresh Ingredients",
  "Best Price and Offers",
  "Made By Professional Chefs",
];

export const bookingInfo = [
  { id: 1, icon: <FaMapMarkerAlt />, text: "123 Food Street, Lagos, Nigeria" },
  { id: 2, icon: <FaPhoneAlt />, text: "+234 801 234 5678" },
  { id: 3, icon: <FaClock />, text: "Mon to Sun: 9am to 11pm" },
];
