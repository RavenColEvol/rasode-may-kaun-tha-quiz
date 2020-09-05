import React from 'react';

import Layout from './Layout'
import { Provider } from './utils/globalContext'

function App() {

  const [name, setName] = React.useState('');
  const [questions, setQuestions] = React.useState([])
  const [answers, setAnswers] = React.useState([]);
  const [time, setTime] = React.useState({
    totalTime : 0,
    questions : []
  });

  const store = {
    name,
    setName,
    questions,
    setQuestions,
    answers,
    setAnswers,
    time,
    setTime
  }

  return (
    <div className="App">
      <Provider value={store}>
       <Layout />
      </Provider>
    </div>
  );
}

export default App;
