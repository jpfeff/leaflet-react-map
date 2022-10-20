import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
// import $ from 'jquery';

function App() {
  return (
    <div>
      <div className="test">Leaflet Web Map</div>
    </div>
  );
}
const root = createRoot(document.getElementById('main'));
root.render(<App />);
