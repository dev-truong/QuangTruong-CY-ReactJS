import { useState } from 'react';
import useTaskStore from '../store/taskStore';

const TaskRow = ({ task }) => {
    const deleteTask = useTaskStore((state) => state.deleteTask);
    const updateTask = useTaskStore((state) => state.updateTask);
    const [isEditing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.task);

    const handleSave = () => {
        updateTask(task.id, { task: editedTask });
        setEditing(false);
    };

    return (
        <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">
                <input type="checkbox" />
            </td>
            <td className="border border-gray-300 px-4 py-2">
                {isEditing ? (
                    <input
                        type="text"
                        className="w-full border rounded p-1"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                ) : (
                    task.task
                )}
            </td>
            <td className="border border-gray-300 px-4 py-2">{task.status}</td>
            <td className="border border-gray-300 px-4 py-2">{task.date}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">
                {isEditing ? (
                    <button
                        className="bg-green-500 text-white px-2 py-1 rounded"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                ) : (
                    <button
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => setEditing(true)}
                    >
                        Edit
                    </button>
                )}
                <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TaskRow;
