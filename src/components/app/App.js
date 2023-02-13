import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createStore} from 'redux';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));


const inc = () => ( {type: 'INC'});
const dec = () => ( {type: 'DEC'});
const rnd = (value) => ( {type: 'RND', payload: value});
const initialState = {value: 0};

const reducer =(state = initialState, action) => {
    switch(action.type) {
      case 'INC':
        return {
          ...state,
          value: state.value + 1
        };
      case 'DEC':
        return {
          ...state,
          value: state.value - 1
        };
      case 'RND':
        return {
          ...state,
          value: state.value * action.payload
        };
      default:
        return state;
    }

}


 const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
}
 

 const decDispatch = bindActionCreators(dec, dispatch)
const rndDispatch = bindActionCreators(rnd, dispatch) 

const Counter = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return(
      <div  className="jumbotron">
          <h1>{counter}</h1>
          <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
          <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
          <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
      </div>
  )
}
document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec)


document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10)
  rnd(value);
})

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage/>
                            </Route>
                            <Route exact path="/comics">
                                <ComicsPage/>
                            </Route>

                            <Route path="*">
                                <Page404/>
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;
