"use client";
import { Card, CardContent, Checkbox, Typography } from "@mui/material";
import { FC, useState } from "react";

interface PropsTypes {
    description: string;
    index: number;
}

const ToDoCard: FC<PropsTypes> = ({ description, index }) => {

    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Card sx={{ my: 1, mt: index === 0 ? 2 : 1, padding: 0, width: "500px", maxWidth: "500px" }}>
            <CardContent sx={{
                display: "flex", alignItems: "center", padding: 1, "&:last-child": {
                    paddingBottom: 1,
                },
            }}>
                <Checkbox checked={checked} onChange={handleChange} />
                <Typography>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ToDoCard;