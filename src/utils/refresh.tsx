// RefreshContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RefreshContextProps {
    refreshApp: () => void;
}

const RefreshContext = createContext<RefreshContextProps | undefined>(undefined);

export const RefreshProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [refreshKey, setRefreshKey] = useState(0);

    const refreshApp = () => {
        setRefreshKey(prevKey => prevKey + 1);
    };

    return (
        <RefreshContext.Provider value={{ refreshApp }}>
            {children}
        </RefreshContext.Provider>
    );
};

export const useRefresh = () => {
    const context = useContext(RefreshContext);
    if (!context) {
        throw new Error('useRefresh must be used within a RefreshProvider');
    }
    return context.refreshApp;
};
