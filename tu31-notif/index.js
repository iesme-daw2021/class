const aElement = document.getElementById('notif');

function checkPermsion() {
  if (window.Notification) {
    Notification.requestPermission().then(() => {
      handlePermission();
    });
  }
}

function handlePermission() {
  if (
    Notification.permission === 'denied' ||
    Notification.permission === 'default'
  ) {
    aElement.style.display = 'block';
  } else {
    const notification = new Notification('Titul', {
      body: 'comentari de la notification',
    });
    document.addEventListener('visibilitychange', (event) => {
      if (document.visibilityState === 'visible') {
        notification.close();
      }
    });
  }
}

checkPermsion();
