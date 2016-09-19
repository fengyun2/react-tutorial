import React from 'react'
import { Link } from 'react-router'

const HomePage = ({ userId, onSubmitUserId, onChangeUserId }) => (
  <div>
    <h1>HomePage</h1>
    <input type="text" placeholder="Please input you github id" onChange={onChangeUserId} />
    <Link to={{ pathname: '/result', query: { userId } }}>Result</Link>
    <button onClick={onSubmitUserId}>click</button>
  </div>
)

export default HomePage
