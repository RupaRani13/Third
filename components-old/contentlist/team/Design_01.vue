
<template>
    <div id="OurTeamDesign01">

        <v-container>
            <v-row>
                <v-col class="v-col-lg-3 v-col-md-4 v-col-sm-4 v-col-12 teamDesign" v-for="item in contentListdata" :key="item">
                    <v-card class="pa-3">
                        <v-img aspect-ratio="0.8" :src="item.thumb" lazy-src="/gallery_loading_image.jpeg"
                            :alt="item.title" cover class="bg-grey-lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="success"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <div class="team-content">
                            <v-card-title>{{item.title}}</v-card-title>
                            <v-card-subtitle v-if="item.more">
                                <p v-html="item.more"></p>
                            </v-card-subtitle>
                        </div>
                    </v-card>
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
#OurTeamDesign01 .v-card {

    border-radius: 10px;
    text-align: center;
    margin: 10px;
    z-index: 1;
    position: relative;
}

#OurTeamDesign01 .v-card:before,
#OurTeamDesign01 .v-card:after {
    content: "";
    width: 100%;
    height: 104%;
    background: #ff3232;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
    transform: translateY(-50%) scaleX(0.3);
    transition: all 0.3s ease 0s;
}

#OurTeamDesign01 .v-card .v-img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: all 0.3s ease 0s;
    border: 2px solid red;
}

#OurTeamDesign01 .v-card .team-content {
    /* width: 93%;
    padding: 25px 0 10px; */
    width: 80%;
    padding: 11px 0 10px;
    background: #ff4444;
    position: absolute;
    bottom: 0;
    left: 50%;
    opacity: 1;
    -webkit-clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
    clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
    transform: translate(-50%, -36%);
    transition: all 0.3s cubic-bezier(0.5, 0.2, 0.1, 0.9);
}

#OurTeamDesign01 .v-card .v-card-title {
    /* font-size: 25px;
    font-weight: 600; */
    color: #fff;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0;
    display: block;
    line-height: 1.4;
}

#OurTeamDesign01 .v-card .v-card-subtitle {
    display: none;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 10px;
    opacity: 1;
}



#OurTeamDesign01 .v-card:after {
    width: 106%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(0.25);
}

#OurTeamDesign01 .v-card:hover:before {
    transform: translateY(-50%) scaleX(0.7);
}

#OurTeamDesign01 .v-card:hover:after {
    transform: translate(-50%, -50%) scaleY(0.7);
}

#OurTeamDesign01 .v-card:hover .team-content {

    bottom: 10px;
    opacity: 1;

}

#OurTeamDesign01 .v-card:hover .team-content .v-card-subtitle {
    display: block;
    animation: mymove 0.3s linear;
    color: var(--v-background);
}

@keyframes mymove {
    from {
        opacity: 0;
        height: 0px
    }

    to {
        opacity: 1;
        height: fit-content;
    }
}

#OurTeamDesign01 .v-card--variant-elevated {
    box-shadow: none;
}

#OurTeamDesign01 .v-card-title {
    overflow: unset;
    white-space: unset !important;
    font-size: 16px !important;
    font-family: 300;
    padding: 1px 3px;
}
@media only screen and (max-width:600px) and (min-width:475px) {
    #OurTeamDesign01 .teamDesign {
        max-width: 50%;
        flex: unset;
    }
}
</style>