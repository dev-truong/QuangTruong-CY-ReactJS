import { useState } from 'react';
import useTaskStore from '../store/taskStore';

const Modal = ({ onClose }) => {
    const [inputData, setInputData] = useState({
        task: '',
        status: 'pending',
        date: '',
    });

    const addTask = useTaskStore((state) => state.addTask);

    const handleClick = () => {
        addTask({ id: Date.now(), ...inputData });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-bold">New Task</h2>
                <input
                    type="text"
                    placeholder="Task"
                    className="w-full p-2 border rounded mt-2"
                    value={inputData.task}
                    onChange={(e) => setInputData({ ...inputData, task: e.target.value })}
                />
                <input
                    type="date"
                    className="w-full p-2 border rounded mt-2"
                    value={inputData.date}
                    onChange={(e) => setInputData({ ...inputData, date: e.target.value })}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                    onClick={handleClick}
                >
                    Save
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Modal;
