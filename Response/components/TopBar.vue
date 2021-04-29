<template>
  <div id="top-bar">
    <div id="logo">
      <h1>
        <a href=""><span class="text-primary">R</span>esponse</a>
      </h1>
    </div>

    <nav id="nav-bar">
      <ul id="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Industries</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
}
</script>

<style scoped>
/*Top Bar*/
#top-bar {
  opacity: 0.95;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: 6vh;
  background-color: #333;
  color: #fff;
  z-index: 11;
}

#top-bar * {
  transition-duration: 300ms;
}

/*Naigation Links*/
#nav-links {
  display: flex;
}

#nav-links li a {
  color: #ec7404;
  padding: 1px 10px;
  margin: 0 5px;
}

#nav-links li a:hover {
  letter-spacing: 1px;
  padding: 5px 10px;
  color: #fff;
  border-bottom: #fff 2px solid;
}

#nav-links a.current {
  color: #fff;
}

/*Logo*/
#logo a {
  color: #333;
}

#logo a:hover {
  letter-spacing: 1px;
  color: #fff;
}

#logo h1 {
  letter-spacing: -10px;
  margin: 20px;
  font-weight: 500;
}

#logo span {
  font-family: 'Lobster', cursive;
}
</style>
