import { motion } from 'framer-motion'

const ProgressBar = ({ currentStep, totalSteps, stepTitle }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="card-party">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-party-purple">
          Paso {currentStep + 1} de {totalSteps}
        </span>
        <span className="text-sm font-bold text-party-pink">
          {stepTitle}
        </span>
      </div>

      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-party-pink via-party-orange to-party-yellow"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      <div className="text-right mt-2">
        <span className="text-xs text-gray-600 font-medium">
          {Math.round(progress)}% completado 🎉
        </span>
      </div>
    </div>
  )
}

export default ProgressBar
