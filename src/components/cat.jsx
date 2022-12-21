
//import './cat.scss';
import './cat.modules.scss';
import React from 'react';



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
export default Cat;

