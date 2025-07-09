import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Store'
import Counter from './Counter'
const App1=(props)=>{
  return <>
  <h1> Hello {props.name} </h1>
  </>
}

const App=()=>{

  return <>
  <Provider store={store}>
  <Counter />
  </Provider>
  
  </>
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)