export const selectIsLoggedIn = state => {
  return state.users.isLoggedIn;
};

export const selectUser = state => state.users.user;

export const selectIsRefreshing = state => state.users.isRefreshing;
