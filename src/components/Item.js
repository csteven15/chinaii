import React, { Fragment } from 'react';

const Items = (props) => {
  const { name, isHot, description, prices } = props.data;

  const priceList = [];
  for (let i in prices) {
    if (prices[i].label) {
      priceList.push(
        <span key={i} style={{ fontWeight: 500, fontSize: '12px' }}><br />{prices[i].label}: ${prices[i].price.toFixed(2)}</span>
      );
    }
    else {
      priceList.push(
        <span key={i} style={{ fontWeight: 500, fontSize: '12px' }}><br />${prices[i].price.toFixed(2)}</span>
      );
    }
  }
    return (
      <Fragment>
        <h5>
          { name }&nbsp;&nbsp;{ isHot ? <img src={require('../images/fire.svg')} alt="hot" width="10" /> : null }
          { description ? <span style={{ fontWeight: 300, fontSize: '10px' }}><br />{description}</span> : null }
          { priceList }
        </h5>
      </Fragment>
    );
}

export default Items;
