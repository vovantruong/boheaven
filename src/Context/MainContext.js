import {createContext} from 'react'
import {useMediaQuery} from 'react-responsive'

const MediaQueryContext = createContext();

function MainProvider ({children}) {

    const isMobile = useMediaQuery({query: `(max-width: 739px)`});

    return(
        <MediaQueryContext.Provider value={isMobile}>
            {children}
        </MediaQueryContext.Provider>
    )
}

export {MediaQueryContext,MainProvider} ;