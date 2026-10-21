export const site = {
  name: 'JNSTUDIO',
  contactEmail: 'oficinajaviernaranjo@gmail.com',
  city: 'Sevilla',
  hours: 'Lunes a viernes · 10:00–14:00 y 16:00–20:00',
  formEndpoint: '/.netlify/functions/contact',
  instagram: 'https://www.instagram.com/javiernaranjoficial/',
  tiktok: 'https://www.tiktok.com/@javiernaranjoo',
  facebook: 'https://www.facebook.com/javiernaranjofficial/?locale=es_ES',
  youtube: 'https://www.youtube.com/channel/UCpTvuIvpPs8EOZCTt4jG4iQ',
  portfolio: 'https://javiernaranjomusic.com/'
} as const;

export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Estudio', href: '/estudio/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Tarifas', href: '/tarifas/' },
  { label: 'Sobre nosotros', href: '/nosotros/' },
  { label: 'Contacto', href: '/contacto/' }
] as const;

export const tariffs = [
  { category: 'musica', area: 'Música y producción', name: 'Producción Musical', description: 'Dirección artística y producción de tu canción desde la idea hasta una versión lista para avanzar.', details: 'Desarrollo de la idea, estructura, arreglos, sonido, dirección creativa y acompañamiento durante la producción.', price: '700€', numericPrice: 700, pdf: '/recursos/tarifas/tarifa-produccion-musical.pdf' },
  { category: 'musica', area: 'Música y producción', name: 'Mezcla y Mastering', description: 'Una mezcla que respira y un master listo para cualquier plataforma.', details: 'Edición, balance, profundidad, limpieza, loudness final y entrega preparada para plataformas digitales.', price: '200€', numericPrice: 200, pdf: '/recursos/tarifas/tarifa-mezcla-mastering.pdf' },
  { category: 'musica', area: 'Música y producción', name: 'Composición musical', description: 'Construimos la canción desde la emoción, la melodía y la dirección.', details: 'Composición, estructura, armonía, melodía y orientación creativa para llevar tu idea a una canción completa.', price: '300€', numericPrice: 300, pdf: '/recursos/tarifas/tarifa-composicion-musical.pdf' },
  { category: 'musica', area: 'Música y producción', name: 'Sesión de grabación de estudio', description: 'Media jornada para concentrarte en la interpretación y salir con material real.', details: 'Sesión de media jornada. La jornada completa queda pendiente de confirmar.', price: '140€', numericPrice: 140, pdf: '/recursos/tarifas/tarifa-sesion-estudio.pdf' },
  { category: 'consultoria', area: 'Consultoría', name: 'Consulta privada', description: 'Una hora para desbloquear decisiones de producción, carrera o lanzamiento.', details: 'Consulta individual sobre producción, estrategia, lanzamiento, presencia digital o dirección artística.', price: '40€', numericPrice: 40, pdf: '/recursos/tarifas/tarifa-consulta-privada.pdf' },
  { category: 'web', area: 'Desarrollo web e informática', name: 'Web para artistas', description: 'Una presencia digital diseñada alrededor de tu música y tu identidad.', details: 'Diseño y desarrollo de una web para artista, portfolio, lanzamiento o estudio. Presupuesto personalizado.', price: 'A consultar', numericPrice: 0, pdf: '/recursos/tarifas/tarifa-desarrollo-web.pdf' }
] as const;
