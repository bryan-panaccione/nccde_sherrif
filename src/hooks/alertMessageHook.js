import React, { useState, useEffect } from "react";

export default function useAlertStatus(messageData) {
  let [isAlert, setAlert] = useState(null);

  useEffect(() => {
    if (messageData.length > 0) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  });
  return isAlert;
}
//Set up Message Queue table in database, on click on bell icon, crud delete messages in queue. messages will stay in user mailbox table
//manual queue service
