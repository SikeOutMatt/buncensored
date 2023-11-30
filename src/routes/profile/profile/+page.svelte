<script>
    import Header from '../../../components/header.svelte';
    import videoIcon from '../../../lib/assets/video.png'
    import profilePicture from '../../../lib/assets/profilepicture.jpeg'
    import profileBanner from '../../../lib/assets/profilebanner.png'
    import videoThumbnail from '../../../lib/assets/videothumbnail.png'
    import postPicture from '../../../lib/assets/postpicture.webp'


    import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    let dataUsername = "Username";
    let userFollowers = "1.90k"

    onMount(() => {

    let content = document.getElementById("content");
    let activityFeed = document.getElementById("activityFeed");
    let activityFeedBtn = document.getElementById("activityFeedBtn");
    let contentBtn = document.getElementById("contentBth");



    contentBtn.addEventListener("click", function() {
        activityFeed.style.display = "none";
        content.style.display = "block";
        contentBtn.style.color = "blue";
        contentBtn.style.fontWeight = "bolder";
        contentBtn.style.textUnderlineOffset = "10px";
   
    })

    activityFeedBtn.addEventListener("click", function() {
        activityFeed.style.display = "block";
        content.style.display = "none";
        activityFeedBtn.style.color = "blue";
    })
})

</script>


<main>
    <Header />
    <div class="container">
        <div class="background">
             <div class="profileHeader">
            <img class="profileBanner relative" src={profileBanner} width="1200vh" height="200vh"> 
             </div>
            <div class="profilePictureHeader">
                 <div>
                      <img src={profilePicture} class="profilePicture">
                      <div class="flexColumn">
                        <h1> MyUsername</h1>
                        <h2> @MyUsername</h2>
                      </div>
                      <div>
                        
                      </div>
                </div>
                    <div class="userInfo">  
               
                      </div>
                </div>
        </div>
        <div>
            <ul class="">
                <a class="activityFeedBtn" id="activityFeedBtn"> <li>Activity Feed</li></a>
                <a id="contentBth"> <li class="contentBtn">Content</li> </a>  
                <li> Vault </li>
            </ul>
        </div>
    

<!-- Activity Feed Section -->


        <div class="activityFeed" id="activityFeed">
            <div class="createPost">
                <div>

                </div>

            </div>
            <div class="post">
                <div class="postHeader">
                    <div>
                        <img src={profilePicture} class="profilePicturePost" >
                    </div>
                    <div class="flexColumnStart">  
                        <h3><strong> Username </strong> Posted a Picture </h3>
                        <h5> October 23, 2023 @ 4:30PM</h5>
                    </div>
                </div>
                <div class="postContent">
                    <img src={postPicture} class="postPicture" >
                    <p> Lorem Ipsum</p>
                
                </div>

            </div>
        </div>

<!-- Exclusive Content-->

        <div class="content" id="content">
            <div class="grid">
                <div class="videoCard">
                    <div>
                        <img class="videoThumbnail" src={videoThumbnail}> 
                    </div>
                    <div class="flexColumnStart">
                        <h1> Video Title </h1>
                        <h3> Video Description</h3>
                    </div>
                </div>
                <div class="videoCard"> 
                    <div>
                        <img class="videoThumbnail" src={videoThumbnail}>
                    </div>
                    <div>
                        <h1> Video Title </h1>
                        <h3> Video Description</h3>
                    </div>
                </div>
                <div class="videoCard"> 
                    <div>
                        <img class="videoThumbnail" src={videoThumbnail}>
                    </div>
                    <div>
                        <h1> Video Title </h1>
                        <h3> Video Description</h3>
                    </div>
                </div>
                <div class="videoCard">
                    <div>
                        <img class="videoThumbnail" src={videoThumbnail}> 
                    </div>
                    <div class="flexColumnStart">
                        <h1> Video Title </h1>
                        <h3> Video Description</h3>
                    </div>
                </div>
                <div class="videoCard"> 
                    <div>
                        <img class="videoThumbnail" src={videoThumbnail}>
                    </div>
                    <div>
                        <h1> Video Title </h1>
                        <h3> Video Description</h3>
                    </div>
                </div>
                <div class="videoCard"> 
                    <div>
                        <img class="videoThumbnail" src={videoThumbnail}>
                    </div>
                    <div>
                        <h1> Video Title </h1>
                        <h3> Video Description</h3>
                    </div>
                </div>
            </div>
        </div>


</main>


<style> 
/* Page Styles */

    main {
        background-color: #f7f7f9;
    }

    *{
        margin: 0;
        }

    strong {
        color: #00AEEF;
        font-weight: 900;
    }
    
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        align-content: center;
        border-radius: 20px;
        gap: 20px;
    }

    .profilePictureHeader {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .background  {
    background-color: white;
    border-radius: 20px;
    } 

    .relative {
        position: relative;
    }       

    .container {
        width: 70vw;
        margin: 30px auto;
    }

    .flexColumn
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .flexColumnStart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

/* Profile Header Section */

    .profileHeader {
        display: flex;
        justify-content: center;

    }

    .profileBanner {
        border-radius: 20px;
    }

    .profilePicture {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        padding-top: 10px;
    }






    /* Post Section */

    .post {
        background-color: white;
        border-radius: 20px;
        margin: auto;
        width: 50vw;

    }

    .postHeader {
        color: black ;
        background-color: white;
        display: flex;
        border-radius: 20px;
    }

    .profilePicturePost {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        padding-top: 10px;
        padding-left: 10px;
    
    }

    .postPicture {
        width: 100%;
        height: 100%;
    
    }


/* Profile Content Section */


    .videoThumbnail {
        max-width: 20vw;
    }

    .videoCard {
        margin: 10px;
        background-color: white;
        padding: 10px;
        border-radius: 20px;
    }


    .activityFeedBtn {
        color: #bdbec5;
        cursor: pointer;
    }

    .contentBtn {
        cursor: pointer;
        color: #bdbec5;   
     }

    .activityFeed {
        display: block;
    }

    .submitBtn {
        padding: 5px 10px;
        margin: 10px;
        font-size: 20px;
        background-color: #00AEEF;
        border: none;
        font-weight: 600;
        border-radius: 10px;
    }

    .content {
        display: none;
    }



   

    input {
        border-radius: 10px;
        height: 100px;
        width: 40vw;
        word-wrap: break-word;
        word-break: break-all;
        outline: none;
        border: none;
    
    }

    textarea {
        width: 100%;
        height: 100px;
        outline: none;
        border: none;
    }

    ul {
        display: flex;
        justify-content: start;
        align-items: flex-end;
        text-decoration: none;
        list-style: none;
        margin-bottom: 20px;
        margin-top: 20px;
        font-weight: bolder;
    }

    li {
        padding-left: 10px;
        padding-right: 10px;
        color: #bdbec5;
        font-weight: 900;
        font-size: 20px;
    }




/* Media Queries */

@media (max-width: 1400px) {


    .grid {
        grid-template-columns: 1fr 1fr;

    }

    .videoThumbnail {
        max-width: 30vw;
    }


@media  (max-width:1000px) {
    .grid {
        grid-template-columns: 1fr;
    
    }

    .videoThumbnail {
        max-width: 40vw;
    }

    .videoCard {
        display: flex;
    }


    .profilePictureHeader {
        display: flex;
        justify-content: start;
        align-items: start;
    }

    .profilePicture {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        padding-left: 20px;
        }

    .userInfo {
        display: flex;
    }

}

@media (max-width:630px) {
    .videoCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .videoThumbnail {
        max-width: 60vw;
    }
}

}


</style>




<!-- What We Want

- Seperate Tabs for:
    - Activity feed 
    - Media Posted 
        - Ability to Blur content for non logged in users 
    - 

     -->