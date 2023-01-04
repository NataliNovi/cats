import styles from './addToCardForm.module.scss';

function AddToCartForm(props) {
    return (
        <form>
            <button className={styles.deleteButton}>-</button>
            <input className="card-form__input" value={props.addedToCart}/>
            <button className={styles.addButton}>+</button>
        </form>
    );
}

export default AddToCartForm;