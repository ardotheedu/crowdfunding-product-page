import { createContext, useState, ReactNode, useEffect } from 'react'
import  Modal  from '../components/Modal'

export const ModalContext = createContext({} as ModalContextData)

interface ModalContextData {
    closeBackModal: () => void,
    openBackModal: () => void,
}

interface ModalProviderProps {
    children: ReactNode;
}

export function ModalProvider({children}: ModalProviderProps) {

    const [isBackModalOpen, setIsBackModalOpen] = useState(false)

    function openBackModal() {
        setIsBackModalOpen(true)
    }

    function closeBackModal() {
        setIsBackModalOpen(false)
    }

    
    return (
        <ModalContext.Provider 
            value={{
                openBackModal,
                closeBackModal,
            }}
        >
            {children}
            {isBackModalOpen && <Modal />}
        </ModalContext.Provider>
    )
}