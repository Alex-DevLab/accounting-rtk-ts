import SignIn from "./SignIn.tsx";
import SignUp from "./SignUp.tsx";
import {useState} from "react";

const Guest = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div>
            {isSignIn ? <SignIn/> : <SignUp/>}
            <button onClick={() => setIsSignIn(!isSignIn)}>
                Switch to {isSignIn ? 'SignUp' : 'SignIn'}
            </button>
        </div>
    )
}

export default Guest;