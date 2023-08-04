export const getQuerySearch = (params?: Record<any, any>) => {
  if (!params) {
    return '';
  }
  let search = "";
  for (const key in params) {
    const val = params[key];
    search += search ? `&${key}=${val}` : `?${key}=${val}`;
  }
  return search;
};
