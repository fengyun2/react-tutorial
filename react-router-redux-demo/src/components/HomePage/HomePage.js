import React from 'react'
import {Link} from 'react-router'

const HomePage = ({userId, onSubmitUserId, onChangeUserId}) => (
  <div>
    <h1>HomePage</h1>
    <Link to={{pathname: '/result', query: {userId: userId}}}></Link>
  </div>
)

export default HomePage