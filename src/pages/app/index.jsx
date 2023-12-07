import { useRoutes, BrowserRouter } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";


//? Pages
import Home from '../Inicio/index.jsx';
import Editores from '../Editores/index.jsx';
import Lectores from '../Lectores/index.jsx';
import Libros from '../Libros/index.jsx';

//? Errors - Page
import NotFound from '../../components/Error/NotFound.jsx';

//? Routes
const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/inicio', element: <Home /> },
        { path: '/editores', element: <Home /> },
        { path: '/lectores', element: <Home /> },
        { path: '/libros', element: <Home /> },
        { path: '/*', element: <Home/> }
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