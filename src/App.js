import {useEffect, useState} from 'react';
import './App.css';
//http://localhost:3000/#access_token=BQCDLpWRq4WVjdEaFVZl3ldRaOlk1jitzfRrIzRBvmSOxYHWWTe7SSgs0Ym89jOeopYByn-8rFqI5wvlv_sjWr75kR47o1cXM3j_AxRCu22A1qyWsoj_-m-WO7A9hXRtYg5V2Zxa3rMRLcF3zfeA9PgszYDheBCFVzs511hpUoMuGUKiNSNDgXyhVxPopZ-3&token_type=Bearer&expires_in=3600
function App() {
  const CLIENT_ID = "817df3f133a144bf8659ce43a1444bc3"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      </header>
    </div>
  );
}

export default App;
