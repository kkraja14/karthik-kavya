import './login.css';
import kk from '../images/book-car.png';
function Login() {
    return (
        <div class="containerbox">
            <div class="containerbox1">
                <div class="container">
                    <div class="form">
                        <div class="form1">
                            <div class="form2">
                                <lable class="formget">Pick Up Location</lable>
                                <br></br>
                                <input type="text" class="book" placeholder="abc" ></input>

                            </div >
                            <div class="form3">
                                <lable class="formget">Drop Location</lable>
                                <br></br>
                                <input type="text" class="book" placeholder="abc" ></input>
                            </div>
                        </div >
                        <div class="form4">
                            <div class="form5">
                                <lable class="formget">Pick Up Date</lable>
                                <br></br>
                                <input type="text" class="book" placeholder='01/01/2045'></input>

                            </div>
                            <div class="form6">
                                <lable class="formget">Return Date</lable>
                                <br></br>
                                <input type="text" class="book" placeholder='01/01/2045'></input>
                            </div>

                        </div>
                    </div>
                    <div class="form7">
                        <div class="form8">
                            <button>Search</button>
                        </div>

                    </div>
                </div>
            </div>
            <div class="container1">
                <img src={kk} />
            </div>
        </div>
    )
}
export default Login;