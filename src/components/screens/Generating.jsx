import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { sendToMake, generateAIReport } from '../../services/api'

const Generating = ({ data, onNext }) => {
  const [currentMessage, setCurrentMessage] = useState(0)

  const funnyMessages = [
    "🔮 Consultando con los gurús de la fiesta...",
    "🎲 Tirando los dados del destino...",
    "🍻 Calculando la cantidad perfecta de cerveza...",
    "🎭 Seleccionando los mejores disfraces...",
    "🚀 Activando el modo fiesta máxima...",
    "🎯 Buscando las mejores ofertas en Galicia...",
    "🔥 Encendiendo motores de diversión...",
    "💃 Preparando la playlist definitiva...",
    "🎪 Montando el circo perfecto...",
    "⚡ Cargando ideas locas y divertidas...",
    "🎊 Mezclando adrenalina con diversión...",
    "🌟 Añadiendo un toque de magia gallega...",
    "🎺 Buscando la mejor verbena de la zona...",
    "🏖️ Reservando las mejores playas...",
    "🎉 ¡Ya casi está! Últimos retoques..."
  ]

  useEffect(() => {
    // Cambiar mensaje cada 2 segundos
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % funnyMessages.length)
    }, 2000)

    // Simular generación del informe
    const generateReport = async () => {
      try {
        // 1. Enviar datos a MAKE/Google Sheets
        await sendToMake(data)

        // 2. Generar informe con IA
        await generateAIReport(data)

        // 3. Esperar un mínimo de 5 segundos para efecto dramático
        await new Promise(resolve => setTimeout(resolve, 5000))

        // 4. Continuar al informe
        onNext({})
      } catch (error) {
        console.error('Error generating report:', error)
        // Continuar de todos modos
        setTimeout(() => onNext({}), 5000)
      }
    }

    generateReport()

    return () => clearInterval(messageInterval)
  }, [])

  return (
    <div className="card-party text-center min-h-[500px] flex flex-col justify-center">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1, repeat: Infinity }
        }}
        className="text-8xl mb-8"
      >
        🎉
      </motion.div>

      <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-party-pink via-party-purple to-party-blue bg-clip-text text-transparent">
        ¡Generando tu informe!
      </h2>

      <motion.div
        key={currentMessage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-xl text-gray-700 font-semibold mb-8 h-16 flex items-center justify-center"
      >
        {funnyMessages[currentMessage]}
      </motion.div>

      <div className="flex justify-center gap-2 mb-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2
            }}
            className="w-4 h-4 bg-party-pink rounded-full"
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-party-blue/10 to-party-purple/10 p-6 rounded-2xl border-2 border-party-pink/30">
        <p className="text-lg text-gray-700">
          ⏱️ Nuestro algoritmo está analizando <strong className="text-party-pink">+500 opciones</strong> para encontrar tu despedida perfecta
        </p>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="mt-8 flex justify-center"
      >
        <Loader2 size={40} className="text-party-purple" />
      </motion.div>
    </div>
  )
}

export default Generating
