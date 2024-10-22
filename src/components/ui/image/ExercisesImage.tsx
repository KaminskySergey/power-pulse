import Image from "next/image";
import styles from './exercises-image.module.css'


export function ExercisesImage() {
    return (
        <picture className={styles.picture}>
            <source media="(max-width: 768px)" srcSet="/bg/people-training-gym.png" />
            <source media="(max-width: 1200px)" srcSet="/bg/people-training-gym-tablet.png" />
            <Image
                src="/bg/people-training-gym-desktop.png"
                alt="Descriptive text for the image"
                layout="responsive"
                className={styles.image}
                width={237}
                height={206}
            />
        </picture>
    );
}
