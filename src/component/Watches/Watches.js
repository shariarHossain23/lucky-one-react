import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Cartproduct from "../cart/Cartproduct";
import Watch from "../watch/Watch";
import "./watches.css";

const Watches = () => {
  const [watches, setWatch] = useState([]);
  const [carts, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(
    () =>
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => setWatch(data)),
    []
  );
  const handleCart = (selectedWatch) => {
    let newCart = [];
    const uniqueId = carts.find((watch) => watch.id === selectedWatch.id);
    if (!uniqueId) {
      newCart = [...carts, selectedWatch];
    } else {
      alert("This Watch already added");
      newCart = [...carts];
    }
    if (newCart.length === 5) {
      setIsOpen(true);
    } else {
      setCart(newCart);
    }
  };
  const chosseOneBtn = () => {
    const addedCart = carts.length;
    const random = Math.round(Math.random() * addedCart);
    const newRandom = random + "";
    const newProduct = carts[newRandom];
    const newCart = carts.filter((product) => product.id !== newProduct.id);
    for (const element of newCart) {
      carts.splice(element, 1);
      let chosseCart = [...carts];
      setCart(chosseCart);
    }
  };
  const chooseAgainBtn = () => {
    const newCart = [];
    setCart(newCart);
  };

  // react modal
  const customStyles = {
    content: {
      top: "15%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="watch-product">
        <div className="watches">
          {watches.map((watch) => (
            <Watch key={watch.id} watch={watch} handlecart={handleCart}></Watch>
          ))}
        </div>
        <div className="order">
          <h1>selected watch</h1>
          {carts.map((cart) => (
            <Cartproduct key={cart.id} cart ={cart}></Cartproduct>
          ))}
          <div>
            <button onClick={() => chosseOneBtn()} className="choose-btn">
              Choose one more
            </button>{" "}
            <br></br>
            <button onClick={() => chooseAgainBtn()} className="another-btn">
              Choose Again
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FontAwesomeIcon
          onClick={() => closeModal()}
          icon={faXmark}
        ></FontAwesomeIcon>
        <h5>you can choose only 4 item</h5>
      </Modal>
    </div>
  );
};

export default Watches;
