import React from "react"
import { STATS_GET } from "../../Api"
import useFetch from "../../Hooks/useFetch"
import Loading from "../Helper/Loading"
import Error from "../Helper/Error"

import Head from "../Helper/Head"
const UserStatsGraph = React.lazy(() => import('./UserStatsGraph'))

export default function UserStats() {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" description="Estatísticas de visualização de fotos do usuário no site Moments"/>
        <UserStatsGraph data={data}/>
      </React.Suspense>
    )
  } else {
    return null
  }
}
