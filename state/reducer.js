const appReducer = (state = {}, action = { type: 'NOOP' }) => {
  console.debug(`DEBUG: ${state}|${action}`);

  switch (action.type) {
    case 'NOOP':
      return state;
    case 'INVITE_SENT':
      if (state.invites.map(x => x.name).includes(action.payload.name)) {
        return state;
      } else {
        return {
          ...state,
          invites: [...state.invites, action.payload],
          contacts: state.contacts.filter(x => x.name != action.payload.name),
        };
      }

    default:
      console.warn(`Unhandled Action Type: '${action.type}'`);
      return state;
  }
};
export default appReducer;
