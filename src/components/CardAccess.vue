<script>
export default {
  props: {
    cardType: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      name: 'HomeView',
      passwordVisible: false,
      userIdentify: {
        id: '',
        name: '',
        email: '',
        pass: '',
      },
      direct: '',
      noUser: '',
      msgRegister: '',
    }
  },
  components: {},
  methods: {
    toggleVisiblePassword() {
      this.passwordVisible = !this.passwordVisible
    },
    toLogin() {
      let matchedUser
      if (this.cardType == 'login') {
        if (this.userIdentify.email == '' || this.userIdentify.pass == '') {
          this.noUser = 'Preencha todos os campos'
        } else {
          matchedUser = this.$store.state.users.find(
            (user) =>
              user.email === this.userIdentify.email && user.pass === this.userIdentify.pass,
          )
          if (matchedUser) {
            this.$store.commit('setLoggedUser', matchedUser)
            this.direct = '/access'
          } else {
            this.noUser = 'Usuario nao econtrado! (verifique usuario e senha)'
          }
        }
      }
    },
    toRegister() {
      const userCount = this.$store.state.users.length
      const localUser = { ...this.userIdentify }
      if (
        this.userIdentify.name != '' &&
        this.userIdentify.email != '' &&
        this.userIdentify.pass != '' &&
        this.$store.state.users.some((user) => user.email === this.userIdentify.email)
      ) {
        this.msgRegister = 'Email ja cadastrado'
      } else if (
        this.userIdentify.name == '' ||
        this.userIdentify.email == '' ||
        this.userIdentify.pass == ''
      ) {
        this.msgRegister = 'Todos os campos precisam ser preenchidos'
      } else if (!this.$store.state.users.some((user) => user.email === this.userIdentify.email)) {
        localUser.id = userCount
        this.$store.commit('addUser', localUser)
        this.msgRegister = 'Cadastro efetuado'
        console.log('cadastro feito' + this.msgRegister)
      }
    },
  },
}
</script>

<template>
  <div class="cardAcess">
    <h2>{{ this.cardType == 'login' ? 'Realize o seu login' : 'Faça seu cadastro' }}</h2>
    <div class="in">
      <div class="inputs">
        <input
          v-if="cardType === 'login'"
          type="text"
          placeholder="email"
          v-model="userIdentify.email"
        />
        <input
          v-if="cardType === 'register'"
          type="text"
          placeholder="nome"
          v-model="userIdentify.name"
        />
        <input
          v-if="cardType === 'register'"
          type="text"
          placeholder="email"
          v-model="userIdentify.email"
        />
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
      <router-link :to="direct">
        <button class="divLogin" @click="cardType === 'login' ? toLogin() : toRegister()">
          {{ cardType === 'login' ? 'Acessar' : 'Cadastrar' }}
        </button>
      </router-link>
    </div>
    <div>
      <pre>{{ $store.state.users }}</pre>
      <p>{{ this.cardType == 'register' ? msgRegister : noUser }}</p>
    </div>
  </div>
</template>

<style scoped>
.cardAcess {
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
