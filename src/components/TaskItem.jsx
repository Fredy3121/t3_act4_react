export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.6rem 1rem',
        margin: '0.4rem 0',
        backgroundColor: '#252625',
        borderRadius: '6px',
        color: '#fff',
      }}
    >
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#888' : '#fff',
          cursor: 'pointer',
          flex: 1,
        }}
      >
        {task.title}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          marginLeft: '10px',
          backgroundColor: '#e63946',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          cursor: 'pointer',
        }}
      >
        Eliminar
      </button>
    </li>
  );
}