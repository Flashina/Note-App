import { useState } from "react";


const NoteForm = ({ notes, setNotes }) => {
    const [formData, setFormdata] = useState({
        title: '',
        priority: 'Medium',
        category: 'Work',
        description: ''
    })

    const handleChange =  (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData);
        
        // validation
        // if (!formData.title || !formData.description) return
        if (!formData.title || !formData.description) {
        alert("Please fill out title and description");
        return;
}

        // create new note object
        const newNote = { id:Date.now(), ...formData}

        // Add notes
        setNotes([newNote, ...notes])

        // Reset form data
        setFormdata({
        title: '',
        priority: 'Medium',
        category: 'Work',
        description: ''
        })
    }

    return <form onSubmit={handleSubmit} action="" className="mb-6">
        <div className="mb-4">
            <label htmlFor="title" className="block fonst-semibold">
                Title
            </label>
            <input 
            name="title"
            type="text" className="w-full p-2 border rounded-lg"
            value={formData.title} 
            onChange={handleChange}/>
        </div>

        <div className="mb-4">
            <label htmlFor="priority" className="block fonst-semibold">
                Priority
            </label>
            <select 
            name="priority"
            type="text" className="w-full p-2 border rounded-lg"
            value={formData.priority} 
            onChange={handleChange}>
                <option value="High">🔴 High</option>
                <option value="Medium">🟠 Medium</option>
                <option value="Low">🟢 Low</option>
            </select>
        </div>

        <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
                Category
            </label>
            <select 
            name="category"
            type="text" className="w-full p-2 border rounded-lg"
            value={formData.category} 
            onChange={handleChange}>
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
            name="description"
            type="text" className="w-full p-2 border rounded-lg"
            value={formData.description} 
            onChange={handleChange}></textarea>
        </div>
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Note</button>
    </form>;
}
 
export default NoteForm;