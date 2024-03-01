import { BiPencil, BiTrash } from 'react-icons/bi';

// Types
import Task from '../../types/Task';

// CSS
import styles from './styles.module.css';

type Props = {
  taskList: Task[];
  handleDelete(id: number): void;
};

const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map(({ id, title, difficulty }) => (
          <div key={id} className={styles.task}>
            <div className={styles.details}>
              <h4>{title}</h4>
              <p>Dificuldade: {difficulty}</p>
            </div>
            <div className={styles.actions}>
              <BiPencil />
              <BiTrash onClick={() => handleDelete(id)} />
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
