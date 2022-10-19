import React from 'react'
import { useState } from 'react';


export const AddTodo = (props) => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")


    const submit = (e) => {

        e.preventDefault();                                     //restrict page from reloading
        if (!title || !desc) {                                    //can't leave title and desc empty
           alert("Title or Description cannot be blank")
        }
        props.addTodo(title, desc)
    }
    // console.log(props);

    return (


        <div className='container my-3 container text-light' >
            <h3 id='Text'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" id='Text'>Todo Title</label>
                    <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label" id='Text'>Todo Description</label>
                        <input type="text" value={desc} onChange={(e) =>setdesc(e.target.value)} className="form-control" id="desc" />
                    </div>

                    <button type="submit" className="btn btn-success btn-sm" id='Text'>Add Todo</button>
                </div>
            </form>
        </div>
    );



}