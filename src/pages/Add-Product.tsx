import React from "react";
import Header from "#/modules/add-item/header";
import Camera from "#/modules/add-item/camera";
import { cn, merge, uuid } from "#/lib/utils";
import { CameraType } from "react-camera-pro";
import Control from "#/components/control-flow";
import { IoMdClose } from "react-icons/io";
import { FiCamera, FiCheck } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Portal from "#/components/ui/portal";
import ItemForm from "#/modules/add-item/form";
import Progress from "#/modules/add-item/progress";
import DesktopDevice from "#/modules/add-item/camera-desktop-device";
import { useMediaQuery } from "usehooks-ts";
import MobileDevice from "#/modules/add-item/camera-mobile-device";
import { toast } from "sonner";

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

export default function AddProduct() {

    const cameraRef = React.useRef<CameraType | null>(null)
    const [image, setImage] = React.useState<File | null>(null)
    const [isShowFormModal, setShowFormModal] = React.useState(false)
    // state for handle next step after confirm takes photo
    const [isFillForm, setFillForm] = React.useState(false)

    const isDesktop = useMediaQuery("(min-width: 768px)")

    const id = React.useMemo(() => uuid(), [])

    function handleTakePhoto() {
        const base64 = cameraRef.current?.takePhoto("base64url") as string
        const result = base64ToFile(base64, `${Date.now()}-screenshot.png`)
        setImage(result)
    }

    function handleRetakePhoto() {
        setImage(null)
        setFillForm(false)
    }

    function handleToggleTorch() {
        if (!cameraRef.current?.torchSupported) {
            toast.error("Torch do not support in your device", { position: "top-right" })
            return
        }

        cameraRef.current.toggleTorch()
    }

    function handleFillForm() {
        setFillForm(true)
    }

    function handleConfirmImage() {
        setShowFormModal(true)
    }

    function formModalAction(type: "open" | "close") {
        return () => setShowFormModal(type === "open" ? true : false)
    }

    return (
        <React.Fragment>
            <Header />
            <div className={cn(
                "p-bodyPaddingMd xl:p-bodyPadding max-w-2xl",
                "mt-4 xl:mt-0 mx-auto flex items-center justify-center")}
                aria-label="content container"
            >
                <div
                    className="w-[400px] rounded-md overflow-hidden mx-auto space-y-5"
                    aria-label="camera container"
                >
                    <Control>
                        <Control.Show when={isDesktop}>
                            <DesktopDevice
                                id={id}
                                isFillForm={isFillForm}
                                image={image}
                                camera={<Camera ref={cameraRef} aspectRatio={1 / 1} />}
                                onTakePhoto={handleTakePhoto}
                                onRetakePhoto={handleRetakePhoto}
                                onConfirmImage={handleConfirmImage}
                                onFillForm={handleFillForm}
                            />
                        </Control.Show>
                        <Control.Otherwise>
                            <MobileDevice
                                ref={cameraRef}
                                productId={id}
                                isFillForm={isFillForm}
                                image={image}
                                onTakePhoto={handleTakePhoto}
                                onRetakePhoto={handleRetakePhoto}
                                onConfirmImage={handleConfirmImage}
                                onToggleTorch={handleToggleTorch}
                                onFillForm={handleFillForm}
                            />
                        </Control.Otherwise>
                    </Control>
                </div>

            </div>
            <Portal isOpen={isShowFormModal}>
                <ItemForm onClose={formModalAction("close")} />
            </Portal>
            <Portal isOpen={false}>
                <Progress value={80} />
            </Portal>
        </React.Fragment>
    )
}
