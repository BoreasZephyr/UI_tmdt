import '../Css/Base.css'
import '../Css/Grid.css'
import '../Css/Main.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-brands-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons';
import SpecialBtn from './Special_btn';

function ProductItem(props){
    return <a href="#" className="productItem__container col l-4 m-6 c-12">
    <div className="productItem">
        <div className="productItem__img"
            style={{backgroundImage: `url(${props.url})`}}>
        </div>
        <div className="productItem__info col l-12">
            <div className="productItem__name">Casio-MTP-VT01L-2B</div>
            <div className="productItem__date-remain">00H : 00M : 00S</div>
        </div>
        <div className="productItem-trade__info">
            <div className="productItem__price">400 $</div>
            <SpecialBtn value='Bid now' className='productItem-pay__btn'/>
            {/* <button className="productItem-pay__btn btn primary-btn">Place Bid</button> */}
        </div>
    </div>
</a>
}
export default ProductItem;