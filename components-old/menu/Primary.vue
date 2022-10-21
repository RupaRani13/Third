<template>
  <div id="primary-navbar" style="margin-bottom:64px;">
    <client-only>
      <div v-resize="onResize" id="primary-menu">
        <template v-if="windowSize > 768">
          <v-app-bar style="padding: 0 50px;" class="bg-indigo px-18">
            <v-img v-if="websiteData&&websiteData.logo" max-width="30%" :src="websiteData.logo"
              :alt="websiteData.title"></v-img>
            <v-tabs>
              <template v-for="(item, index) in menuData" :key="item.title">
                <v-hover v-slot="{ isHovering, props }" open-delay="100">
                  <NuxtLink :to="item.url"> 
                  <v-tab ripple :class="
                    isHovering
                      ? 'v-slide-group-item--active v-tab--selected text-orange darken-4'
                      : ''
                  " v-bind="props">
                  {{ item.title }}

                    <template v-if="item.subItems">
                      <v-icon size="default" end icon="mdi-menu-down"></v-icon>
                      <v-menu transition="slide-y-transition" open-on-hover activator="parent">
                        <v-tabs class="elevation-1" slider-color="orange darken-4" style="background: white"
                          direction="vertical">
                          <template v-for="subItem_1 in item.subItems" :key="subItem_1.title">
                            <v-hover v-slot="{ isHovering, props }" open-delay="100">
                              <NuxtLink :to="subItem_1.url"> 

                              <v-tab :class="
                                isHovering
                                  ? 'v-slide-group-item--active v-tab--selected text-orange darken-4'
                                  : ''
                              " v-bind="props" selected-class="" ripple>
                                {{ subItem_1.title }}
                                <template v-if="subItem_1.subItems">
                                  <v-spacer></v-spacer>
                                  <v-icon size="small" end icon="mdi-menu-right"></v-icon>

                                  <v-menu location="end" transition="slide-y-transition" open-on-hover
                                    activator="parent">
                                    <v-tabs class="elevation-1" slider-color="orange darken-4" style="background: white"
                                      direction="vertical">
                                      <template v-for="subItem_2 in subItem_1.subItems" :key="subItem_2.title">
                                        <v-hover v-slot="{ isHovering, props }" open-delay="100">
                                          <v-tab :class="
                                            isHovering
                                              ? 'v-slide-group-item--active v-tab--selected text-orange darken-4'
                                              : ''
                                          " v-bind="props" selected-class="" ripple>
                                            {{ subItem_2.title }}
                                            <template v-if="subItem_2.subItems">
                                              <v-icon size="x-small" end icon="mdi-menu-right"></v-icon>

                                              <v-menu :location="
                                                menuData.length - index > 2
                                                  ? 'end'
                                                  : 'start'
                                              " transition="slide-y-transition" open-on-hover activator="parent">
                                                <v-tabs class="elevation-1" slider-color="orange darken-4"
                                                  style="background: white" direction="vertical">
                                                  <template v-for="subItem_3 in subItem_2.subItems"
                                                    :key="subItem_3.title">
                                                    <v-hover v-slot="{ isHovering, props }" open-delay="100">
                                                      <v-tab :class="
                                                        isHovering
                                                          ? 'v-slide-group-item--active v-tab--selected text-orange darken-4'
                                                          : ''
                                                      " v-bind="props" selected-class="" ripple>
                                                        {{ subItem_3.title }}</v-tab>
                                                    </v-hover>
                                                  </template>
                                                </v-tabs>
                                              </v-menu>
                                            </template>
                                          </v-tab>
                                        </v-hover>
                                      </template>
                                    </v-tabs>
                                  </v-menu>
                                </template>
                              </v-tab>
                              </NuxtLink>
                            </v-hover>
                          </template>
                        </v-tabs>
                      </v-menu>
                    </template>
                  </v-tab>
                </NuxtLink>
                </v-hover>
              </template>
            </v-tabs>
          </v-app-bar>
        </template>

        <template v-else>
          <v-app-bar class="bg-lightgrey">
            <v-app-bar-title>{{ websiteTitle }}</v-app-bar-title>
            <v-spacer></v-spacer>

            <v-app-bar-nav-icon variant="text" v-click-outside="{
              handler: outsideMenuCLick,
              include: includeArea,
            }" @click.stop="toggleMenu"></v-app-bar-nav-icon>
          </v-app-bar>
          <v-navigation-drawer color="indigo" class="includedArea" v-model="drawer">
            <v-list bg-color="indigo" density="comfortable">
              <template v-for="(item, index) in data.items" :key="item.title">
                <v-list-item v-ripple>
                  <template v-if="item.img" v-slot:prepend>
                    <v-icon :icon="item.img"></v-icon>
                  </template>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <template v-if="item.subItems" v-slot:append>
                    <v-icon size="default" v-if="activeIndex == index" @click="activeSubItem(index)"
                      icon="mdi-minus-circle"></v-icon>
                    <v-icon v-else @click="activeSubItem(index)" size="default" icon="mdi-plus-circle"></v-icon>
                  </template>
                </v-list-item>
                <v-slide-y-transition hide-on-leave>
                  <v-list bg-color="indigo" class="py-0 ps-4" v-show="item.subItems && activeIndex == index"
                    density="compact">
                    <template v-for="(subItem_1, index_1) in item.subItems" :key="subItem_1.title">

                      <v-list-item v-ripple>
                        <template v-if="subItem_1.img" v-slot:prepend>
                          <v-icon :icon="subItem_1.img"></v-icon>
                        </template>
                        <v-list-item-title>{{ subItem_1.title }}</v-list-item-title>
                        <template v-if="subItem_1.subItems" v-slot:append>
                          <v-icon v-if="activeIndexSubItem_1 == index_1" @click="activeSubItem_1(index_1)" size="small"
                            icon="mdi-minus-circle"></v-icon>
                          <v-icon v-else @click="activeSubItem_1(index_1)" size="small" icon="mdi-plus-circle"></v-icon>
                        </template>
                      </v-list-item>
                      <v-slide-y-transition hide-on-leave>
                        <v-list bg-color="indigo" density="compact" class="py-0 ps-4" v-show="
                          subItem_1.subItems && activeIndexSubItem_1 == index_1
                        ">
                          <template v-for="subItem_2 in subItem_1.subItems" :key="subItem_2.title">

                            <v-list-item v-ripple>
                              <template v-if="subItem_2.img" v-slot:prepend>
                                <v-icon :icon="subItem_2.img"></v-icon>
                              </template>
                              <v-list-item-title>{{
                              subItem_2.title
                              }}</v-list-item-title>
                            </v-list-item>
                          </template>
                        </v-list>
                      </v-slide-y-transition>
                    </template>
                  </v-list>
                </v-slide-y-transition>
                <v-divider color="white" thickness="0.5"></v-divider>
              </template>
            </v-list>
          </v-navigation-drawer>
        </template>
      </div>
      <template #fallback>
        <v-app-bar style="padding: 0 50px; width:100vw;" id="fallback-navbar" class="bg-indigo px-18">
          <div style="width:30%; min-width:30%; height:100%; text-align:center;">
            <img style="max-width: 100%;height: 100%; max-height: 100%;" :src="websiteData.logo" :alt="websiteData.title">
          </div>
          <v-tabs>
            <template v-for="(item) in data.items" :key="item.title">
              <v-tab>
                {{ item.title }}
                <template v-if="item.subItems">
                  <v-icon size="default" end icon="mdi-menu-down"></v-icon>
                </template>
              </v-tab>
            </template>
          </v-tabs>
        </v-app-bar>
      </template>
    </client-only>
  </div>
</template>

<script>
export default {

  async setup(props) {
    const websiteData=await useWebsiteData('5f8ff2901c6863595640aa75')
    const data = await useMenu(props.id);
    return {
      websiteData,
      data,
    };
  },
  props : {
    id: {
      type: String,
      required : true
    }

  },
  data() {
    return {
      client: process.client,
      server: process.server,
      windowSize: "",
      menuData: [],
      drawer: false,
      activeIndex: null,
      activeIndexSubItem_1: null,
      menuData1: this.data.items,
      logoWidth: 30,
    };
  },
  methods: {
    includeArea() {
      return [document.querySelector(".includedArea")];
    },
    outsideMenuCLick() {
      this.drawer=false;
      this.activeIndexSubItem_1=null;
      this.activeIndex=null;
    },
    activeSubItem(index) {
      this.activeIndexSubItem_1=null;
      this.activeIndex==index
        ? (this.activeIndex=null)
        :(this.activeIndex=index);
    },
    activeSubItem_1(index) {
      this.activeIndexSubItem_1==index
        ? (this.activeIndexSubItem_1=null)
        :(this.activeIndexSubItem_1=index);
    },
    toggleMenu() {
      if (this.drawer) {
        this.activeIndexSubItem_1=null;
        this.activeIndex=null;
      }
      this.drawer=!this.drawer;
    },
    onResize() {
      this.windowSize=window.innerWidth;
      this.checkMenuList(this.windowSize);
    },
    checkMenuList(width) {
      let newMenuItems=[];
      var menuItem=Math.floor((width*(1-this.logoWidth/100-0.1))/110);

      if (this.data.items.length>menuItem) {

        this.data.items.forEach((item, index) => {
          if (index+1<menuItem) {
            newMenuItems.push(item);
          } else if (index+1==menuItem) {
            let singleNavItem={
              img: "",
              subItems: [],
              title: "More",
              url: "#",
            };
            singleNavItem.subItems.push(item);
            newMenuItems.push(singleNavItem);
          } else {
            newMenuItems[newMenuItems.length-1].subItems.push(item);
          }
        });
        this.menuData=newMenuItems;
      }else{
        this.menuData=this.data.items;
      }
    },
    checkMenuList1(itemLength) {
      let newMenuItems=[];
      var menuItem=itemLength;
      if (this.menuData1.length>menuItem) {

        this.menuData1.forEach((item, index) => {
          if (index<menuItem) {
            newMenuItems.push(item);
          } else if (index==menuItem) {
            let singleNavItem={
              img: "",
              subItems: [],
              title: "More",
              url: "#",
            };
            singleNavItem.subItems.push(item);
            newMenuItems.push(singleNavItem);
          } else {
            newMenuItems[newMenuItems.length-1].subItems.push(item);
          }
        });


      }
      this.menuData1=newMenuItems;

    },
  },
  mounted() {
    // console.log(this.$refs.myRef3.getElementsByClassName('customClass')[0].scrollHeight);
    // var xyz = this.$refs.myRef3.getElementsByClassName('customClass')[0].children;
    // var prevItem = {};
    // var currItem = {};
    // var index = ''
    // for (var i = 0; i < xyz.length; i++) {
    //   currItem = xyz[i].getBoundingClientRect();
    //   if (prevItem && prevItem.top < currItem.top) {
    //     
    //     index = i;
    //     this.checkMenuList1(index)
    //     console.log(prevItem)
    //     break;
    //   }
    //   prevItem = currItem;
    // };




    if (process.client) {
      this.onResize();
    }

  },
  watch: {
    menuData1() {
      console.log('watched called')
    }
  },
  created() {

  },
};
</script>

<style>
#primary-menu .v-slide-group__content {
  align-items: center;
}
.v-slide-group__content a{
  text-decoration: none;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

#fallback-navbar .v-slide-group__content {
  width: 100%;
  flex-wrap: wrap;
}

#fallback-navbar .v-slide-group__content button {
  height: 100%;

}
#primary-navbar .v-slide-group__content > * {
    white-space: initial !important;
    color: var(--v-background) !important;
    text-decoration: none !important;
}

@media screen and (max-width:768px) {
  .largeScreen {
    display: none
  }

  .smallScreen {
    display: block
  }
}

@media screen and (min-width:768px) {
  .largeScreen {
    display: block
  }
  .smallScreen {
    display: none
  }
}
</style>