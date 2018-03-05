import React from 'react'
import Link from 'gatsby-link'
import * as firebase from 'firebase';
import "firebase/firestore";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'title',
    }

    const database = firebase.firestore();
    database.collection("pages").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.data().home.title}`);
        this.setState({
          title: doc.data().home.title
        })
      });
    });
  }

  render() {
    return (
      <div
        style={{
          background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{margin: 0}}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {this.state.title}
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}

export default Header
