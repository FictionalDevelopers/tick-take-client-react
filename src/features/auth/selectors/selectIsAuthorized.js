export default function selectIsAuthorized(state) {
  const {
    auth: { token },
  } = state;

  return token !== null;
};
