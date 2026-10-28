importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAZ7twf8SbcK-HqniDmVqT6k8IM3ehFtgc",
  databaseURL: "https://trackcust-jtm-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trackcust-jtm",
  messagingSenderId: "411585432172"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Menerima pesan background: ', payload);
  
  const notificationTitle = payload.notification.title || 'Notifikasi Baru';
  const notificationOptions = {
    body: payload.notification.body || 'Anda mendapat pesan baru',
    icon: '/favicon.ico', 
    badge: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
