import { useState } from 'react'
import { motion } from 'framer-motion'

const PartyLevel = ({ data, onNext }) => {
  const [dareLevel, setDareLevel] = useState(data.dareLevel || 3)
  const [ending, setEnding] = useState(data.ending || '')

  const dareLevels = [
    { value: 1, label: 'Tranquilón', emoji: '😌', desc: 'Sin sustos, relax total' },
    { value: 2, label: 'Con mesura', emoji: '😊', desc: 'Un poquito de marcha' },
    { value: 3, label: 'Medio loco', emoji: '😜', desc: 'Diversión moderada' },
    { value: 4, label: 'Bastante loco', emoji: '🤪', desc: 'A tope pero sin pasarse' },
    { value: 5, label: '¡DESFASE!', emoji: '🔥', desc: 'Sin límites, a lo bestia' }
  ]

  const endingOptions = [
    { value: 'playa', label: 'Bañando en la playa', emoji: '🏖️' },
    { value: 'after', label: 'En un after', emoji: '🌅' },
    { value: 'durmiendo', label: 'Durmiendo la mona', emoji: '😴' },
    { value: 'misa', label: 'En misa (literal)', emoji: '⛪' },
    { value: 'calabozo', label: 'En el calabozo', emoji: '👮' },
    { value: 'desayuno', label: 'Desayunando churros', emoji: '🥐' },
    { value: 'sorpresa', label: 'Que nos sorprenda', emoji: '🎲' }
  ]

  const handleSubmit = () => {
    if (ending) {
      onNext({ dareLevel, ending })
    }
  }

  return (
    <div className="card-party max-h-[85vh] overflow-y-auto">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🌡️</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          ¿Cuánto atrevidos sois?
        </h2>
        <p className="text-xl text-gray-600">
          Nivel de locura de la pandilla 🔥
        </p>
      </div>

      {/* Nivel de atrevimiento */}
      <div className="mb-10">
        <label className="block text-lg font-bold text-gray-800 mb-6 text-center">
          Nivel de atrevimiento: <span className="text-party-pink text-2xl">{dareLevels[dareLevel - 1].emoji}</span>
        </label>

        <div className="space-y-4">
          {dareLevels.map((level) => (
            <motion.button
              key={level.value}
              onClick={() => setDareLevel(level.value)}
              className={`w-full p-4 rounded-xl border-2 transition-all ${
                dareLevel === level.value
                  ? 'border-party-pink bg-party-pink/10 shadow-lg'
                  : 'border-gray-200 hover:border-party-pink/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{level.emoji}</div>
                  <div className="text-left">
                    <div className="font-bold text-gray-800">{level.label}</div>
                    <div className="text-sm text-gray-600">{level.desc}</div>
                  </div>
                </div>
                {dareLevel === level.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-party-pink text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                  >
                    ✓
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Cómo acabar */}
      <div className="mb-8">
        <label className="block text-lg font-bold text-gray-800 mb-4">
          ¿Cómo queréis acabar la noche?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {endingOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setEnding(option.value)}
              className={`option-card ${ending === option.value ? 'selected' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-2">{option.emoji}</div>
              <div className="font-bold text-xs text-gray-800">{option.label}</div>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.button
        onClick={handleSubmit}
        disabled={!ending}
        className={`btn-primary w-full text-xl ${!ending ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={ending ? { scale: 1.02 } : {}}
        whileTap={ending ? { scale: 0.98 } : {}}
      >
        Siguiente 🎉
      </motion.button>
    </div>
  )
}

export default PartyLevel
