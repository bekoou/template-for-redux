const initialState = {
  users: ['Ivan', 'Petya']
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.user]
      }
    default:
      return { ...state }
  }
}
