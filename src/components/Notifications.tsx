import { useNotificationsContext } from '../context/notifications/ContextNotifications'

export const Notifications = () => {
    const { notifications, cleanNotifications } = useNotificationsContext()

    return (
        <div>
            {notifications.map(item => (
                <article key={item.body} className="message is-warning">
                    <div className="message-header">
                        <p>{item.title}</p>
                        <button onClick={cleanNotifications} className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                        {item.body}
                    </div>
                </article>
            ))}
        </div>
    )
}