import {  useEffect } from "react";
import "./App.css";
import { app, remoteConfig } from "./firebase-config";


function App() {

  useEffect(() => {
    console.log('==>', remoteConfig, app );
    // remoteConfig()
    //   .then((res) => {
    //     console.log("RES", res);
    //   })
    //   .catch((error) => {
    //     console.log(error.code);
    //   });
  }, []);
  return (
    <div className="App">
      <>
      Firebase App
     
      </>
    </div>
  );
}

export default App;
