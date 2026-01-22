import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProgressBar from './ProgressBar'
import Navigation from './Navigation'

// Importar todas las pantallas
import Welcome from './screens/Welcome'
import PainPoints from './screens/PainPoints'
import Solutions from './screens/Solutions'
import GroupSize from './screens/GroupSize'
import DateLocation from './screens/DateLocation'
import PartyType from './screens/PartyType'
import Activities from './screens/Activities'
import PartyLevel from './screens/PartyLevel'
import SpecialNeeds from './screens/SpecialNeeds'
import FinalDetails from './screens/FinalDetails'
import LeadCapture from './screens/LeadCapture'
import Generating from './screens/Generating'
import Report from './screens/Report'

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    groupSize: '',
    date: '',
    location: '',
    partyType: '',
    dareLevel: 3,
    protagonist: '',
    crazyFriend: '',
    activities: [],
    ending: '',
    preferences: [],
    accommodation: false,
    budget: '',
    whatsapp: '',
    name: '',
    specialRequests: ''
  })

  const screens = [
    { component: Welcome, title: 'Bienvenida' },
    { component: PainPoints, title: 'El Marrón' },
    { component: Solutions, title: 'La Solución' },
    { component: GroupSize, title: 'La Pandilla' },
    { component: DateLocation, title: 'Cuándo y Dónde' },
    { component: PartyType, title: 'Tipo de Fiesta' },
    { component: Activities, title: 'Actividades' },
    { component: PartyLevel, title: 'Nivel de Locura' },
    { component: SpecialNeeds, title: 'Detalles' },
    { component: FinalDetails, title: 'Últimos Detalles' },
    { component: LeadCapture, title: 'Tus Datos' },
    { component: Generating, title: 'Generando...' },
    { component: Report, title: 'Tu Informe' }
  ]

  const totalSteps = screens.length
  const CurrentScreen = screens[currentStep].component

  const handleNext = (data) => {
    setFormData({ ...formData, ...data })
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setFormData({
      groupSize: '',
      date: '',
      location: '',
      partyType: '',
      dareLevel: 3,
      protagonist: '',
      crazyFriend: '',
      activities: [],
      ending: '',
      preferences: [],
      accommodation: false,
      budget: '',
      whatsapp: '',
      name: '',
      specialRequests: ''
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Barra de progreso */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepTitle={screens[currentStep].title}
      />

      {/* Contenedor de las pantallas con animación */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentScreen
              data={formData}
              onNext={handleNext}
              onBack={handleBack}
              onRestart={handleRestart}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navegación */}
      {currentStep > 0 && currentStep < totalSteps - 2 && (
        <Navigation
          onBack={handleBack}
          onRestart={handleRestart}
          showBack={currentStep > 3}
        />
      )}
    </div>
  )
}

export default Wizard
