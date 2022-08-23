import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

export const SignupApi = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    sendEmailVerification(user)
                }
              });
        })
        .then((user) => {
            // Signed in 
            // const user = userCredential.user;

            onAuthStateChanged(auth, (user) => {
                if (user.emailVerified) {
                    console.log("Email is Successfully verified");
                } else{
                    console.log("Check your Email");
                }
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if(errorCode.localeCompare("auth/email-already-in-use") === 0){
                console.log("Email is Already Registered");
            } else {
                console.log(errorCode);
            }
});

}