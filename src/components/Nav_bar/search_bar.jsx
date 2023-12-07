import * as f_a_icons from 'react-icons/fa'

const Search_bar = () => {
    return (
        <>
            <div className="w-full h-10 bg-gray-100 p-2 flex items-center rounded-lg ml-5">
                <div className="w-full h-5 flex items-center  justify-center">
                    <f_a_icons.FaSearch className='m-2 text-gray-400'></f_a_icons.FaSearch>
                    <input 
                        type="text" 
                        placeholder="Buscar por libros, personas ó articulos"
                        className='rounded-lg w-full p-2 bg-gray-100'
                    />
                </div>
            </div>
        </>
    )
};

export default Search_bar;