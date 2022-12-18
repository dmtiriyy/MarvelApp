import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

class App extends Component  {
    state = {
        selectedChar: null
    }
    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }
    class WhoAmI extends Component  {
        constructor(props){
          super(props);
          this.state = {
            years: 27,
            text: '+++',
            position:'' 
          }
          
  nextYear = () =>{
    this.setState(state =>({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e, color) =>{
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }
        }
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBoundary>
                    <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                        <CharList onCharSelected= {this.onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                        <CharInfo charId = {this.state.selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;