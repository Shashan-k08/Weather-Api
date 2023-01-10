import './index.css';
import './App.css';
import Search from './components/Search';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
function App() {
  const [progress, setProgress] = useState(0);
  return (
    <div className="box-primary">

      <div className="box-primary-1">
        <div className="box-primary-1-box">
          <h1>   Mausam <img src="https://cdn-icons-png.flaticon.com/512/4814/4814268.png" alt="" style={{ height: "3rem", width: "3rem" }} /></h1>
        </div>
        <div className="search-box"> <LoadingBar
          color='#e11e50'
          height={3}
          progress={progress}
        />
          {<Search setProgress={setProgress}/>}
        </div>
      </div>


    </div>
  );
}

export default App;
