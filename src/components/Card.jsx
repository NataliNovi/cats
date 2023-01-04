import styles from './card.module.scss';
import AddToCartButton from './AddToCartButton/AddToCartButton';
import AddToCartForm from './AddToCardForm/AddToCardForm';
//import photoBoty from '..//assets/photo/boty.jpeg';
//import photoTapki from '..//assets/photo/tapki.webp';


//через if
/*function Card(props) {
    const {title, url, description, price, addedToCart} = props;
    let actionItem;
    if (addedToCart) {
        actionItem = <AddToCartForm addedToCart={addedToCart} />;
    } else {
        actionItem = <AddToCartButton />;
    }
    return (
        <div className={styles.cardsContainer}>
            <div>
            <div className="card-body">
                <img className={styles.shoesImg} src={url} alt={title}/>
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
            </div>
            <div className={styles.cardFooter}>
                <span className="card-price">${price}</span>
             {actionItem}
                </div>
            </div>
        </div>
    );
}
export default Card;*/


//через тернарный оператор

function Card(props) {
    const {title, url, description, price, addedToCart} = props;
    
        return (
            <div className={styles.cardsContainer}>
            <div>
            <div className="card-body">
                <img className={styles.shoesImg} src={url} alt={title}/>
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
            </div>
            <div className={styles.cardFooter}>
                <span className="card-price">${price}</span>
                    {addedToCart
                        ? <AddToCartForm addedToCart={addedToCart} />
                        : <AddToCartButton />
                    }
                </div>
                </div>
            </div>
        );
    }

export default Card;


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
/*import './cat.scss';

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
export default Cat;*/

