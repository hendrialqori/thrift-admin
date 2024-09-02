import BatchForm from "#/modules/add-batch/form";
import Header from "#/modules/add-batch/header";

export default function AddBatch() {
    return (
        <section className="w-full">
            <Header />
            <div className="p-9 w-5/12">
                <BatchForm />
            </div>
        </section>
    )
}