const INITIALSTATE = {
  usuarios: [],
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case 'TRAER_USUARIOS':
      return {
        ...state,
        usuarios: action.payload,
      };
    default:
      return state;
  }
};
