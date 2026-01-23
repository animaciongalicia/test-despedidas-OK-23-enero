import { motion } from 'framer-motion'
import { AlertTriangle, Clock, DollarSign, Users, MessageCircle, Frown } from 'lucide-react'

const PainPoints = ({ onNext }) => {
  const painPoints = [
    {
      icon: Clock,
      title: 'Horas perdidas organizando',
      description: 'Grupos de WhatsApp eternos sin llegar a nada'
    },
    {
      icon: Users,
      title: 'Nadie se pone de acuerdo',
      description: 'Cada uno quiere una cosa diferente'
    },
    {
      icon: AlertTriangle,
      title: 'Miedo a que salga mal',
      description: 'Y la responsabilidad caiga sobre ti'
    },
    {
      icon: Frown,
      title: 'El novio/a acaba decepcionado',
      description: 'Porque no era lo que esperaba'
    }
  ]

  return (
    <div className="card-party">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">😫</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          ¿Te suena este marrón?
        </h2>
        <p className="text-xl text-gray-600">
          Organizar una despedida es un verdadero dolor de cabeza...
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {painPoints.map((pain, index) => {
          const Icon = pain.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-xl border-2 border-red-200"
            >
              <div className="flex items-start gap-3">
                <div className="bg-red-500 p-2 rounded-lg">
                  <Icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{pain.title}</h3>
                  <p className="text-sm text-gray-600">{pain.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.button
        onClick={() => onNext({})}
        className="btn-primary w-full text-xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        ¡Quiero la solución ya! 💡
      </motion.button>
    </div>
  )
}

export default PainPoints
