import React, { Component } from 'react';
import '../css/default.css'
import '../css/layout.css'
class About extends Component {
        render() {

        if(this.props.data){
            var name = this.props.data.name;
            var profilepic= "images/"+this.props.data.image;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone= this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Us</h2>
                        <p>{bio} We meet regularly with groups of teenages to discuss ways to identify and stop teenage dating abuse. As well as providing aid to victims of domestic abuse 
                        in the form of donations and saftey. </p>
                        
                    </div>
                </div>

            </section>
        );
    }
}

export default About;