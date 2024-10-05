import logo from './logo.svg';
import './App.css';

import Reducer from './hook-sample/Reducer';
import CusHook from './custom-hook/CusHook';
import Counter from './zustand-sample/Conter';
import AvataCom from './css/AvataCom';

function App() {
  return (
    <div className="App">
      <AvataCom />
      <Counter />
      <CusHook />
      <Reducer />      
    </div>
  );
}

export default App;
