<template>
    <div class="mainbox">
        <div class="code">
            <div class="err">4</div>
            <i class="far fa-question-circle fa-spin"></i>
            <div class="err2">4</div>
        </div>
        <div class="msg">Uh Oh! Page not found!
            <p>Let's go <a href="/">home</a> and try from there.</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


.code{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.mainbox {
  background-color: var(--v-success);
  margin: auto;
  padding: 40px 20px;
  width: 100%;
  position: relative;
}

  .err {
    color: #ffffff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 11rem;

  }

.far {
  font-size: 10.5rem;

}

 .err2 {
    color: #ffffff;
    font-size: 11rem;
  }

.msg {
    text-align: center;
    font-size: 1.6rem;
  }

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}

</style>