import { lazy, useState, useReducer } from "react";
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
                        <input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

shouldComponentUpdate(nextProps){
    if(this.props.mail.name === nextProps.mail.name){
        return false
    }
}
const Slider = () => {
    const [slide, setSlide] = useState(0);
   /*  const [autoplay, setAutoplay] = useState(false); */
    const [autoplay, dispatch] = useReducer();
    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'slow'})}>toggle autoplay</button>
                          <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'toggle'})}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

function App() {
    return (
        <Slider/>
    );
}



export default App;