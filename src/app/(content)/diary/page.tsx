import { auth } from "@/auth";
import DiaryComponent from "@/components/diary/DiaryComponent";
import { DiaryService } from "@/services/DiaryService";
import { getDailyActivity } from "../../../../actions/daily";
import { getCurrentDate } from "@/utils/utils";
import { getInfoCardCurrenDay } from "../../../../actions/profile";



interface IDiary {
    searchParams: { date: string }
}


export default async function Diary({ searchParams }: IDiary) {
    const session = await auth()
    if (!session) return
    const dateParam = searchParams.date || getCurrentDate();
    console.log(getCurrentDate(), dateParam)
    const data = await getDailyActivity(dateParam)
    

    return (
        <DiaryComponent dateParam={dateParam} consumedProducts={data.consumedProducts} bloodProfile={data.bloodProfile} performedExercises={data.performedExercises} />);
}
