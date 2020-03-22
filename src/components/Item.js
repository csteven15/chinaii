  
import React from 'react';

function Items(props) {
  const { name, isHot, description, prices } = props.data;

  const priceList = [];
  for (let i in prices) {
    if (prices[i].label) {
      priceList.push(
        <p className="mb-0" key={i} style={{ fontWeight: 500, fontSize: '9px' }}>{prices[i].label}: ${prices[i].price.toFixed(2)}</p>
      );
    }
    else {
      priceList.push(
        <p className="mb-0" key={i} style={{ fontWeight: 500, fontSize: '9px' }}>Per order: ${prices[i].price.toFixed(2)}</p>
      );
    }
  }
    return (
      <div>
        <p className="mb-0">
          { name } &nbsp; { isHot ? <img src={require('../images/fire.svg')} alt="hot" width="9px" /> : null }
        </p>
        { description ? <p className="mb-0" style={{ fontSize: '9px' }}>({description})</p> : null }
        { priceList }
      </div>
    );
}

export default Items;