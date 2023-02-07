import { useState } from "react";

function App() {
  // handle textbox value
  const [input, setInput] = useState('')
  // prepare cart list handler array
  const [cartLists, setCartLists] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0);

  // handle submit click
  function addItem() {
    const item = {
      id : Math.floor(Math.random() * 1000),
      value : input,
      quantity : 1,
      status : false
    }
    const addItemValue = item.value.trim()
    if(!addItemValue) {
      alert('Input is required')
    }
    else if(addItemValue.length < 3 || addItemValue.length > 10) {
      alert('Input must be between 3 to 10 characters')
    }
    else {
      setCartLists(oldCartLists => [...oldCartLists, item])
      setInput('')
      setTotalQuantity(totalQuantity + 1)
    }
  }

  const handleClick = e => {
    if (e.target.style.textDecoration) {
      e.target.style.removeProperty('text-decoration')
    } else {
      e.target.style.setProperty('text-decoration', 'line-through')
    }
  };
  const handleDecrement = (i) => {
    const newCartLists = [...cartLists]

    if (newCartLists[i].quantity <= 0) {
      newCartLists[i].quantity = 0
    }
    else {
      newCartLists[i].quantity--
    }
    setCartLists(newCartLists)
    computeTotal();
  };
  const handleIncrement = (i) => {
    const newCartLists = [...cartLists]

    newCartLists[i].quantity++
    setCartLists(newCartLists)
    computeTotal()
  };
  const computeTotal = () => {
    const totalQuantity = cartLists.reduce((total, item) => {
      return total + item.quantity
    }, 0)
    setTotalQuantity(totalQuantity)
  }

  return(
    <div className="container my-5 position-relative">
      <div className="position-absolute top-0 start-50 translate-middle-x">
        <div className="card border-0 p-3">
          <div className="input-group pb-3">
            <input type="text" className="rounded-start-2" placeholder="Add an item..." onChange={e => setInput(e.target.value)} value={input} />
            <button className="btn btn-custom" onClick={() => addItem()}>+</button>
          </div>
          {cartLists.map((cartList, i) => (
            (
              <>
                <div key={cartList.id} className='d-flex justify-content-between ps-1 py-2 text-white'>
                  <div className="cart-list" onClick={handleClick}>
                    {cartList.value}
                  </div>
                  <div className='border-white bg-white rounded-pill'>
                    <i className="bi bi-chevron-left increment-decrement" onClick={() => handleDecrement(i)}></i>
                    <span className="incdec-output px-1">{cartList.quantity}</span>
                    <i className="bi bi-chevron-right increment-decrement" onClick={() => handleIncrement(i)}></i>
                  </div>
                </div>
                <hr className="border-1 border-light my-0 py-0"/>
              </>
            )
          ))}
          <div className="ms-auto text-white pt-1 pe-2">Total: {totalQuantity}</div>
        </div>
      </div>
    </div>
  )
}

export default App;