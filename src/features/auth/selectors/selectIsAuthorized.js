import selectToken from './selectToken';

export default function selectIsAuthorized(state) {
  const token = selectToken(state);

  return token !== null;
};
