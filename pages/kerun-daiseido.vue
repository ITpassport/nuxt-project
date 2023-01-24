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
    <h1>ケルン大聖堂</h1>
    <div class="container mb-5">
    <h2>ケルン大聖堂の背景</h2>
    <img src="@/assets/kerun-daiseido.jpg" class="img-fluid" alt="kerun-daiseido">
    <p class="fs-4">1880年に完成した大聖堂はフランス式ゴシック様式のカトリック教会で、約632年の歳月をかけて建てられました。1164年にミラノから送られた東方三博士の聖遺骨を納めるのにふさわしい聖堂を建築したいと建てられ、ゴシック様式の建築物の中では世界最大級といわれています。ドームの高さはそんなには高くありませんが、大きく突き出た2本の塔には圧倒されます。

初代の大聖堂が作られたのは4世紀。最も古い聖堂として知られ正方形の建物でした。その後、建て替えがなされ、818年に完成しましたが、1248年4月30日の火災で焼失。大司教の命によって同年に現存する3代目の建設が始まりました。

1320年に内陣は完成しましたが、1559年からは、宗教革命による財政難により資金不足となり一時工事が中止されました。内陣が完成していたので献堂式が行われ、教会としての役目は果しています。建設中止後はストップと再建が何度も繰り返されました。

イギリスで再びゴシック建築の価値を見直そうとの動きが高まっている最中、フランスで大聖堂の建設経験のあるゲルハルトが1814年に設計した大聖堂の設計図が発見されました。ゴシック復活の波にのったことと、プロイセン政府からの援助もあり、1842年から工事が再開され無事完成しました。

近年ライン河沿いには高層ビルなどの建設が進み、ケルン市内にも高層ビルの建築計画がもち上がりました。景観が損なわれるとの理由で2004年に一旦「危機遺産リスト」に登録。景観破壊のための危機遺産リスト入りという異例の事態を打開し、2006年に解除されました。ドイツの象徴であるケルン大聖堂は、現在も世界遺産として堂々たる姿を見せています。
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