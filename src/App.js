import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App"> 
      <Animation />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Todos nuestro products'/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados'/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
        <button onClick={() => {setShow(!show)}}>show/hide</button>
          { show && <EffectExample /> }
    </div>
  );
}
           
        

export default App;

        