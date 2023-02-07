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
        <NuxtLink class="nav-link" href="/">ホームに戻る</NuxtLink>
        </li>
    </ul>
    </div>
</div>
</nav>
    <div class="container text-center my-5">
        <h1>自由の女神</h1>
        <div class="container mb-5">
        <h2>アメリカの象徴「自由の女神像」</h2>
        <img src="@/assets/free-megami.webp" class="img-fluid" alt="ziyuu-megami">
        <p class="fs-4">自由の女神像は、アメリカ独立100周年を記念しフランス人のエドワール・ド・ラブライエが建設を提案し、寄付を募集しました。設計にはフレデリク・バルトルディとギュスターヴ・エッフェルが関わりました。

女神像はローマ神話の自由の女神リーベルタースをモチーフにしていますが、その顔のモデルはドラクロワの「民衆を導く自由の女神」とバルトルディの母親です。

作成はフランスで行われ、300のパーツに解体し、アメリカまで運ばれました。

そして、1886年10月28日に除幕式が行われました。除幕はバルトルディが行い、クリーブランド米大統領など多くの人々が集まりました。
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
