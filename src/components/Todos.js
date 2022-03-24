import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export default function Todos([...todo]){
    console.log(todo);
    return (
        <>
            {todo.map((item) => {
                return (
                    <li class="todo">
                        <h3>{item}</h3>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="delete">
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                    </li>
                )
            })}
        </>
    )
}
