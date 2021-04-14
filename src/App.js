import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Posts from './components/Posts';
import Post from './components/Post'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Posts />
        </Route>
        <Route path='/:title' exact>
          <Post />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
