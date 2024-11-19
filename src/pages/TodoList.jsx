import { useState } from 'react';
import useTaskStore from '../store/taskStore';
import TaskRow from '../components/TaskRow';
import Modal from '../components/Modal';

const TodoList = () => {
    const tasks = useTaskStore((state) => state.tasks);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                onClick={() => setModalOpen(true)}
            >
                New Task
            </button>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Checkbox</th>
                    <th className="border border-gray-300 px-4 py-2">Task</th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task) => (
                    <TaskRow key={task.id} task={task} />
                ))}
                </tbody>
            </table>
            {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
        </div>
    );
};

export default TodoList;
