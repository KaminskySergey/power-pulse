'use client'
import { useFormik } from "formik"
import Button from "../ui/button/Button"
import Input from "../ui/input/Input"
import PTag from "../ui/button/Ptag"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { signIn, useSession } from "next-auth/react"
import { validationLogin } from "@/utils/validate-form"
import CheckError from "../svg/CheckError"
import CheckSucess from "../svg/CheckSucess"
import { handleToastError, handleToastSuccess } from "@/utils/toast"
import { useEffect, useState } from "react"





export default function FormLogin() {
    const session = useSession()
    const router = useRouter()
    const [formSubmitted, setFormSubmitted] = useState(false); // State variable to track form submission
    useEffect(() => {
        if (formSubmitted) { // Run only if form has been submitted
            if (session?.status === 'unauthenticated') { // Unauthorized status code
                handleToastError("Invalid email or password");
            } else if (session?.status === 'authenticated') { // Successful login
                handleToastSuccess('Login Successful');
                router.push(`${process.env.NEXT_PUBLIC_APP_SERVER_URL}/profile`);
                router.refresh();
            } else {
                handleToastError('Unexpected error occurred');
            }
        }
    }, [session, formSubmitted, router]);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validationSchema: validationLogin,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async values => {
            setFormSubmitted(false); // Reset form submission state
            try {
                await signIn("credentials", { ...values, callbackUrl: '/profile', redirect: false });
                setFormSubmitted(true); // Set form submission state to true after submission
            } catch (error) {
                console.error('Login failed:', error);
                handleToastError('An error occurred during login');
            }


        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className="">


            <div className="flex flex-col gap-[28px] md:gap-[64px]">
                <div className="flex flex-col gap-[14px] md:gap-[20px]">
                    <div>
                        <Input
                            authProps
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="Email"
                            isValidate={formik.touched.email && !!formik.errors.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <CheckError text={formik.errors.email} />
                        ) : formik.touched.email ? (
                            <CheckSucess text={'Succeses'} />
                        ) : null}
                    </div>

                    <div>
                        <Input
                            authProps
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            placeholder="Password"
                            isValidate={formik.touched.password && !!formik.errors.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <CheckError text={formik.errors.password} />
                        ) : formik.touched.password ? (
                            <CheckSucess text={'Succeses password'} />
                        ) : null}
                    </div>
                </div>

                <div className="flex flex-col gap-[12px]">
                    <div>
                        <Button homeAndAuthProps type="submit">Sign In</Button>
                    </div>
                    <div>
                        <PTag className="text-whiteGray-60 text-[12px] ">Don’t have an account? <span className="text-whiteDark underline  underline-offset-1"><Link href={'/auth/register'}>Sign Up</Link></span> </PTag>

                    </div>
                </div>
            </div>
        </form>
    )
}
