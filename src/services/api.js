import axios from 'axios'

// URL del webhook de MAKE (reemplazar con la URL real)
const MAKE_WEBHOOK_URL = import.meta.env.VITE_MAKE_WEBHOOK_URL || 'https://hook.eu2.make.com/53iiw7emjpku5kv8qwrgmd7kb4um4eci'

// URL de la API de OpenAI o similar para generar el informe (opcional)
const AI_API_URL = import.meta.env.VITE_AI_API_URL || ''

/**
 * Envía los datos del formulario a MAKE para guardar en Google Sheets
 */
export const sendToMake = async (formData) => {
  try {
    const payload = {
      timestamp: new Date().toISOString(),
      name: formData.name,
      whatsapp: formData.whatsapp,
      groupSize: formData.groupSize,
      protagonist: formData.protagonist,
      date: formData.date,
      location: formData.location,
      partyType: formData.partyType,
      dareLevel: formData.dareLevel,
      activities: formData.activities.join(', '),
      ending: formData.ending,
      crazyFriend: formData.crazyFriend,
      preferences: formData.preferences.join(', '),
      accommodation: formData.accommodation ? 'Sí' : 'No',
      budget: formData.budget,
      specialRequests: formData.specialRequests || 'N/A'
    }

    console.log('Sending to MAKE:', payload)

    // Enviar a MAKE
    const response = await axios.post(MAKE_WEBHOOK_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log('MAKE response:', response.data)
    return response.data
  } catch (error) {
    console.error('Error sending to MAKE:', error)
    // No lanzamos error para que la app continúe
    return null
  }
}

/**
 * Genera un informe personalizado usando IA (opcional)
 */
export const generateAIReport = async (formData) => {
  try {
    // Si no hay configurada URL de IA, retornamos null
    if (!AI_API_URL) {
      console.log('AI API not configured, skipping AI report generation')
      return null
    }

    const prompt = `
Genera un informe divertido y con retranca gallega para una despedida de ${formData.protagonist} en ${formData.location}.

Detalles:
- Grupo: ${formData.groupSize} personas
- Tipo: ${formData.partyType}
- Nivel de locura: ${formData.dareLevel}/5
- Actividades: ${formData.activities.join(', ')}
- Presupuesto: ${formData.budget}

El informe debe incluir:
1. Análisis del grupo con humor
2. Recomendaciones personalizadas
3. Plan día a día
4. Consejos pro

Tono: Divertido, cañero, con retranca pero útil.
    `.trim()

    console.log('Generating AI report with prompt:', prompt)

    // Aquí iría la llamada a tu API de IA
    // const response = await axios.post(AI_API_URL, { prompt })

    // Por ahora retornamos null
    return null
  } catch (error) {
    console.error('Error generating AI report:', error)
    return null
  }
}

/**
 * Envía mensaje de WhatsApp (opcional, si usas una API de WhatsApp)
 */
export const sendWhatsAppMessage = async (phone, message) => {
  try {
    console.log('Sending WhatsApp message to:', phone)
    // Aquí iría la integración con tu API de WhatsApp
    return { success: true }
  } catch (error) {
    console.error('Error sending WhatsApp:', error)
    return { success: false, error }
  }
}
