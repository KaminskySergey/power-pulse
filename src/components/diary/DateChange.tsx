'use client'

import { useState } from "react"
import Ttag from "../ui/title/Ttag"
import CalendarIcon from "../svg/CalendarIcon"

import DateChangeArrowBtn from "./DateChangeArrowBtn"

interface IDateChange {
    dateParam: string
 }

export default function DateChange({dateParam }: IDateChange) {
    const [currentDate, setCurrentDate] = useState(dateParam)
    
    return <div className="flex gap-[20px]">
        <div className="flex items-center gap-[8px]">
            <div>
                <Ttag tag="h3">{currentDate}</Ttag>
            </div>
            <div className="relative">
                <div className=''>
                    <CalendarIcon isOrange />
                </div>
            </div>


        </div>
        <div className="flex items-center gap-[6px]">
            <DateChangeArrowBtn currentDate={currentDate} setCurrentDate={setCurrentDate}/>
        </div>
    </div>
}
