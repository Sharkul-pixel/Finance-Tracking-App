import React, { useState, useEffect } from 'react';
import './ChartBar.css';

function ChartBar(props) {
  const [barFillHeight, setBarFillHeight] = useState('0%');

  useEffect(() => {
    if (props.maxValue > 0) {
      const newFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
      setBarFillHeight(newFillHeight);
    }
  }, [props.value, props.maxValue]);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;

