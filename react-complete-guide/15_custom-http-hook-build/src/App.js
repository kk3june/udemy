import React, { useEffect, useState, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  // transformTaasks 함수로 서버로부터 응답으로 전달받은 객체를 프론트엔드에서 필요한 구조와 형태를 가진 객체로 변환
  // 이 함수는 커스텀 훅이 응답을 받게되면 알아서 호출할 것
  const transformTasks = (taskObj) => {
    const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }

    };
      setTasks(loadedTasks);

  // useHttp 는 매개변수를 받기도 하지만 loading 상태, error 상태, sendRequest의 포인터를 return 한다.
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks({url: 'https://react-http-6b4a6.firebaseio.com/tasks.json'}, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
