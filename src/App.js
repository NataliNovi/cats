import React from 'react';
import './App.css';
import './components/cat.css';
import Cat from './components/cat.jsx';

const cats = [
  {name: "Taya", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?w=2141", text: "I'II be back"},
  {name: "Loya", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1203623294-e1611859551414.jpg?w=1999"},
  {name: "Maya", url: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1253926491.jpg?w=2122"}
]

class App extends React.Component {
  render() {
  return (
    <div className="App">
   {
    cats.map((cat) =>
    <Cat name={cat.name} url={cat.url} text={cat.text}></Cat>)
   }
    </div>
  );
}}
export default App; 


/* вытягиваем данные из массива*/
/*class App extends React.Component {
  render() {
  return (
      <React.Fragment>
     <Cat name={cats[0].name} url={cats[0].url}/>
     <Cat name={cats[1].name} url={cats[1].url}/>
     <Cat name={cats[2].name} url={cats[2].url}/>
     </React.Fragment>
  );
}}
export default App;*/


/*class App extends React.Component {
  render() {
  return (
    <div className="App">
     <Cat name="Manya" url="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?w=2141"></Cat>
     <Cat name="Zoya" url="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1203623294-e1611859551414.jpg?w=1999"></Cat>
     <Cat name="Niya" url="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1253926491.jpg?w=2122"></Cat>
    </div>
  );
}} export default App;*/


