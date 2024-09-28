import Control from "#/components/control-flow";
import React from "react";
import ButtonIcon from "./button-icon";
import { IoMdClose } from "react-icons/io";
import { FiCamera, FiCheck } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
    id: string
    isFillForm: boolean
    camera: React.ReactNode
    image: File | null
    onTakePhoto: () => void
    onRetakePhoto: () => void
    onConfirmImage: () => void
    onFillForm: () => void
}

export default function DesktopDevice({ id, isFillForm, camera, image,
    onTakePhoto, onRetakePhoto, onConfirmImage, onFillForm }: Props) {
    return (
        <React.Fragment>
            <div className="header" aria-label="uuid">
                <p className="text-center text-sm font-semibold">{id}</p>
            </div>
            <div aria-label="camera" className="z-[10]">
                <Control>
                    {/* show image result from camera */}
                    <Control.Show when={Boolean(image)}>
                        <img
                            src={image ? URL.createObjectURL(image) : ""}
                            alt="image-screenshot"
                        />
                    </Control.Show>
                    {/* camera */}
                    <Control.Otherwise>
                        {camera}
                    </Control.Otherwise>
                </Control>
            </div>
            <Control>
                <Control.Show
                    when={Boolean(image) && Boolean(isFillForm)}>
                    <div className="flex items-center justify-center gap-16 pt-5">
                        <ButtonIcon
                            icon={<IoMdClose className="text-white text-base lg:text-2xl" />}
                            onClick={onRetakePhoto}
                        />
                        <ButtonIcon
                            icon={<FiCheck className="text-white text-base lg:text-2xl" />}
                            onClick={onConfirmImage}
                        />
                    </div>
                </Control.Show>
                <Control.Otherwise>
                    <div className="flex items-center justify-between w-1/2 mr-0 ml-auto pt-5" aria-label="action camera">
                        <ButtonIcon
                            icon={<FiCamera className="text-white text-base lg:text-lg" />}
                            onClick={onTakePhoto}
                        />
                        <ButtonIcon
                            icon={<FaArrowRight className="text-white text-base" />}
                            className="size-7 lg:size-8 disabled:bg-primary/50"
                            onClick={onFillForm}
                            disabled={Boolean(!image)}
                        />
                    </div>
                </Control.Otherwise>
            </Control>
        </React.Fragment>
    )
}