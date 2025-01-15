import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ROGIX PORTOFOLIO',
    short_name: 'ROGIX PORTOFOLIO',
    description: 'ROGIX PORTOFOLIO',
    start_url: '/',
    display: 'standalone',
    background_color: '#BFBDBA',
    theme_color: '#40160D',
    icons: [
        { "src": "/icon-192x192.png", "type": "image/png", "sizes": "192x192" },
        { "src": "/icon-512x512.png", "type": "image/png", "sizes": "512x512" }
    ],
  }
}