import { CgSpinner } from "react-icons/cg";

export const PageLoading = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="flex flex-col justify-center items-center">
                <CgSpinner className="animate-spin text-2xl" />
                <p className="text-sm">Sedang mengunduh halaman, mohon tunggu sebentar</p>
            </div>
        </div>
    )
}