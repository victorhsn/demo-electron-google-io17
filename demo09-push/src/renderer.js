const btnNotify = document.getElementById('btnNotify');

const notification = {
    title: 'Google',
    body: 'Google I/O Extended Cuiabá 2017'
}


btnNotify.addEventListener('click', () => {

    let myNotify = new window.Notification(notification.title, notification);



})


