import { lazy, useState, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";


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