import logo from './logo.svg';
import './styleOne.css';
import {Route,Link} from 'react-router-dom';
import Start from './Start';
import Resident from './Resident';
import Call_confirm from './Call_confirm';
import Relative from './Relative';
import ResidentEdit from './ResidentEdit';
import ResidentAdd from './ResidentAdd';
import RelativeAdd from './RelativeAdd';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Start} />
      <Route exact path = "/Resident" component = {Resident} />
      <Route exact path = "/Relative" component = {Relative} />
      <Route exact path = "/Call_confirm" component = {Call_confirm}/>
      <Route exact path = "/ResidentEdit" component = {ResidentEdit}/>
      <Route exact path = "/ResidentAdd" component = {ResidentAdd}/>
      <Route exact path = "/RelativeAdd" component = {RelativeAdd} />
    </div>
  );
}

export default App;
