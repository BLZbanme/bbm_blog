<template>
  <div class="user-div">
    <img id="pic" src="../assets/icon.png">
    <div class="info-div">
      <p id="name"><span>Blzbanme</span></p>
      <p id="email"><span>uestc_dj@163.com</span></p>
      <p id="github"><a-icon @click="toMyGithub()" type="github"></a-icon></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toMyGithub() {
      window.open(`https://github.com/BLZbanme`);
    }
  }
}
</script>

<style>
.user-div {
  background-color:beige;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.info-div {
  align-items: center;
}

.info-div p{
  margin-bottom: .5em;
  text-align:center;
}

#pic {
  border-radius:50%;
  width: 80px;
  height: 80px;
  background-color: #FFFFFF;
}
</style>