export default (state = {}, action) => {
  console.log('action',action);
  switch (action.type) {
    case 'LOAD':
      return Object.assign({}, state, {names: action.names}); 
    default:
      return state;
  }
}