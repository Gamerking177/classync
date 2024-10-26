import { 
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  sendPasswordResetEmail, 
  signInWithEmailAndPassword, 
  updatePassword, 
  signOut 
} from 'firebase/auth';
import { auth } from './firebase';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return signOut(auth);
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  const user = auth.currentUser;
  if (user) {
    return updatePassword(user, password);
  } else {
    throw new Error("No authenticated user found");
  }
};

export const doSendEmailVerification = () => {
  const user = auth.currentUser;
  if (user) {
    return sendEmailVerification(user, {
      url: `${window.location.origin}/home`,
    });
  } else {
    throw new Error("No authenticated user found");
  }
};
