import { RouterProvider } from 'react-router-dom';
import './App.css'
import Carts from './Carts';
import { useGlobalContext } from './context'
import router from './components/CB';
import Header from './components/Header/Header';



function App() {

  const { amount, clearCart, total } = useGlobalContext();

  return (

    <>
    <Header/>
      <h2>{amount}</h2>
      
      <Carts />
      <RouterProvider router={router}/>

      <button onClick={() => clearCart()}>clealAll</button>

      <p>total price { total}</p>
        
    </>
  )
}

export default App
