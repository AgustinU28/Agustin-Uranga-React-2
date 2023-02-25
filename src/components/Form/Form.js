import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { getFirestore } from "firebase/firestore";


export default function Form() {
  const { cart, totalPrice } = React.useContext(CartContext)

  const [data, setData] = React.useState()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: data,
      items: cart,
      total: totalPrice(),
    };

    {swal(
        "Gracias por su compra!",
        "EcommersAgustin",
        "Correcto"
    );}

    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    await addDoc(ordersCollection, order)
    .then(({id}) => {console.log(id)})
  }


  return (
    <>
      <Container>
        <Row>
        {
          cart.map(product => <ItemCount key={product.id} item={product}/>)
        }
  
          <div className='checkout'>
            <p className='total-price'>
              Porfavor complete el formulario, para terminar  con su operacion.
            </p>

            <p className='total-price'>
              Total de su compra: ${totalPrice()}
            </p>

            <form onSubmit={handleSubmit}>
              <input  
                type="text" 
                name='name' 
                placeholder='Ingrese su nombre'
                onChange={handleChange}
              />
              
              <input 
                type="email" 
                name='email' 
                placeholder='Ingrese su Email'
                onChange={handleChange}
              />
                
              <input 
                type="phone" 
                name='phone' 
                placeholder='Ingrese su Telefono'
                onChange={handleChange}
              />
 
              <input className='input-button'
                type='submit' 
                value='Emitir Compra'
              />
   
            </form>
          </div>
        </Row>
      </Container>
    </>
  )
}

