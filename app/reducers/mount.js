const mount = (state = false, action) => {
  switch (action.type) {
  case 'MOUNT':
    return true;
  default:
    return state;
  }
};

export default mount;
