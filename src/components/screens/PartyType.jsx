import { useState } from 'react'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

const PartyType = ({ data, onNext }) => {
  const [partyType, setPartyType] = useState(data.partyType || '')

  const partyTypes = [
    {
      value: 'desfase-total',
      label: 'Desfase Total',
      emoji: '🔥',
      desc: 'Sin límites. A lo loco',
      color: 'from-red-500 to-orange-500'
    },
    {
      value: 'aventura',
      label: 'Aventura & Adrenalina',
      emoji: '🚁',
      desc: 'Actividades extremas',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: 'playa-fiesta',
      label: 'Playa & Fiesta',
      emoji: '🏖️',
      desc: 'Sol, playa y marcha',
      color: 'from-yellow-500 to-orange-400'
    },
    {
      value: 'relax-spa',
      label: 'Relax & Spa',
      emoji: '💆',
      desc: 'Wellness y desconexión',
      color: 'from-green-500 to-teal-500'
    },
    {
      value: 'cultural',
      label: 'Cultural & Gastro',
      emoji: '🍷',
      desc: 'Catas, visitas, buen comer',
      color: 'from-purple-500 to-pink-500'
    },
    {
      value: 'mixto',
      label: 'De Todo un Poco',
      emoji: '🎭',
      desc: 'Mix variado y equilibrado',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const handleSubmit = () => {
    if (partyType) {
      onNext({ partyType })
    }
  }

  return (
    <div className="card-party max-h-[85vh] overflow-y-auto">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🎪</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          ¿Qué tipo de desfase queréis?
        </h2>
        <p className="text-xl text-gray-600">
          Elige vuestro estilo 🎯
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {partyTypes.map((type) => (
          <motion.button
            key={type.value}
            onClick={() => setPartyType(type.value)}
            className={`option-card ${partyType === type.value ? 'selected' : ''} p-6`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-5xl mb-3">{type.emoji}</div>
            <h3 className="font-black text-lg text-gray-800 mb-2">{type.label}</h3>
            <p className="text-sm text-gray-600">{type.desc}</p>
            {partyType === type.value && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mt-3"
              >
                <Flame className="text-party-pink mx-auto" size={24} />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <motion.button
        onClick={handleSubmit}
        disabled={!partyType}
        className={`btn-primary w-full text-xl ${!partyType ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={partyType ? { scale: 1.02 } : {}}
        whileTap={partyType ? { scale: 0.98 } : {}}
      >
        Siguiente 💥
      </motion.button>
    </div>
  )
}

export default PartyType
