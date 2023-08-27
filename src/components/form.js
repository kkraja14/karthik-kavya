import { useState , useEffect} from "react";
import "./form.css";

function Form(){
    var initialvalues = {username:"",email:"",password:""};
    const [formvalues,setformvalues] = useState(initialvalues);
    const [formerrors,setformerrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);


    const handleChange = (e)=>{
        const{name,value}=e.target;
        setformvalues({...formvalues,[name]:value});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        setformerrors(validate(formvalues));
        setIsSubmit(true);
    };

    useEffect(()=>{
        if(Object.keys(formerrors).length === 0 && isSubmit);
    },[formerrors]);

    const validate=(values)=>{
        const errors = {};
        const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
        if(!values.username){
            errors.username = "username is required";
        }
        if(!values.email){
            errors.email = "email is required";
        }else if (!regex.text(values.email)) {
            errors.email = "this is not a valid email format!"
        }
        if(!values.password){
            errors.password = "password is required";
        }else if (values.password < 8) {
            errors.password = "password must be more than 4 characters";
        }    
        return errors;
    };
     
    return (
        <div className="container" >
            {/* <pre>{JSON.stringify(formvalues,undefined,2)}</pre> */}
            <form onSubmit={handleSubmit}>
                <h2>Login form</h2>
                <div className="ui-form">
                    <div className="field">
                        <label>Username</label><br/>
                        <input type="text"
                         name="username" 
                         placeholder="username"
                         value={formvalues.username}
                         onChange={handleChange}
                         />
                    </div>
                    <p className="paint">{formerrors.username}</p>
                    <div className="field">
                        <label> Email</label><br/>
                        <input type="email"
                         name="email"
                          placeholder="email"
                          value={formvalues.email}
                          onChange={handleChange}
                          />
                    </div>
                    <p className="paint">{formerrors.email}</p>
                    <div className="field">
                        <label>Password</label><br/>
                        <input type="password"
                         name="password"
                          placeholder="password"
                          value={formvalues.password }
                          onChange={handleChange}
                          />
                    </div>
                    <p className="paint">{formerrors.password }</p>
                    <div className="field">
                        <label>Gender</label><br/>
                        <input type="radio"
                        name="gender"
                        value={formvalues.radio}
                        onChange={handleChange}
                          /><label >Male</label>
                        <input type="radio" name="gender"/><label>female</label>
                    </div>
                    <button className="ui-button">Submit</button>
                </div>
            </form>
            <pre>{JSON.stringify(formvalues,undefined,2)}</pre>
             
        </div>
    )
}
export default Form;