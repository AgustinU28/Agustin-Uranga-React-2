import './CartWidget.css'
import cart from './assets/cart.svg'

const CartWidget = ({ totalQuantity }) => {
    return(
        <div className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            { totalQuantity }
        </div>
    );
}

export default CartWidget