export function profileSidebar() {
	const profileSidebar = document.querySelector('.profile-sidebar')
	const sidebarMenu = document.querySelector('.profile-sidebar__icon-menu')
	sidebarMenu.addEventListener('click', toggleSidebar)

	function toggleSidebar() {
		profileSidebar.classList.toggle('profile-sidebar_active')
	}
}
