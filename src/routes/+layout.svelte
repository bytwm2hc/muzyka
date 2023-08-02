<script>
	import '../assets/css/main.css';
</script>

<svelte:head>
	<title>Muzyka</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap" />
</svelte:head>

<main>
<slot />
<iframe hidden id="wavpackWrapper" title="" />
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
