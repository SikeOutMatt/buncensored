<script>
    import background from '../lib/assets/background.webp'
    import videobackground from '../lib/assets/videobackground.mp4'
    import banner from '../lib/assets/frontpage-banner-2.webp';
    import Logo from '../lib/assets/logo.webp';

</script>



<main> 
    <div class="container"> 
        <div class="grid background"> 
            <div>
                <div>
                    <img class="hidden" src={banner}>
                </div>
                <div>

                </div>
            </div>
            <div class="flex background">
                <div class="loginOptions">
                    <img src={Logo} width="350px" height="200px">
                    <button> Sign Up </button>
                    <button> Login </button>
                    <h1> Sign In With Your Favorite Apps</h1>
                    <button> Sign in With Twitter </button>
                    <button> Sign in With Facebook </button>
                    <button> Sign in With Google </button>
                </div>
    
            </div>
        </div>




    </div>
</main>

<style>

    main {
        margin: -10px;

    }

h1 {
    color: white;
    font-size: 15px;
    font-weight: bolder;
}

.hidden {
    overflow: hidden;
}

.container {
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    
}

button {
    background-color: #00AEEF;;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    margin-right: 20px;

}


.background {
    background-color: #2a2a2a;
    margin: 0px;
}


.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

img {
    overflow: hidden;
    margin: 0;
}
   
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    margin: 20px;
    border-radius: 5px;
    padding: 5px;
    border-style: none;
    font-size: 15px;
    background-color: #6a6a6a;
}

.loginOptions button {
    margin: 20px;
    border-radius: 20px;
    padding: 5px;
    border-style: none;
    font-size: 15px;
    background-color: #00AEEF;
    width: 200%;
    padding: 10px 20px;

}

.loginOptions {
    display: flex;
    flex-direction: column;

    align-items: center;

}

    

</style>

