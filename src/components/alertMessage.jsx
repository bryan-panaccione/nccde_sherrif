import React, { useState, useEffect } from "react";
import { faCoffee, faBell, faB } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAlertStatus from "../hooks/alertMessageHook";

export default function AlertStatus(props) {
  const isAlert = useAlertStatus(props.messageData);
  return isAlert ? (
    <FontAwesomeIcon icon={faBell} />
  ) : (
    <FontAwesomeIcon icon={faCoffee} />
  );
}
