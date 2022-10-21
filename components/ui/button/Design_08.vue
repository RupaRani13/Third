<template>
      <v-btn class="ma-2" href="" id="buttonDesign_08">
                <span>button</span>
             </v-btn>   
</template>

<script>
    export default {
        
    }
</script>

<style>

/* CSS */
#buttonDesign_08.v-btn {
  background-color: var(--v-success);
  border: 0;
  border-radius: 56px;
  color: var(--v-background);
  cursor: pointer;
  display: inline-block;
  outline: 0;
  padding: 16px 21px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  text-transform: uppercase;
}

#buttonDesign_08.v-btn:before {
  background-color: initial;
  background-image: linear-gradient(var(--v-background) 0, rgba(255, 255, 255, 0) 100%);
  border-radius: 125px;
  content: "";
  height: 50%;
  left: 4%;
  opacity: .5;
  position: absolute;
  top: 0;
  transition: all .3s;
  width: 92%;
}

#buttonDesign_08.v-btn:hover {
  box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px;
  transform: scale(1.05);
}

@media (min-width: 768px) {
  #buttonDesign_08.v-btn {
    padding: 8px 15px;
  }
}
</style>