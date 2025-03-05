<script>
export default {
  data() {
    return {
      newUser: {
        name: '',
        email: '',
        password: '',
      },
      msgRegister: '',
    }
  },
  methods: {
    toggleVisiblePassword() {
      this.passwordVisible = !this.passwordVisible
    },
    toRegister() {
      if (this.newUser.email == this.$store.state.user.email) {
        this.msgRegister = 'Email ja cadastrado'
      } else {
        this.$store.commit('alterUser', this.newUser)
        this.msgRegister = 'Cadastro efetuado'
      }
    },
  },
}
</script>

<template>
  <div>
    <h2>Faça seu cadastro abaixo!</h2>
    <div class="in">
      <div class="inputs">
        <input type="text" placeholder="nome" v-model="newUser.name" />
        <input type="text" placeholder="email" v-model="newUser.email" />
        <span>
          <input
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="senha"
            v-model="newUser.password"
          />
          <button @click="toggleVisiblePassword" class="eye">
            {{ passwordVisible ? 'Ocultar' : 'Exibir' }}
          </button>
        </span>
      </div>
      <router-link :to="direct"
        ><button class="register" @click="toRegister">Cadastrar</button></router-link
      >
    </div>
    <div>
      <p>{{ msgRegister }}</p>
    </div>
  </div>
</template>

<style>
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
