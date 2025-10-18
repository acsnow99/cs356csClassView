import { Class } from "@/types"
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

export const ClassCard = ({ classItem }: { classItem: Class }) => {
    return (
        <Card>
            <CardHeader>
                <p>
                    {classItem.name}
                </p>
            </CardHeader>
            <CardBody>
                <p>
                    {classItem.courseNumber}
                </p>
            </CardBody>
        </Card>
    )
}
