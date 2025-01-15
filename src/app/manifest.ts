import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {"name":"","short_name":"","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"theme_color":"#40160D","background_color":"#F2F2F2","display":"standalone"}
}