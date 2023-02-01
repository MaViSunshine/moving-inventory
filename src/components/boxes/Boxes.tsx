import { BoxForm } from './BoxForm'
import { BoxTable } from './BoxTable'
import { BoxesProvider } from '../../context/boxes/ContextBox'
import { Notifications } from '../Notifications'
import { NotificationsProvider } from '../../context/notifications/ContextNotifications'
import { ContextBoxesFormProvider } from '../../context/boxes/ContextBoxForm'
import { useEffect } from 'react'
import { Box } from '../../utilities/types/Box'


function Boxes() {
  return (
    <NotificationsProvider>
    <BoxesProvider>
      <ContextBoxesFormProvider>
        <div className="container my-6r">
          <Notifications/>
          <div className="columns is-justify-content-center">
            <div className="column mx-3">
              <BoxForm/>
            </div>
          </div>
          <div className="columns is-justify-content-center">
            <div className="column mx-3">
              <BoxTable/>
            </div>
          </div>
        </div>
      </ContextBoxesFormProvider>
    </BoxesProvider>
  </NotificationsProvider>
  )
}

export default Boxes
