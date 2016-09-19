import React from 'react'

const ResultPage = (props) => (
  <div>
    <h1>{props.data.get('name')}</h1>
    <p>{props.data.get('avatar_url')}</p>
    <p>{props.data.get('followers')}</p>
    <p>{props.data.get('following')}</p>
  </div>
)

export default ResultPage