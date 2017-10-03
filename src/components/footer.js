//class based component

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {


  render() {
    return (
    
   <footer className="footer">
      
        <span class="text-muted">©2017 i7san</span>
   
    </footer>
 


    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Footer);

// export plain unconnected component for testing
export { Footer };
