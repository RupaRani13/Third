<template>
  <div>
    <HeadFevicon></HeadFevicon>
    <HeadScript></HeadScript>
    <MenuTopbar></MenuTopbar>
    <MenuPrimary :id="primaryMenu"></MenuPrimary>
    <!-- <NotificationDesign01 :id="notification"></NotificationDesign01> -->
    <slot />
    <MenuFooter :id="footerMenu" :id2="footerMenu2"></MenuFooter>

  </div>
</template>

<script>
  export default {
    async setup() {
      const websiteDataTemplate=await useWebsiteDataTemplate('5f8ff2901c6863595640aa75');
      
      return {
        websiteDataTemplate,
      };
    },
    data(){
      return{
        primaryMenu : this.websiteDataTemplate.menus.PRIMARY_MENU,
        footerMenu : this.websiteDataTemplate.menus.FOOTER_MENU,
        footerMenu2 :  this.websiteDataTemplate.menus&&this.websiteDataTemplate.menus.FOOTER_MENU_2 ? this.websiteDataTemplate.menus.FOOTER_MENU_2 : null,
        topMenu : this.websiteDataTemplate.menus.TOP_MENU?this.websiteDataTemplate.menus.TOP_MENU:null,
        notification : this.websiteDataTemplate.shortCodes.NOTIFICATIONS&&this.websiteDataTemplate.shortCodes.NOTIFICATIONS.type=='NEWS'?this.websiteDataTemplate.shortCodes.NOTIFICATIONS.type.id:'',
        footerMenu : this.websiteDataTemplate.menus.FOOTER_MENU,
      }
    }
  }
</script>
<style>
/* .page-left-enter-active, .page-right-enter-active, .page-left-leave-active, .page-right-leave-active{
  transition: all 30s leave;
}
.page-left-enter-from, .page-right-leave-to{
  transform : translateX(100%)
}
.page-left-leave-to, .page-right-enter-from{
  transform : translateX(-100%)
}
.page-left-enter-to, .page-right-enter-to{
  transform : translateX(0)
} */
</style>



  
