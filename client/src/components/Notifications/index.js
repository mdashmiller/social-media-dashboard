import React from 'react'

import Loading from '../Loading'

import { notifications } from '../../store/fakeData'

const Notifications = () => {
  return (
    <section data-testid="notifications">
      <h2>Notifications</h2>
      {notifications.length ? (
        notifications.map(notification =>
          <div data-testid="notification" key={notification.uid}>
            <p data-testid="notification-content">{notification.content}</p>
            <p data-testid="notification-time">{notification.time}</p>
          </div>
        )
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default Notifications
