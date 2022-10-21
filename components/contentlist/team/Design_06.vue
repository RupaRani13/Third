<template>
    <div id="OurTeamDesign06" style="background:var(--v-on-surface-variant)">
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
                        <div class="team-prof">
                            <v-card-title>{{item.title}}</v-card-title>
                            <v-card-subtitle v-if="item.more">
                                <p v-html="item.more"></p>
                            </v-card-subtitle>
                        </div>
                            <v-card-text class="description" v-html="item.desci"></v-card-text>
                            <p class="read">
                                {{item.link}}
                            </p>
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
#OurTeamDesign06 .our-team {
    text-align: center;
}
#OurTeamDesign06 .our-team .pic {
    position: relative;
}
#OurTeamDesign06 .our-team .pic .v-img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    
}
#OurTeamDesign06 .our-team .pic::after {
    content: '';
    position: absolute;
    background: rgba(59, 61, 66, 0.6);
    border-radius: 50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    visibility: hidden;
    transform: scale(0);
}
#OurTeamDesign06 .our-team .pic:hover::after {
    /* opacity: 1; */
    transform: scale(1);
    visibility: visible;
}
#OurTeamDesign06 .v-card-title {
    /* color: #fff; */
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    text-transform: capitalize;
    padding: 0px;
}
#OurTeamDesign06 .v-card-subtitle {
    /* color: #999; */
    font-size: 12px;
    /* color: #fff; */
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    text-transform: capitalize;
    padding: 0px;
}
#OurTeamDesign06 .description {
    /* color: #fff;  */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  padding: 0;
    margin: 1rem;
}
#OurTeamDesign06 .read {
    font-size: 13px;
    font-weight: 400;
    color: var(--v-success);
    text-decoration: none;
    margin-top: 11px;
}
#OurTeamDesign06 .v-card-title:after {
    content: "|";
    color: var(--v-success);
    display: inline-block;
    padding: 0 5px 0 10px;
}

#OurTeamDesign06 .team-prof{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
@media only screen and (max-width:600px) and (min-width:475px){
    #OurTeamDesign06 .teamDesign{
        max-width: 50%;
        flex: unset;
    }
}
</style>