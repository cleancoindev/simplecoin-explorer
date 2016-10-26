import React from 'react';
import './Coins.css';

const Coins = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <p>Coins: {Object.keys(props.coins).length}</p>
      </div>
      {
        Object.keys(props.coins).map(key => 
          <div className="col-sm-6 Coins-box" key={key}>
            <p>
              <a href={`#${props.coins[key]['coinId']}`}>{props.coins[key]['coinId']}</a>
            </p>
            <p>
              Owner: {props.coins[key].owner || '(Pending...)'}
            </p>
          </div>
        )
      }
    </div>
  );
}

export default Coins;