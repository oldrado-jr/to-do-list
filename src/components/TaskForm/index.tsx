import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

// Types
import Task from '../../types/Task';

// CSS
import styles from './styles.module.css';

type Props = {
  btnText: string;
  taskList: Task[];
  setTaskList?: Dispatch<SetStateAction<Task[]>>;
};

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: Task = {
      id,
      title,
      difficulty,
    };

    setTaskList!([...taskList, newTask]);

    setTitle('');
    setDifficulty(0);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <label className={styles['input-container']}>
        <span>Título:</span>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className={styles['input-container']}>
        <span>Dificuldade:</span>
        <input
          type="number"
          placeholder="Dificuldade da tarefa"
          value={difficulty}
          onChange={(e) => setDifficulty(parseInt(e.target.value))}
        />
      </label>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
