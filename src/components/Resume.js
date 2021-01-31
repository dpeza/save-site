import React, { Component } from 'react';

class Resume extends Component {
    render() {

        return (
        <section id="resume">
                <h3>Donate To Aid to Victims of Domestic Abuse</h3>
                <h5 style ={{"padding": "10px", "color": "gray", "padding-bottom": "20px"}}>SAVE is partnered with AVDA to assist victims of domestic abuse and provide them with a safe space to stay.</h5>
                <form action="https://www.avdaonline.org/donate">
                    <button  type= "submit">Donate Now</button>
                </form>
                
        </section>
        );
    }
    }
export default Resume;
