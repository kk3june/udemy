import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      // 여기서 사용되는 매개변수 forwards 는 의존성
      // useEffect 함수 또는 커스텀 훅 외부에서 설정된 것이 아닌,
      // 매개변수로 받는 값이기 때문에 의존성을 추가해야한다.
      const interval = setInterval(() => {
        if(forwards) {
          setCounter((prevCounter) => prevCounter + 1);
        } else {
          setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
      // 의존성을 추가함에 따라 의존성 변경이 발생할때마다 useEffcet 함수가 실행
    }, [forwards]);

    return counter;
}

export default useCounter;