import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event =>{
      setValue(event.target.value);
    }
    const validateInput = () => {
      return  value.search(/\d/) >= 0 
    }
    return {value, onChange, validateInput}
  }
const Form = () =>  {
  
  const input = useInputWithValidate('')
  const textArea = useInputWithValidate('')

  const color = input.validateInput() ? 'text-danger' : null;
const App = () => {
    const[selectedChar, setChar] = useState(null)
  
  const onCharSelected = (id) => {
        setChar(id)
    }

    
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBoundary>
                        <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }


export default App;