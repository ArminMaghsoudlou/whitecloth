import React, { Component } from 'react'
import {siteChefs, detailChef} from './data'
import { runInThisContext } from 'vm';

const ChefContext = React.createContext();

class ChefProvider extends Component {
  state = {
      chefs: [],
      detailChef: detailChef,
      cart: [],
      modalOpen: false,
      modalChef: detailChef,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
  }

  componentDidMount(){
    this.setChefs();
  }

  setChefs = () => {
    let tempChefs = [];
    siteChefs.forEach(item=> {
      const singleItem = {...item};
      tempChefs = [...tempChefs, singleItem];
    })
    this.setState(()=> {
      return {chefs: tempChefs};
    })
  }

  getItem = (id) => {
    const chef = this.state.chefs.find(item=>  item.id == id);
    return chef;
  }

  handleDetail = (id) => {
    const chef = this.getItem(id);
    this.setState(
      ()=>{
        return {detailChef: chef};
      }
    )
  }

  addToCart = (id) => {
     let tempChefs = [...this.state.chefs];
     const chef = this.getItem(id);
     const index = tempChefs.indexOf(chef);
     chef.inCart = true;
     chef.count = 1;
     const price = chef.price;
     chef.total = price;

     this.setState(()=>{
       return {chefs:tempChefs, cart:[...this.state.cart, chef]}
     },
     ()=>{
       this.addTotals();
     })
  }

  openModal = (id) => {
    const chef = this.getItem(id);
    this.setState(()=>{
      return {modalChef: chef, modalOpen:true};
    })
  }

  closeModal = () => {
      this.setState(()=>{
          return {modalOpen: false};
      })
  }

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedChef = tempCart.find(item=>item.id === id);

    const index = tempCart.indexOf(selectedChef);
    const chef = tempCart[index];

    chef.count = chef.count + 1;
    chef.total = chef.count * chef.price;
    
    this.setState(
      ()=> {
        return {cart: [...tempCart]};
      },
      ()=> {
        this.addTotals();
      }
    );
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedChef = tempCart.find(item=>item.id === id);

    const index = tempCart.indexOf(selectedChef);
    const chef = tempCart[index];
    chef.count = chef.count -1;

    if(chef.count === 0){
      this.removeItem(id);
    }else {
      chef.total = chef.count * chef.price;
      this.setState(
        ()=>{
          return {cart: [...tempCart]};
        },
        ()=>{
          this.addTotals();
        }
      )
    }
  }

  removeItem = (id) => {
    let tempChefs = [...this.state.chefs];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item=>item.id!==id);

    const index = tempChefs.indexOf(this.getItem(id));
    let removedChef = tempChefs[index];
    removedChef.inCart = false;
    removedChef.count = 0;
    removedChef.total = 0;

    this.setState(()=>{
      return {
        cart: [...tempCart],
        chefs: [...tempChefs]
      }
    }, ()=>{
      this.addTotals();
    })
  }

  clearCart = () => {
    this.setState(()=>{
      return {cart:[]};
    }, ()=>{
      this.setChefs();
      this.addTotals(); 
    })
  }

  addTotals = () => {
      let subTotal = 0;
      this.state.cart.map(item => (subTotal += item.total));
      const tempTax= subTotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax;
      this.setState(()=>{
        return {
          cartSubTotal: subTotal,
          cartTax: tax,
          cartTotal: total
        }
      })
  }
  render() {
    return (
      <ChefContext.Provider value={
          {
              ...this.state, 
              handleDetail: this.handleDetail,
              addToCart: this.addToCart,
              openModal: this.openModal,
              closeModal: this.closeModal,
              increment: this.increment,
              decrement: this.decrement,
              removeItem: this.removeItem,
              clearCart: this.clearCart
          }
      }>
          {this.props.children}
      </ChefContext.Provider>
    );
  }
}

const ChefConsumer = ChefContext.Consumer;

export {ChefProvider, ChefConsumer};