'use client'
import { cookies } from "next/headers";
import { useFormik } from "formik"
import React from "react";
import Input from "../ui/input/Input"
import Button from "../ui/button/Button"
import PTag from "../ui/button/Ptag"
import Link from "next/link"
import { fetchOptions } from "@/api/helpers"
import { signIn } from 'next-auth/react'
import { validationRegister } from "@/utils/validate-form";
import CheckSucess from "../svg/CheckSucess";
import CheckError from "../svg/CheckError";
import { handleToastError, handleToastSuccess } from "@/utils/toast";

export async function register(data: { name: string, email: string; password: string }) {
    return fetchOptions("/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

export default function FormRegister() {
    const csrfToken = cookies().get("authjs.csrf-token")?.value ?? ""
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',

        },
        validationSchema: validationRegister,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async values => {
            console.log(csrfToken)
            const response = await register(values)
            if (response.message === 'User already exists') {
                handleToastError('User already exists')
                return;
            }
            if (response.status === 500) {
                handleToastError('Error')
                return;
            }

            const signInResponse = await signIn("credentials", {
                ...values,
                callbackUrl: '/profile',
                redirect: false,
            });

            if (signInResponse?.ok) {
                handleToastSuccess('User created');
                window.location.href = '/profile';
            } else {
                handleToastError('Error')
            }

        },
    })
   
    return (
        <form onSubmit={formik.handleSubmit} className="">
            <input type="hidden" name="csrfToken" value={csrfToken} />

            <div className="flex flex-col gap-[28px] md:gap-[64px]">
                <div className="flex flex-col gap-[14px] sm:gap-[18px] md:gap-[20px]">
                    <div>
                        <Input
                            authProps
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="Name"
                            isValidate={formik.touched.name && !!formik.errors.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <CheckError text={formik.errors.name} />
                        ) : formik.touched.name ? (
                            <CheckSucess text={'Succeses'} />
                        ) : null}
                    </div>

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
                            <CheckSucess text={'Succeses email'} />
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

                        <Button homeAndAuthProps type="submit">Sign Up</Button>

                    </div>
                    <div>
                        <PTag className="text-whiteGray-60 text-[12px] ">Already have an account? <span className="text-whiteDark underline  underline-offset-1"><Link href={'/auth/login'}>Sign In</Link></span> </PTag>

                    </div>
                </div>
            </div>
        </form>
    )
}