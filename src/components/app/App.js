import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";


InputComponent.contextType = dataContext;
 const Form =memo( (props) => {

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input value={props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}, propsCompare) 
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