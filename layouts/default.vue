<template>
  <div>
    <MetaCommonFile></MetaCommonFile>
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


  
