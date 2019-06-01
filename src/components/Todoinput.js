import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit} = this.props;
        return (
            <div className="card card-body my-3">
               <form onSubmit={handleSubmit} >
                  <div className="input-group" >
                      <div className="input-group-preprend">
                        <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book" />
                      </div>
                      </div>
                      <input type="text" className="form-control" placeholder="Add A Todo Item" value={item} onChange={handleChange}/>
                  </div> 
                    <button type="submit" className ="btn btn-block btn-primary mt-3">Add item</button>
               </form>
             
            </div>
        )
    }
}
