import { React, useState } from 'react'

const Field = ({ addItem }) => {
    const [text, setText] = useState('');
    const submitList = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please add any task');
            return;
        }
        addItem({ text })
        setText('');
    }
    return (
        <form className='add-form' onSubmit={submitList}>
            <div className='form-control'>
                <label>To Do Item</label>
                <input type='text' placeholder='Add Item' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            {/* <input type='submit' value='Add to List' className='btn btn-block'></input> */}
        </form>
    )
}

export default Field
