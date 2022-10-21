<template>
    <div id="OurTeamDesign03">
        <v-container>
            <v-row>
                <v-col class="v-col-lg-3 v-col-md-4 v-col-sm-4 v-col-12 teamDesign" v-for="item in contentListdata"
                    :key="item">
                    <div class="our-team">

                        <v-img aspect-ratio="0.8" :src="item.thumb" lazy-src="/gallery_loading_image.jpeg"
                            :alt="item.title" cover class="bg-grey-lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>

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
#OurTeamDesign03 .our-team {
    text-align: center;
    overflow: hidden;
    position: relative;
}

#OurTeamDesign03 .our-team .v-img {
    width: 100%;
    height: auto;
}

#OurTeamDesign03 .our-team .team-content {
    width: 100%;
    background: var(--v-success);
    color: var(--v-background);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    transition: all 0.3s ease 0s;
}

#OurTeamDesign03 .our-team .team-content:before,
#OurTeamDesign03 .our-team .team-content:after {
    content: "";
    width: 100%;
    height: 100px;
    background: var(--v-success);
    position: absolute;
    top: -16px;
    transform: rotate(15deg);
    z-index: -1;
}

#OurTeamDesign03 .our-team .team-content:before {
    left: -11%;
}

#OurTeamDesign03 .our-team .team-content:after {
    right: -11%;
    transform: rotate(-15deg);
}

#OurTeamDesign03 .our-team .v-card-title {
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 7px 0;
    position: relative;
}

#OurTeamDesign03 .our-team .v-card-title:before {
    left: 32%;
}

#OurTeamDesign03 .our-team .team-info:before {
    content: "";
    width: 6px;
    height: 95px;
    background: var(--v-background);
    position: absolute;
    bottom: 21px;
    left: 43%;
    z-index: -2;
    transform: rotate(-75deg);
    transition: all 0.3s ease 0s;
}

#OurTeamDesign03 .our-team .team-info:after {
    content: "";
    width: 6px;
    height: 95px;
    background: var(--v-background);
    position: absolute;
    bottom: 21px;
    right: 43%;
    z-index: -2;
    transform: rotate(75deg);
    transition: all 0.3s ease 0s;
}

#OurTeamDesign03 .our-team .v-card-title:after {
    right: 32%;
    transform: rotate(74deg);
}

#OurTeamDesign03 .our-team .v-card-subtitle {
    list-style: none;
    padding: 0 0 15px 0;
    margin: 0;
    position: absolute;
    bottom: -40px;
    right: 0;
    left: 0;
    transition: all 0.5s ease 0s;
}

#OurTeamDesign03 .our-team .v-card-subtitle {
    display: inline-block;
}

#OurTeamDesign03 .our-team:hover .team-content {
    padding-bottom: 40px;
}

#OurTeamDesign03 .our-team:hover .team-info:after,
#OurTeamDesign03 .our-team:hover .team-info:before {
    padding-bottom: 176px;
}

#OurTeamDesign03 .our-team:hover .v-card-subtitle {
    bottom: 0;
}

#OurTeamDesign03 .v-card-title {
    overflow: unset;
    white-space: unset !important;
    font-size: 16px !important;
    font-family: 300;
    padding: 10px 3px;
}

@media only screen and (max-width:600px) and (min-width:475px) {
    #OurTeamDesign03 .teamDesign {
        max-width: 50%;
        flex: unset;
    }
}
</style>