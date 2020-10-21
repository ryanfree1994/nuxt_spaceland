<template>
<div id="app">
  <div class="TheHeader">

    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet">
    </head>
    <div id="nav">
      <div class="main">
        <!--shooting stars when nav element is hovered-->
        <div class="main__shootingstar" id="starshooter1"></div>
        <div class="main__shootingstar" id="starshooter2"></div>
        <div class="main__shootingstar" id="starshooter3"></div>
        <!--twinkling stars background in header area-->
        <div class="main__star-0 main__stars"></div>
        <div class="main__star-1 main__stars"></div>
        <div class="main__star-2 main__stars"></div>
        <div class="main__star-3 main__stars"></div>
        <div class="main__star-4 main__stars"></div>
        <div class="main__star-5 main__stars"></div>
        <div class="main__star-6 main__stars"></div>
        <div class="main__star-7 main__stars"></div>
        <div class="main__star-8 main__stars"></div>
        <div class="main__star-9 main__stars"></div>
      </div>
      <div class="text-center d-sm-none">
        <h1 class="display-5">SPACELAND</h1>
      </div>
    </div>
    <!--nav bar with site name: non-mobile-->
    <!--responsive navbar that navigates across all four pages-->
    <h1 class="display-3 list-inline-item nav__spacelandtitle d-none d-md-block text-center">SPACELAND</h1>
    <nav class="nav navbar navbar-expand-lg">
        <nuxt-link to="/" tag="li" class="nav-item active nav__li list-inline-item nav-link nav__link">Home</nuxt-link>
        <nuxt-link to="/attractions" tag="li" class="nav-item active nav__li list-inline-item nav-link nav__link">Attractions</nuxt-link>
        <nuxt-link to="/about" tag="li" class="nav-item active nav__li list-inline-item nav-link nav__link">About</nuxt-link>
        <nuxt-link to="/contact" tag="li" class="nav-item active nav__li list-inline-item nav-link nav__link">Contact</nuxt-link>
    </nav>
  </div>
  <Nuxt />
  <div class="TheFooter">
    <footer class="main__footer p-3 d-flex flex-wrap justify-content-center align-items-center">
      <p>SPACELAND &copy; 2020</p>
    </footer>
  </div>
</div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>

</style>
