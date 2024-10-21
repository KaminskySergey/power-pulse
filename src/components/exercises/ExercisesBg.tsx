import Image from "next/image";





export function ExercisesBg() {
   
    return <div className="sm:hidden md:hidden lg:block absolute top-0 right-0 h-[100%] w-[430px]">
        <Image alt="bg-people-training-gym-desktop" src={'/bg/exercises-side-view-people-training-gym.png'} fill/>
    </div>
}
