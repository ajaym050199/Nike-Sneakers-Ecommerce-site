import Home from './Pages/Home'
import Product from './Pages/Product'
import Featured from './Pages/Featured'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles.css'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/product/:id' element = {<Product />} />
        <Route path='/' element = {<Home />} exact />
        <Route path='/featured/:id' element = {<Featured />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
