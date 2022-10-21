<template>
    <div id="OurTeamDesign04">
        <v-container>
            <v-row>
                <v-col class="v-col-lg-3 v-col-md-4 v-col-sm-4 v-col-12 teamDesign" v-for="item in contentListdata"
                    :key="item">
                    <div class="our-team">
                        <div class="team-image">
                            <v-img aspect-ratio="0.8" :src="item.thumb" lazy-src="/gallery_loading_image.jpeg"
                                :alt="item.title" cover class="bg-grey-lighten-2">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="success"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <v-responsive aspect-ratio="0.8">
                                <v-card-text class="description" v-html="item.desci"></v-card-text>
                            </v-responsive>

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
    created() {
        console.log(this.contentListdata)
    },
}
</script>

<style>
#OurTeamDesign04 .v-card-title {
    overflow: unset;
    white-space: unset !important;
    font-size: 16px !important;
    font-family: 300;
    padding: 10px 3px;
}

#OurTeamDesign04 .description::-webkit-scrollbar {
    width: 2px;
    /* width of the entire scrollbar */
}

#OurTeamDesign04 .description::-webkit-scrollbar-track {
    background: var(--v-on-surface-variant);
    /* color of the tracking area */
}

#OurTeamDesign04 .description::-webkit-scrollbar-thumb {
    background-color: var(--v-success);
    /* color of the scroll thumb */
    border-radius: 20px;
    /* roundness of the scroll thumb */
    border: 1px solid var(--v-background);
    /* creates padding around scroll thumb */
}

#OurTeamDesign04 .our-team {
    border-left: 8px solid var(--v-success);
    border-bottom: 8px solid var(--v-success);
    /* height: 335px; */
}


#OurTeamDesign04 .our-team .team-image {
    position: relative;
    text-align: center;
}

#OurTeamDesign04 .our-team .v-img {
    width: 100%;
    height: auto;
    position: absolute;
}

#OurTeamDesign04 .our-team .description {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    color: var(--v-background);
    line-height: 30px;
    padding: 40px 50px;
    opacity: 0;
    background-color: rgba(107, 118, 106, 0.6);
    transition: all 0.5s ease 0s;
    overflow: scroll;
    overflow-x: hidden;
}

#OurTeamDesign04 .our-team .team-info {
    padding: 20px;
}

#OurTeamDesign04 .our-team .v-card-title {
    font-size: 18px;
    color: var(--v-success);
    letter-spacing: 4px;
    /* margin: 0 0 15px 0; */
    transition: all 0.5s ease 0s;
}

#OurTeamDesign04 .our-team .v-card-subtitle {
    display: block;
    font-size: 14px;
    color: var(--v-success);
    text-transform: capitalize;
}

#OurTeamDesign04 .our-team:hover .description {
    opacity: 1;
}

@media only screen and (max-width:600px) and (min-width:475px) {
    #OurTeamDesign04 .teamDesign {
        max-width: 50%;
        flex: unset;
    }
}
</style>