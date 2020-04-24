import React, { useEffect, useState } from 'react'

export const LocationContext = React.createContext({})

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState({})
    useEffect(() => {
        const {location:windowLocation} = window
        console.log(`within context provider`,{path: windowLocation.pathname})
        setLocation(windowLocation)
    }, [])

    return (
        <LocationContext.Provider value={location}>
            {children}
        </LocationContext.Provider>
    )
}
