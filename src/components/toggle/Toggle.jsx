import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './toggle.scss';

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };
  return (
    <div className="toggle">
      <img src="/assets/sun.png" alt="" className="icon" />
      <img src="/assets/moon.png" alt="" className="icon" />
      <div
        className="button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}

export default Toggle;
