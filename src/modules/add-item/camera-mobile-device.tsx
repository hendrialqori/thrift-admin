import Control from "#/components/control-flow"
import React from "react"
import { Camera, CameraType } from "react-camera-pro"
import * as CONST from "#/constant"
import { Link } from "react-router-dom"
import { GrFormPrevious } from "react-icons/gr"
import { MdFlashlightOn } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FiCamera, FiCheck } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import ButtonIcon from "./button-icon"
import Portal from "#/components/ui/portal"

type Props = {
    productId: string
    isFillForm: boolean
    image: File | null
    onTakePhoto: () => void
    onRetakePhoto: () => void
    onConfirmImage: () => void
    onToggleTorch: () => void
    onFillForm: () => void
}

const cameraErrorMessage = {
    noCameraAccessible: CONST.noCameraAccessibleError,
    permissionDenied: CONST.permissionDeniedError,
    switchCamera: CONST.switchCameraError,
    canvas: CONST.canvasError
}

const CropImageTarget = React.forwardRef<HTMLDivElement>(({ }, ref) => (
    <div ref={ref}
        className="fixed w-full aspect-square top-1/2 -translate-y-1/2 left-0 right-0 z-10 border border-dashed border-black"
    />
))



const MobileDevice = React.forwardRef<CameraType, Props>((props, ref) => {
    const cropImageRef = React.useRef<HTMLDivElement | null>(null)

    return (
        <div className="z-50">
            <div
                className="z-10 fixed top-0 bg-black/20 left-0 right-0"
                style={{ height: 1 / 2 * (window.innerHeight - window.innerWidth) }}
                aria-label="uuid"
            >
                <div className="relative flex justify-center py-6 items-center gap-x-4">
                    <Link to="/products">
                        <div className="bg-white rounded-full size-9 flex justify-center items-center">
                            <GrFormPrevious className="text-3xl" />
                        </div>
                    </Link>
                    <div className="bg-white rounded-full h-9 w-2/3 flex justify-center items-center">
                        <p className="text-center text-sm">{props.productId.slice(0, 13)}</p>
                    </div>
                    <div />
                </div>
            </div>
            <CropImageTarget ref={cropImageRef} />
            <Control>
                {/* show image result from camera */}
                <Control.Show when={Boolean(props.image)}>
                    <div className="fixed z-[2] inset-0">
                        <img
                            src={props.image ? URL.createObjectURL(props.image) : ""}
                            className="size-full object-cover"
                            alt="image-screenshot"
                        />
                    </div>
                </Control.Show>
                {/* camera */}
                <Control.Otherwise>
                    <Camera
                        ref={ref}
                        aspectRatio={"cover"}
                        facingMode="environment"
                        errorMessages={cameraErrorMessage}
                    />
                </Control.Otherwise>
            </Control>
            <div
                className="z-10 fixed bottom-0 bg-black/20 left-0 right-0"
                style={{ height: 1 / 2 * (window.innerHeight - window.innerWidth) }}
                aria-label="action"
            >
                <Control>
                    <Control.Show
                        when={Boolean(props.image) && Boolean(props.isFillForm)}>
                        <div className="relative flex justify-center items-center h-full gap-x-16">
                            <ButtonIcon
                                className="size-10"
                                icon={<IoMdClose className="text-white text-2xl" />}
                                onClick={props.onRetakePhoto}
                            />
                            <ButtonIcon
                                className="size-10"
                                icon={<FiCheck className="text-white text-2xl" />}
                                onClick={props.onConfirmImage}
                            />
                        </div>
                    </Control.Show>
                    <Control.Otherwise>
                        <div className="relative flex justify-center items-center h-full gap-x-10">
                            <ButtonIcon
                                className="size-10"
                                icon={<MdFlashlightOn className="text-xl text-white" />}
                                onClick={props.onToggleTorch}
                            />
                            <ButtonIcon
                                className="size-14"
                                icon={<FiCamera className="text-2xl text-white" />}
                                onClick={props.onTakePhoto}
                            />
                            <ButtonIcon
                                className="size-10"
                                icon={<FaArrowRight className="text-xl text-white" />}
                                onClick={props.onFillForm}
                            />
                        </div>
                    </Control.Otherwise>
                </Control>
            </div>
        </div>
    )
})

export default MobileDevice