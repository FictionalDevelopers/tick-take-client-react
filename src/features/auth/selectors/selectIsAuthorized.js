export default function selectIsAuthorized(state) {
  const {
    auth: { currentUser },
  } = state;
  return currentUser.id !== null && currentUser.id !== undefined;
}
