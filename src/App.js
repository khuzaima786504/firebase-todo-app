import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useState , useEffect } from "react";
import "./style/index.css";
import Todos from './components/Todos';
import { db } from './db/db-conn.js';
import { collection , getDocs } from 'firebase/firestore';
export default function App() {

  const [showInput , setShowInput] = useState(false);
  const [addTodoFeildValue , setAddTodoFeildValue] = useState('');
  const [todoList , setTodoList] = useState([]);


  function gettodos(){
    const collectionRef = collection(db , "todo");
    getDocs(collectionRef).then((response) => {
        setTodoList(response.docs.map(doc => ({ ...doc.data() , id : doc.id })));
    }).catch((error) => {
      console.log(error);
    });
  }

useEffect(() => {
  gettodos();
},[])

useEffect(() => {
  console.log(todoList);
},[todoList])

  const addTodofunction = () => {

    // todosdata.push(addTodoFeildValue);
    setAddTodoFeildValue("");
    setShowInput(!showInput);
  }
  return (
    <>
      <div className="todo_app_cover">
        <h1>Todo List</h1>
        <div className="search_input_feild_cover">
          {showInput ? 
          <>
          <form action="" method='POST'>
            <div className='responsive_fields'>
              <input type='text' value={addTodoFeildValue} name='add_todo' className='add_todo' onChange={(e)=> setAddTodoFeildValue(e.target.value)} autoComplete='off' />
              <Box sx={{ '& > :not(style)': { ml: 1} }} onClick={() => { addTodofunction(); }}>
                <Fab size='small' color='secondary' aria-label='edit'>
                  <EditIcon />
                </Fab>
              </Box>
            </div>
          </form>
          </> :
          <>
          <Box sx={{ '& > :not(style)': { ml: 1} }}>
            <Fab size='small' color='primary'  aria-label='add' onClick={(e) => {setShowInput(!showInput)}}>
              <AddIcon />
            </Fab>
          </Box>
          </>
          }
        </div>
        {todoList}
        <ul className="list_cover">
          {todoList.map((list) => {
            return(
              <Todos key={list.id} todo={list} />
            )
          })}
        </ul>
        
      </div>
    </>
  )
}
