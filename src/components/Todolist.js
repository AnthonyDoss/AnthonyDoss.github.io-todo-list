import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Todolist extends Component {
    render() {
        const {items,clearList,handleDelete} = this.props;

        return (
            <div class="card card-body"> 
           <ul className="list-group mt-1">
               <h3 className="text-capitalize text-center text-primary">Todo list</h3>
               
{
    items.map(item =>{
        return(
            <TodoItem key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)}/>
        )
    })
}
               <button type="button" className="btn btn btn-outline-danger btn-block mt-5" onClick={clearList}>Clear List</button>
           </ul></div>
        )
    }
}
