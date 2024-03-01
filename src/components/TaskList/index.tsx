import { BiPencil, BiTrash } from 'react-icons/bi';

// Types
import Task from '../../types/Task';

// CSS
import styles from './styles.module.css';

type Props = {
  taskList: Task[];
  handleDelete(id: number): void;
  handleEdit(task: Task): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <BiPencil onClick={() => handleEdit(task)} />
              <BiTrash onClick={() => handleDelete(task.id)} />
            </div>
          </div>
        ))
      ) : (
        <p>Não tem tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
