import { Class } from "@/types";
import { ClassCard } from "./classCard";
export const ClassView = () => {
    const classes: Class[] = [
        {
            name: "Advanced techniques in human computer interaction",
            key: "cs356",
            courseNumber: 'CS356',
            type: 'Major core',
            semesters: ['F'],
            creditHours: 3,
        },
    ]

    return (
        <div style={{maxWidth: "25%"}}>
            {classes.map((c) => (
                <ClassCard classItem={c} />
            ))}
        </div>
    )
}
