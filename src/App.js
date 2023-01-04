import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import photoBoty from './assets/photo/boty.jpeg';
import photoTapki from './assets/photo/tapki.webp';
//import CardList from './components/CardList';
//import photo from '/Users/nn/Desktop/Frontend/React/week26/cats/src/assets/photo/boty.jpeg';

/*const cats = [
  {name: "Taya", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?w=2141", text: "I'II be back"},
  {name: "Loya", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1203623294-e1611859551414.jpg?w=1999"},
  {name: "Maya", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1253926491.jpg?w=2122"},
];*/

const cards = [
  {title: "Зимние ботинки", price:'99', description: "Такие только у нас", url: "https://www.ecco-shoes.by/images/eshop/img/jpg/bigw/722363_53806.jpg", textys: "Отличный выбор"},
  {title: "Пляжные тапки", price:'23', description: "Надеюсь, пригодятся", url: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/d5/P00432613.jpg", textys: "Верные друзья"},
  {title: "Праздничные туфли", price:"85", description: "Теперь и в светлом цвете", url: "https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/0d/P00683243.jpg", textys: "Будь королевой"},
];



class App extends React.Component {
  render() {
  return (
    <div className="App">
   {
    cards.map((card) =>
    <Card title={card.title} price={card.price} description={card.description} url={card.url} textys={card.textys}></Card>)
   }
   </div>

)}}
export default App; 




