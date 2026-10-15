import { useState } from 'react';
import Header from './components/Header';
import TaskItem from './components/TaskItem';

export default function App() {
  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Realizar el programa de programación web', completed: true },
    { id: 2, title: 'Realizar la tarea de conmutacion', completed: false },
    { id: 3, title: 'Investigar de Gestión', completed: false },
  ]);

  // Estado para el input de nueva tarea
  const [inputVal, setInputVal] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newTask = {
      id: Date.now(),
      title: inputVal.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputVal('');
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div style={{ maxWidth: '450px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '1rem' }}>
      <Header />

      {/* Formulario con evento onSubmit y control de estado */}
      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '8px 14px', cursor: 'pointer', borderRadius: '4px', color: '#fff', backgroundColor: '#007bff', border: 'none' }}>
          Agregar
        </button>
      </form>

      {/* Contador con renderizado de estado */}
      <p style={{ fontWeight: 'bold' }}>
        Completadas: {completedCount} de {tasks.length}
      </p>

      {/* Lista dinámica usando .map() */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
