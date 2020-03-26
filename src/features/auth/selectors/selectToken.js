export default function selectCurrentUser(state) {
  const {
    auth: { token },
  } = state;

  return token;
};
