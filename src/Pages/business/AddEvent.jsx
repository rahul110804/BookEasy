const AddEvent = () => {
    return (
        <div className="max-w-2xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
            <form className="space-y-4">
                <input type="text" placeholder="Title" className="w-full p-2 border" />
                <input type="number" placeholder="Price" className="w-full p-2 border" />
                <input type="number" placeholder="Capacity" className="w-full p-2 border" />
                <input type="datetime-local" className="w-full p-2 border" />
                <textarea placeholder="Description" className="w-full p-2 border"></textarea>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 w-full">Add Event</button>
            </form>
        </div>
    );
};

export default AddEvent;
