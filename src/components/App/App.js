import React from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './appStyles';
import NavLink from '../NavLink';

const App = (props) => (
  <div>
    <h1>React Router Demo</h1>
    <ul>
      <li>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
      </li>
      <li>
        <Link to="/repos/react-router" activeStyle={{ color: 'green' }}>Repos</Link>
      </li>
{/*      <li>
        <Link to="/" activeStyle={styles.active} />
      </li>*/}
      <li>
        <NavLink to="/" activeClassName="active" />
      </li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
    children: React.PropTypes.object,
};

export default App;
