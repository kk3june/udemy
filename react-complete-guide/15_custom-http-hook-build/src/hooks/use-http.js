import { useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    // requestConfig : 커스텀 훅을 구현하기 위해 필요한 변수 (url, method, header)에 대한 정보
    // applyData : 세부적인 데이터 변환 과정을 훅을 사용하는 컴포넌트에 정의하여 받아오기 위한 변수
    //              데이터 변환 및 최종 데이터 처리를 위한 코드는 너무 구체적이므로..
    const sendRequest = async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          }
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applyData(data)
  
        setTasks(loadedTasks);
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    };
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    const taskAddHandler = (task) => {
      setTasks((prevTasks) => prevTasks.concat(task));
    };

    // loading, error, sendRequest 는 커스텀 훅을 사용할 컴포넌트에서 필요한 것들이므로 return 
    return { isLoading, error, sendRequest }
}

export default useHttp;