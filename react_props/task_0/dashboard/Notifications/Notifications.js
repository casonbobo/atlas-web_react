import React from "react";
import { getLatestNotification } from '../utils/utils.js';
import './Notifications.css';

function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button
                className="button"
                onClick={() => console.log("Close button has been clicked")}
                aria-label="Close">
                x
            </button>
        </div>
        );
    }

export default Notifications;
