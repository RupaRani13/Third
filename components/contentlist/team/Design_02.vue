<template>
    <div id="OurTeamDesign02">
        <v-container>
            <v-row>
                <v-col class="v-col-lg-3 v-col-md-4 v-col-sm-4 v-col-12 teamDesign" v-for="item in contentListdata" :key="item">
                    <div class="our-team pa-3">
                        <div class="pic">
                            <v-img aspect-ratio="0.8" :src="item.thumb" lazy-src="/gallery_loading_image.jpeg"
                                :alt="item.title" cover class="bg-grey-lighten-2">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="success"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </div>
                        <div class="team-content">
                            <div class="team-info">
                                <v-card-title>{{item.title}}</v-card-title>
                                <v-card-subtitle v-if="item.more">
                                    <p v-html="item.more"></p>
                                </v-card-subtitle>
                            </div>
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
    created(){
    },
}
</script>

<style>
#OurTeamDesign02 .our-team {
    text-align: center;
    margin-bottom: 100px;
    z-index: 1;
    position: relative;
}

#OurTeamDesign02 .our-team .team-content {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px dotted #ddd;
    position: absolute;
    bottom: -70px;
    left: 0;
    z-index: -1;
    transition: all 0.5s ease 0s;
}

#OurTeamDesign02 .our-team .pic {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
}

#OurTeamDesign02 .our-team .pic img {
    width: 100%;
    height: auto;
}

#OurTeamDesign02 .our-team .pic:after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease 0s;
}

#OurTeamDesign02 .our-team .v-card-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--v-surface-variant);
    margin: 0 0 5px 0;
    transition: all 0.5s ease 0s;
}

#OurTeamDesign02 .our-team .v-card-subtitle {
    display: block;
    font-size: 14px;
    color: var(--v-surface-variant);
}

#OurTeamDesign02 .our-team .team-info {
    width: 100%;
    color: var(--v-surface-variant);
    position: absolute;
    bottom: 12px;
    left: 0;
}

#OurTeamDesign02 .our-team:hover .pic:after {
    opacity: 1;
}

#OurTeamDesign02 .our-team:hover .team-content {
    border: 2px dotted var(--v-success);
}

#OurTeamDesign02 .our-team:hover .v-card-title,
#OurTeamDesign02 .our-team:hover .v-card-subtitle {
    color: var(--v-success);
}

#OurTeamDesign02 .v-card-title {
    overflow: unset;
    white-space: unset !important;
    font-size: 16px !important;
    font-family: 300;
    padding: 1px 3px;
}
@media only screen and (max-width:600px) and (min-width:475px) {
    #OurTeamDesign02 .teamDesign {
        max-width: 50%;
        flex: unset;
    }
}
</style>