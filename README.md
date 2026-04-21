# AnatomIA — Instrucciones de Despliegue en Vercel

## ¿Qué es esto?
Una aplicación web de apoyo al estudio de anatomía con tres agentes de IA
(Claude, Med-Gemma, Emergent). Los estudiantes solo abren un link — no necesitan
crear cuentas ni configurar nada.

---

## Pasos para publicar (15 minutos, sin código)

### Paso 1 — Obtén tu API key de Anthropic
1. Ve a https://console.anthropic.com
2. Crea cuenta (gratis)
3. En el menú izquierdo: **API Keys** → **Create Key**
4. Copia la key (empieza con `sk-ant-api03-…`)
5. Guárdala en un lugar seguro

### Paso 2 — Crea cuenta en Vercel
1. Ve a https://vercel.com
2. Regístrate con GitHub, Google o email (gratis)

### Paso 3 — Sube el proyecto
1. Ve a https://vercel.com/new
2. Elige **"Browse"** o arrastra la carpeta `anatomia-app` completa
3. Vercel detecta el proyecto automáticamente
4. Haz clic en **Deploy**

### Paso 4 — Agrega la API key (IMPORTANTE)
Después del primer deploy:
1. En tu proyecto en Vercel → **Settings** → **Environment Variables**
2. Agrega:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** tu key `sk-ant-api03-…`
3. Clic en **Save**
4. Ve a **Deployments** → **Redeploy** (para aplicar la variable)

### Paso 5 — Comparte el link
Vercel te da un URL como `anatomia-abc123.vercel.app`
¡Ese link es todo lo que necesitan tus estudiantes!

---

## Estructura del proyecto
```
anatomia-app/
├── api/
│   └── chat.js          ← Proxy seguro (la API key nunca llega al estudiante)
├── public/
│   └── index.html       ← La aplicación completa
└── vercel.json          ← Configuración de rutas
```

## Costo estimado
- Vercel: GRATIS (plan hobby)
- Anthropic: ~$0.003 USD por conversación de 10 mensajes
- Para 100 estudiantes usando 20 min/semana ≈ $2-5 USD/mes

## Soporte
Si algo no funciona, revisa:
1. Que la variable `ANTHROPIC_API_KEY` esté bien escrita (sin espacios)
2. Que hayas hecho Redeploy después de agregar la variable
3. Que tu API key tenga crédito disponible en console.anthropic.com
