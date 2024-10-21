/* eslint-disable no-unused-vars */
import React from 'react';
import { format, parse } from 'date-fns';
import { cn } from '@/utils/utils';

type DateProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type: string,
  placeholder: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  id: string
  name: string,
  value: string | number,
  authProps?: boolean
  profileProps?: boolean
  profileMdProps?: boolean
}

export default function DateInput({ className, type, placeholder, onChange, id, name, value, authProps, profileProps, profileMdProps, ...props }: DateProps) {
    return <input className={cn("rounded-xl  p-[14px] bg-transparent leading-[18px] text-[14px] font-normal w-full  placeholder:text-whiteGray-60", className, {
      "border-2 border-whiteGray-30 h-[46px] md:h-[52px]  sm:max-w-[335px] md:w-[364px]": authProps,
      "border-2 border-whiteGray-30 h-[46px] md:h-[52px]  sm:max-w-full md:w-[341px]": profileProps,
      "border-2 border-whiteGray-30 h-[46px] md:h-[52px]  sm:max-w-full md:w-full": profileMdProps,
      })} {...props}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  }