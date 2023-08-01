let tournamentsReady = true;

const setTournamentsReady = (ready: boolean) => {
  tournamentsReady = ready;
};

const isTournamentsReady = () => tournamentsReady;

export default {
  setTournamentsReady,
  isTournamentsReady,
};