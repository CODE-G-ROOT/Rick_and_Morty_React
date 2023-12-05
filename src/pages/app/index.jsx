import { useRoutes, BrowserRouter } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";

import Home from '../Inicio/index.jsx';

//Errors
import NotFound from '../../components/Error/NotFound.jsx';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/inicio', element: <Home /> },
        { path: '/*', element: <NotFound /> }

    ]);

    return routes;
};

const App = () => {
    return (
        <BrowserRouter>
            <NextUIProvider>
                <AppRoutes />
            </NextUIProvider>
        </BrowserRouter>
    );
};

export default App;