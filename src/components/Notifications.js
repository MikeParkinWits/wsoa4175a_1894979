import React, { Component } from "react";

import addNotification from "react-push-notification";
import GlobalContext from "../context/GlobalContext.js";

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
    const { notificationsbeforeDefault, decreaseNotificationsbeforeDefault } =
      this.context;

    const num = [];

    let intervalDelay = Math.floor(Math.random() * (60000 - 40000 + 1) + 40000);

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

      decreaseNotificationsbeforeDefault();

      intervalDelay = Math.floor(Math.random() * (60000 - 40000 + 1) + 40000);

      addNotification({
        title: notificationContents.cardTitle,
        message: notificationContents.cardSummary,
        theme: "black",
        native:
          Notification.permission === "denied" ||
          (notificationsbeforeDefault === 0 &&
            Notification.permission !== "granted")
            ? false
            : true,
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

Notifications.contextType = GlobalContext;
