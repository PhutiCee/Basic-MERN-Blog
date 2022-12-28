import React, { useState } from 'react'

const AddCommentsForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('')
    const [CommentText, setCommentText] = useState('')
    const addComments = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comments`, {
            method: "post",
            body: JSON.stringify({ username, text: CommentText }),
            headers: {
                "content-Type": "application/json",
            },
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername("")
        setCommentText("")
    }

    return (
        <form className='shadow rounded px-8 pt-6 pb-8 mb-4'>
            <h3 className='text-xl font-bold mb-4 text-gray-900'>Add your comment</h3>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Name: </label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className='shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

            <label className='block text-gray-700 text-sm font-bold mb-2'>Comments: </label>
            <textarea 
            value={CommentText} 
            onChange={(e) => setCommentText(e.target.value)} 
            rows='4' 
            cols='50' 
            className='shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

            <button 
            onClick={() => addComments()} 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold
            py-2 px-4 rounded focus:outline-none'>Add Comment</button>
        </form>
    )
}

export default AddCommentsForm