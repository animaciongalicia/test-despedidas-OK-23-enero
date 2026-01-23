import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const Activities = ({ data, onNext }) => {
  const [activities, setActivities] = useState(data.activities || [])

  const activityOptions = [
    { value: 'paintball', label: 'Paintball', emoji: '🔫' },
    { value: 'karting', label: 'Karting', emoji: '🏎️' },
    { value: 'barco', label: 'Barco/Catamarán', emoji: '⛵' },
    { value: 'surf', label: 'Surf/Paddle', emoji: '🏄' },
    { value: 'buggies', label: 'Buggies/Quads', emoji: '🛞' },
    { value: 'escape-room', label: 'Escape Room', emoji: '🔐' },
    { value: 'spa', label: 'Spa/Balneario', emoji: '💆' },
    { value: 'catas', label: 'Catas vino/cerveza', emoji: '🍷' },
    { value: 'gastronomia', label: 'Ruta gastronómica', emoji: '🍽️' },
    { value: 'discoteca', label: 'Discoteca/Pub', emoji: '💃' },
    { value: 'beach-club', label: 'Beach Club', emoji: '🏖️' },
    { value: 'verbena', label: 'Verbena gallega', emoji: '🎺' },
    { value: 'afterhours', label: 'After hours', emoji: '🌅' },
    { value: 'humor-amarillo', label: 'Humor amarillo', emoji: '🤪' },
    { value: 'otras', label: 'Otras actividades', emoji: '🎯' }
  ]

  const toggleActivity = (value) => {
    if (activities.includes(value)) {
      setActivities(activities.filter(a => a !== value))
    } else {
      setActivities([...activities, value])
    }
  }

  const handleSubmit = () => {
    if (activities.length > 0) {
      onNext({ activities })
    }
  }

  return (
    <div className="card-party max-h-[85vh] overflow-y-auto">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🎯</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          ¿Qué actividades os molan?
        </h2>
        <p className="text-xl text-gray-600">
          Selecciona todas las que queráis (mínimo 1)
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {activityOptions.map((activity) => (
          <motion.button
            key={activity.value}
            onClick={() => toggleActivity(activity.value)}
            className={`option-card relative ${activities.includes(activity.value) ? 'selected' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-3xl mb-2">{activity.emoji}</div>
            <div className="font-bold text-sm text-gray-800">{activity.label}</div>
            {activities.includes(activity.value) && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 right-2 bg-party-pink rounded-full p-1"
              >
                <Check className="text-white" size={16} />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <div className="bg-party-blue/10 p-4 rounded-xl mb-6 text-center">
        <p className="text-sm font-semibold text-gray-700">
          📊 Has seleccionado <span className="text-party-pink text-lg">{activities.length}</span> actividades
        </p>
      </div>

      <motion.button
        onClick={handleSubmit}
        disabled={activities.length === 0}
        className={`btn-primary w-full text-xl ${activities.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={activities.length > 0 ? { scale: 1.02 } : {}}
        whileTap={activities.length > 0 ? { scale: 0.98 } : {}}
      >
        Siguiente 🎊
      </motion.button>
    </div>
  )
}

export default Activities
