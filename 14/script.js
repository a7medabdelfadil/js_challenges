function toggleSidebar() {
    var sidebar = document.getElementById('sidebar'),
        toggleSidebarBtn = document.getElementById('toggleSidebarBtn');

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'
        toggleSidebarBtn.textContent = 'Open'
    } else {
        sidebar.style.left = '0px'
        toggleSidebarBtn.textContent = 'Close'
    }
}