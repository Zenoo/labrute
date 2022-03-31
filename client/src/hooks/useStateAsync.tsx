import React, { useEffect, useState } from 'react';

/* GETTER PARAMS MUST BE MEMOIZED */
const useStateAsync = <State, Params>(
  initialState: State,
  getter: (params?: Params) => Promise<State>,
  getterParams?: Params
): [State, React.Dispatch<React.SetStateAction<State>>] => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let isSubscribed = true;
    getter(getterParams).then((data) => {
      if (isSubscribed) {
        setState(data);
      }
    }).catch((error) => {
      console.error(error);
    });
    return () => { isSubscribed = false; };
  }, [getter, getterParams]);

  return [state, setState];
};

export default useStateAsync;