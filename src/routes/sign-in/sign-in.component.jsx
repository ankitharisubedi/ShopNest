import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUp from '../../components/sign-up/sign-up.component';
import Button from '../../components/button/button.component';
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);    
    }
    return (
        <div>
            <h1> This is the sign in page</h1>
            <Button buttonType='google' onClick={logGoogleUser}>Sign in with Google</Button>
            <SignUp />
        </div>
    );
}; 
export default SignIn;