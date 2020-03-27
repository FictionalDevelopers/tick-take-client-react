export default function selectToken(state) {
  const {
    auth: { token },
  } = state;

  return token;
};
