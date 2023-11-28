<script>
    import background from '../lib/assets/background.webp'
    import videobackground from '../lib/assets/videobackground.mp4'

</script>



<main> 
    <div class="videoContainer"> 
        <video autoplay>
            <source src={videobackground} type="video/mp4" />
        </video>
    </div>
    <div class=" buttonContainer"> 
        <button class=""> JOIN NOW</button>
        <a href="/account"><button> LOGIN</button> </a>
    </div>
</main>


<style>



.container {
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    
}

.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

button {
    background-color: #00AEEF;;
    color: #fff;
    border: none;
    padding: 20px 30px;
    margin: 10px;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    position: flex;
    justify-content: center;
    align-items: center;
    transform: translate(50%,50%);

}

.buttonContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
}

.buttonContainer button {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.videoContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%; 
  overflow: hidden;
}
.videoContainer video {
  /* Make video to at least 100% wide and tall */
  min-width: 100%; 
  min-height: 100%; 

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

</style>

