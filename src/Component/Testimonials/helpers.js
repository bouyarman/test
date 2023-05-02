export const btnsLogic = (condition, setTo, value, otherValue) => {
  let currentIndex;
  if (condition) {
    currentIndex = value;
    setTo(currentIndex);
  } else {
    currentIndex = otherValue;
    setTo(currentIndex);
  }
};
export const dotsLogic = (setTo, i) => {
  return () => {
    setTo(i);
  };
};
export const hamzaData = {
  imgUrl: require("../../imgs/customersImgs/cus-1.jpg"),
  name: "Hamza Bouyarman",
  rating: "⭐⭐⭐⭐⭐",
  title: "Bouyarman Hamza  Said :",
  comment:
    "We had an amazing experience from the moment i joined the trip until the last day, We really like the way Moroccan people treated us, and i like the organization and the planning, we took a tour around Morocco, and we loved this country so much, we will revisit it really soon!",
};
export const viratData = {
  imgUrl: require("../../imgs/customersImgs/cus-2.jpg"),
  name: "Virat Kohli",
  rating: "⭐⭐⭐⭐⭐",
  title: "Virat Kohli Said :",
  comment:
    "That was one of my best travels ever, because of the beauty of Morocco as a country, and it's lovely people, and because of the way this trip was organized, and the amount of the thing discovered during this trip, really nice and peacful teammates, helping each other, enjoying every moment, Thank you for this unforgettable experience ",
};
export const alyssaData = {
  imgUrl: require("../../imgs/customersImgs/cus-3.jpg"),
  name: "Alyssa Montes",
  rating: "⭐⭐⭐⭐⭐",
  title: "Alyssa Montes Said :",
  comment:
    "Actually if i had the choice again to choose with which team should i go with, i will definitely choose you again, i enjoyed every moment in Morocco with the rest, and i loved moroccan people as well, the smile they give when they see a tourist, the way they respect, amazing country! amazing people! see you really soon again!",
};
export const amyData = {
  imgUrl: require("../../imgs/customersImgs/cus-4.jpg"),
  name: "Amy Sanders",
  rating: "⭐⭐⭐⭐⭐",
  title: "Amy Sanders Said :",
  comment:
    "WOOW! i have never thought that i will pass the trip like this, providing all those things with this price and this quality, is actually really nice, and also the places we visited during this trip, and i saw the beauty of Morocco, and why it is one of the best country for tourist, for sure i will revisit it again, but next time with my friends, and of course with you! ",
};
