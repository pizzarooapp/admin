import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Admin, DataProvider, Loading, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura"
import { MenuList } from './modules/menu/components/menu-list/menu-list.component';

export const App = () => {
    const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);


    useEffect(() => {
        const buildDataProvider = async () => {
            const dataProvider = await buildHasuraProvider({
                clientOptions: {
                    uri: 'http://localhost:8080/v1/graphql'
                }
            })

            setDataProvider(dataProvider)
        }

        buildDataProvider()
    }, [])

    if (!dataProvider) {
        return (<Loading />)
    }

    return (
        <>
            <CssBaseline />
            <Admin dataProvider={dataProvider}>
                <Resource name='menu' list={MenuList} />
            </Admin>
        </>
    );
}

