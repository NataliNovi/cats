import React from 'react';
import './App.css';
import Card from './components/Card.jsx';

//import Box from './components/IfBox/Box';


//import CardList from './components/CardList';
//import photo from '/Users/nn/Desktop/Frontend/React/week26/cats/src/assets/photo/boty.jpeg';


const cards = [
  {title: "Зимние ботинки", price:'99', description: "Такие только у нас", url: "https://www.ecco-shoes.by/images/eshop/img/jpg/bigw/722363_53806.jpg", textys: "Отличный выбор", addedToCard: 0,},
  {title: "Пляжные тапки", price:'23', description: "Надеюсь, пригодятся", url: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d5/P00432613.jpg", textys: "Верные друзья", addedToCard: "2"},
  {title: "Праздничные туфли", price:"85", description: "Теперь и в светлом цвете", url: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/0d/P00683243.jpg", textys: "Будь королевой", addedToCard: "3"},
];

console.log(cards);



class App extends React.Component {
 
  
  render() {

    /*const boxObj = {
      isActive: true
    }*/

  return (
    <div className="App">
   {
    cards.map((card) =>
    <Card key={card.title} title={card.title} price={card.price} description={card.description} url={card.url} textys={card.textys} addedToCard={card.addedToCard}></Card>)
   }


   
   </div>

)}}
export default App; 

//<Box isActive={boxObj.isActive}/> это должно быть в диве


