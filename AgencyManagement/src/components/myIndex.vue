<template>
    <div class="carousel-body">
        <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true"
                  autoplay
                  loop
                  adjustableHeight="true"
                  autoplayHoverPause="true"
                  autoplayTimeout="4000"
                  speed="1000"
                  centerMode="true"
                  >
            <slide data-index="0"
                   data-name="slide1"
                   @slideclick="handleSlideClick">
                <img class="modelImg center" src="https://i.dlpng.com/static/png/5376395-random-model-png-14-by-dreamervisen-on-deviantart-model-png-750_915_preview.png" />
                <p class="modelText">Book one of our many beautiful models</p>
            </slide>
            <slide data-index="1"
                   data-name="slide2"
                   @slideclick="handleSlideClick">
                <img class="modelImg center" src="https://freepngimg.com/thumb/girl/23114-7-woman-model-file.png" />
                <p class="modelText">You won't be disappointed</p>
            </slide>
            <slide data-index="2"
                   data-name="slide1"
                   @slideclick="handleSlideClick">
                <img class="modelImg center" src="https://freepngimg.com/thumb/girl/11-2-girl-transparent.png" />
                <p class="modelText">Check out our extensive model catalog</p>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name: 'my-index',
        components: {
            Carousel,
            Slide
        },
        data() {
            return {

            }
        }
    }
    
</script>

<style scoped>
    #content {
        margin: 0;
        width: 100%;
        height: auto;
    }

    .modelImg {
        max-width: 400px;
        height: 510px;
        object-fit: cover;
    }
    .modelText {
        position: relative;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
        font-size: 20px;
        letter-spacing: 0.1em;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: .5px;
        -webkit-text-stroke-color: white;
        text-shadow: 2px 2px #ff1f8f, 2.5px 2.5px #000000;
    }
</style>