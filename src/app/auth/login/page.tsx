import FormAuthComponent from "@/components/auth/FormAuthComponent";
import FormLogin from "@/components/auth/FormLogin";

export default async function AuthLogin() {


    return (
        <FormAuthComponent title="Sign In" text="Welcome! Please enter your credentials to login to the platform:">
                
                <FormLogin />
        </FormAuthComponent>
    )
}