import React, { Component } from 'react'
import '../App.css'

export default class TodoItem extends Component {
    render() {
        const { title ,handleDelete}=this.props;

        return (
           <li className="list-group-item d-flex justify-content-between my-2">
               <h6>{ title }</h6>
               <div className="todo-icon">
                <span className="mx-2 text-danger" onClick={handleDelete} >
            <i className="fas fa-trash"></i>
                </span>
               </div>
           </li>
           
        );
    }
}