import "./App.css";

import React, { useEffect } from "react";

import logo from "./logo.svg";

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== "granted") {
    throw new Error("Permission not granted for Notification");
  }
};

const showLocalNotification = async (title: string, body: string) => {
  var sw = await navigator.serviceWorker.getRegistration(
    `${process.env.PUBLIC_URL}/service-worker.js`
  );
  const options = {
    body,
    // here you can add more properties like icon, image, vibrate, etc.
  };

  sw?.showNotification(title, options);
  console.log("pokazalem");
};

function getSW() {
  return navigator.serviceWorker.getRegistration(
    `${process.env.PUBLIC_URL}/service-worker.js`
  );
}

function App() {
  useEffect(() => {
    requestNotificationPermission()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => showLocalNotification("title", "body")}>
          Click button
        </button>
      </header>
    </div>
  );
}

export default App;
