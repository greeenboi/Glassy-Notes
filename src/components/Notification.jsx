import React from 'react'
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

// async react functional export
export default async function Notification(title, message)  {
    let permissionGranted = await isPermissionGranted();
    
    const permission = await requestPermission();
    if (!permissionGranted) {
      permissionGranted = permission === 'granted';
    }
    
    if (permissionGranted) {
        sendNotification({
          title: title,
          body: message,
        });
        console.log(permissionGranted, "Done");
    }
    
    // send notification
}


