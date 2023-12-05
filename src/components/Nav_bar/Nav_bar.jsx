import * as f_a_icons from 'react-icons/fa'
import { MdOutlineMailOutline } from "react-icons/md";
import IconoPersonalizado from './icons';

const Icons = () => {
    return (
        <div className="flex gap-5">
            <IconoPersonalizado colorFondo="bg-secundario" icono={<f_a_icons.FaRegBell />} colorTexto="text-secundario" />
            <IconoPersonalizado colorFondo="bg-primario" icono={<MdOutlineMailOutline />} colorTexto="text-primario" />
        </div>
    );
};