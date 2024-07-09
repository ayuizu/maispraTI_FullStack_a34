import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

import "./App.css"

function App(){
  return(
    <div className={App}>
      <div><Header /></div>
      <div><Hero /></div>
      <div><Footer /></div>
    </div>
  )
}

export default App