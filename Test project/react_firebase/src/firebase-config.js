import { initializeApp } from "@firebase/app";
import { getRemoteConfig } from "@firebase/remote-config";

const firebaseConfig = {
  apiKey: "AIzaSyBtRIMLkSVfptH4ASinlEfnKhP-mBwUV24",
  authDomain: "react-register-12564.firebaseapp.com",
  databaseURL: "https://react-register-12564.firebaseio.com",
  projectId: "react-register-12564",
  storageBucket: "react-register-12564.appspot.com",
  messagingSenderId: "1074586181097",
  appId: "1:1074586181097:web:47236fd450006cd1fabf78",
  measurementId: "G-JSN76LC2EC",
};

export const app = initializeApp(firebaseConfig );
export const remoteConfig = getRemoteConfig(app);
