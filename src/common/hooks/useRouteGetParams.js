import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

export default function useRouteGetParams() {
  const { search } = useLocation();

  return parse(search.replace('?', ''));
}
