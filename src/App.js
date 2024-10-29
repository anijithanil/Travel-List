
import { useState } from 'react';
import './App.css';
import { PackingList } from './PackingList';
import { Stats } from './Stats';
import { Form } from './Form';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  {id:3,description:"Charger",quantity:1,packed:true}
];

function App() {
  const [items,setItems]=useState([{ id: 1, description: "Passports", quantity: 2, packed: false }])

  function handleAddItems(item){
    console.log("add function called");
    
    setItems((items)=>[...items,item])
  }
  function handleDeleteItems(id){
    setItems((items)=>
      items.filter((item)=>item.id !== id))
  }
  function handleToggleButton(id){
    console.log("toggle called");
    
    setItems((items)=>
      items.map((item)=>item.id === id ? {...item,packed:!item.packed}:item))
  }

  return (
    <div className='app' >
        <Logo/>
        <Form onAddItems={handleAddItems}/>
        <PackingList setItems={setItems} onToggleItems={handleToggleButton} onDeleteItems={handleDeleteItems} items={items}/>
        <Stats items={items}/>
    </div>
  );
}

export default App;

function Logo(){
  return <h1>🚞 Far Away 🌄</h1>
}


