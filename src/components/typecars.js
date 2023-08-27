import './typecars.css';
// import bbg from '../src/images/bbg.png';
function Typecars(props) {
    return (
        <div className="cars-2">
            <img id='ccaarr' src={props.img}/>
            <h2 className='car-3'>{props.header}</h2>
            <p className='para'>{props.para}</p>
            <button className='btn'>{props.but}</button>
        </div>
    )
}
export default Typecars;