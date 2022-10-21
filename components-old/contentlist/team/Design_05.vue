<template>
    <div id="OurTeamDesign05">
        <v-container>
            <v-row>
                <v-col class="v-col-lg-3 v-col-md-4 v-col-sm-4 v-col-12 teamDesign" v-for="item in contentListdata" :key="item">
                    <div class="our-team" >
                        <div class="pic">
                            <v-img aspect-ratio="0.9" :src="item.thumb" lazy-src="/gallery_loading_image.jpeg"
                                :alt="item.title" cover class="bg-grey-lighten-2">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="success"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>                        
                        </div>
                        <div class="team-content">
                            <v-card-title>{{item.title}}</v-card-title>
                            <v-card-subtitle v-if="item.more">
                                <p v-html="item.more"></p>
                            </v-card-subtitle>
                            <v-card-text class="description" v-html="item.desci"></v-card-text>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    async setup(props) {
        const contentListdata = await useContentListItem(props.id);
        return { contentListdata };
    },
    props: {
        id: {
            type: String,
            default: null,
            required: false
        }
    },
    created() {
        console.log(this.contentListdata)
    },
}
</script>

<style>
#OurTeamDesign05 .description::-webkit-scrollbar {
  width: 2px;               /* width of the entire scrollbar */
}

#OurTeamDesign05 .description::-webkit-scrollbar-track {
  background: var(--v-on-surface-variant);        /* color of the tracking area */
}

#OurTeamDesign05 .description::-webkit-scrollbar-thumb {
  background-color: var(--v-success);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 1px solid var(--v-background);  /* creates padding around scroll thumb */
}
#OurTeamDesign05 .v-card-title {
    overflow: unset;
    white-space: unset !important;
    font-size: 16px !important;
    font-family: 300;
    padding: 10px 3px;
}

#OurTeamDesign05 .our-team {
    border-top: 1px solid var(--v-success);
    background: var(--v-on-surface-variant);
    border-radius: 5px;
    margin-top: 72px;
}

#OurTeamDesign05 .our-team .pic {
    width: 40%;
    border: 3px solid var(--v-success);
    border-radius: 60px 0;
    margin: -72px auto 0;
    overflow: hidden;
    transition: all 0.20s ease 0s;
}

#OurTeamDesign05 .our-team .pic .v-img {
    width: 100%;
    height: auto;
}

#OurTeamDesign05 .our-team .team-content {
    text-align: center;
    position: relative;
    overflow: hidden;
}

#OurTeamDesign05 .our-team .v-card-title {
    font-size: 24px;
    color: #333;
    margin: 20px 0 0;
    text-transform: uppercase;
}

#OurTeamDesign05 .our-team .v-card-subtitle {
    font-size: 16px;
    color: #333;
    display: block;
    margin-bottom: 15px;
}

#OurTeamDesign05 .our-team .description {
    font-size: 16px;
    font-weight: 300;
    color: #333;
    padding: 20px 35px;
    line-height: 22px;
    margin-bottom: 30px;
    height: 195px;
    overflow: scroll;
    overflow-x: hidden;
}

#OurTeamDesign05 .our-team .social-links {
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: -17%;
    left: 0;
    margin: 0;
    padding: 9px 0;
    list-style: none;
    background: var(--v-success);
    transition: all 0.20s linear 0s;
}

#OurTeamDesign05 .our-team .social-links li {
    display: inline-block;
    margin: 0 5px;
}

#OurTeamDesign05 .our-team .social-links li a {
    width: 35px;
    height: 35px;
    line-height: 35px;
    border-radius: 50%;
    font-size: 20px;
    color: #fff;
    border: 1px solid #fff;
}

#OurTeamDesign05 .our-team:hover .pic {
    border-radius: 50%;
    border-color: var(--v-background);
}

#OurTeamDesign05 .our-team:hover .social-links {
    bottom: 0;
}
@media only screen and (max-width:600px) and (min-width:475px){
    #OurTeamDesign05 .teamDesign{
        max-width: 50%;
        flex: unset;
    }
}
</style>