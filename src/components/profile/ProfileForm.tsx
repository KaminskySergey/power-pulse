'use client'
/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import Input from '../ui/input/Input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../ui/button/Button';
import CalendarIcon from '../svg/CalendarIcon';
import CustomCalendar from '../ui/calendar/CustomCalendar';
import { format } from 'date-fns';
import RadioInput from '../ui/input/RadioInput';
import { getActivityLevelKey, getActivityLevelValue, getBloodKey, getBloodValue, getSexKey, getSexValue } from '@/utils/switchDate';
import DateInput from '../ui/input/DateInput';
import { convertToISO, getFormattedBirthday } from '@/utils/utils';
import { Blood, IProfileUpdate, LevelActivity, Sex } from '@/types/profile';
import { useSession } from 'next-auth/react';
import { handleToastError, handleToastSuccess } from '@/utils/toast';
import { updateProfile } from '../../../actions/profile';
interface IProfileForm {
    name: string
    email: string
    height: string
    currentWeight: number
    desiredWeight: number
    birthday: string
    blood: Blood;
    sex: Sex;
    levelActivity: LevelActivity;
    avatarPath: string | null | undefined
}



export default function ProfileForm({ name, email, height, currentWeight, desiredWeight, birthday, blood, sex, levelActivity, avatarPath }: IProfileForm) {
    const [showCalendar, setShowCalendar] = useState(false);
    const session = useSession()

    const calendarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    if (session.status !== "authenticated") return
    const formik = useFormik({
        initialValues: {
            name,
            email,
            height,
            currentWeight: currentWeight || '',
            desiredWeight: desiredWeight || '',
            birthday: getFormattedBirthday(birthday),
            levelActivity: getActivityLevelValue(levelActivity),
            blood: getBloodValue(blood),
            sex: getSexValue(sex),


        },

        onSubmit: async values => {
            const transformedValues = {
                ...values,
                blood: getBloodKey(values.blood as Blood),
                sex: getSexKey(values.sex as Sex),
                currentWeight: Number(values.currentWeight),
                desiredWeight: Number(values.desiredWeight),
                levelActivity: getActivityLevelKey(values.levelActivity as LevelActivity),
                birthday: convertToISO(values.birthday),
                avatarPath,
            };
            const res = await updateProfile(transformedValues as IProfileUpdate)
            if (res.status == 200) {

                return handleToastSuccess('Success')
            }
            handleToastError('Error')
        },
    })


    const handleDateSelect = (date: string | Date) => {
        const formattedDate = typeof date === 'string' ? date : format(date, 'dd.MM.yyyy');
        formik.setFieldValue('birthday', formattedDate);
        setShowCalendar(false);
    };
    return <div className=''>
        <form onSubmit={formik.handleSubmit} className="">




            <div className="flex flex-col gap-[40px] md:gap-[38px] md:w-[696px]">
                <div className="flex flex-col gap-[40px] md:gap-[32px]">
                    <div className='flex flex-col gap-[14px] md:gap-[20px]'>
                        <div className='flex flex-col gap-[14px] md:flex-row'>
                            <div className='flex flex-col gap-[4px] md:gap-[8px]'>
                                <label className='text-[12px] md:text-[14px] text-whiteGray-50 font-normal leading-[18px]' htmlFor='name'>Name</label>
                                <Input
                                    profileProps
                                    id="name"
                                    name="name"
                                    type="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    placeholder="Serg"
                                />
                            </div>
                            <div className='flex flex-col gap-[4px] md:gap-[8px]'>
                                <label className='text-[12px] md:text-[14px] text-whiteGray-50 font-normal leading-[18px]' htmlFor='email'>Email</label>
                                <Input
                                    profileProps
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    placeholder="kama06@ukr.net"
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-[14px]'>
                            <div className='flex gap-[14px] md:w-1/2'>
                                <div className='flex flex-col w-1/2  gap-[4px] md:gap-[8px]'>
                                    <label className='text-[12px] md:text-[14px] text-whiteGray-50 font-normal leading-[18px]' htmlFor='height'>Height</label>
                                    <Input
                                        profileMdProps
                                        profileProps
                                        id="height"
                                        name="height"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.height}
                                        placeholder="170"
                                    />
                                </div>
                                <div className='flex flex-col w-1/2  gap-[4px] md:gap-[8px]'>
                                    <label className='text-[12px] md:text-[14px] text-whiteGray-50 font-normal leading-[18px]' htmlFor='currentWeight'>Current Weight</label>
                                    <Input
                                        profileMdProps
                                        profileProps
                                        id="currentWeight"
                                        name="currentWeight"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.currentWeight}
                                        placeholder="68"
                                    />
                                </div>
                            </div>
                            <div className='flex gap-[14px] md:w-1/2'>
                                <div className='flex flex-col w-1/2  gap-[4px] md:gap-[8px]'>
                                    <label className='text-[12px] md:text-[14px] text-whiteGray-50 font-normal leading-[18px]' htmlFor='desiredWeight'>Desired Weight</label>
                                    <Input
                                        profileMdProps
                                        profileProps
                                        id="desiredWeight"
                                        name="desiredWeight"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.desiredWeight}
                                        placeholder="66"
                                    />
                                </div>
                                <div className='flex flex-col w-1/2  gap-[4px] md:gap-[8px]'>
                                    <label className='text-[12px] md:text-[14px] text-whiteGray-50 font-normal leading-[18px]' htmlFor='birthday'>Date of birth</label>
                                    <div className='relative '>

                                        <DateInput
                                            profileMdProps
                                            profileProps
                                            id="birthday"
                                            name="birthday"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.birthday}
                                            placeholder="06.09.2001"

                                        />


                                        <div className='absolute inset-y-[14px] right-[14px]' onClick={() => setShowCalendar(true)}>
                                            <CalendarIcon />
                                        </div>
                                        {showCalendar && (
                                            <div ref={calendarRef} className="absolute top-full left-0 mt-2 z-10">
                                                <CustomCalendar
                                                    selectedDate={formik.values.birthday}
                                                    onSelect={handleDateSelect}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ragio Blood and Sex */}
                        <div className='flex justify-between items-end md:w-[380px]'>
                            <div className='flex flex-col gap-[4px] md:gap-[8px]'>
                                <div className='text-[12px] md:text-[14px] text-whiteGray-50 font-normal leading-[18px]'>
                                    Blood
                                </div>
                                <div role='blood' className='flex gap-[8px]'>
                                    <RadioInput name='blood' checked={formik.values.blood === '1'} id='1' value='1' text='1' onChange={formik.handleChange} />
                                    <RadioInput name='blood' checked={formik.values.blood === '2'} id='2' value='2' text='2' onChange={formik.handleChange} />
                                    <RadioInput name='blood' checked={formik.values.blood === '3'} id='3' value='3' text='3' onChange={formik.handleChange} />
                                    <RadioInput name='blood' checked={formik.values.blood === '4'} id='4' value='4' text='4' onChange={formik.handleChange} />
                                </div>
                            </div>
                            <div className='flex flex-col gap-[4px] md:gap-[8px]'>
                                <div role='sex' className='flex gap-[8px]'>
                                    <RadioInput name='sex' checked={formik.values.sex === 'Male'} id='male' value='Male' text='Male' onChange={formik.handleChange} />
                                    <RadioInput name='sex' checked={formik.values.sex === 'Female'} id='female' value='Female' text='Female' onChange={formik.handleChange} />

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* ragio Activity */}
                    <div className='flex justify-between items-end'>
                        <div role='levelActivity' className='flex flex-col gap-[8px]'>
                            <RadioInput name='levelActivity' checked={formik.values.levelActivity === '1'} id='1' value='1' text='Sedentary lifestyle (little or no physical activity)' onChange={formik.handleChange} />
                            <RadioInput name='levelActivity' checked={formik.values.levelActivity === '2'} id='2' value='2' text='Light activity (light exercises/sports 1-3 days per week)' onChange={formik.handleChange} />
                            <RadioInput name='levelActivity' checked={formik.values.levelActivity === '3'} id='3' value='3' text='Moderately active (moderate exercises/sports 3-5 days per week)' onChange={formik.handleChange} />
                            <RadioInput name='levelActivity' checked={formik.values.levelActivity === '4'} id='4' value='4' text='Very active (intense exercises/sports 6-7 days per week)' onChange={formik.handleChange} />
                            <RadioInput name='levelActivity' checked={formik.values.levelActivity === '5'} id='5' value='5' text='Extremely active (very strenuous exercises/sports and physical work)' onChange={formik.handleChange} />

                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[12px]">
                    <div>
                        <Button orangeProps type="submit">Save</Button>
                    </div>

                </div>
            </div>
        </form>
    </div>
}
