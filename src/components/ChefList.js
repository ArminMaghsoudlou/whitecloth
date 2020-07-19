import React, { Component } from 'react'
import Chef from './Chef'
import Title from './Title'
import {ChefConsumer} from '../context'

export default class ChefList extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="py-5">
              <div className="container">
                <Title name="private chef to your door" />
                <div className="row">
                    <ChefConsumer>
                        {
                          value => {
                            return value.chefs.map (
                              chef => {
                                return <Chef key={chef.id} chef={chef}/>
                              }
                            )
                          }
                        }
                    </ChefConsumer>
                </div>
              </div>
            </div>
        </React.Fragment>
    )
  }
}