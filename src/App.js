import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import QuestionHandler from './components/QuestionHandler/QuestionHandler';
import Quiz from './components/Quiz/Quiz';
import Menu from './components/Menu';
import { Provider } from 'react-redux'
import './style/css/app.css'


function App( props ) {
  return (
    <Provider store={props.store} >
      <Router>
        <Switch>
          <Route exact path="/" component={Menu}/>
          <Route exact path="/quiz" component={Quiz}/>
          <Route path="/question-handler" component={QuestionHandler}/>
        </Switch>
      </Router>
    </Provider>
    
    
  );
}

export default App;
