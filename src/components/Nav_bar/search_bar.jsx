import * as f_a_icons from 'react-icons/fa'

const Search_bar = () => {
    return (
        <>
            <div className="w-full h-14 bg-white-100 p-2 ">
                <div className="w-full h-10 flex py-1  justify-center">
                    <f_a_icons.FaSearch className='m-2'></f_a_icons.FaSearch>
                    <input 
                        type="text" 
                        placeholder="Buscar por libros, personas ó articulos"
                        className='rounded-lg w-full p-2 bg-white-100 border-none border-spacing-0'
                    />
                </div>
            </div>
        </>
    )
};

export default Search_bar;