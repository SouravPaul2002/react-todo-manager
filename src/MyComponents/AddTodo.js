import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title field can not be blank");
        } else if (!desc) {
            alert("Description field can not be blank");
        } else {
            props.addTodo(title, desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3 className='text-center'>Add your Todos</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="title" placeholder='Enter the title of your Todo...' />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Todo Desciption</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" placeholder='Enter the description of your Todo...' />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
