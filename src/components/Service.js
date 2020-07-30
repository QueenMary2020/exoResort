import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import  Title from './Title';

export default class Service extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"cocktail Delicieux  et gratuit",
                info:'lorem ipsum dolor sit amet consectetur adipiscing elit Magni,corporis!'
            },

            {
                icon:<FaHiking/>,
                title:"Randonnée",
                info:'lorem ipsum dolor sit amet consectetur adipiscing elit Magni,corporis!'
            },

            {
                icon:<FaShuttleVan />,
                title:"Balade Lagunaire",
                info:'lorem ipsum dolor sit amet consectetur adipiscing elit Magni,corporis!'
            },

            {
                icon:<FaBeer/>,
                title:"Biere Glacée",
                info:'lorem ipsum dolor sit amet consectetur adipiscing elit Magni,corporis!'
            }
            
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>

                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}