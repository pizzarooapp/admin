import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';
import { MenuEditTitle } from '../menu-edit-title/menu-edit-title.component';

export const MenuEdit = () => (
    <Edit title={<MenuEditTitle />}>
        <SimpleForm>
            {/* <TextInput source="id" disabled label="Ідентифікатор" />  */}
            <TextInput source="title" label="Назва" fullWidth />
            <TextInput source="image" label="Зображення" fullWidth />
            <TextInput source="ingredients" label="Склад" fullWidth />
            <NumberInput source="price" label="Ціна" />
            <NumberInput source="weight" label="Вага" />
        </SimpleForm>
    </Edit>
);