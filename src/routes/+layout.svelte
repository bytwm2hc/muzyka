<script>
	import '../assets/css/main.css';
</script>

<svelte:head>
	<title>Muzyka</title>
	<link rel="preconnect" href="https://cdn.bytwm2hc.boo/" crossorigin="anonymous" />
	<link rel="preconnect" href="https://onedrive-cf-index-ng-cro.pages.dev" crossorigin="anonymous" />
	<link rel="preconnect" href="https://onedrive-cf-index-ng-5fb.pages.dev" crossorigin="anonymous" />
	<link rel="preconnect" href="https://emocdn-my.sharepoint.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://oodk-my.sharepoint.com" crossorigin="anonymous" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro/css/all.css" />
</svelte:head>

<main>
<slot />
</main>

<style>
	main {
		max-width: 800px;
		margin: auto;
		padding: 1rem;
	}
	
	@media (min-width: 768px) {
		main {
			padding: 0;
		}
	}
</style>
