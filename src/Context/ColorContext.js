import { createContext, useState } from 'react';

export const ColorContext = createContext();

const ColorProvider = ({children}) => {

    const [colors, setColors] = useState('#ffff');

    return (
        <ColorContext.Provider value={{colors, setColors}}>
        {children}
        </ColorContext.Provider>
    )
}

export default ColorProvider;