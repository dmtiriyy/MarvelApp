import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';
function useCounter(initial) {
    const [counter, setCounter] = React.useState(initial);
  
    // Это вариант с запросом, чтобы он нормально работал после активации - уберите все props,
    // которые приходят в компонент + аргумент initial поменяйте на 0 или null
  
    // React.useEffect(() => {
    //     fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
    //         .then(res => res.text())
    //         .then(res => setCounter(res))
    //         .catch(err => console.log(err))
    // }, [])
  
    const incCounter = () => {
      if (counter < 50) {
        setCounter(counter => counter + 1)
      }
    } 

    const decCounter = () => {
      if (counter > -50) {
        setCounter(counter => counter - 1)
      }
    }

    const rndCounter = () => {
      setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
    }

    const resetCounter = () => {
      setCounter(initial)
    }
    
    return {
      counter,
      incCounter,
      decCounter,
      rndCounter,
      resetCounter
    }
}
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