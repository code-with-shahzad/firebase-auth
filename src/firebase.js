import {initializeApp} from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";


const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
});

export const auth = getAuth(app);
export default app;
