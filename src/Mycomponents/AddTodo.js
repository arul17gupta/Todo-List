import React from 'react'

export const AddTodo = (props) => {

    const submit =()=>{

    }
    return (
        <div className='container' my-3>
            <h3>Add a Todo</h3>
            <form onsubmit = {submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" />

                    <div class="mb-3">
                        <label for="desc" class="form-label">Todo Description</label>
                        <input type="text" class="form-control" id="desc" />
                    </div>

                    <button type="submit" class="btn btn-success btn-sm">Submit</button>
                    </div>
            </form>
        </div>
    )
}