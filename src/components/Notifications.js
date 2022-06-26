import React, { Component } from "react";

//External Component Imports
import addNotification from "react-push-notification"; //External package used for native, and in-broswer, notification - Documentation can be found here => https://www.npmjs.com/package/react-push-notification

//Context Imports
import GlobalContext from "../context/GlobalContext.js";

//Importing Helpers
import { NotificationList } from "../helpers/NotificationList.js";

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificanInformation: NotificationList,
    };

    this.displayNotifications = this.displayNotifications.bind(this);

    this.loadNotificationInformation =
      this.loadNotificationInformation.bind(this);
  }

  componentDidMount() {
    this.displayNotifications();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //Function that loads, and stores, notification data from NotificationList.js json
  loadNotificationInformation() {
    let notificationInfo = [];

    NotificationList.map((notificationItem) => {
      notificationInfo.push(notificationItem);
    });

    this.setState({ notificanInformation: notificationInfo });
  }

  //Function that recursively loads notifications, at an interval, while on blog pages on component load
  displayNotifications() {
    const { notificanInformation } = this.state;
    const { notificationsbeforeDefault, decreaseNotificationsbeforeDefault } =
      this.context;

    let intervalDelay = Math.floor(Math.random() * (60000 - 40000 + 1) + 40000);

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

  render() {
    return null;
  }
}

Notifications.contextType = GlobalContext;
