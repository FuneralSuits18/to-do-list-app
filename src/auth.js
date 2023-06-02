/* eslint-disable max-len */
import {app} from './firebase';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth';

const auth = getAuth();


let uid;
let userRef;
/** Login to Google */
async function login() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        uid = user.uid;
        userRef = user;
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
}
document.querySelector('.signin').addEventListener('click', login);

// /**
//  * Login using Google provided button
//  * @param {object} response
//  */
// function handleCredentialResponse(response) {
//   // decodeJwtResponse() is a custom function defined by you
//   // to decode the credential response.
//   const responsePayload = decodeJwtResponse(response.credential);

//   console.log('ID: ' + responsePayload.sub);
//   console.log('Full Name: ' + responsePayload.name);
//   console.log('Given Name: ' + responsePayload.given_name);
//   console.log('Family Name: ' + responsePayload.family_name);
//   console.log('Image URL: ' + responsePayload.picture);
//   console.log('Email: ' + responsePayload.email);
// }


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

/** Sign out */
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

export {login, uid, userRef, auth};
