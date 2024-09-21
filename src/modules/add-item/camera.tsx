import React from "react"
import { uuid } from "#/lib/utils";
import { Camera as C, CameraType } from "react-camera-pro"
import { FaArrowRight } from "react-icons/fa6";
import { FiCamera } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Control from "#/components/control-flow";
import Overlay from "#/components/ui/overlay";
import ItemForm from "./form";
import Loading from "./loading";

const noCameraAccessibleError = "No camera device accessible. Please connect your camera or try a different browser."
const permissionDeniedError = "Permission denied. Please refresh and give camera permission."
const switchCameraError = "It is not possible to switch camera to different one because there is only one video device accessible."
const canvasError = "Canvas is not supported."

export default function Camera() {

   const cameraRef = React.useRef<CameraType | null>(null)
   const [image, setImage] = React.useState<File | null>(null)
   const [showFormModal, setShowFormModal] = React.useState(false)
   // state for handle next step after confirm takes photo
   const [nextStep, setNextStep] = React.useState(false)

   function handleTakePhoto() {
      const base64 = cameraRef.current?.takePhoto("base64url") as string
      const result = base64ToFile(base64, `${Date.now()}-screenshot.png`)
      setImage(result)
   }

   function handleRetakePhoto() {
      setImage(null)
      setNextStep(false)
   }

   function nextStepAction() {
      setNextStep(true)
   }

   function base64ToFile(base64: string, filename: string) {
      // Split the Base64 string into parts
      const [header, data] = base64.split(',');
      const mimeType = header.match(/:(.*?);/)?.[1]

      // Decode the Base64 string
      const byteString = atob(data);

      // Create a Uint8Array to hold the binary data
      const uint8Array = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
         uint8Array[i] = byteString.charCodeAt(i);
      }

      // Create a Blob from the Uint8Array
      const blob = new Blob([uint8Array], { type: mimeType });

      // Create a File from the Blob
      const file = new File([blob], filename, { type: mimeType });

      return file;
   }

   function confirmImageAction() {
      setShowFormModal(true)
   }

   function saveAction() { }

   function toggleFormModalAction(condition?: "open" | "close") {
      return () => setShowFormModal(condition === "open" ? true : false)
   }

   return (
      <div className="w-[400px] rounded-md overflow-hidden mx-auto space-y-5">

         <div className="header">
            <p className="text-center text-sm font-semibold">{uuid()}</p>
         </div>

         <div aria-label="camera">
            <Control>
               <Control.Show when={Boolean(image)}>
                  <img
                     src={image ? URL.createObjectURL(image) : ""}
                     alt="image-screenshot"
                  />
               </Control.Show>
               <Control.Otherwise>
                  <C
                     ref={cameraRef}
                     aspectRatio={1 / 1}
                     facingMode="environment"
                     errorMessages={{
                        noCameraAccessible: noCameraAccessibleError,
                        permissionDenied: permissionDeniedError,
                        switchCamera: switchCameraError,
                        canvas: canvasError
                     }}
                  />
               </Control.Otherwise>
            </Control>
         </div>
         <Control>
            <Control.Show when={Boolean(image) && Boolean(nextStep)}>
               <div className="flex items-center justify-center gap-16 pt-5">
                  <button
                     onClick={handleRetakePhoto}
                     className="rounded-full size-7 lg:size-10
                 bg-primary active:bg-primary/70 transition duration-300 flex items-center justify-center">
                     <IoMdClose className="text-white text-base lg:text-2xl" />
                  </button>
                  <button
                     onClick={confirmImageAction}
                     className="rounded-full size-7 lg:size-10
                 bg-primary active:bg-primary/70 transition duration-300 flex items-center justify-center">
                     <FiCheck className="text-white text-base lg:text-2xl" />
                  </button>
               </div>
            </Control.Show>
            <Control.Otherwise>
               <div className="flex items-center justify-between w-1/2 mr-0 ml-auto pt-5" aria-label="action camera">
                  <button
                     onClick={handleTakePhoto}
                     className="rounded-full size-7 lg:size-10
                 bg-primary active:bg-primary/70 transition duration-300 flex items-center justify-center">
                     <FiCamera className="text-white text-base lg:text-lg" />
                  </button>
                  <button
                     onClick={nextStepAction}
                     className="rounded-full size-7 lg:size-8 bg-primary flex items-center justify-center disabled:bg-primary/50"
                     disabled={Boolean(!image)}
                  >
                     <FaArrowRight className="text-white text-base" />
                  </button>
               </div>
            </Control.Otherwise>
         </Control>
         <Overlay
            isOpen={showFormModal}
            onClose={toggleFormModalAction("close")}
         >
            <Control>
               {/* <Control.Show when={Boolean(showFormModal)}>
                  <ItemForm onClose={toggleFormModalAction("close")} />
               </Control.Show> */}
               <Control.Show when={true}>
                  <Loading />
               </Control.Show>
            </Control>
         </Overlay>
      </div>
   )
}