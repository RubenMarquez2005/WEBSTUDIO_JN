# JNSTUDIO

Web oficial de JNSTUDIO, estudio de producción musical, ingeniería de sonido y desarrollo creativo.

## Arquitectura

Proyecto migrado a Astro con páginas independientes para que cada sección pueda revisarse y crecer por separado:

- `/`: Inicio.
- `/estudio/`: Instalaciones y galería.
- `/servicios/`: Servicios de JNSTUDIO.
- `/tarifas/`: Tarifas filtrables por área.
- `/nosotros/`: Historia y equipo.
- `/contacto/`: Formulario y correo principal.
- `/privacidad/`: Espacio legal preparado.

## Ejecutar en local

```bash
npm install
npm run dev
```

Después abre la URL que indique Astro, normalmente `http://localhost:4321`.

Para comprobar la versión de producción:

```bash
npm run build
```

## Contacto y redes

- Email visible: `oficinajaviernaranjo@gmail.com`.
- Instagram, TikTok, Facebook, YouTube y portfolio están centralizados en `src/data/site.ts`.
- Los destinatarios internos y copias ocultas no deben exponerse en el frontend; se conectarán en el backend o servicio de correo.
- Ubicación: Sevilla.
- Horario: lunes a viernes, 10:00–14:00 y 16:00–20:00.

## Pendiente

- Sustituir las imágenes provisionales por fotografías definitivas del estudio y del equipo.
- Conectar el formulario a un servicio de correo real con destinatarios, copias ocultas y protección antispam. El correo visible y principal es `oficinajaviernaranjo@gmail.com`; los demás destinatarios deben quedar en backend.
- Publicar mediante Netlify para activar `netlify/functions/contact.ts`.
- Configurar en Netlify estas variables privadas: `RESEND_API_KEY`, `EMAIL_FROM`, `CONTACT_EMAIL` y `WEB_DEVELOPMENT_EMAIL`.
- `CONTACT_EMAIL` debe ser `oficinajaviernaranjo@gmail.com`.
- `WEB_DEVELOPMENT_EMAIL` debe ser `rumarquez05@gmail.com`.
- `MUSIC_EMAIL`, `RECORDING_EMAIL` y `CONSULTING_EMAIL` deben contener los responsables reales de esas áreas.
- `EMAIL_FROM` debe usar un remitente de un dominio verificado en Resend.
- La función envía todos los contactos al correo principal y añade cada responsable según los servicios incluidos en el carrito. Las direcciones permanecen solo en variables privadas.
- Integrar una pasarela real de pago y generación de facturas.
- Completar las tarifas del resto de servicios cuando JNSTUDIO las facilite.
- Revisar los textos legales antes de publicar.
