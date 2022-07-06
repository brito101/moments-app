import React from "react"
import styles from "./UserStatsGraph.module.css"
import { VictoryPie, VictoryChart, VictoryBar, VictoryAxis } from "victory"

export default function UserStatsGraph({ data }) {
  const [graph, setGraph] = React.useState([])
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    const graphData = data.map((i) => {
      return {
        x: i.title,
        y: Number(i.access),
      }
    })
    setTotal(data.map(({ access }) => Number(access)).reduce((a, b) => a + b))
    setGraph(graphData)
  }, [data])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>Acessos: {total}</div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#cb535f",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 10,
              fill: "#333e4f",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryAxis dependentAxis />
          <VictoryAxis
            style={{
              tickLabels: {
                fontSize: 10,
                angle: 270,
                verticalAnchor: "middle",
                textAnchor: "end",
              },
            }}
          />
          <VictoryBar alignment='start' data={graph} />
        </VictoryChart>
      </div>
    </section>
  )
}
