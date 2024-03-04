import { useState } from 'react';

// Components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// Types
import Task from './types/Task';

// CSS
import styles from './App.module.css';

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<Task | null>(null);

  const toggleModal = () => {
    const modal = document.querySelector('#modal');
    modal?.classList.toggle('hide');
  };

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const editTask = (task: Task) => {
    toggleModal();
    setTaskToUpdate(task);
  };

  const updateTask = (taskData: Task) => {
    const updatedTasks = taskList.map((task) => {
      return task.id === taskData.id ? taskData : task;
    });

    setTaskList(updatedTasks);

    toggleModal();
  };

  return (
    <>
      <Modal
        title="Editar tarefa"
        children={
          <TaskForm
            btnText="Editar tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
