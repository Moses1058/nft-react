import cube from './assets/cube.jpg';
import eye from './assets/icon-view.svg';
import eth from './assets/icon-ethereum.svg';
import clock from './assets/icon-clock.svg';
import avatar from './assets/image-avatar.png';
import './App.css';

function App() {
  return (
    <div className="card">
      <div className="images">
        <div className="color"></div>
        <img src={cube} alt="cube" />
        <img src={eye} alt="eye" />
      </div>
      <h1>Equilibrium #3429</h1>
      <p className="caption">Our Equilibrium collection promotes balance and calm.</p>
      <div className="release">
        <div className="info price">
          <img src={eth} alt="eth" />
          <h3>0.041 ETH</h3>
        </div>
        <div className="info date">
          <img src={clock} alt="clock" />
          <h3>3 days left</h3>
        </div>
      </div>
      <hr />
      <div className="creator">
        <img src={avatar} alt="avatar" />
        <p>Creation of <span>Jules Wyvern</span></p>
      </div>
    </div>
  );
}

export default App;
