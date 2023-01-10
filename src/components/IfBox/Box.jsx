import React from 'react'
import './box.scss';
import className from 'classnames';

/*export const boxObj = {
    isActive: true
}*/ 
//закинем в app.js


export default function Box(props) {
    //let classname='box';
    //if(true) classname += '__active'

    //if(boxObj.isActive) classname += '__active'
    //сейчас попробуем через библиотеку класснеймс, поэтому старый иф убираем
    //if(props.isActive) classname += '__active'

    /*let classForBox = className({
        'box': true,
        'box__active': props.isActive
    });*/

    let classForBox = className({
        'box': !props.isActive,
        'box__active': props.isActive
    });

    return (
        //<div className={classname}>
        <div className={classForBox}>
            Simply Box
        </div>

    )
}