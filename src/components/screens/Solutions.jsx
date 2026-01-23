import { motion } from 'framer-motion'
import { Zap, Target, Sparkles, TrendingUp, Shield, Heart } from 'lucide-react'

const Solutions = ({ onNext }) => {
  const solutions = [
    {
      icon: Zap,
      title: 'Plan en 2 minutos',
      description: 'Responde y listo. CHAO grupos infinitos de WhatsApp'
    },
    {
      icon: Target,
      title: 'Ideas DE LOCOS',
      description: 'Cosas que jamás se te habrían ocurrido (para bien o para mal)'
    },
    {
      icon: Sparkles,
      title: 'Personalizado al 100%',
      description: 'Según vuestro nivel de locura y cuánto queréis gastar'
    },
    {
      icon: TrendingUp,
      title: 'Expertos en Galicia',
      description: 'Conocemos TODOS los sitios de marcha (y los que no deberías ir)'
    },
    {
      icon: Shield,
      title: 'Tú tranquilo/a',
      description: 'Si sale mal, es culpa de la IA, no tuya 🤷'
    },
    {
      icon: Heart,
      title: 'Recuerdos ÉPICOS',
      description: 'De los que contaréis hasta a vuestros nietos'
    }
  ]

  return (
    <div className="card-party">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🎯</div>
        <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-party-blue to-party-purple bg-clip-text text-transparent">
          ¡Nosotros te lo RESOLVEMOS!
        </h2>
        <p className="text-xl text-gray-600 mb-2">
          (Que para eso estamos, joder)
        </p>
        <p className="text-lg text-gray-500">
          Nuestra IA hace el trabajo SUCIO por ti
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {solutions.map((solution, index) => {
          const Icon = solution.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border-2 border-green-300"
            >
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-party-blue to-party-green p-2 rounded-lg">
                  <Icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{solution.title}</h3>
                  <p className="text-sm text-gray-600">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-party-pink/10 to-party-purple/10 p-6 rounded-2xl mb-6 border-2 border-party-pink/30">
        <p className="text-center text-lg font-bold text-gray-800">
          🎁 <span className="text-party-pink">100% GRATIS</span> y sin compromiso •
          Tu plan de locos en <span className="text-party-purple">30 segundos</span>
        </p>
        <p className="text-center text-sm text-gray-600 mt-2">
          (Sí, has leído bien: GRATIS DE VERDAD)
        </p>
      </div>

      <motion.button
        onClick={() => onNext({})}
        className="btn-primary w-full text-xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        ¡DALE, VAMOS A LIARLA! 🚀🔥
      </motion.button>
    </div>
  )
}

export default Solutions
