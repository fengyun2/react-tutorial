import React from 'react'

const Main = (props) => (
  <div>
    <h1>这是导航列表</h1>
  </div>
  <div>
    {props.children}
  </div>
)

Main.propTypes = {
  children: React.PropTypes.object,
}

export default Main