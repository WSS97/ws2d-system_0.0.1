<script>
export default {
  data() {
    return {
      name: 'HomeView',
      passwordVisible: false,
      userIdentify: {
        name_email: '',
        pass: '',
      },
      direct: '',
      noUser: false,
      page_registe: false,
    }
  },
  components: {},
  methods: {
    toggleVisiblePassword() {
      this.passwordVisible = !this.passwordVisible
    },
    login() {
      if (this.userIdentify.name_email == '' || this.userIdentify.pass == '') {
        this.noUser = true
      } else if (
        (this.userIdentify.name_email == this.$store.state.user.name) &
          (this.userIdentify.pass == this.$store.state.user.password) ||
        (this.userIdentify.name_email == this.$store.state.user.email) &
          (this.userIdentify.pass == this.$store.state.user.password)
      ) {
        this.direct = '/access'
      } else {
        this.noUser = true
      }
    },
  },
}
</script>

<template>
  <div class="home">
    <h2>Realize o seu login</h2>
    <div class="in">
      <div class="inputs">
        <input type="text" placeholder="nome ou email" v-model="userIdentify.name_email" />
        <span>
          <input
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="senha"
            v-model="userIdentify.pass"
          />
          <button @click="toggleVisiblePassword" class="eye">
            {{ passwordVisible ? 'Ocultar' : 'Exibir' }}
          </button>
        </span>
      </div>
      <router-link :to="direct"
        ><button class="divLogin" @click="login">Acessar</button></router-link
      >
    </div>
    <div>
      <p v-if="noUser">usuario nao localizado</p>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  align-items: center;
}

h2 {
  text-align: center;
}

.in {
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  min-height: 100px;
  background-color: rgba(44, 62, 80, 0.7);
  border-radius: 20px;
}
.inputs {
  margin: 0 auto;
  padding: 0 auto;
}
input {
  padding: 3px;
  margin: 2px 0 2px 0;
  height: 1.5em;
  width: 98%;
  border: none;
  border-radius: 5px;
  outline: none;
}
.divLogin {
  background-color: #4dc790;
  width: 100%;
  height: 2em;
  border: none;
  border-radius: 10px;
  font-weight: 600;
}
.divLogin:hover {
  color: antiquewhite;
  transform: scale(101%);
  transition: ease-in-out 0.2s;
  background-color: #5acfb2;
  cursor: pointer;
}
.eye {
  width: 120px;
}
span {
  display: flex;
  flex-direction: row;
  width: 98%;
  margin: 0 auto;
  gap: 2px;
}
button {
  margin: 2px 0px 0px 0px;
  height: 100%;
  border: none;
  border-radius: 5px;
}
</style>
