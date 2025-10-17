import { Class } from "@/types";
import { Select, SelectItem } from "@heroui/select";
export const ClassView = () => {
    const classes: Class[] = [
        {
            name: "cs356",
            key: "cs356"
        },
        {
            name: "cs404",
            key: "cs404"
        }
    ]

    return (
        <div style={{maxWidth: "25%"}}>
            <Select fullWidth={false}>
                {classes.map((c) => (
                    <SelectItem key={c.key}>{c.name}</SelectItem>
                ))}
            </Select>
        </div>
    )
}
