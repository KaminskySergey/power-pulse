import FormAuthComponent from "@/components/auth/FormAuthComponent";
import FormRegister from "@/components/auth/FormRegister";

export default function AuthRegister() {

    return (
        <FormAuthComponent title="Sign Up" text="Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.">
                
                <FormRegister />
        </FormAuthComponent>
    )
}