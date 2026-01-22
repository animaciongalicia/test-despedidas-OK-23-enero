import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const SpecialNeeds = ({ data, onNext }) => {
  const [crazyFriend, setCrazyFriend] = useState(data.crazyFriend || '')
  const [preferences, setPreferences] = useState(data.preferences || [])

  const crazyOptions = [
    { value: 'si', label: 'Sí, hay uno/a que se pasa', emoji: '🤪' },
    { value: 'varios', label: 'Varios desfasados', emoji: '🔥' },
    { value: 'no', label: 'No, todos tranquilos', emoji: '😇' },
    { value: 'protagonista', label: 'El/la protagonista', emoji: '👑' }
  ]

  const preferenceOptions = [
    { value: 'musica-actual', label: 'Música actual', emoji: '🎵' },
    { value: 'reggaeton', label: 'Reggaeton', emoji: '💃' },
    { value: 'electronica', label: 'Electrónica', emoji: '🎧' },
    { value: 'rock', label: 'Rock', emoji: '🎸' },
    { value: 'verbena', label: 'Música gallega', emoji: '🎺' },
    { value: 'deportes', label: 'Deportes', emoji: '⚽' },
    { value: 'gastronomia', label: 'Gastronomía', emoji: '🍽️' },
    { value: 'alcohol', label: 'Beber', emoji: '🍻' },
    { value: 'naturaleza', label: 'Naturaleza', emoji: '🌳' },
    { value: 'foto-video', label: 'Fotos/vídeos', emoji: '📸' },
    { value: 'disfraces', label: 'Disfraces', emoji: '🎭' },
    { value: 'sorpresas', label: 'Sorpresas', emoji: '🎁' }
  ]

  const togglePreference = (value) => {
    if (preferences.includes(value)) {
      setPreferences(preferences.filter(p => p !== value))
    } else {
      setPreferences([...preferences, value])
    }
  }

  const handleSubmit = () => {
    if (crazyFriend) {
      onNext({ crazyFriend, preferences })
    }
  }

  return (
    <div className="card-party max-h-[85vh] overflow-y-auto">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🎭</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          Más detalles de la pandilla
        </h2>
        <p className="text-xl text-gray-600">
          Para personalizar al máximo 🎯
        </p>
      </div>

      {/* Amigo loco */}
      <div className="mb-8">
        <label className="block text-lg font-bold text-gray-800 mb-4">
          ¿Hay algún desfasado/a en la pandilla?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {crazyOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setCrazyFriend(option.value)}
              className={`option-card ${crazyFriend === option.value ? 'selected' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-2">{option.emoji}</div>
              <div className="font-bold text-sm text-gray-800">{option.label}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Preferencias del protagonista */}
      <div className="mb-8">
        <label className="block text-lg font-bold text-gray-800 mb-4">
          ¿Qué le gusta más al novio/novia? (opcional)
        </label>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {preferenceOptions.map((pref) => (
            <motion.button
              key={pref.value}
              onClick={() => togglePreference(pref.value)}
              className={`option-card relative ${preferences.includes(pref.value) ? 'selected' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl mb-1">{pref.emoji}</div>
              <div className="font-bold text-xs text-gray-800">{pref.label}</div>
              {preferences.includes(pref.value) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 bg-party-pink rounded-full p-0.5"
                >
                  <Check className="text-white" size={12} />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.button
        onClick={handleSubmit}
        disabled={!crazyFriend}
        className={`btn-primary w-full text-xl ${!crazyFriend ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={crazyFriend ? { scale: 1.02 } : {}}
        whileTap={crazyFriend ? { scale: 0.98 } : {}}
      >
        Siguiente 🚀
      </motion.button>
    </div>
  )
}

export default SpecialNeeds
