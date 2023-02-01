import { useContext, useState, createContext } from 'react'
import { Children } from '../../utilities/types/Children'
import { NotificationBody, Notifications } from '../../utilities/types/Notifications'


type NotificationsContextType = {
    notifications: Notifications
    addNofitication: ({ title, body }: NotificationBody) => void
    cleanNotifications: () => void
}

const NotificationsContext = createContext({} as NotificationsContextType)

export const useNotificationsContext = () => useContext(NotificationsContext)

export const NotificationsProvider = ({ children }: Children) => {
    const [notifications, setNotifications] = useState([] as Notifications)

    function addNofitication(notification: NotificationBody) {
        setNotifications([...notifications, notification])
        setTimeout(() => cleanNotifications(), 4500)
    }

    function cleanNotifications() {
        setNotifications([])
    }

    return (
        <NotificationsContext.Provider value={{
            notifications, addNofitication, cleanNotifications
        }}>
            {children}
        </NotificationsContext.Provider>
    )
}