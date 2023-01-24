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
    <h1>タージマハル</h1>

    <div class="container mb-5">
    <h2>タージ・マハルの建設とその後</h2>
    <img src="@/assets/ta-zimaharu.jpg" class="img-fluid" alt="ta-zimaharu">
    <p class="fs-4">ムガル帝国第5代皇帝シャー・ジャハーンは、妃のムムターズ・マハルを心から深く愛していました。戦場にまで伴うほどでしたが、1631年、ムムターズは第14子を出産した際に亡くなってしまいます。皇帝の悲しみは深く、最愛の妃を弔うために、最も美しい墓廟を建てることを決めたのでした。

こうして、1632年にタージ・マハルの建設に着工します。皇帝は常時2万人の労働力を投入し、22年の歳月をかけて、ついに1653年にこれを完成させました。

完璧な対称性を誇るその優美な姿は、「宮殿の光」「宮殿の選ばれし者」という意味の名を持っていたムムターズ・マハルにふさわしいものでした。

皇帝シャー・ジャハーンは、タージ・マハルの対岸に黒大理石の自身の廟を造るつもりでしたが、それが叶うことはありませんでした。タージ・マハルの建設により財政が逼迫したことに加え、皇子たちの後継者争いも勃発したのです。国庫を空にしてしまった皇帝は、三男（後のアウラングゼーブ帝）によってアーグラ城へ幽閉されてしまいました。
以後、皇帝は窓からタージ・マハルを眺め、愛する妃のことを思いながら生を終えたのです。
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

