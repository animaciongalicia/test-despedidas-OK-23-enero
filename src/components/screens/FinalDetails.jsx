import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Droplet, Beer, DollarSign } from 'lucide-react'

const FinalDetails = ({ data, onNext }) => {
  const [accommodation, setAccommodation] = useState(data.accommodation || false)
  const [budget, setBudget] = useState(data.budget || '')
  const [specialRequests, setSpecialRequests] = useState(data.specialRequests || '')

  const budgetOptions = [
    { value: 'low', label: 'Ajustado', emoji: '💰', desc: 'Menos de 100€/persona' },
    { value: 'medium', label: 'Normal', emoji: '💵', desc: '100-200€/persona' },
    { value: 'high', label: 'Generoso', emoji: '💸', desc: '200-400€/persona' },
    { value: 'luxury', label: 'Sin límites', emoji: '🤑', desc: 'Más de 400€/persona' }
  ]

  const handleSubmit = () => {
    if (budget) {
      onNext({ accommodation, budget, specialRequests })
    }
  }

  return (
    <div className="card-party max-h-[85vh] overflow-y-auto">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">💎</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          Últimos detalles
        </h2>
        <p className="text-xl text-gray-600">
          Ya casi estamos 🎯
        </p>
      </div>

      {/* Alojamiento */}
      <div className="mb-8">
        <label className="block text-lg font-bold text-gray-800 mb-4">
          ¿Necesitáis sitio donde dormir/ducharos?
        </label>
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            onClick={() => setAccommodation(true)}
            className={`option-card p-6 ${accommodation ? 'selected' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={40} className="mx-auto mb-2 text-party-blue" />
            <div className="font-bold text-gray-800">Sí, necesitamos</div>
          </motion.button>
          <motion.button
            onClick={() => setAccommodation(false)}
            className={`option-card p-6 ${!accommodation ? 'selected' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Droplet size={40} className="mx-auto mb-2 text-party-purple" />
            <div className="font-bold text-gray-800">No hace falta</div>
          </motion.button>
        </div>
      </div>

      {/* Presupuesto */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
          <DollarSign className="text-party-green" />
          ¿Cuál es vuestro presupuesto aproximado?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {budgetOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setBudget(option.value)}
              className={`option-card ${budget === option.value ? 'selected' : ''}`}
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

      {/* Peticiones especiales */}
      <div className="mb-8">
        <label className="block text-lg font-bold text-gray-800 mb-4">
          ¿Alguna petición especial? (opcional)
        </label>
        <textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Ej: Uno del grupo es celíaco, queremos fotógrafo, tiene que ser vegano..."
          className="input-party min-h-[100px] resize-none"
          maxLength={300}
        />
        <div className="text-right text-xs text-gray-500 mt-1">
          {specialRequests.length}/300 caracteres
        </div>
      </div>

      <motion.button
        onClick={handleSubmit}
        disabled={!budget}
        className={`btn-primary w-full text-xl ${!budget ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={budget ? { scale: 1.02 } : {}}
        whileTap={budget ? { scale: 0.98 } : {}}
      >
        ¡Ver mi informe! 🎉
      </motion.button>
    </div>
  )
}

export default FinalDetails
