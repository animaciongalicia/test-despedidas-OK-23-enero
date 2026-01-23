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
        🍻 ¡A LIARLA PARDA! 🍻
      </h1>

      <p className="text-2xl text-gray-700 mb-4 font-black">
        La despedida más LOCA de Galicia
      </p>

      <p className="text-lg text-gray-600 mb-8">
        (O de Portugal, que aquí no tenemos fronteras cuando se trata de fiesta)
      </p>

      <div className="bg-gradient-to-r from-party-pink/20 to-party-orange/20 p-4 rounded-2xl mb-8 border-2 border-party-pink/30">
        <p className="text-lg font-bold text-gray-800">
          ⚡ En 2 minutos te montamos un PLAN DE LOCOS ⚡
        </p>
        <p className="text-sm text-gray-600 mt-2">
          (Que después dirán: "¿Cómo se nos ocurrió?")
        </p>
      </div>

      <motion.button
        onClick={() => onNext({})}
        className="btn-primary text-2xl px-12 py-5 mb-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ¡A DARLE CAÑA! 🔥🎉
      </motion.button>

      <div className="mt-6 text-sm text-gray-500">
        <PartyPopper className="inline mr-2" size={16} />
        Gratis • Sin compromiso • 100% DESFASE
      </div>
    </div>
  )
}

export default Welcome
