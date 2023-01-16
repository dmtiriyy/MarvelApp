import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";

class InputComponent extends Component {
    render() {
        return(
           <Consumer>
            {
                    value => {
                        return ( <input value={this.props.mail} type="email" className='form-control' placeholder="name@example.com"/>)
                    }
                }
          </Consumer> 
          <input value={this.context.mail} type="email" className='form-control' placeholder="name@example.com" />
        )
    }
} 

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes >
                        <Route  path="/" element = {<MainPage/>}/>
                        <Route  path="/comics" element = {<ComicsPage/>}/>   
                        <Route  path="/comics/:comicId" element = {<SingleComicPage/>}/>
                        <Route path ='*' element={<Page404/>}/>
                        </Routes>
                      
                </main>
            </div>
        </Router>
    )
}


export default App;