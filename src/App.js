import AddItem from "./Add"
import Header from './Header';
import Content from './content';
import Footer from './footer';
import { useState } from 'react';

function App() {
  const [items,setItems]= useState(
    JSON.parse(localStorage.getItem('shoppinglist')));
    const [newItem,setNewItem]=useState('')
    const setAndSaveItems =(newItems)=>{
      setItems(newItems);    
   
      localStorage.setItem('shoppinglist',JSON.stringify(newItems))
      
    }
    const addItem = (item)=>{
      const id=items.length ? items[items.length -1].id +1 : 1;
      console.log(id);
      const mynewItem={id,checked: false,item}
      console.log(mynewItem);
      const listItems={...items,mynewItem};
      setAndSaveItems(listItems);
      
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(!newItem) return;
      addItem(newItem)
      setNewItem('')
     
    }
    const handleCheck =(id)=>{
      const listItems=items.map((item) => item.id ===id ? {...item,
      checked: !item.checked }: item
      );
      setAndSaveItems(listItems);  }

  const handleDelete =(id)=>{
      const listitems= items.filter((item) => item.id !==id);
      setAndSaveItems(listitems);
  }

 
  return (
    <div className="App">      
          <Header title="Groceries List"/>
          <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
          />
          <Content
          items= {items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
          <Footer length={items.length}/>
    </div>
  );
}

export default App;
