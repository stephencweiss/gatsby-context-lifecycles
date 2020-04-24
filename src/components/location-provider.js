import React, { useEffect, useState } from 'react'

export const LocationContext = React.createContext({})

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState({})
    useEffect(() => {
        const {location:windowLocation} = window
        console.log(`within context provider`,{path: windowLocation.pathname})
        setLocation(windowLocation)
    }, [])

    LocationContext.location = location
    console.log({LocationContext})
    return (
        <LocationContext.Provider value={LocationContext}>
            {children}
        </LocationContext.Provider>
    )
}
