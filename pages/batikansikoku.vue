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
        <NuxtLink class="nav-link active" aria-current="page" href="/ta-zimaharu">タージマハル</NuxtLink>
        </li>
        <li class="nav-item">
        <NuxtLink class="nav-link" href="/free-megami">自由の女神</NuxtLink>
        </li>
        <li class="nav-item">
        <NuxtLink class="nav-link" href="/kerun-daiseido">ケルン大聖堂</NuxtLink>
        </li>
        <li class="nav-item">
        <NuxtLink class="nav-link" href="/batikansikoku" tabindex="-1" aria-disabled="true">バチカン市国</NuxtLink>
        </li>
        <li class="nav-item">
        <NuxtLink class="nav-link" href="/index">ホームに戻る</NuxtLink>
        </li>
    </ul>
    </div>
</div>
</nav>

    <div class="container text-center my-5">
        <h1>バチカン市国</h1>
    
        <div class="container mb-5">
        <img src="@/assets/vatican_3.jpg" class="img-fluid" alt="batikansikoku">
        <p class="fs-3">バチカン市国はイタリアのローマにある世界最小の独立国で国自体が世界遺産に登録されています。
            また、全世界に約10億人の信者を持つカトリックの総本山でもあります。
16～17世紀にミケランジェロなどの設計により再建された
サン・ピエトロ大聖堂、バチカン宮殿などがあり、
宗教的にだけではなく、
芸術的にも価値のある場所です
    </p>
        </div>
          <a @click="onClickButton">ホームに戻る</a>
        </div>
    </template>

<script>
export default {
methods: {
    onClickButton(){
    this.$router.push('/');
    }
}
}
</script>