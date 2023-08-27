import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Servercall() {
    const [text, settext] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                settext(res.data)
            })
            .catch(() => {
                settext([]);
            })
    }, [])
    return (
        <>
            <h1>Welcome to Yaaraa</h1>
            {
                text.map((text,id) => {

                    return(
                        <Link to={"/bret"}>{id} {text.username}</Link>
                    )
                })
            }
        </>
    )
}
export default Servercall;