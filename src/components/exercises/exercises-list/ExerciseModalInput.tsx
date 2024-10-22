'use client'
import React from "react";
import Input from "@/components/ui/input/Input";
import { useState } from "react";


interface IExerciseModalInput {
    time: string
    calculateCalories: () => number
    handleTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}
const timeOptions = [
    '0:30', '1', '1:30', '2', '2:30', '3'
];

const parseTime = (timeStr: string) => {
    const [minutes, seconds] = timeStr.split(':').map(Number);
    return (minutes || 0) + (seconds || 0) / 60;
};

const formatTime = (time: number) => {
    const minutes = Math.floor(time);
    const seconds = Math.round((time - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export function ExerciseModalInput({
    handleTimeChange,
    time,
    calculateCalories
}: IExerciseModalInput) {
    const [selectedTime, setSelectedTime] = useState<string>(time);

    const handleTimeClick = (time: string) => {
        const newTime = parseTime(selectedTime) + parseTime(time);
        const formattedTime = formatTime(newTime);
        setSelectedTime(formattedTime);

        const syntheticEvent = {
            target: { value: formattedTime } as HTMLInputElement
        } as React.ChangeEvent<HTMLInputElement>;
        handleTimeChange(syntheticEvent);
    };

    const handleClear = () => {
        setSelectedTime('');
        const syntheticEvent = {
            target: { value: '' } as HTMLInputElement
        } as React.ChangeEvent<HTMLInputElement>;
        handleTimeChange(syntheticEvent);
    };

    return (
        <div className="flex flex-col gap-[16px] bg-gray-100 rounded-lg p-[16px]">
            <label htmlFor="timeInput" className="font-normal leading-[18px] text-[14px]">
                The time (in minutes): <span className="text-redError">*</span>
            </label>
            <div className="flex gap-[8px] flex-wrap">
                {timeOptions.map(option => (
                    <button
                        key={option}
                        onClick={() => handleTimeClick(option)}
                        className={`py-[8px] px-[12px] border border-gray-300 rounded-md bg-orange hover:bg-customGray-30 focus:bg-customGray-30 text-whiteGray-0 transition-all`}
                    >
                        {option}
                    </button>
                ))}
                <button
                    onClick={handleClear}
                    className="py-[8px] px-[16px] bg-redError text-white rounded-md"
                >
                    Clear
                </button>
            </div>
            <Input
                name="time"
                value={selectedTime}
                placeholder="Select time"
                readOnly
                className="text-whiteGray-0 md:text-[16px] px-[14px] py-[8px] max-w-[324px] outline-none border border-orange transition-all"
                id="timeInput"
                type="text"

            />
            <div>
                <p className="font-normal leading-[18px] text-[14px]">
                    You burned Calories: <span className="text-orange">{calculateCalories().toFixed(2)}</span>
                </p>
            </div>

        </div>
    );
}