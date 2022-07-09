import React, { useCallback, useEffect, useState } from 'react';

/* GETTER PARAMS MUST BE MEMOIZED */
const useStateAsync = <State, Params>(
  initialState: State,
  getter: (params: Params) => Promise<State>,
  getterParams: Params | null | undefined,
): {
  data: State;
  reload: () => void;
  set: React.Dispatch<React.SetStateAction<State>>;
} => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    let isSubscribed = true;
    if (getterParams !== null && typeof getterParams !== 'undefined') {
      getter(getterParams).then((data) => {
        if (isSubscribed) {
          setState(data);
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    return () => { isSubscribed = false; };
  }, [getter, getterParams]);

  const reload = useCallback(() => {
    let isSubscribed = true;
    if (getterParams !== null && typeof getterParams !== 'undefined') {
      getter(getterParams).then((data) => {
        if (isSubscribed) {
          setState(data);
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    return () => { isSubscribed = false; };
  }, [getter, getterParams]);

  return {
    data: state,
    reload,
    set: setState,
  };
};

export default useStateAsync;
