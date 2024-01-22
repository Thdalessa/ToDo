import { Avatar, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
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
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>

                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideMenu;