import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase";

export default class ListingInstance extends Component {



  render() {
    var user = firebase.auth().currentUser;
    var uid = (user ? user.uid : "");
    console.log("Key is: " + this.props.uid);
    return (
      <div className = "card-panel z-depth-1 hoverable">
        <div className = "container">
          {/* BUTTON GOES HERE */}
          <div className = 'row'>
            <div className = 'col s3 left-align'>
              <br />
              <h6 className = 'flow-text grey-text text-lighten'>
                PRICE
              </h6>

              <h5 className = 'flow-text yellow-text text-darken-4'>
                SG${this.props.price}
              </h5>

              <h6 className = 'flow-text grey-text text-lighten'>
                PER HOUR
              </h6>
            </div>

            <div className = 'col s6'>
              <h2 className = 'flow-text red-text text-darken-4'>
                {this.props.title}
              </h2>

              <h6 className = 'flow-text left-align grey-text text-lighten-2'>
                {this.props.location}
              </h6>

              <h6 className = 'flow-text text-justify'>
                {this.props.summary}
              </h6>
            </div>

            <div className = 'col s3 center-align'>
              <Link to={{
                pathname: "/profile/id?=" + this.props.uid
              }}>
                <button className='btn-large waves-effect waves-light'>
                  Profile
                  <i className="material-icons right">send</i>
                </button>
              </Link>

              <br/>
              <br/>

              {uid === this.props.uid ? "" :
              <Link to={{
                pathname: "/message/id?=" + this.props.uid
              }}>
              <button className='btn-large waves-effect waves-light red darken-4'>
                Chat
                <i className="material-icons right">email</i>
              </button>
              </Link>
              }
            </div>

          </div>
        </div>
      </div>
    );
  }
}
