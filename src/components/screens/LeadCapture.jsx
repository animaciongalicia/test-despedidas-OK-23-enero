import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, User, Lock } from 'lucide-react'

const LeadCapture = ({ data, onNext }) => {
  const [whatsapp, setWhatsapp] = useState(data.whatsapp || '')
  const [name, setName] = useState(data.name || '')
  const [error, setError] = useState('')

  const validatePhone = (phone) => {
    // Acepta formatos: 612345678, +34612345678, 34612345678
    const phoneRegex = /^(\+34|34)?[6-7][0-9]{8}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const handleSubmit = async () => {
    setError('')

    if (!name.trim()) {
      setError('Por favor, introduce tu nombre')
      return
    }

    if (!validatePhone(whatsapp)) {
      setError('Introduce un WhatsApp válido (ej: 612345678)')
      return
    }

    // Aquí se enviaría a MAKE
    onNext({ whatsapp, name })
  }

  return (
    <div className="card-party">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">📱</div>
        <h2 className="text-4xl font-black mb-3 text-party-purple">
          ¡Ya casi!
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          Déjanos tu WhatsApp para enviarte el informe
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Lock size={16} />
          <span>100% confidencial • No spam • Sólo tu informe</span>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {/* Nombre */}
        <div>
          <label className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-3">
            <User className="text-party-purple" size={20} />
            Tu nombre
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Carlos"
            className="input-party text-lg"
            maxLength={50}
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-3">
            <Phone className="text-party-pink" size={20} />
            Tu WhatsApp
          </label>
          <input
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="612 345 678"
            className="input-party text-lg"
            maxLength={15}
          />
          <p className="text-sm text-gray-500 mt-2">
            📲 Te enviaremos el informe por WhatsApp.
          </p>
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border-2 border-red-300 text-red-700 px-4 py-3 rounded-xl mb-6 text-center font-semibold"
        >
          {error}
        </motion.div>
      )}

      <div className="bg-gradient-to-r from-party-blue/10 to-party-purple/10 p-4 rounded-xl mb-6">
        <p className="text-center text-sm text-gray-700">
          🎁 <strong>BONUS:</strong> Recibirás ideas exclusivas y mucha retranca
        </p>
      </div>

      <motion.button
        onClick={handleSubmit}
        className="btn-primary w-full text-xl"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        ¡Generar mi informe! 🚀
      </motion.button>

      <p className="text-xs text-gray-500 text-center mt-4">
        Al continuar, aceptas que te contactemos para ayudarte con tu despedida
      </p>
    </div>
  )
}

export default LeadCapture
