import {FaTrashAlt} from 'react-icons/fa'

const Content=(items,handleCheck,handleDelete)=>{
    
        
    
    // const handleNameChange=()  =>{
    //     const phil=['Dace','Chappele','Show'];
    //     const int =Math.floor(Math.random() * 3);
        
    //     setName(phil[int]);
        
    //   }
    //   const handleClick=()=>{
    //     setCount(count+1)
    //     console.log(count)
    //   }
    //   const handleClick2=()=>{
    //     console.log(count)
    //   }
       
    return(
        <main>
            {
                (items.length) ?(
            <ul>
                {items.map((item)=> (
                <li className="item" key={item.id}>
                    <input 
                    type="checkbox"
                    onChange={()=> handleCheck(item.id)}
                    checked={item.checked}
                    />
                    <label 
                    style={(items.checked )? {textDecoration: 'line-through'}: null}
                    onDoubleClick={()=> handleCheck(item.id)}
                    >{item.item}</label>
                    <FaTrashAlt 
                    onClick={() => handleDelete(item.id)}
                    role="button" tabIndex="0" />
                    
                    </li>))}
            </ul>):(
                <p style={{marginTop: '2rem'}}>Your list is empty</p>

            )
            /* <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={()=>handleClick}>Click it</button>
            <button onClick={(e)=>handleClick2}>Click it</button> */}
        </main>
    )
}

export default Content