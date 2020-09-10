

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'



import Input from './Input'

function App() {
  return (
    <Router>
      <h1 style={{textAlign:"center", fontFamily:"Times New Roman",fontWeight:"bold",fontSize:'50px',marginTop:'12px'}}>DISAPPEARING TWEET APP</h1>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Input />
                
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
