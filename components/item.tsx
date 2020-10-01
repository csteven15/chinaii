
import React from 'react'

export default function Items(props) {
  const { name, isHot, description, prices } = props.data
  const priceList = []
  for (let i in prices) {
    priceList.push(
      <p className="mb-0" key={i} style={{ fontWeight: 500, fontSize: '9px' }}>{prices[i].label || "Per order: "}: ${prices[i].price.toFixed(2)}</p>
    )
  }

  return (
    <div className="my-2">
      <p className="mb-0 font-weight-bold" style={{ fontSize: "14px" }}>
        {name} &nbsp; {isHot ? <img src={'/images/fire.svg'} alt="hot" width="9px" /> : null}
      </p>
      { description ? <p className="mb-0" style={{ fontSize: '9px' }}>({description})</p> : null}
      { priceList}
    </div>
  )
}