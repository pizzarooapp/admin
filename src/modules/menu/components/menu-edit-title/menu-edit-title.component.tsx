import { Menu } from "@app/core/types";
import { useRecordContext } from "react-admin"

export const MenuEditTitle = () => {
    const menuItem = useRecordContext<Menu>();

    return (
        <div>{menuItem ? menuItem.title : null}</div>
    )
}