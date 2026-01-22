import { motion } from 'framer-motion'
import { Share2, Wrench, AlertCircle, TrendingUp, Target, Zap, PartyPopper } from 'lucide-react'

const Report = ({ data, onRestart }) => {
  const shareWhatsApp = () => {
    const message = encodeURIComponent(
      `🎉 ¡Mira el plan que he creado para nuestra despedida!\n\n` +
      `Haz el tuyo aquí: ${window.location.origin}`
    )
    window.open(`https://wa.me/?text=${message}`, '_blank')
  }

  const contactAgency = () => {
    const message = encodeURIComponent(
      `¡Hola! He completado el test de despedidas y necesito ayuda para organizarla.\n\n` +
      `Mi nombre: ${data.name}\n` +
      `WhatsApp: ${data.whatsapp}`
    )
    window.open(`https://wa.me/34612345678?text=${message}`, '_blank')
  }

  const getLocationName = (location) => {
    const locations = {
      'a-coruna': 'A Coruña',
      'vigo': 'Vigo',
      'sanxenxo': 'Sanxenxo',
      'oporto': 'Oporto',
      'santiago': 'Santiago',
      'pontevedra': 'Pontevedra',
      'otros': 'otra ubicación'
    }
    return locations[location] || location
  }

  return (
    <div className="space-y-6 max-h-[85vh] overflow-y-auto pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-party text-center"
      >
        <div className="text-6xl mb-4">🎊</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-party-pink via-party-purple to-party-blue bg-clip-text text-transparent">
          ¡Tu Informe está listo!
        </h1>
        <p className="text-xl text-gray-600">
          Aquí está tu despedida perfecta, {data.name} 🚀
        </p>
      </motion.div>

      {/* Resumen */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card-party"
      >
        <div className="flex items-center gap-3 mb-4">
          <PartyPopper className="text-party-pink" size={28} />
          <h2 className="text-2xl font-black text-gray-800">Resumen de tu despedida</h2>
        </div>
        <div className="bg-gradient-to-br from-party-blue/10 to-party-purple/10 p-6 rounded-2xl space-y-3">
          <p className="text-lg">
            <strong className="text-party-purple">👥 Grupo:</strong> {data.groupSize} personas • {data.protagonist === 'novio' ? 'Novio' : data.protagonist === 'novia' ? 'Novia' : 'Protagonista'}
          </p>
          <p className="text-lg">
            <strong className="text-party-purple">📍 Destino:</strong> {getLocationName(data.location)}
          </p>
          <p className="text-lg">
            <strong className="text-party-purple">🎯 Estilo:</strong> {data.partyType}
          </p>
          <p className="text-lg">
            <strong className="text-party-purple">🔥 Nivel de locura:</strong> {data.dareLevel}/5
          </p>
          <p className="text-lg">
            <strong className="text-party-purple">🎊 Actividades:</strong> {data.activities.length} seleccionadas
          </p>
        </div>
      </motion.div>

      {/* Análisis con retranca */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card-party"
      >
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-party-yellow" size={28} />
          <h2 className="text-2xl font-black text-gray-800">Análisis Express</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">✅ Puntos Fuertes</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Tenéis clarísimo que queréis pasarlo bien (y eso ya es medio camino)</li>
              <li>• El grupo tiene el tamaño perfecto para no volverse locos organizando</li>
              <li>• {getLocationName(data.location)} es TOP para despedidas. Sabéis elegir 🎯</li>
              {data.dareLevel >= 4 && <li>• Con ese nivel de atrevimiento, la diversión está asegurada 🔥</li>}
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-2">⚠️ Áreas de Mejora</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• No os olvidéis de reservar CON TIEMPO (sobre todo en temporada alta)</li>
              <li>• Tened un plan B por si el tiempo no acompaña (esto es Galicia, ya sabes)</li>
              {!data.accommodation && <li>• Pensad bien el tema alojamiento. Después de la fiesta, agradeceréis tener dónde caer</li>}
              <li>• Confirmad TODO con la pandilla antes de reservar (que luego siempre hay alguno que se echa atrás)</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Plan de Despedida */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card-party"
      >
        <div className="flex items-center gap-3 mb-4">
          <Target className="text-party-purple" size={28} />
          <h2 className="text-2xl font-black text-gray-800">Tu Plan Personalizado</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-party-pink/10 to-party-orange/10 p-5 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-gray-800">🌅 DÍA 1 - Arranque</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-party-pink font-bold">12:00</span>
                <span>Llegada a {getLocationName(data.location)} y check-in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-party-pink font-bold">14:00</span>
                <span>Comida de grupo (para coger fuerzas)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-party-pink font-bold">17:00</span>
                <span>Primera actividad: {data.activities[0] || 'Sorpresa'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-party-pink font-bold">21:00</span>
                <span>Cena con mucha retranca</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-party-pink font-bold">00:00</span>
                <span>¡A la calle! Marcha nocturna</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-party-blue/10 to-party-purple/10 p-5 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-gray-800">☀️ DÍA 2 - A por todas</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-party-blue font-bold">11:00</span>
                <span>Desayuno recuperatorio (que falta hace)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-party-blue font-bold">13:00</span>
                <span>Actividad estrella del día</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-party-blue font-bold">20:00</span>
                <span>Cena de despedida épica</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-party-blue font-bold">23:00</span>
                <span>Final: {data.ending === 'playa' ? '🏖️ A la playa' : data.ending === 'after' ? '🌅 After hasta el amanecer' : '🎉 Sorpresa final'}</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Recomendaciones finales */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card-party"
      >
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="text-party-green" size={28} />
          <h2 className="text-2xl font-black text-gray-800">Consejos Pro</h2>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-xl border-2 border-yellow-300">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-2xl">💰</span>
              <span><strong>Presupuesto:</strong> Haced una caja común desde el principio. Evitaréis el "luego te pago" eterno</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📸</span>
              <span><strong>Fotos:</strong> Asignad a alguien (sobrio) para grabar los mejores momentos</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🚗</span>
              <span><strong>Transporte:</strong> Si vais a beber, organizad transporte. Seguridad ante todo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎁</span>
              <span><strong>Sorpresas:</strong> Guardad algún as en la manga para flipar al protagonista</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Botones de acción */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card-party"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={shareWhatsApp}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Share2 size={20} />
            Compartir
          </button>

          <button
            onClick={() => window.open('/recursos', '_blank')}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <Wrench size={20} />
            Herramientas
          </button>

          <button
            onClick={contactAgency}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            <AlertCircle size={20} />
            SOCORRO
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onRestart}
            className="text-party-purple hover:text-party-pink font-semibold underline"
          >
            🔄 Hacer otro test
          </button>
        </div>
      </motion.div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card-party bg-gradient-to-r from-party-pink via-party-purple to-party-blue text-white text-center"
      >
        <h3 className="text-3xl font-black mb-3">🎉 ¿Listo para la aventura?</h3>
        <p className="text-lg mb-4">
          Tenemos contactos TOP en toda Galicia para hacer realidad esta despedida
        </p>
        <button
          onClick={contactAgency}
          className="bg-white text-party-purple px-8 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl"
        >
          ¡Quiero que me ayudéis! 🚀
        </button>
      </motion.div>
    </div>
  )
}

export default Report
