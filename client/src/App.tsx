import React from 'react'
import "./App.scss";
import Navbar from './Navbar/Navbar';
import Item from './Item/Item';
import List from './List/List';

const App = () => {
  return (
    <div className='main_container'>

      <Navbar/>
      <Item/>
      <List/>

    </div>
  )
}

export default App