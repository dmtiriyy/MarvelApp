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


const store = createStore(reducer);
const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

/* const mapDispatchToProps = (dispatch) => {
    return  bindActionCreators(actions, dispatch)
  
} */
export default connect(mapStateToProps, actions)(Counter);
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
