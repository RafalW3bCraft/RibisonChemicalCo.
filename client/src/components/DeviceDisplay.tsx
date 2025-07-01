
import React from 'react'
import { useAndroidDevice, useDeviceResolution } from '@/hooks/use-mobile'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function DeviceDisplay() {
  const { deviceType, isAndroid } = useAndroidDevice()
  const resolution = useDeviceResolution()

  const getDeviceInfo = () => {
    const userAgent = navigator.userAgent
    const isIOS = /iPad|iPhone|iPod/.test(userAgent)
    const platform = navigator.platform
    
    if (isAndroid) {
      if (resolution.width <= 360) return 'Android Small (Galaxy S8, Pixel 2)'
      if (resolution.width <= 412) return 'Android Medium (Pixel 3, Galaxy S9)'
      if (resolution.width <= 432) return 'Android Large (Pixel 4 XL, Galaxy Note)'
      if (resolution.width <= 768) return 'Android Tablet'
      return 'Android Desktop'
    }
    
    if (isIOS) {
      if (resolution.width <= 320) return 'iPhone SE'
      if (resolution.width <= 375) return 'iPhone Standard'
      if (resolution.width <= 414) return 'iPhone Plus'
      if (resolution.width <= 768) return 'iPad'
      return 'iPad Pro'
    }
    
    return platform || 'Unknown Device'
  }

  const getDisplayClass = () => {
    switch (deviceType) {
      case 'android-sm': return 'android-sm-display'
      case 'android-md': return 'android-md-display'
      case 'android-lg': return 'android-lg-display'
      default: return ''
    }
  }

  return (
    <Card className={`w-full max-w-md mx-auto ${getDisplayClass()}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg android-text-scale">Device Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Device:</span>
          <Badge variant={isAndroid ? "default" : "secondary"}>
            {getDeviceInfo()}
          </Badge>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Type:</span>
          <Badge variant="outline">{deviceType}</Badge>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Resolution:</span>
          <span className="text-sm">{resolution.width} × {resolution.height}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Pixel Ratio:</span>
          <span className="text-sm">{resolution.pixelRatio}x</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Orientation:</span>
          <Badge variant="outline">{resolution.orientation}</Badge>
        </div>
        
        {isAndroid && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-xs text-green-600 dark:text-green-400">
              🤖 Android device detected! Optimized styling applied.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
