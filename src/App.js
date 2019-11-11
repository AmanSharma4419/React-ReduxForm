import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import Form from './Components/Form/Form';
import Display from './Components/Display/Userinfo';
function App() {
	return (
		<div className="App">
      <BrowserRouter>
      <Form />
      <Switch>
		  <Route path="/Display" component = {Display}/>
      </Switch>
      </BrowserRouter>
		</div>
	);
}

export default App;
