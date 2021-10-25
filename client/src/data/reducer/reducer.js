const toggleMenu = (state, action) => {
  return {
    ...state,
    menuOpen: !state.menuOpen,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return toggleMenu(state, action);
    default:
      return state;
  }
};

export default reducer;
