import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

function Market() {
  const [stock, setStock] = useState({
    fruits: [],
    meats: [],
  });
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(cart.concat(item));
  };

  useEffect(() => {
    const fruitsPromise = axios.get(fruitsApi);
    const meatsPromise = axios.get(meatsApi);
    Promise.all([fruitsPromise, meatsPromise])
      .then(([fruitsAxiosRes, meatsAxiosRes]) => {
        setStock({
          fruits: fruitsAxiosRes.data,
          meats: meatsAxiosRes.data,
        });
      });
  }, []);

  return (
    <div className="component">
      <Fruits fruits={stock.fruits} addToCart={addToCart} />
      <Fruits fruits={stock.meats} addToCart={addToCart} />
      <Cart items={cart} />
    </div>
  );
}

export default Market;


function Cart(props) {
  const { items } = props;
  return (
    <>
      <h5>Cart:</h5>
      {
        items.length
          ? items.map((item, idx) => <div key={idx}>{item}</div>)
          : <div>Nothing in the cart. Sad!</div>
      }
    </>
  );
}

function Fruit(props) {
  const { name, addToCart } = props;
  return (
    <div>
      <span>{name}</span>
      <button onClick={evt => addToCart(name)}>Add To Cart</button>
    </div>
  );
}

function Fruits(props) {
  const { fruits, addToCart } = props;
  return (
    <>
      {
        fruits.map(
          (fruitName) => (
            <Fruit
              key={fruitName}
              name={fruitName}
              addToCart={addToCart}
            />
          ))
      }
    </>
  );
}
