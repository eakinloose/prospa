import { Route } from 'react-router-dom';
import {GlobalStyles} from './GlobalStyles';
import DashBoard from './pages/DashBoard';
import Register from './pages/Register'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Route exact path="/" component={Register}/>
      <Route exact path="/Signup"component={SignUp}/>
      <Route exact path="/SignIn"component={SignIn}/>
      <Route exact path="/DashBoard"component={DashBoard}/>
    </>
  );
}

export default App;