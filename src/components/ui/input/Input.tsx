/* eslint-disable no-unused-vars */
import { cn, formatDate } from "@/utils/utils"
import { format } from "date-fns"
import React from "react"
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string,
  placeholder?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  id: string
  name: string,
  value: string | number,
  authProps?: boolean
  profileProps?: boolean
  profileMdProps?: boolean
  isValidate?: boolean
  isFilter?: boolean
}


export default function Input({ className, type, placeholder, isValidate, isFilter, onChange, id, name, value, authProps, profileProps, profileMdProps, ...props }: InputProps) {
  return <input className={cn("rounded-xl bg-transparent  p-[14px] leading-[18px] text-[14px] font-normal w-full focus:outline-none  hover:border-orange focus:border-orange  placeholder:text-whiteGray-60 transition-all", className, {
    "border-2 border-whiteGray-30 h-[46px] md:h-[52px]  sm:max-w-[335px] md:w-[364px]": authProps,
    "border-2 border-whiteGray-30 h-[46px] md:h-[52px]  sm:max-w-full md:w-[341px]": profileProps,
    "border-2 border-whiteGray-30 h-[46px] md:h-[52px]  sm:max-w-full md:w-full": profileMdProps,
    "border-2 border-whiteGray-30 h-[46px] md:h-[52px] w-full placeholder:text-whiteGray-0 md:text-[16px]  ": isFilter,
    'border-redError': isValidate === true, 
    'border-green': isValidate === false,
  })} {...props}
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name}
  />
}
