import React, { Component } from 'react'
import styled from 'styled-components';
import {ChefConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
        <ChefConsumer>
            {(value)=>{
                const {modalOpen, closeModal} = value;
                const {img, title, price} = value.modalChef;

                if(!modalOpen){
                    return null;
                }else{
                    return <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" 
                                className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5>Chef added to Reservations</h5>
                                    <img src={img} className="img-fluid" alt="chef"/>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price: $ {price}</h5>
                                    <Link to='/'>
                                        <ButtonContainer onClick={()=>closeModal()}>
                                            Chef List
                                        </ButtonContainer>
                                    </Link>
                                    <Link to='/cart'>
                                        <ButtonContainer onClick={()=>closeModal()}>
                                            go to Reservations
                                        </ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>        
                    </ModalContainer>
                }
            }}
        </ChefConsumer>
    );
  }
}

const ModalContainer = styled.div`
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        #modal {
            background: var(--mainWhite);
        }
`;