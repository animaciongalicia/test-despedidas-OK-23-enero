import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const DateLocation = ({ data, onNext }) => {
  const [date, setDate] = useState(data.date || '')
  const [location, setLocation] = useState(data.location || '')

  const dateOptions = [
    { value: 'este-mes', label: 'Este mes', emoji: '⚡' },
    { value: 'proximo-mes', label: 'Próximo mes', emoji: '📅' },
    { value: '2-3-meses', label: 'En 2-3 meses', emoji: '🗓️' },
    { value: 'mas-3-meses', label: 'Más de 3 meses', emoji: '⏰' },
    { value: 'sin-fecha', label: 'Aún sin fecha', emoji: '🤷' }
  ]

  const locationOptions = [
    { value: 'a-coruna', label: 'A Coruña', emoji: '🌊', desc: 'Ciudad con playa' },
    { value: 'vigo', label: 'Vigo', emoji: '🎪', desc: 'Marcha garantizada' },
    { value: 'sanxenxo', label: 'Sanxenxo', emoji: '🏖️', desc: 'Playa y fiesta' },
    { value: 'oporto', label: 'Oporto', emoji: '🍷', desc: 'Internacional' },
    { value: 'santiago', label: 'Santiago', emoji: '🎓', desc: 'Ambiente universitario' },
    { value: 'pontevedra', label: 'Pontevedra', emoji: '🎭', desc: 'Casco viejo' },
    { value: 'otros', label: 'Otro sitio', emoji: '🗺️', desc: 'Cuéntanos' }
  ]

  const handleSubmit = () => {
    if (date && location) {
      onNext({ date, location })
    }
  }

  return (
    <div className="card-party max-h-[85vh] overflow-y-auto">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">📍</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          ¿Cuándo y dónde?
        </h2>
        <p className="text-xl text-gray-600">
          A liarla, ¿no? 🔥
        </p>
      </div>

      {/* Fecha */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
          <Calendar className="text-party-pink" />
          ¿Cuándo queréis liarla?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {dateOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setDate(option.value)}
              className={`option-card ${date === option.value ? 'selected' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-2">{option.emoji}</div>
              <div className="font-bold text-sm text-gray-800">{option.label}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Ubicación */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
          <MapPin className="text-party-blue" />
          ¿Dónde montáis el sarao?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {locationOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setLocation(option.value)}
              className={`option-card ${location === option.value ? 'selected' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-2">{option.emoji}</div>
              <div className="font-bold text-sm text-gray-800">{option.label}</div>
              <div className="text-xs text-gray-600">{option.desc}</div>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.button
        onClick={handleSubmit}
        disabled={!date || !location}
        className={`btn-primary w-full text-xl ${(!date || !location) ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={date && location ? { scale: 1.02 } : {}}
        whileTap={date && location ? { scale: 0.98 } : {}}
      >
        Siguiente 🚀
      </motion.button>
    </div>
  )
}

export default DateLocation
