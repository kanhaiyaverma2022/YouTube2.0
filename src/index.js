import react from 'react';  //these are dependencies
import reactDOM from 'react-dom/client';

import App from './App';

import './index.css';

// for excecute id root from dir public < index.html
const root =reactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)