import React from 'react';
import styles from './App.module.scss';
import Cat from './components/cat.jsx';

const cats = [
  {name: "Taya", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?w=2141", text: "I'II be back"},
  {name: "Loya", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1203623294-e1611859551414.jpg?w=1999"},
  {name: "Maya", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1253926491.jpg?w=2122"}
];



class App extends React.Component {
  render() {
  return (
    <div className={styles.App}>
   {
    cats.map((cat) =>
    <Cat name={cat.name} url={cat.url} text={cat.text}></Cat>)
   }

   <button className={styles.button}>Click on me</button>
    </div>
  );
}}
export default App; 




