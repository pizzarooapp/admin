import { Menu } from "@app/core/types";
import { Typography } from "@mui/material";
import { useRecordContext } from "react-admin"

export const MenuListExpand = () => {
    const menuItem = useRecordContext<Menu>();

    return (
        <div>
            <Typography variant="subtitle2">Інгрідієнти:</Typography>
            <Typography variant="body2">{menuItem.ingredients}</Typography>
        </div>
    )
}