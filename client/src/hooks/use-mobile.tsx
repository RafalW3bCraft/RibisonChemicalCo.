import * as React from "react"

const MOBILE_BREAKPOINT = 768
const ANDROID_SM_BREAKPOINT = 360
const ANDROID_MD_BREAKPOINT = 412
const ANDROID_LG_BREAKPOINT = 432

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

export function useAndroidDevice() {
  const [deviceType, setDeviceType] = React.useState<string | undefined>(undefined)
  const [isAndroid, setIsAndroid] = React.useState<boolean>(false)

  React.useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isAndroidDevice = userAgent.includes('android')
    setIsAndroid(isAndroidDevice)

    const width = window.innerWidth
    let type = 'desktop'

    if (width <= ANDROID_SM_BREAKPOINT) {
      type = 'android-sm'
    } else if (width <= ANDROID_MD_BREAKPOINT) {
      type = 'android-md'
    } else if (width <= ANDROID_LG_BREAKPOINT) {
      type = 'android-lg'
    } else if (width <= MOBILE_BREAKPOINT) {
      type = 'mobile'
    } else if (width <= 1024) {
      type = 'tablet'
    }

    setDeviceType(type)

    const handleResize = () => {
      const newWidth = window.innerWidth
      let newType = 'desktop'

      if (newWidth <= ANDROID_SM_BREAKPOINT) {
        newType = 'android-sm'
      } else if (newWidth <= ANDROID_MD_BREAKPOINT) {
        newType = 'android-md'
      } else if (newWidth <= ANDROID_LG_BREAKPOINT) {
        newType = 'android-lg'
      } else if (newWidth <= MOBILE_BREAKPOINT) {
        newType = 'mobile'
      } else if (newWidth <= 1024) {
        newType = 'tablet'
      }

      setDeviceType(newType)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { deviceType, isAndroid }
}

export function useDeviceResolution() {
  const [resolution, setResolution] = React.useState({
    width: 0,
    height: 0,
    pixelRatio: 1,
    orientation: 'portrait' as 'portrait' | 'landscape'
  })

  React.useEffect(() => {
    const updateResolution = () => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio || 1,
        orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      })
    }

    updateResolution()
    window.addEventListener('resize', updateResolution)
    window.addEventListener('orientationchange', updateResolution)

    return () => {
      window.removeEventListener('resize', updateResolution)
      window.removeEventListener('orientationchange', updateResolution)
    }
  }, [])

  return resolution
}
