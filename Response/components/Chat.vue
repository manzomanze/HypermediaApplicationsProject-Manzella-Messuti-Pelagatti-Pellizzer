<template>
  <div class="chat">
    <div ref="chatwindow" class="chat-container chat-invisible">
      <div id="chat-window" ref="chatmessages" class="chat-window">
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
        class="chat-input"
        v-model="messageToSend"
        type="text"
        placeholder="Hi, I would like to..."
        @keypress.enter="sendMessage"
      />
    </div>
    <div ref="chatbutton" class="button chat-closed" @click="showChat">
      <!-- <img src="/img/chat2.png" alt="" /> -->
      <i class="fas fa-comments fa-2x"></i>
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
      chatWindow: Object,
      chatButton: Object,
    }
  },
  mounted() {
    this.chatWindow = this.$refs.chatwindow
    this.chatButton = this.$refs.chatbutton
  },
  methods: {
    sendMessage() {
      if (this.messageToSend === '') {
        return
      }
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
      setTimeout(this.updateScroll, 150)
    },
    updateScroll() {
      this.$refs.chatmessages.scrollTop = this.$refs.chatmessages.scrollHeight
    },
    showChat() {
      this.chatWindow.classList.toggle('chat-invisible')
      this.chatButton.classList.toggle('chat-closed')
    },
  },
}
</script>

<style scoped>
* {
  z-index: 5;
  transition: 200ms;
}
.chat-input:focus {
  outline: none;
  border-bottom: var(--main_color) 2px solid;
}
.chat-input {
  font-weight: 600;
  border-radius: 5px;
  transition: 250ms;
  font-family: 'Open Sans', sans-serif;
  width: 95%;
  border: none;
  background-color: #eee;
  border-bottom: 2px rgb(1, 134, 211) solid;
  height: 30px;
  margin: auto;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  padding: 0px 10px;
}
.chat-invisible {
  opacity: 0;
  transform: translateY(65%) translateX(50%) scale(0);
  overflow: hidden;
  height: 0px;
}
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
  border: 1px solid rgb(1, 134, 211);
  border-radius: 4px;
  height: 500px;
  width: 300px;
  position: fixed;
  bottom: 80px;
  right: 5px;
  border-radius: 10px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.514);
  background-color: rgba(255, 255, 255, 0.514);
}

.chat-window {
  overflow-y: auto;
  height: calc(100% - 34px);
  border-radius: 10px;
  border-bottom-left-radius: 0px;
}

.chat-window * {
  overflow-anchor: none;
}

.message {
  width: calc(100%);
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
  border: 2px solid rgb(81, 191, 255);
  background: rgb(0, 162, 255);
  background: linear-gradient(
    45deg,
    rgb(123, 207, 255) 76%,
    rgb(152, 226, 255) 100%
  );
  color: black;
  border-radius: 10px;
  max-width: 93%;
}

.message-content.sender {
  /* background: hsla(202, 100%, 50%, 0.8); */
  background: rgb(0, 162, 255);
  background: linear-gradient(
    45deg,
    rgba(0, 162, 255, 1) 76%,
    rgba(0, 181, 255, 1) 100%
  );
  color: #000;
  border: 1px solid rgb(1, 134, 211);
  max-width: 93%;
}

input {
  width: 100%;
  position: absolute;
}

.chat-closed {
  background-color: #4d80b9;
}

.button i {
  color: #4d80b9;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.button.chat-closed i {
  color: #fff;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
