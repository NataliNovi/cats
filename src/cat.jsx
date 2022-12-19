/*import './cat.css';

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


//перепишем через классы
/*import './cat.css';
import React from 'react';

class Cat extends React.Component {
    render() {
    return (
        <div className="cat-card">
            <img src ={this.props.url} alt="img"></img>
            <div className="cat-name">{this.props.name}</div>
            <div className="cat-text">Hello everybody</div>
            <div class="cat-text">{this.props.text}</div>
            <button>Take home</button>
        </div>
    );
}};
export default Cat;*/

//объявим пропсы через переменную
import './cat.css';
import React from 'react';

class Cat extends React.Component {
    render() {
        const {name, url, text} = this.props;
    return (
        <div className="cat-card">
            <img src ={url} alt="img"></img>
            <div className="cat-name">{name}</div>
            <div className="cat-text">Hello everybody</div>
            <div class="cat-text">{text}</div>
            <button>Take home</button>
        </div>
    );
}};
export default Cat;

/* без пропсов
import './cat.css';

function Cat() {
    return (
        <div className="cat-card">
            <img src = "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?w=2141" alt="img"></img>
            <div className="cat-name">Tralala</div>
            <div className="cat-text">Hello everybody</div>
            <button>Take home</button>
        </div>
    );
}
export default Cat;*/