import MainHeader from './components/Header/MainHeader';
import Check from './components/Check/Check';
import Start from './components/Start/Start';
import React, { useState } from 'react';

function App() {
  let [numbers, setNumbers] = useState([]);
  return <>
    <MainHeader />
    <div className="row">
      <Check numbers={numbers} setNumbers={setNumbers}/>
      <Start setNumbers={setNumbers} />
    </div>
  </>
}

export default App;
