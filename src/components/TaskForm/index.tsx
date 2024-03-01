import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';

// Types
import Task from '../../types/Task';

// CSS
import styles from './styles.module.css';

type Props = {
  btnText: string;
  taskList: Task[];
  setTaskList?: Dispatch<SetStateAction<Task[]>>;
  task?: Task | null;
  handleUpdate?(taskData: Task): void;
};

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (!task) {
      return;
    }

    const { id, title, difficulty } = task;

    setId(id);
    setTitle(title);
    setDifficulty(difficulty);
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      const taskData: Task = {
        id,
        title,
        difficulty
      };

      handleUpdate(taskData);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: Task = {
        id,
        title,
        difficulty,
      };

      setTaskList!([...taskList, newTask]);

      setTitle('');
      setDifficulty(0);
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <label className={styles['input-container']}>
        <span>Título:</span>
        <input
          type="text"
          placeholder="Título da tarefa"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className={styles['input-container']}>
        <span>Dificuldade:</span>
        <input
          type="number"
          placeholder="Dificuldade da tarefa"
          required
          min={0}
          value={difficulty}
          onChange={(e) => setDifficulty(parseInt(e.target.value))}
        />
      </label>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
