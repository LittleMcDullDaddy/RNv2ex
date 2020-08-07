export default (state = [], action) => {
  console.log('toptopics reducer, action type:' + action.type);
  switch (action.type) {
    case 'POSTS_LOAD':
      return [].concat(action.payload);
    default:
      return state;
  }
};
