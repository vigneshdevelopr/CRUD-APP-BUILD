import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddForm from './component/addform';
import FrontPage from './component/frontpage';
import ResponsiveAppBar from './component/Navbar';
import { StudentDetails } from './component/Products';
import Lost from './lost';


function App() {
  return (
    <div className="App">
<Switch>
<Route exact path="/">
  <ResponsiveAppBar />
  <FrontPage />
</Route>

<Route path="/home">
<ResponsiveAppBar />
<StudentDetails />
</Route>
<Route path="/add">
<ResponsiveAppBar />
<AddForm />
</Route>

<Route path="**">
  <Lost />
</Route>

</Switch>

     



    </div>
  );
}

export default App;
