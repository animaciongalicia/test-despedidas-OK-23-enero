import { motion } from 'framer-motion'
import { AlertTriangle, Clock, DollarSign, Users, MessageCircle, Frown } from 'lucide-react'

const PainPoints = ({ onNext }) => {
  const painPoints = [
    {
      icon: Clock,
      title: 'Grupos de WhatsApp ETERNOS',
      description: '200 mensajes sin leer y seguís SIN DECIDIR NADA'
    },
    {
      icon: Users,
      title: 'Nadie se pone de acuerdo',
      description: 'Uno quiere paintball, otro spa, el otro está en Narnia'
    },
    {
      icon: DollarSign,
      title: '"Tío, está MUY caro"',
      description: 'El pesado de siempre que nunca tiene pasta'
    },
    {
      icon: MessageCircle,
      title: 'Ideas ABURRIDÍSIMAS',
      description: 'Cena + discoteca = tu abuela lo haría mejor'
    },
    {
      icon: AlertTriangle,
      title: 'Cagado de miedo',
      description: 'Si sale mal, la culpa es TUYA (obvio)'
    },
    {
      icon: Frown,
      title: 'El novio/a decepcionado/a',
      description: 'Y encima te lo recordarán el resto de tu vida'
    }
  ]

  return (
    <div className="card-party">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">😫</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          El PEDAZO DE MARRÓN que tienes
        </h2>
        <p className="text-xl text-gray-600 mb-2">
          (Que te quieres tirar por un puente)
        </p>
        <p className="text-lg text-gray-500 font-bold">
          👇 Seguro que te suenan TODAS 👇
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
        ¡SÁCAME DE ESTA YA! 🆘💡
      </motion.button>
    </div>
  )
}

export default PainPoints
