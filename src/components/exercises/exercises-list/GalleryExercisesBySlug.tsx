'use client'
import { IExercise } from "@/types/exercise";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ExercisesList } from "./ExercisesList";
import { ExercisesItem } from "./ExercisesItem";
import { NotExercises } from "./NotExercises";
import { getExercisesBySlug } from "../../../../actions/exercises";

interface IGalleryExercisesBySlug {
    exercises: IExercise[],
    queryName: string,
    paramSlug: string
}

export function GalleryExercisesBySlug({
    exercises,
    queryName,
    paramSlug

}: IGalleryExercisesBySlug) {
    console.log(paramSlug)
    const { ref, inView } = useInView();
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState<IExercise[]>(exercises);

    const loadMoriExercises = async () => {
        if (!hasMore) return;

        const nextPage = page + 1;
        const apiExercises = await getExercisesBySlug(nextPage, queryName, paramSlug);
        if (apiExercises.exercises.length === 0) {
            setHasMore(false);
        } else {
            setItems(prevItems => [...prevItems, ...apiExercises.exercises]);
            setPage(nextPage);
        }
    };

    useEffect(() => {
        if (inView && hasMore) {
            loadMoriExercises();
        }
    }, [inView, hasMore]);

    useEffect(() => {
        const resetAndLoad = async () => {
            setPage(1);
            setHasMore(true);
            const apiExercises = await getExercisesBySlug(1, queryName, paramSlug);
            setItems(apiExercises.exercises);

            if (apiExercises.exercises.length === 0) {
                setHasMore(false);
            }
        };

        resetAndLoad();
    }, []);
    return (
        <>
            {items.length === 0 ? <NotExercises /> :
                <div className="md:flex flex-col items-center lg:block">
                    <ExercisesList listRef={ref} hasMore={hasMore}>
                        {items.map((el) => (
                            <ExercisesItem key={el.id} item={el} />
                        ))}
                    </ExercisesList>
                </div>
            }

        </>
    );
}