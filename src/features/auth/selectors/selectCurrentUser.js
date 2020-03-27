export default function selectCurrentUser(state) {
  const {
    auth: { currentUser },
  } = state;

  return currentUser;
};
