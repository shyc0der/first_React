
import Header from './Header';
import Content from './content';
import Footer from './footer';
import { useState } from 'react';

function App() {
  const [items,setItems]= useState([
    {
        id:1,
        checked:true,
        item: "Cocoa"          
    }, {
        id:2,
        checked:false,
        item: "Item 2"          
    } ,{
        id:3,
        checked:false,
        item: "Item 3"          
    }
    
    ,]);
    const handleCheck =(id)=>{
      const listItems=items.map((item) => item.id ===id ? {...item,
      checked: !item.checked }: item
      );
      setItems(listItems);
      localStorage.setItem("shoppingList",JSON.stringify(listItems))
  }

  const handleDelete =(id)=>{
      const listitems= items.filter((item) => item.id !==id);
      setItems(listitems);
      localStorage.setItem("shoppingList",JSON.stringify(listitems))

  }

 
  return (
    <div className="App">      
          <Header title="Groceries List Title"/>
          <Content
          items= {items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          />
          <Footer/>
    </div>
  );
}

export default App;
