export const site = {
  name: 'JNSTUDIO',
  contactEmail: 'oficinajaviernaranjo@gmail.com',
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
  { category: 'musica', area: 'Música y producción', name: 'Mezcla y Mastering', description: 'Una mezcla que respira y un master listo para cualquier plataforma.', price: '200€' },
  { category: 'musica', area: 'Música y producción', name: 'Composición musical', description: 'Construimos la canción desde la emoción, la melodía y la dirección.', price: '300€' },
  { category: 'grabacion', area: 'Grabación', name: 'Sesión de estudio', description: 'Media jornada para concentrarte en la interpretación y salir con material real.', price: '140€' },
  { category: 'consultoria', area: 'Consultoría', name: 'Consulta privada', description: 'Una hora para desbloquear decisiones de producción, carrera o lanzamiento.', price: '40€' },
  { category: 'web', area: 'Desarrollo web', name: 'Web para artistas', description: 'Una presencia digital diseñada alrededor de tu música y tu identidad.', price: 'A consultar' }
] as const;
