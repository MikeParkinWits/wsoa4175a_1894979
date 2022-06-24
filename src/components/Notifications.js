import React, { Component } from "react";

import addNotification from "react-push-notification";

//Importing Helpers
import { NotificationList } from "../helpers/NotificationList.js";

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificanInformation: NotificationList,
    };
  }

  componentDidMount() {
    const { notificanInformation } = this.state;

    const num = [];

    let intervalDelay = Math.floor(Math.random() * (90000 - 50000 + 1) + 50000);

    NotificationList.map((notificationItem) => {
      num.push(notificationItem);
    });

    this.setState({ notificanInformation: num });

    let notificationContents =
      notificanInformation[
        Math.floor(Math.random() * notificanInformation.length)
      ];

    this.interval = setInterval(() => {
      notificationContents =
        notificanInformation[
          Math.floor(Math.random() * notificanInformation.length)
        ];

      intervalDelay = Math.floor(Math.random() * (90000 - 50000 + 1) + 50000);

      addNotification({
        title: notificationContents.cardTitle,
        message: notificationContents.cardSummary,
        theme: "black",
        native: Notification.permission === "denied" ? false : true,
        icon: notificationContents.image,
        duration: 30000,
        vibrate: 1,
      });
    }, intervalDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return null;
  }
}
