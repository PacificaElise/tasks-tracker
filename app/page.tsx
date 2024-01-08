'use client';
import Tasks from './components/Tasks/Tasks';
import { useGlobalState } from './context/globalProvider';

const Home = () => {
  const { tasks } = useGlobalState();

  return (
    <Tasks
      title='All Tasks'
      tasks={tasks}
    />
  );
};

export default Home;
