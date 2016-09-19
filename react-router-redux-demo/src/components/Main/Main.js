import React from 'react'

const Main = (props) => (
  <div>
    <h1>这是导航列表</h1>
    <div>
      {props.children}
    </div>
  </div>
)

Main.propTypes = {
  children: React.PropTypes.object,
}

export default Main