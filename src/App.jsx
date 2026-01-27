import Wizard from './components/Wizard'
import './App.css'

function App() {
  return (
    <div className="min-h-screen py-8 px-4">
      <Wizard />

      <footer
        style={{
          marginTop: 24,
          padding: "12px 12px 20px",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          fontSize: 14,
          lineHeight: 1.5,
          background: "rgba(255,255,255,0.85)",
          borderRadius: 12,
        }}
      >
        <details>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>
            Herramientas y recursos para despedidas en Galicia
          </summary>

          <div style={{ marginTop: 10, maxWidth: 900 }}>
            <h2 style={{ fontSize: 16, margin: "10px 0 6px" }}>
              Despedidas en Galicia: Coruña, Vigo y Sanxenxo
            </h2>

            <p style={{ margin: "6px 0" }}>
              Este <strong>test de despedidas</strong> te ayuda a aterrizar un plan en minutos: tipo de grupo,
              presupuesto aproximado e ideas de actividades. Si buscas <strong>despedidas de soltero o soltera en Galicia</strong>,
              úsalo para decidir rápido y evitar discusiones. Funciona especialmente bien para grupos que vienen a
              <strong> A Coruña</strong>, <strong>Vigo</strong> o <strong>Sanxenxo</strong>.
            </p>

            <p style={{ margin: "6px 0" }}>
              Si ya tenéis el plan, id a la calculadora para repartir gastos; si estáis indecisos, usad la ruleta.
            </p>

            <p style={{ margin: "10px 0 6px", fontWeight: 600 }}>
              Más herramientas gratis:
            </p>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li><a href="https://ruletadespedidas.com/">Ruleta de despedidas</a></li>
              <li><a href="https://retranca.es/">Retranca (juego para grupos)</a></li>
              <li><a href="https://gastosdespedidas.com/">Calculadora de gastos</a></li>
            </ul>

            <p style={{ margin: "10px 0 6px", fontWeight: 600 }}>
              Packs y ciudades:
            </p>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li><a href="https://despedidascoruna.es/">Despedidas en Coruña</a></li>
              <li><a href="https://despedidasvigo.com/">Despedidas en Vigo</a></li>
              <li><a href="https://despedidassanxenxo.es/">Despedidas en Sanxenxo</a></li>
            </ul>
          </div>
        </details>
      </footer>
    </div>
  )
}

export default App
