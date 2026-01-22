import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const GroupSize = ({ data, onNext }) => {
  const [groupSize, setGroupSize] = useState(data.groupSize || '')
  const [protagonist, setProtagonist] = useState(data.protagonist || '')

  const sizeOptions = [
    { value: '2-5', label: 'Grupo íntimo', emoji: '👥', desc: '2-5 personas' },
    { value: '6-10', label: 'Pandilla normal', emoji: '👨‍👩‍👧‍👦', desc: '6-10 personas' },
    { value: '11-15', label: 'Grupo grande', emoji: '🎉', desc: '11-15 personas' },
    { value: '16-20', label: 'La tropa entera', emoji: '🎊', desc: '16-20 personas' },
    { value: '20+', label: '¡El ejército!', emoji: '🚀', desc: 'Más de 20' }
  ]

  const protagonistOptions = [
    { value: 'novio', label: 'El novio', emoji: '🤵' },
    { value: 'novia', label: 'La novia', emoji: '👰' },
    { value: 'otro', label: 'Otro/a', emoji: '🎭' }
  ]

  const handleSubmit = () => {
    if (groupSize && protagonist) {
      onNext({ groupSize, protagonist })
    }
  }

  return (
    <div className="card-party">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">👥</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          Háblanos de la pandilla
        </h2>
        <p className="text-xl text-gray-600">
          Cuantos más locos, mejor 🎉
        </p>
      </div>

      {/* Tamaño del grupo */}
      <div className="mb-8">
        <label className="block text-lg font-bold text-gray-800 mb-4">
          ¿Cuántos vais a ser?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {sizeOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setGroupSize(option.value)}
              className={`option-card ${groupSize === option.value ? 'selected' : ''}`}
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

      {/* Protagonista */}
      <div className="mb-8">
        <label className="block text-lg font-bold text-gray-800 mb-4">
          ¿Y el/la protagonista?
        </label>
        <div className="grid grid-cols-3 gap-3">
          {protagonistOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setProtagonist(option.value)}
              className={`option-card ${protagonist === option.value ? 'selected' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-4xl mb-2">{option.emoji}</div>
              <div className="font-bold text-sm text-gray-800">{option.label}</div>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.button
        onClick={handleSubmit}
        disabled={!groupSize || !protagonist}
        className={`btn-primary w-full text-xl ${(!groupSize || !protagonist) ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={groupSize && protagonist ? { scale: 1.02 } : {}}
        whileTap={groupSize && protagonist ? { scale: 0.98 } : {}}
      >
        Siguiente 🎯
      </motion.button>
    </div>
  )
}

export default GroupSize
