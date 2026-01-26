import { motion } from 'framer-motion'
import { Share2, Wrench, AlertCircle, Zap, Flame, Skull, Beer, PartyPopper } from 'lucide-react'

const Report = ({ data, onRestart }) => {
  const shareWhatsApp = () => {
    const message = encodeURIComponent(
      `🔥 Acabo de hacer el test de despedidas más LOCO de Galicia 🔥\n\n` +
      `Las ideas que me ha dado son DE LOCOS... 😂\n\n` +
      `Haz el tuyo: ${window.location.origin}\n\n` +
      `(Te vas a reír un montón)`
    )
    window.open(`https://wa.me/?text=${message}`, '_blank')
  }

  const contactAgency = () => {
    const message = encodeURIComponent(
      `¡SOCORRO! 🆘 Necesito ayuda para organizar esta locura de despedida\n\n` +
      `Mi nombre: ${data.name}\n` +
      `WhatsApp: ${data.whatsapp}\n\n` +
      `Las ideas que me disteis son DEMASIADO... ayudadme pls 😅`
    )
    window.open(`https://wa.me/34678288284?text=${message}`, '_blank')
  }

  const getLocationName = (location) => {
    const locations = {
      'a-coruna': 'A Coruña',
      'vigo': 'Vigo',
      'sanxenxo': 'Sanxenxo',
      'oporto': 'Oporto',
      'santiago': 'Santiago',
      'pontevedra': 'Pontevedra',
      'otros': 'algún sitio raro'
    }
    return locations[location] || location
  }

  // Generar análisis con retranca según los datos
  const getCrazyAnalysis = () => {
    const analyses = []

    if (data.groupSize === '20+') {
      analyses.push('👥 Con ese ejército vais a conquistar ' + getLocationName(data.location) + ' entero')
    } else if (data.groupSize === '2-5') {
      analyses.push('👥 Grupo pequeño = más fácil de controlar (en teoría)')
    }

    if (data.dareLevel >= 4) {
      analyses.push('🔥 Nivel de locura ' + data.dareLevel + '/5... Alguien acabará en el calabozo, seguro')
    } else if (data.dareLevel <= 2) {
      analyses.push('😌 Nivel de locura ' + data.dareLevel + '/5... Esto es una merienda, no una despedida')
    }

    if (data.location === 'sanxenxo') {
      analyses.push('🏖️ Sanxenxo en verano = CAOS TOTAL (te va a encantar)')
    } else if (data.location === 'oporto') {
      analyses.push('🍷 Oporto = Preparad el hígado. Las francesinhas no perdonan')
    } else if (data.location === 'vigo') {
      analyses.push('🎪 Vigo = Zona Casco Vello hasta que cierre (o hasta que os echen)')
    }

    if (data.crazyFriend === 'varios') {
      analyses.push('🤪 Varios desfasados en el grupo... Esto se va a descontrolar (y nos encanta)')
    }

    if (data.ending === 'calabozo') {
      analyses.push('👮 Final en el calabozo = ÉPICO (aunque tu madre no opine lo mismo)')
    } else if (data.ending === 'playa') {
      analyses.push('🏖️ Baño en la playa a las 7 AM = Fotaza para Instagram o muerte por hipotermia')
    } else if (data.ending === 'misa') {
      analyses.push('⛪ Acabar en misa... Respeto. Galicia es así de contradictoria')
    }

    return analyses
  }

  // Generar ideas LOCAS personalizadas
  const getCrazyIdeas = () => {
    const ideas = []

    // ===== IDEAS POR ACTIVIDADES =====
    if (data.activities.includes('paintball')) {
      ideas.push({
        emoji: '🔫',
        title: 'Paintball con CONSECUENCIAS',
        desc: 'El que pierda paga todas las rondas de la noche. Fácil.',
        danger: 3
      })
    }

    if (data.activities.includes('karting')) {
      ideas.push({
        emoji: '🏎️',
        title: 'Gran Premio del Despiporre',
        desc: 'Último puesto = Va disfrazado de pollo toda la noche',
        danger: 2
      })
    }

    if (data.activities.includes('barco')) {
      ideas.push({
        emoji: '⛵',
        title: 'Crucero del Desfase',
        desc: 'Barco + sol + alcohol = Alguien acabará en el agua',
        danger: 4
      })
    }

    if (data.activities.includes('surf')) {
      ideas.push({
        emoji: '🏄',
        title: 'Surf con resaca',
        desc: 'El que no se caiga de la tabla... es que no bebió suficiente',
        danger: 4
      })
    }

    if (data.activities.includes('paracaidismo')) {
      ideas.push({
        emoji: '🪂',
        title: 'Paracaidismo PRE-FIESTA',
        desc: 'Saltar antes de la juerga. Si sobrevivís, ya nada os da miedo',
        danger: 5
      })
    }

    if (data.activities.includes('buggies')) {
      ideas.push({
        emoji: '🛞',
        title: 'Rally del Barro',
        desc: 'Buggie por el monte. El más sucio gana (y el más limpio paga)',
        danger: 3
      })
    }

    if (data.activities.includes('escape-room')) {
      ideas.push({
        emoji: '🔐',
        title: 'Escape Room DRUNK',
        desc: 'Probad a escapar después de unas cervezas. Imposible.',
        danger: 3
      })
    }

    if (data.activities.includes('spa')) {
      ideas.push({
        emoji: '💆',
        title: 'Spa ANTES del desastre',
        desc: 'Relajaos ahora, porque después viene la que se os viene encima',
        danger: 1
      })
    }

    if (data.activities.includes('catas')) {
      ideas.push({
        emoji: '🍷',
        title: 'Cata sin escupir',
        desc: 'Cata de vinos pero SIN ESCUPIR. Esto se va a complicar',
        danger: 4
      })
    }

    if (data.activities.includes('gastronomia')) {
      ideas.push({
        emoji: '🍽️',
        title: 'Ruta gastro-ETÍLICA',
        desc: 'Comida + vino en cada sitio. El estómago: "¿Qué me habéis hecho?"',
        danger: 3
      })
    }

    if (data.activities.includes('discoteca')) {
      ideas.push({
        emoji: '💃',
        title: 'La última discoteca',
        desc: 'Cerrar la disco. Literalmente. Ser los últimos en salir',
        danger: 4
      })
    }

    if (data.activities.includes('beach-club')) {
      ideas.push({
        emoji: '🏖️',
        title: 'Beach Club hasta el alba',
        desc: 'Sol + playa + fiesta = Quemadura de tercer grado garantizada',
        danger: 3
      })
    }

    if (data.activities.includes('verbena')) {
      ideas.push({
        emoji: '🎺',
        title: 'Verbena MODE ON',
        desc: 'Muñeira, pulpo y queimada. Lo más gallego que vas a hacer en tu vida',
        danger: 2
      })
    }

    if (data.activities.includes('afterhours')) {
      ideas.push({
        emoji: '🌅',
        title: 'After hasta el desayuno',
        desc: 'Cuando sale el sol y seguís ahí... ya sabéis que lo hicisteis bien',
        danger: 5
      })
    }

    if (data.activities.includes('humor-amarillo')) {
      ideas.push({
        emoji: '🤡',
        title: 'Humor Amarillo CASERO',
        desc: 'Montáis vuestras propias pruebas con hinchables y aceite',
        danger: 5
      })
    }

    // ===== IDEAS POR UBICACIÓN =====
    if (data.location === 'sanxenxo') {
      ideas.push({
        emoji: '🏖️',
        title: 'Playa de Silgar Challenge',
        desc: 'Baño a las 3 AM gritando "¡VIVA EL NOVIO/A!"',
        danger: 3
      })
      ideas.push({
        emoji: '🎪',
        title: 'Invasión de Sanxenxo',
        desc: 'Recorrer TODOS los beach clubs en una noche. Misión imposible',
        danger: 5
      })
    }

    if (data.location === 'vigo') {
      ideas.push({
        emoji: '🎭',
        title: 'Casco Vello MODE',
        desc: 'Ruta por el Casco Vello hasta que cierren o os echen',
        danger: 4
      })
      ideas.push({
        emoji: '🦪',
        title: 'Ostras + Vino CHALLENGE',
        desc: 'Ostras en el Berbés + vino blanco. Competición de quién aguanta más',
        danger: 3
      })
    }

    if (data.location === 'a-coruna') {
      ideas.push({
        emoji: '🌊',
        title: 'Orzán de noche',
        desc: 'Baño nocturno en Orzán. Frío gallego + alcohol = Adrenalina pura',
        danger: 4
      })
      ideas.push({
        emoji: '🎪',
        title: 'Ruta de Orzán a Riazor',
        desc: 'Todos los bares entre playas. Si llegáis al final, sois héroes',
        danger: 5
      })
    }

    if (data.location === 'oporto') {
      ideas.push({
        emoji: '🍷',
        title: 'Francesinha Challenge',
        desc: 'Comer francesinha + vino de Oporto. Tu hígado lo recordará',
        danger: 4
      })
      ideas.push({
        emoji: '🚂',
        title: 'Ribeira hasta el amanecer',
        desc: 'La Ribeira de noche es otro nivel. Preparad el estómago',
        danger: 5
      })
    }

    if (data.location === 'santiago') {
      ideas.push({
        emoji: '🎓',
        title: 'Zona Vieja MODE',
        desc: 'Ruta universitaria por la zona vieja. Juventud + alcohol = CAOS',
        danger: 4
      })
    }

    if (data.location === 'pontevedra') {
      ideas.push({
        emoji: '🍻',
        title: 'Ruta de los Vinos',
        desc: 'Zona vieja de Pontevedra + vinos albariño. Elegancia y desfase',
        danger: 3
      })
    }

    // ===== IDEAS POR NIVEL DE LOCURA =====
    if (data.dareLevel >= 4) {
      ideas.push({
        emoji: '🤪',
        title: 'Prueba de VALOR extrema',
        desc: 'Karaoke en un bar lleno cantando ROSALÍA mal a propósito',
        danger: 5
      })
      ideas.push({
        emoji: '🎤',
        title: 'Pedir temas IMPOSIBLES',
        desc: 'En cada bar, pedid la canción más rara. DJ: "¿En serio?"',
        danger: 4
      })
    }

    if (data.dareLevel <= 2) {
      ideas.push({
        emoji: '😌',
        title: 'Plan tranqui-responsable',
        desc: 'Cena, copas con moderación, a casa a las 2. Sois unos sosos.',
        danger: 1
      })
    }

    // ===== IDEAS POR TIPO DE FIESTA =====
    if (data.partyType === 'desfase-total') {
      ideas.push({
        emoji: '🔥',
        title: 'Sin límites, literal',
        desc: 'Todo vale. ABSOLUTAMENTE todo. (Bueno, casi todo)',
        danger: 5
      })
    }

    if (data.partyType === 'aventura') {
      ideas.push({
        emoji: '🚁',
        title: 'Actividad SORPRESA extrema',
        desc: 'Reservad algo random tipo tirolina, puenting... YOLO',
        danger: 4
      })
    }

    if (data.partyType === 'relax-spa') {
      ideas.push({
        emoji: '🧘',
        title: 'Spa + Vino = Relax FAKE',
        desc: 'Empezáis en el spa y acabáis en el bar. Siempre pasa.',
        danger: 2
      })
    }

    // ===== IDEAS POR PRESUPUESTO =====
    if (data.budget === 'luxury') {
      ideas.push({
        emoji: '🤑',
        title: 'TODO incluido SIN límites',
        desc: 'Barra libre, reservados VIP, botella de champagne. A lo grande',
        danger: 5
      })
    }

    if (data.budget === 'low') {
      ideas.push({
        emoji: '💰',
        title: 'Low cost pero ÉPICO',
        desc: 'Chupitos de 1€, playa gratis, dormir donde pille. Estilo backpacker',
        danger: 3
      })
    }

    // ===== IDEAS POR GRUPO =====
    if (data.groupSize === '20+') {
      ideas.push({
        emoji: '🚌',
        title: 'Autocar del DESFASE',
        desc: 'Alquilad un bus para moveros. Party bus = Fiesta móvil',
        danger: 4
      })
    }

    if (data.crazyFriend === 'varios') {
      ideas.push({
        emoji: '😈',
        title: 'Desafío de los LOCOS',
        desc: 'Los desfasados compiten entre ellos. Nivel: Jackass',
        danger: 5
      })
    }

    // ===== IDEAS POR FINAL =====
    if (data.ending === 'calabozo') {
      ideas.push({
        emoji: '👮',
        title: 'Preparad la fianza',
        desc: 'Si vais a acabar ahí, al menos que sea con estilo',
        danger: 5
      })
    }

    if (data.ending === 'playa') {
      ideas.push({
        emoji: '🌅',
        title: 'Amanecer playero ÉPICO',
        desc: 'Ver salir el sol desde la playa. Romántico y desfasado a la vez',
        danger: 3
      })
    }

    if (data.ending === 'misa') {
      ideas.push({
        emoji: '⛪',
        title: 'De la disco a la iglesia',
        desc: 'Misa de resaca. Galicia tiene estas contradicciones',
        danger: 2
      })
    }

    // ===== IDEAS GENÉRICAS (solo si faltan) =====
    const genericIdeas = [
      {
        emoji: '🎤',
        title: 'Karaoke DE VERDAD',
        desc: 'Cantad la canción más vergonzosa en el sitio más lleno posible',
        danger: 4
      },
      {
        emoji: '📸',
        title: 'Fotógrafo espontáneo',
        desc: 'Pedid a gente random que os haga fotos. Las mejores a WhatsApp del grupo',
        danger: 2
      },
      {
        emoji: '🍺',
        title: 'Ruta de los Mil Bares',
        desc: 'Un chupito en cada bar. Objetivo: Sobrevivir.',
        danger: 5
      },
      {
        emoji: '🎲',
        title: 'Ruleta de la MUERTE',
        desc: 'Cada bar, tirada de dado. El número = chupitos que toca',
        danger: 4
      },
      {
        emoji: '🎭',
        title: 'Disfraz OBLIGATORIO',
        desc: 'Todo el grupo disfrazado de lo mismo. Vergüenza al máximo',
        danger: 3
      },
      {
        emoji: '📱',
        title: 'Prohibido el móvil',
        desc: 'Nada de móviles. Vivid el momento (o perded al grupo)',
        danger: 2
      }
    ]

    // Añadir genéricas solo si faltan ideas
    if (ideas.length < 6) {
      genericIdeas.forEach(idea => {
        if (ideas.length < 8) {
          ideas.push(idea)
        }
      })
    }

    // Mezclar aleatoriamente y devolver máximo 8
    return ideas.sort(() => Math.random() - 0.5).slice(0, 8)
  }

  // Alertas y warnings según las elecciones
  const getWarnings = () => {
    const warnings = []

    if (data.dareLevel >= 4 && data.groupSize === '20+') {
      warnings.push('⚠️ ALERTA MÁXIMA: Grupo grande + nivel de locura alto = LLAMAD A LA POLICÍA ANTES')
    }

    if (!data.accommodation && data.dareLevel >= 3) {
      warnings.push('⚠️ Sin alojamiento y con ese nivel de fiesta... ¿Seguro? ¿Muy seguro?')
    }

    if (data.budget === 'low' && data.activities.length > 5) {
      warnings.push('⚠️ Presupuesto ajustado + mil actividades = MATEMÁTICAS QUE NO CUADRAN')
    }

    if (data.location === 'oporto' && data.ending === 'misa') {
      warnings.push('⚠️ Ir a Oporto y acabar en misa... Respetable pero contradictorio 😂')
    }

    return warnings
  }

  const crazyAnalysis = getCrazyAnalysis()
  const crazyIdeas = getCrazyIdeas()
  const warnings = getWarnings()

  return (
    <div className="space-y-6 max-h-[85vh] overflow-y-auto pb-8">
      {/* Header LOCO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="card-party text-center bg-gradient-to-br from-party-pink/20 to-party-purple/20"
      >
        <div className="text-8xl mb-4 animate-bounce-slow">🎊</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-party-pink via-party-orange to-party-purple bg-clip-text text-transparent">
          ¡TU PLAN DE LOCOS!
        </h1>
        <p className="text-2xl text-gray-700 font-black mb-2">
          {data.name}, esto va a ser ÉPICO
        </p>
        <p className="text-lg text-gray-600">
          (O un desastre total, pero épico de todas formas)
        </p>
      </motion.div>

      {/* El ANÁLISIS con RETRANCA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card-party"
      >
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-party-yellow animate-pulse" size={32} />
          <h2 className="text-3xl font-black text-gray-800">Análisis DE LOCOS</h2>
        </div>

        <div className="bg-gradient-to-br from-party-blue/10 to-party-purple/10 p-6 rounded-2xl mb-4 border-2 border-party-pink/30">
          <p className="text-xl font-bold text-gray-800 mb-4">
            📊 Vuestro plan en números:
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl">
              <div className="text-3xl font-black text-party-pink">{data.groupSize}</div>
              <div className="text-sm text-gray-600">Personas</div>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className="text-3xl font-black text-party-orange">{data.dareLevel}/5</div>
              <div className="text-sm text-gray-600">Nivel LOCURA</div>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className="text-3xl font-black text-party-purple">{data.activities.length}</div>
              <div className="text-sm text-gray-600">Actividades</div>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <div className="text-3xl font-black text-party-blue">100%</div>
              <div className="text-sm text-gray-600">Probabilidad de liarla</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {crazyAnalysis.map((analysis, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-l-4 border-party-pink"
            >
              <p className="text-gray-800 font-semibold">{analysis}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* WARNINGS */}
      {warnings.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-party bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <Skull className="text-red-500 animate-pulse" size={32} />
            <h2 className="text-2xl font-black text-red-700">ALERTAS Y AVISOS</h2>
          </div>
          <div className="space-y-2">
            {warnings.map((warning, index) => (
              <div key={index} className="bg-white p-3 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-800 font-bold">{warning}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* IDEAS LOCAS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card-party"
      >
        <div className="flex items-center gap-3 mb-4">
          <Flame className="text-party-orange" size={32} />
          <h2 className="text-3xl font-black text-gray-800">IDEAS DE LOCOS</h2>
        </div>

        <p className="text-lg text-gray-600 mb-6 text-center">
          👇 Aquí van ideas que NADIE más se atreve a sugerir 👇
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {crazyIdeas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-xl border-2 border-yellow-300 hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="text-4xl">{idea.emoji}</div>
                <div className="flex-1">
                  <h3 className="font-black text-lg text-gray-800 mb-1">{idea.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{idea.desc}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < idea.danger ? 'bg-red-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-600 ml-2">Nivel de peligro</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PLAN DE ACCIÓN */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card-party"
      >
        <div className="flex items-center gap-3 mb-4">
          <Beer className="text-party-yellow" size={32} />
          <h2 className="text-3xl font-black text-gray-800">Plan de SUPERVIVENCIA</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-5 rounded-xl border-2 border-green-300">
            <h3 className="font-black text-xl mb-3 text-gray-800">📋 ANTES de salir:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Caja común de cash (no confiéis en Bizum a las 4 AM)</li>
              <li>✅ Un sobrio designado (rotad, no seáis animales)</li>
              <li>✅ Lista de sitios donde PROHIBÍS que vaya el protagonista</li>
              <li>✅ Grupo de WhatsApp "OFICIAL" (sin el novio/a obvio)</li>
              <li>✅ Botiquín básico (paracetamol, esparadrapo, dignity)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border-2 border-blue-300">
            <h3 className="font-black text-xl mb-3 text-gray-800">🎯 DURANTE la locura:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>📸 GRABADLO TODO (para reíros después)</li>
              <li>🚫 No separarse MÁS de 3 grupos (o se pierde gente)</li>
              <li>💊 Hidratación entre copas (vuestro yo del futuro lo agradecerá)</li>
              <li>🎭 Si alguien dice "una más y nos vamos" = MENTIRA</li>
              <li>☎️ Compartid ubicación en tiempo real (por si las moscas)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-5 rounded-xl border-2 border-orange-300">
            <h3 className="font-black text-xl mb-3 text-gray-800">😅 DESPUÉS del desastre:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>🍳 Desayuno XXL (si podéis levantaros de la cama)</li>
              <li>🤐 Pacto de silencio sobre ciertas cosas (you know)</li>
              <li>📱 Eliminar ALGUNAS fotos (no todas, que luego las echáis de menos)</li>
              <li>💰 Ajustar cuentas (siempre falta o sobra pasta, es normal)</li>
              <li>❤️ Decirle al novio/a que fue la mejor despedida EVER</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* FRASES MÍTICAS que se dirán */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card-party bg-gradient-to-br from-pink-50 to-purple-50"
      >
        <h2 className="text-2xl font-black text-gray-800 mb-4 text-center">
          💬 Frases que se dirán (100% seguro)
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white p-4 rounded-lg border-l-4 border-party-pink">
            <p className="font-bold text-gray-800">"Una más y nos vamos"</p>
            <p className="text-sm text-gray-600">Spoiler: No os fuisteis</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-party-purple">
            <p className="font-bold text-gray-800">"¿Quién tiene el tabaco?"</p>
            <p className="text-sm text-gray-600">Nadie sabe</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-party-orange">
            <p className="font-bold text-gray-800">"Mañana no bebo más"</p>
            <p className="text-sm text-gray-600">Mañana: Repeat</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-party-blue">
            <p className="font-bold text-gray-800">"¿Cómo llegué a casa?"</p>
            <p className="text-sm text-gray-600">Mejor no saberlo</p>
          </div>
        </div>
      </motion.div>

      {/* Botones de acción */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card-party"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={shareWhatsApp}
            className="btn-primary flex items-center justify-center gap-2 text-lg"
          >
            <Share2 size={24} />
            ¡Compartir esta locura!
          </button>

          <button
            onClick={() => window.open('https://drive.google.com/drive/folders/1yxlvQNeALqPu6YUdvM90m7j3ypWQ2Mas?usp=share_link', '_blank')}
            className="btn-secondary flex items-center justify-center gap-2 text-lg"
          >
            <Wrench size={24} />
            HERRAMIENTAS
          </button>

          <button
            onClick={contactAgency}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-black text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-lg transform transition-all duration-200 hover:scale-105 text-lg"
          >
            <AlertCircle size={24} />
            🆘 SOCORRO
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onRestart}
            className="text-party-purple hover:text-party-pink font-bold underline text-lg"
          >
            🔄 Hacer otro test (para otra víctima)
          </button>
        </div>
      </motion.div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, type: 'spring' }}
        className="card-party bg-gradient-to-r from-party-pink via-party-purple to-party-blue text-white text-center"
      >
        <PartyPopper className="mx-auto mb-4" size={48} />
        <h3 className="text-4xl font-black mb-4">¿PREPARADO PARA LA LOCURA?</h3>
        <p className="text-xl mb-6">
          Tenemos contactos en TODA Galicia para hacer realidad este DESFASE
        </p>
        <p className="text-lg mb-6 opacity-90">
          (Y también para sacarte del calabozo si hace falta)
        </p>
        <button
          onClick={contactAgency}
          className="bg-white text-party-purple px-10 py-5 rounded-full font-black text-2xl hover:scale-110 transition-transform shadow-2xl"
        >
          ¡QUIERO MONTAR ESTE SHOW! 🎪🔥
        </button>
        <p className="text-sm mt-4 opacity-75">
          Respuesta en menos de 24h (o antes si la liáis parda)
        </p>
      </motion.div>
    </div>
  )
}

export default Report
