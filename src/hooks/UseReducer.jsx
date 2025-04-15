export const initialState = {
  users: [
    { id: 1, userName: 'Ramjan' },
    { id: 2, userName: 'Rahim' },
    { id: 3, userName: 'Khan' },
    { id: 4, userName: 'Abu' },
    { id: 5, userName: 'Abdullah' },

  ],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      }
    default:
      return state
  }
}
