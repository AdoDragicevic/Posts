import { createContext } from "react";

import useTemporaryState from "../hooks/useTemporaryState";


export const NotificationContext = createContext();

export const SetNotificationContext = createContext();

export function NotificationProvider({ children }) {

  const [notification, setNotification] = useTemporaryState(false, 3000);

  return (
    <NotificationContext.Provider value={notification}>
      <SetNotificationContext.Provider value={setNotification}>
        {children}
      </SetNotificationContext.Provider>
    </NotificationContext.Provider>
  )
};

