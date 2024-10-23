import FormAuthComponent from "@/components/auth/FormAuthComponent";
import FormLogin from "@/components/auth/FormLogin";
import { cookies } from "next/headers";

export default function AuthLogin() {

    const csrfToken = cookies().get("authjs.csrf-token")?.value ?? "";
    console.log(csrfToken, 'csrfTokencsrfTokencsrfTokencsrfTokencsrfTokencsrfToken')
    return (
        <FormAuthComponent title="Sign In" text="Welcome! Please enter your credentials to login to the platform:">
                
                <FormLogin csrfToken={csrfToken}/>
        </FormAuthComponent>
    )
}