
/*
function Cat(props) {
    return (
        <div className="cat-card">
            <img src ={props.url} alt="img"></img>
            <div className="cat-name">{props.name}</div>
            <div className="cat-text">Hello everybody</div>
            <div class="cat-text-test">{props.text}</div>
            <button>Take home</button>
        </div>
    );
}
export default Cat;*/


//перепишем через классы. обязательно используем this.props
//объявим пропсы через переменную
//здесь используем константу style
/*import './cat.scss';
import React from 'react';

const style={backgroundColor:'pink'};

class Cat extends React.Component {
    render() {
        const {name, url, text} = this.props;
    return (
        <div className="cat-card">
            <img className="cat-img" src ={url} alt="img"></img>
            <div className="cat-name">{name}</div>
            <div className="cat-text">Hello everybody</div>
            <div class="cat-text">{text}</div>
            <button className="button">Take home</button>
        </div>
    );
}};
export default Cat;*/


/* без пропсов*/
import './cat.scss';

function Cat(props) {
   
    return (
        <div className="cat-card">
            <img src ={props.url} alt="img"></img>
            <div className="cat-name">{props.name}</div>
            <div className="cat-text">{props.text}</div>
            <button style={{backgroundColor:'orange'}}>Take home</button>
            <button>Call me</button>
          
        </div>
    );
}
export default Cat;

