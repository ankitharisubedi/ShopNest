import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGooglePopup, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in.styles.scss';
import Button from "../button/button.component";
const defaultFormFields = {
    email: '',
    password: '',
} 

const SignIn = () => {

    const[formFields, setFormFields] = useState(defaultFormFields);
    const{email, password} = formFields;
    const signInWithGoogle = async () => {
     await signInWithGooglePopup();
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const {user} = await signInAuthWithEmailAndPassword(email,password);
            resetFormFields();
            
        }
        catch(error){
            switch(error.code) {
                case 'auth/wrong-password':  
                alert('Incorrect password for email.')
                break;
                case 'auth/user-not-found':   
                alert('Email address not found.')
                break;
                default:
                    console.log(error);
            }
           
        
           return console.log(error);
        }
    }
    

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})

    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

   
    return (
        <div className="sign-in-container">
        <h2>Already have an account?</h2>
            <span>Sign In with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
               
            </form>
        </div>
    )
}

export default SignIn;