<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">world heritage</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/ta-zimaharu">タージマハル</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/free-megami">自由の女神</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/kerun-daiseido">ケルン大聖堂</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/batikansikoku" tabindex="-1" aria-disabled="true">バチカン市国</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    <div class="container text-center my-5">
    <h1>世界遺産</h1>
    <div class="container mb-5">
      <h2>世界のいろいろな遺産を紹介していきます。</h2>
    

    <div class="card mb-3 mx-auto">
 <h4>タージ・マハル</h4>
    </div>
    <img src="@/assets/ta-zimaharu.jpg" class="img-fluid">
    <NuxtLink to="/ta-zimaharu">タージマハルの魅力をご紹介</NuxtLink>

    <div class="card mb-3 mx-auto">
   <h4>自由の女神</h4>
   </div>
   <img src="@/assets/free-megami.webp" class="img-fluid">
    <NuxtLink to="/free-megami">自由の女神の魅力をご紹介</NuxtLink>


   <div class="card mb-3 mx-auto">
   <h4>ケルン大聖堂</h4>
   </div>
   <img src="@/assets/kerun-daiseido.jpg" class="img-fluid">
     <NuxtLink to="/kerun-daiseido">ケルン大聖堂の魅力をご紹介</NuxtLink>

     <div class="card mb-3 mx-auto">
     <h4>バチカン市国</h4>
     </div>
     <img src="@/assets/vatican_3.jpg" class="img-fluid">
     <NuxtLink to="/batikansikoku">バチカン市国の魅力を紹介します</NuxtLink>


     <footer></footer>
   </div>
  </div>
</template>



<style>
</style>
