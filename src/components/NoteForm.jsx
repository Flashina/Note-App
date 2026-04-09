import { useState } from "react";


const NoteForm = () => {
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('Medium')
    const [category, setCategory] = useState('Work')
    const [description, setDescription] = useState('')


    return <form action="" className="mb-6">
        <div className="mb-4">
            <label htmlFor="title" className="block fonst-semibold">
                Title
            </label>
            <input 
            type="text" className="w-full p-2 border rounded-lg"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="mb-4">
            <label htmlFor="priority" className="block fonst-semibold">
                Priority
            </label>
            <select 
            type="text" className="w-full p-2 border rounded-lg"
            value={priority} 
            onChange={(e) => setPriority(e.target.value)}>
                <option value="High">🔴 High</option>
                <option value="Medium">🟠 Medium</option>
                <option value="Low">🟢 Low</option>
            </select>
        </div>

        <div className="mb-4">
            <label htmlFor="category" className="block fonst-semibold">
                Category
            </label>
            <select 
            type="text" className="w-full p-2 border rounded-lg"
            value={category} 
            onChange={(e) => setCategory(e.target.value)}>
                <option value="Work">📂 Work</option>
                <option value="personal">🏠 Personal</option>
                <option value="Ideas">💡 Ideas</option>
            </select>
        </div>

        <div className="mb-4">
            <label htmlFor="description" className="block fonst-semibold">
                Description
            </label>
            <textarea 
            type="text" className="w-full p-2 border rounded-lg"
            value={description} 
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Note</button>
    </form>;
}
 
export default NoteForm;