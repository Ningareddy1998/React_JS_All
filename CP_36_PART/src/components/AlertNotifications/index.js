// src/components/AlertNotifications/index.js
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alert-notifications-container">
        <h1 className="main-heading">Alert Notifications</h1>
        <Notification>
          <div className="sub-container">
            <div className="sub-1">
              <AiFillCheckCircle className="icon success-icon" />
              <h1 className="heading success-heading">Success</h1>
            </div>
            <p className="description">
              You can access all the files in the folder
            </p>
            <button type="button" className="close-button">
              <GrFormClose />
            </button>
          </div>
        </Notification>
        <Notification>
          <div className="sub-container">
            <div className="sub-1">
              <RiErrorWarningFill className="icon error-icon" />
              <h1 className="heading error-heading">Error</h1>
            </div>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
            <button type="button" className="close-button">
              <GrFormClose />
            </button>
          </div>
        </Notification>
        <Notification>
          <div className="sub-container">
            <div className="sub-1">
              <MdWarning className="icon warning-icon" />
              <h1 className="heading warning-heading">Warning</h1>
            </div>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
            <button type="button" className="close-button">
              <GrFormClose />
            </button>
          </div>
        </Notification>
        <Notification>
          <div className="sub-container">
            <div className="sub-1">
              <MdInfo className="icon info-icon" />
              <h1 className="heading info-heading">Info</h1>
            </div>
            <p className="description">
              Anyone on the internet can view these files
            </p>
            <button type="button" className="close-button">
              <GrFormClose />
            </button>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
