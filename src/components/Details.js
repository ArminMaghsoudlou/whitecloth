import React, { Component, useState } from 'react'
import {ChefConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
import Chef from './Chef';
import InstagramEmbed from 'react-instagram-embed';
import Faq from "react-faq-component";
import moment from 'moment'
import Calendar from 'react-calendar';



export default class Details extends Component {
  render() {
    return (
      <ChefConsumer>
        {
          (value)=>{
            const {id, company, img, info, menu_data, faq_data, price, title, inCart, 
                insta_url1, insta_url2, insta_url3} = 
            value.detailChef;

            const menu_styles = {
                bgColor: '#f3f3f3',
               titleTextColor: "#232528",
               rowContentColor: "#6c757d",
               // rowContentColor: 'grey',
                arrowColor: "#232528",
           };

           const menu_config = {
                animate: true,
                //arrowIcon: "V",
           };
            const faq_styles = {
                bgColor: '#f3f3f3',
                titleTextColor: "#800020",
                rowTitleColor: "#800020",
                rowContentColor: "#6c757d",
                arrowColor: "rgba(128,0,32,1)",
            };

            const faq_config = {
                 animate: true,
                 //arrowIcon: "V",
            };

            return (
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanter text-title-details my-5">
                    <h1>
                      {title}
                    </h1>
                  </div>
                  <div className="row">
                    <div className="col-4 mx-auto col-md-3 my-3 text-capitalize">
                        <img src={img} className="img-fluid" alt="chef"/>
                        <p>
                             </p>
                        <InstagramEmbed
                            url= {insta_url1}
                            maxWidth={370}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                        <InstagramEmbed
                            url= {insta_url2}
                            maxWidth={370}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        /> 
                        <InstagramEmbed
                            url= {insta_url3}
                            maxWidth={370}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                    </div>
                    <div className="col-8 mx-auto col-md-6 text-capitalize">
                      <h4 className="text-loc text-uppercase text-muted mt-3 mb-2">
                        Location: <span className="text-uppercase">{company}</span>
                      </h4>
                      <h4 className="text-blue">
                        <strong>
                          minimum price: <span>$</span> {price}
                        </strong>
                      </h4>
                      <h4 className="text-loc mt-3 mb-0">
                        <strong>  
                          Bio / Experience:
                          </strong>
                      </h4>
                      <p className="text-muted lead">
                        {info}
                      </p>
                      <div>
                        <Faq data={menu_data} styles={menu_styles} config={menu_config} />
                        <p> <br></br> </p>
                      </div>
                      <div>

                      </div>
                      <div>
                        <Faq data={faq_data} styles={faq_styles} config={faq_config} />
                      </div>
                  
                      <div>
                        <Link to="/">
                          <ButtonContainer>
                            back to chefs
                          </ButtonContainer>
                        </Link>
                          <ButtonContainer 
                            disabled={inCart?true:false}
                            onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? "inCart":"reserve"}
                          </ButtonContainer>
                      </div>
                    </div>
                  </div>
                </div>
            );

          }
        }
      </ChefConsumer>
        
    )
  }
}