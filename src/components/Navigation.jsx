import { ArrowLeft, RotateCcw } from 'lucide-react'

const Navigation = ({ onBack, onRestart, showBack = true }) => {
  return (
    <div className="flex justify-between items-center mt-6 gap-4">
      {showBack ? (
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 bg-white/80 hover:bg-white text-party-purple font-semibold rounded-full shadow-lg transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft size={20} />
          Atrás
        </button>
      ) : (
        <div></div>
      )}

      <button
        onClick={onRestart}
        className="flex items-center gap-2 px-6 py-3 bg-white/80 hover:bg-white text-party-orange font-semibold rounded-full shadow-lg transition-all duration-200 hover:scale-105"
      >
        <RotateCcw size={20} />
        Empezar de nuevo
      </button>
    </div>
  )
}

export default Navigation
