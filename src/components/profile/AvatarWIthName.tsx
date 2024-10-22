'use client'
import React from "react"
import { useRef, useState } from "react"
import Image from "next/image"
import AvatarIcon from "../svg/AvatarIcon"
import CheckMark from "../svg/CheckMark"
import PTag from "../ui/button/Ptag"
import Ttag from "../ui/title/Ttag"
interface IAvatarWithName {
    avatarName: string | null | undefined
}

export default function AvatarWithName({ avatarName }: IAvatarWithName) {
    const filePicker = useRef<HTMLInputElement | null>(null);
    const [_, setSelectedFile] = useState<File | null>(null);
    const [uploaded, setUploaded] = useState<any>(avatarName);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            setSelectedFile(file);

            const formData = new FormData();
            formData.append('file', file);
            formData.append('filename', file.name);

            try {
                const res = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!res.ok) {
                    throw new Error('Ошибка загрузки');
                }

                const result = await res.json();
                setUploaded(result.avatarPath);

            } catch (error) {
                console.error('Ошибка загрузки', error);
                alert('Ошибка загрузки');
            }
        }
    }

    const handlePick = () => {
        if (filePicker.current) {
            filePicker.current.click();
        }
    }

    return (
        <div className="flex flex-col gap-[30px] md:gap-[32px] items-center">
            <div className="flex justify-center items-center">
                <div className="relative">
                    <div className="cursor-pointer relative">
                    <div className={`flex items-center justify-center border-solid rounded-full  border ${uploaded ? "p-0" : "p-12"} border-orange w-[150px] h-[150px] overflow-hidden bg-black1`}>
                            {uploaded ? <Image src={`/uploads/${uploaded}`} alt="avatar" width={150} height={150} className="w-[150px] h-[150px] bg-black1 object-cover" />
                                : <AvatarIcon width="68" height="68" />}
                            <div onClick={handlePick} className="absolute bottom-[-13px] left-[50%] transform -translate-x-1/2">
                                <CheckMark />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input
                className="hidden"
                type="file"
                id="avatarInput"
                ref={filePicker}
                accept="image/*,.png,.jpg,.gif,.web"
                onChange={handleChange}
            />
            <div className="flex flex-col items-center gap-[4px] md:gap-[8px]">
                <Ttag tag="h3" className="font-normal text-[18px] leading-[20px]">Сергей Каминский</Ttag>
                <PTag className="md:text-[14px] font-normal text-whiteGray-50">Пользователь</PTag>
            </div>
        </div>
    );
}