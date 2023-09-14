import MainHeader from './components/Header/MainHeader';
import Check from './components/Check/Check';
import Start from './components/Start/Start';

function App() {
  return <>
    <MainHeader />
    <div className="row">
      <Check />
      <Start />
    </div>
  </>
}

export default App;
