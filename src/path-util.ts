/*
  path:  /lists/42
  route: /lists
  isMatch? Yes

  path:  /lists/42
  route: /lists/
  isMatch? No

  path:  /lists
  route: /lists/new
  isMatch? No

  path:  /lists
  route: /lists/:id
  isMatch? No

  path:  /42/new
  route: /:id
  isMatch? Yes

  path:  /42/new
  route: /:id/
  isMatch? No
*/

const exists = (value:string) => value !== ''

const split = (str:string) => str.split('/').filter(exists)

const isParam = (route:string) => route.startsWith(':')

const isSubMatch = (path:string, route:string) => (
  path === route || isParam(route)
)

// Returns true if the route is a valid match for the path.
const isMatch = (path:string, route:string) => {
  if (route === '' || route === '/')  // This is a special case.
    return path === '' || path === '/'
  const paths = split(path)
  const routes = split(route)
  if (routes.length > paths.length)
    return false
  const isExact = route.endsWith('/')
  return routes.every((route, i) => {
    if (isExact && i === routes.length - 1)
      return routes.length === paths.length && isSubMatch(paths[i], route)
    else
      return isSubMatch(paths[i], route)
  })
}

// Extracts values from path given the keys from route.
const getParams = (path:string, route:string): Record<string, string> => {
  const paths = split(path)
  const routes = split(route)
  return routes
    .map((route, i) => [paths[i], route])
    .reduce((params, [path, route]) => (
      isParam(route)
        ? {...params, [route.slice(1)]: path}
        : params
    ), {})
}

// Expose these for external testing.
const __internals = {
  exists,
  split,
  isParam,
  isSubMatch,
}

export {__internals, isMatch, getParams}
