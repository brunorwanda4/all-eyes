import RegisterFooterUser from "@/components/footer/register-user"
import CreateFamilyNavbar from "@/components/navbar/create-family-navbar"

const CreateFamilyLayout = ({
    children
}: {
    children : React.ReactNode
}) => {
    return (
        <main className=" w-full">
            <CreateFamilyNavbar/>
            {children}
            <RegisterFooterUser/>
        </main>
    )
}

export default CreateFamilyLayout