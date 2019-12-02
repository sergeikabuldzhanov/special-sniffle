import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

export default function Market() {
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
      <ListOfItems items={stock.fruits} addToCart={addToCart} />
      <ListOfItems items={stock.meats} addToCart={addToCart} />
      <Cart items={cart} />
    </div>
  );
}

function Cart(props) {
  return (
    <>
      <h5>Cart:</h5>
      {
        props.items.length
          ? props.items.map((item, idx) => <div key={idx}>{item}</div>)
          : <div>Nothing in the cart. Sad!</div>
      }
    </>
  );
}

function Item(props) {
  const { name, addToCart } = props;
  return (
    <div>
      <span>{name}</span>
      <button onClick={evt => addToCart(name)}>Add To Cart</button>
    </div>
  );
}

function ListOfItems(props) {
  const { items, addToCart } = props;
  return (
    <>
      {
        items.map(
          (itemName) => (
            <Item
              key={itemName}
              name={itemName}
              addToCart={addToCart}
            />
          ))
      }
    </>
  );
}
