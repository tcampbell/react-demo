import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const routing_table = {
      "": "https://amazon.com",
      "yahoo": "https://amazon.com",
    }

    // Using a react application to provide URL redirection to test my react.js
    // working knowledge and start building single page applications
    // 
    // TODO: how do we read request parameters and load a URL from the routing table

    // Test a simplified redirector
    // 1. `/` loads a form to create a new shortcut (shortname and url)
    // 2. '/stats`, `/edit` are probably reserved
    // 3. '/pathname` redirects browser to a new url or shows an edit box to let someone add a url
    // 4. '/stats/pathname` reserved for redirect link stats
    // 5. '/edit/pathname` reserved for redirect link status
    // 6. '/config` sets a config.  Perhaps the routing table is also a github resource and there's
    //    a configuration value that (perhaps just a gist) that tells where to load the routes from
    //    That way client can fork and run their own redirector from a github-page
    return (window.location = "https://amazon.com");
  }

}

export default App;
