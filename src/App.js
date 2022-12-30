//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Page from './components/pages/Page/Page'


function App() {

  const [isClick, setIsClick] = React.useState(false)
  const [limit, setLimit] = React.useState(0)

  function handleCreateReq() {
    setTimeout(() => {
      setIsClick(true)
      setLimit(limit+1)
    }, '1000')
  }



  return (
    <div className="App">
      <Page
      onClick={handleCreateReq}
      isClick={isClick}
      limit={limit}
      />
    </div>
  );
}

export default App;
