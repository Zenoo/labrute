import { useEffect, useState } from 'react';

/* GETTER PARAMS MUST BE MEMOIZED */
const useStateAsync = <T,>(initialState: T, getter: (params: any) => Promise<T>, getterParams?: any): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let isSubscribed = true;
    getter(getterParams).then((data) => {
      if (isSubscribed) {
        setState(data);
      }
    });
    return () => { isSubscribed = false; };
  }, [getter, getterParams]);

  return [state, setState];
};

export default useStateAsync;