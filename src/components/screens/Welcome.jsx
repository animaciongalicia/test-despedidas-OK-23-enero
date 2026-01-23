import { motion } from 'framer-motion'
import { PartyPopper, Sparkles } from 'lucide-react'

const Welcome = ({ onNext }) => {
  return (
    <div className="card-party text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
      >
        <div className="text-8xl mb-6 float">🎉</div>
      </motion.div>

      <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-party-pink via-party-purple to-party-blue bg-clip-text text-transparent">
        ¡Despedidas Galicia!
      </h1>

      <p className="text-2xl text-gray-700 mb-8 font-bold">
        ¿La que tipo de despedida os espera? 🚀
      </p>

      <div className="flex items-center justify-center gap-3 mb-8">
        <Sparkles className="text-party-yellow" size={24} />
        <p className="text-lg text-gray-600">
          En 2 minutos tendrás el diagnóstico
        </p>
        <Sparkles className="text-party-yellow" size={24} />
      </div>

      <motion.button
        onClick={() => onNext({})}
        className="btn-primary text-xl px-12 py-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ¡Vamos allá! 🔥
      </motion.button>

      <div className="mt-8 text-sm text-gray-500">
        <PartyPopper className="inline mr-2" size={16} />
        Sin compromiso • Gratis • Divertido
      </div>
    </div>
  )
}

export default Welcome
