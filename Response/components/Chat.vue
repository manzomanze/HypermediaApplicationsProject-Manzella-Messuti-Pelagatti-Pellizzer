<template>
  <div class="chat">
    <div v-if="isOpen" class="chat-container">
      <div id="chat-window" ref="chatwindow" class="chat-window">
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="message"
          :class="{ sender: message.sender }"
        >
          <div class="message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
      </div>
      <input
        v-model="messageToSend"
        type="text"
        @keypress.enter="sendMessage"
      />
    </div>
    <div class="button" @click="isOpen = !isOpen">
      <img src="/img/chat2.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: false,
    }
  },
  methods: {
    sendMessage() {
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend,
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''
      setTimeout(this.updateScroll, 50)
    },
    updateScroll() {
      this.$refs.chatwindow.scrollTop = this.$refs.chatwindow.scrollHeight
    },
  },
}
</script>

<style scoped>
.button {
  height: 60px;
  width: 60px;
  /* border: 1px solid; */
  /* border-color: var(--main_color); */
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.514);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.514);
  padding: 10px;
  float: right;
  position: fixed;
  bottom: 10px;
  right: 5px;
}

.button img {
  width: 100%;
}

.chat-container {
  border: 1px solid;
  border-color: black;
  border-radius: 4px;
  height: 500px;
  width: 300px;
  position: fixed;
  bottom: 80px;
  right: 5px;
  border-radius: 10px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.514);
}

.chat-window {
  overflow-y: auto;
  height: calc(100% - 34px);
  background-color: rgba(255, 255, 255, 0.514);
  border-radius: 10px;
  border-bottom-left-radius: 0px;
}

.chat-window * {
  overflow-anchor: none;
}

.message {
  width: calc(100% - 8px);
  display: flex;
  justify-content: flex-end;
}

.message.sender {
  justify-content: flex-start;
}

.message-content {
  padding: 5px 10px;
  margin: 4px;
  width: auto;
  background: #ffffff;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
}

.message-content.sender {
  background: hsla(202, 100%, 50%, 0.8);
  color: black;
  border: 1px solid black;
}

input {
  width: 100%;
  position: absolute;
  z-index: 20;
}
</style>
