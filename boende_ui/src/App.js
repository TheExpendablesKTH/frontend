import logo from './logo.svg';
import './styleOne.css';
import {Route,Link} from 'react-router-dom';
import Start from './Start';
import Resident from './Resident';
import Call_confirm from './Call_confirm';
import Relative from './Relative';
import ResidentEdit from './ResidentEdit';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Start} />
      <Route exact path = "/Resident" component = {Resident} />
      <Route exact path = "/Relative" component = {Relative} />
      <Route exact path = "/Call_confirm" component = {Call_confirm}/>
      <Route exact path = "/ResidentEdit" component = {ResidentEdit}/>

    </div>
  );
}

export default App;
