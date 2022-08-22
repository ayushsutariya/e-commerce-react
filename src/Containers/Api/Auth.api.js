import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

export const SignupApi = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage);
            // ..
        });

}