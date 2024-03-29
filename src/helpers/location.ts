import qs from 'query-string';

export function getSearchObj() {
  const search =
    typeof window !== 'undefined' && '?template=template1&user=sunbcy'; // window.location.search
  const query = qs.parse(search);

  return query || {};
}
