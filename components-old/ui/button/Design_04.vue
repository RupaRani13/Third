<template> 
      <v-btn class="ma-2" href="" id="buttonDesign_04">
                <span>button</span>
      </v-btn> 
</template>

<script>
    export default {
        
    }
</script>

<style>
/* CSS */
#buttonDesign_04.v-btn {
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  /* color: white; */
  border-radius: 10px;
  display: block;

  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  text-decoration: none;

}

#buttonDesign_04.v-btn:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: var(--v-background);
  text-decoration: none;
}

#buttonDesign_04.v-btn:active {
  transform: scale(0.95);
}
</style>