import ToDoCard from "@/components/ToDoCard/ToDoCard";
import styles from "./page.module.scss";
import { Box } from "@mui/material";

const mockData = ["Regar las plantas", "Jugar partida de Ajedrez", "Hacer ejercicio"];

export default function MyList() {
    return (
        <main className={styles.main}>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
                {mockData.map((data, index) => {
                    return <ToDoCard description={data} index={index} />;
                })}
            </Box>
        </main>
    );
}
