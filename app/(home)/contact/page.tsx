import ContactFormUser from "@/components/card/contact-form-user"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
    return (
        <section className=" h-screen w-full pt-20 px-2 justify-center items-center flex flex-col gap-4">
            <div className="flex gap-2 flex-col  items-center ">
                <h2 className=" text-xl text-sky-400">contact on SOS student page</h2>
                <p className=" text-gray-500 text-sm font-extralight  text-center">If you have problem or other divers you can tell us to fix it !!</p>
            </div>
            <div>
                <ContactFormUser/>
            </div>
        </section>
    )
}

export default Contact