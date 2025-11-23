import { useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

type Route = {
  href: string
  label: string
  slug: string
}

export function useRoutes() {
  const routes: Route[] = useMemo(() => [
    { href: '/', label: 'Home', slug: '' },
    { href: '/maestro', label: 'Maestro', slug: 'MA' },
    { href: '/apriori', label: 'Apriori', slug: 'AP' },
    { href: '/tezaur', label: 'Tezaur', slug: 'TE' },
    { href: '/roua-moldovei', label: 'Roua Moldovei', slug: 'RO' },
    { href: '/jadore', label: 'J\'Adore', slug: 'JA' },
    { href: '/glenwood', label: 'Glenwood', slug: 'GL' },
    { href: '/taiga', label: 'Taiga', slug: 'TA' },
  ], [])

  const [route, setRoute] = useState<Route>(routes[0])
  const location = useLocation()
  const navigate = useNavigate()
    
  useEffect(() => {
    if (routes && route.href != location.pathname) {
      const index = routes.findIndex(r => r.href === location.pathname)
      const root = document.getElementById('root')!
      root.scrollTo({ top: 0, behavior: 'smooth' })
      if (index === -1) {
        navigate('/')
      } else {
        setRoute(routes[index])
      }
    }
  }, [location.pathname, navigate, route.href, routes])

  return {
    route: route,
    routes: routes
  }
}