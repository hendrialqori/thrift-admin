import React from "react"
import { Camera as C, CameraType} from "react-camera-pro"
import { AspectRatio } from "react-camera-pro/dist/components/Camera/types"

const noCameraAccessibleError = "No camera device accessible. Please connect your camera or try a different browser."
const permissionDeniedError = "Permission denied. Please refresh and give camera permission."
const switchCameraError = "It is not possible to switch camera to different one because there is only one video device accessible."
const canvasError = "Canvas is not supported."

const Camera = React.forwardRef<CameraType, { aspectRatio: AspectRatio }>(({ aspectRatio }, refs) => {
   return (
      <C
         ref={refs}
         aspectRatio={aspectRatio}
         facingMode="environment"
         errorMessages={{
            noCameraAccessible: noCameraAccessibleError,
            permissionDenied: permissionDeniedError,
            switchCamera: switchCameraError,
            canvas: canvasError
         }}
      />
   )
})

export default Camera