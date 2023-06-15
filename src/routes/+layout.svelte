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
</main>

<style>
	main {
		padding: 0;
		max-width: 812.796875px;
		margin: 0 auto;
	}
</style>
