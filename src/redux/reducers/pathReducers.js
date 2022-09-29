import { UPDATE_PATH } from '../actions/pathActions';

const updatePath = (state, action) => {
  const path = action.pathName
  const tab = action.newTab
  let newPath = ''
  const s = path.split('/')
  if (tab !== null && path.includes(tab) === false) {
    // let s = path.split('/')
    if (s[s.length - 1] === action.compare) {
      newPath = `${path}/${tab}`
    } else {
      s[s.length - 1] = tab
      newPath = s.toString().replace(/,/g, '/')
    }
  } else if (s[s.length - 1] === s[2]) {

    return { newPath }
  }
  return { newPath }
}

const PathReducers = (state = { newPath: '' }, action) => {
  switch (action.type) {
    case UPDATE_PATH:
      return updatePath(state, action);
    default:
      return state;
  }
};

export default PathReducers;