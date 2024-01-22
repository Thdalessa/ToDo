import { Avatar, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

interface PropsTypes {
    openMenu: boolean;
    setOpenMenu: (value: boolean) => void;
}

const SideMenu: FC<PropsTypes> = ({ openMenu, setOpenMenu }) => {

    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <Drawer
            anchor={"left"}
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            sx={{ backgroundColor: "transparent" }}
            PaperProps={{ sx: {} }}
        >
            <Box
                sx={{ width: isMobile ? 250 : 400 }}
                role="presentation"
            >
                <Avatar sx={{ width: 200, height: 200, marginX: "auto", marginTop: 1 }} />
                <List>
                    {[{ title: "My List", link: "/my-list" }].map((item, index) => (
                        <Link href={item.link}>
                            <ListItem key={item.title} disablePadding >
                                <ListItemButton>
                                    {/* <ListItemIcon>

                                </ListItemIcon> */}
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideMenu;