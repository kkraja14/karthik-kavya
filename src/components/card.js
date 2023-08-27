import './card.css';
import bg from '../images/hero-img (1).jpg'
// import bbg2 from '../src/images/book-car.png';
function Card(){
    return (
        <div>
            <div className="header">

                <div className="header1">
                    <img src={bg}/>
                </div>
               
                <div className="header2">
                    <h1>RENT CAR 
                        EXPERTS
                        SERVICE</h1>
                        <button>CANTACT US</button>

                </div>
           </div>
        </div>


    );

}
export default Card;