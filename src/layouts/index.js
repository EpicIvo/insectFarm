import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCNfQmbOLBWsnuQXlSb_Lv028jM46ZBDZY",
  authDomain: "insectfarm-586e4.firebaseapp.com",
  databaseURL: "https://insectfarm-586e4.firebaseio.com",
  projectId: "insectfarm-586e4",
  storageBucket: "",
  messagingSenderId: "520726726398"
};
firebase.initializeApp(config);

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
