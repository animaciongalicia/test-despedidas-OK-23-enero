# 🎉 Despedidas Galicia - Wizard Lead Capture

Web app tipo wizard para captar leads de despedidas de soltero/a en Galicia. Diseñada para ser divertida, viral y efectiva en la conversión de leads.

## 🎯 Características

- ✨ **Wizard interactivo** de 13 pantallas
- 🎨 **Diseño colorido** y llamativo con animaciones
- 📱 **100% Responsive** - funciona perfecto en móviles
- 🔥 **Tono divertido** y con retranca gallega
- 📊 **Integración con MAKE** → Google Sheets
- 🤖 **Generación de informes** personalizados
- 🎯 **Barra de progreso** y navegación fluida
- 💬 **Captura de WhatsApp** para leads
- 🔄 **Compartir en WhatsApp** facilita viralidad

## 🚀 Tecnologías

- **React 18** - Framework principal
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos
- **Axios** - HTTP client para APIs

## 📋 Pantallas del Wizard

1. **Welcome** - Bienvenida impactante
2. **PainPoints** - Puntos de dolor de organizar despedidas
3. **Solutions** - Soluciones que aporta la herramienta
4. **GroupSize** - Tamaño del grupo y protagonista
5. **DateLocation** - Fecha y ubicación en Galicia
6. **PartyType** - Tipo de despedida/desfase
7. **Activities** - Selección múltiple de actividades
8. **PartyLevel** - Nivel de atrevimiento y cómo acabar
9. **SpecialNeeds** - Detalles del grupo y preferencias
10. **FinalDetails** - Alojamiento, presupuesto, peticiones
11. **LeadCapture** - Captura de WhatsApp y nombre
12. **Generating** - Pantalla de carga con frases divertidas
13. **Report** - Informe personalizado generado

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/animaciongalicia/test-despedidas-OK-23-enero.git
cd test-despedidas-OK-23-enero

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Edita .env con tus URLs de MAKE y otras configuraciones

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz con:

```env
VITE_MAKE_WEBHOOK_URL=https://hook.eu2.make.com/tu-webhook-aqui
VITE_AI_API_URL=tu-api-de-ia (opcional)
VITE_AGENCY_WHATSAPP=34612345678
```

### Integración con MAKE

1. Ve a [make.com](https://make.com)
2. Crea un nuevo escenario
3. Añade un trigger "Webhooks" → "Custom webhook"
4. Copia la URL del webhook
5. Añade un módulo "Google Sheets" → "Add a row"
6. Conecta tu Google Sheet
7. Mapea los campos del webhook a las columnas del sheet

**Campos que se envían:**
- timestamp
- name
- whatsapp
- groupSize
- protagonist
- date
- location
- partyType
- dareLevel
- activities
- ending
- crazyFriend
- preferences
- accommodation
- budget
- specialRequests

### Google Sheets Template

Crea un Google Sheet con estas columnas:

| Timestamp | Nombre | WhatsApp | Tamaño Grupo | Protagonista | Fecha | Ubicación | Tipo Fiesta | Nivel Locura | Actividades | Final | Amigo Loco | Preferencias | Alojamiento | Presupuesto | Peticiones |
|-----------|--------|----------|--------------|--------------|-------|-----------|-------------|--------------|-------------|-------|------------|--------------|-------------|-------------|------------|

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.js`:

```js
colors: {
  party: {
    pink: '#FF006E',
    purple: '#8338EC',
    blue: '#3A86FF',
    yellow: '#FFBE0B',
    orange: '#FB5607',
    green: '#06FFA5'
  }
}
```

### Textos y Contenido

Todos los textos están en los componentes de pantallas en `src/components/screens/`. Puedes editarlos directamente para ajustar el tono o el contenido.

### Ubicaciones

Edita las opciones de ubicación en `src/components/screens/DateLocation.jsx`:

```js
const locationOptions = [
  { value: 'a-coruna', label: 'A Coruña', emoji: '🌊', desc: 'Ciudad con playa' },
  // Añade más ubicaciones aquí
]
```

## 📱 Funcionalidades Sociales

### Compartir en WhatsApp

El botón "Compartir" en el informe final permite compartir la web con el grupo:

```js
const shareWhatsApp = () => {
  const message = encodeURIComponent(
    `🎉 ¡Mira el plan que he creado para nuestra despedida!\n\n` +
    `Haz el tuyo aquí: ${window.location.origin}`
  )
  window.open(`https://wa.me/?text=${message}`, '_blank')
}
```

### Botón SOCORRO

Contacta directamente con la agencia por WhatsApp con los datos precargados.

## 🎯 Optimización para Conversión

### Elementos que favorecen la viralidad:

1. **Informe personalizado** - La gente quiere compartir sus resultados
2. **Diseño visual** - Colores llamativos y emojis hacen que quieras compartir
3. **Tono divertido** - Con retranca gallega, memorable
4. **Compartir fácil** - Botón directo a WhatsApp
5. **Gamificación** - Barra de progreso, nivel de locura, etc.
6. **Urgencia** - Mensajes tipo "Reserva con tiempo"

### Elementos de captura de leads:

1. **Valor antes de pedir datos** - Mostramos beneficios primero
2. **Validación en tiempo real** - Feedback inmediato
3. **Seguridad** - "100% confidencial, sin spam"
4. **BONUS** - Promesa de ideas exclusivas
5. **Múltiples CTAs** - Varias oportunidades de conversión

## 📊 Analítica (Opcional)

Para añadir Google Analytics:

```html
<!-- En index.html, antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Producción
vercel --prod
```

### Netlify

```bash
# Build
npm run build

# El directorio dist/ es lo que se despliega
```

### Variables de entorno en producción

No olvides añadir las variables de entorno en la configuración de tu plataforma de hosting.

## 🎨 Capturas de Pantalla

*(Añade capturas aquí cuando esté desplegado)*

## 📝 TODO / Mejoras Futuras

- [ ] Añadir Google Analytics
- [ ] A/B testing de textos
- [ ] Integración con CRM
- [ ] Email automation
- [ ] Más ubicaciones (Portugal, norte de España)
- [ ] Sistema de cupones/descuentos
- [ ] Reviews y testimonios
- [ ] Blog de ideas de despedidas
- [ ] Galería de fotos de despedidas anteriores

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Animación Galicia.

## 📞 Contacto

Para dudas o soporte:
- WhatsApp: +34 612 345 678
- Email: info@animaciongalicia.com
- Web: www.animaciongalicia.com

---

**Hecho con 🎉 y ❤️ en Galicia**
