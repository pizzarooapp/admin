import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuCreate = () => (
    <Create title="Додати нову піцу">
        <SimpleForm> 
            <TextInput source="title" label="Назва" fullWidth/>
            <TextInput source="image" label="Зображення" fullWidth  />
            <TextInput source="ingredients" label="Склад" fullWidth/>
            <NumberInput source="price" label="Ціна" />
            <NumberInput source="weight" label="Вага" />
        </SimpleForm>
    </Create>
);