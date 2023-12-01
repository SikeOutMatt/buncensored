<script>
    import Header from '../../../components/header.svelte';
    import videoIcon from '../../../lib/assets/video.png'
    import profilePicture from '../../../lib/assets/profilepicture.jpeg'
    import profileBanner from '../../../lib/assets/profilebanner.png'
    import videoThumbnail from '../../../lib/assets/videothumbnail.png'
    import postPicture from '../../../lib/assets/postpicture.webp'
    import Sidebar from '../../../components/sidebar.svelte'
    import verified from '../../../lib/assets/verified.png'


    import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    let dataUsername = "Username";
    let userFollowers = "1.90k"

    onMount(() => {

    let content = document.getElementById("content");
    let activityFeed = document.getElementById("activityFeed");
    let activityFeedBtn = document.getElementById("activityFeedBtn");
    let contentBtn = document.getElementById("contentBtn");
    let postSubmitBtn = document.getElementById("postSubmitBtn");
    let textArea = document.getElementById("textarea");
    let newDiv;



    contentBtn.addEventListener("click", function() {
        activityFeed.style.display = "none";
        content.style.display = "block";
        contentBtn.style.color = "red";
   
    })

    activityFeedBtn.addEventListener("click", function() {
        activityFeed.style.display = "block";
        content.style.display = "none";
        activityFeedBtn.style.color = "blue";
    })


    postSubmitBtn.addEventListener("click", function() {
        postSubmit();
    })

    function addElement(tagName) {
    const newElement = document.createElement(tagName);
    return newElement;

    }

    function postSubmit() {

        let postContent = textArea.value;
        newDiv = addElement("div");
        newDiv.textContent = postContent;
        const parentElement = document.getElementById("activityFeed");
        parentElement.classList.add("post");
        parentElement.appendChild(newDiv);
        textArea.value = "";




    }
})

</script>


<main>
    <Header />
    
    <div class="container">
        <div class="background">
             <div class="profileHeader">
            <img class="profileBanner relative" src={profileBanner} > 
             </div>
            <div class="profilePictureHeader">
                 <div class="flex belowBanner">
                      <img src={profilePicture} class="profilePicture">
                      <div class="flexColumn">
                        <div class="flexVerified">
                            <h1> MyUsername</h1>
                            <img class="verifiedBadge" src={verified} height="30px" width="30px"> 
                        </div>
                        <div class="flexBetween fullWidth">
                            <div class="">
                                <h4> @MyUsername</h4>
                                <h5> Followers 1.98k</h5>
                            </div>
                            <div>
                                <button class="followBtn"> Subscribe </button>
                            </div>
                        </div>
                   
                      </div>
                    </div>
                </div>
        </div>
        <div>
            <ul class="">
                <a class="activityFeedBtn" id="activityFeedBtn"> <li>Activity Feed</li></a>
                <a id="contentBtn"> <li class="contentBtn">Content</li> </a>  
                <li> Vault </li>
            </ul>
        </div>


<!-- Activity Feed Section -->


        <div class="activityFeed" id="activityFeed">
            <div class="createPost">
                <div class="">
                    <div>
                        <textarea id="textarea" placeholder="Write your message here..."> </textarea>
                    </div>
                    <div class="flexBetween createPostFooter"> 
                        <div>
                            <img class="videoIcon" src={videoIcon} width="30px" height="30px" >
                        </div>
                        <div>
                            <button id="postSubmitBtn" class="submitBtn"> Submit </button>
                        </div>
                    </div>
                    
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

    .fullWidth {
        width: 100%;
    }

    main {
        background-color: #f7f7f9;
    }

    *{
        margin: 0;
        font-family: 'Kanit', sans-serif;
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
        justify-content: start;
        align-items: center;
        margin-top: 10px;
        padding-bottom: 30px;
        margin-left: 30px;

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

    .flex {
        display: flex;
        justify-content: start;
        align-items: center;
    }

    .flexColumn
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding-left: 20px;
    }

    .flexColumnStart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    .flexBetween {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .followBtn {
        background-color: #00AEEF;
        border: none;
        color: white;
        padding: 5px 10px;
        border-radius: 10px;
        font-weight: 600;
    
    }

/* Profile Header Section */

    .profileHeader {
        display: flex;

    }

    .profileBanner {
        border-radius: 20px;
        width: 100%;
        height: 200px;
    }

    .profilePicture {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        padding-top: 10px;
    }

    .verifiedBadge {
        padding-left: 10px;
    }

    .flexVerified {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .belowBanner {
        width: 100%;
    }

    .videoIcon {
        padding-left: 10px;
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

    .createPost {
        border-radius: 20px;
        margin: auto;
        width: 50vw;
        background-color: white;

    }

    .createPostFooter {
        background-color: #bdbec5;
        margin-bottom: 20px;
        border-radius: 0px 0px 20px 20px;
    }

    textarea {
        resize: none;
        border-radius: 20px 20px 0px 0px;
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
        color: white;
    }

    .content {
        display: none;
        width: 70vw;
        margin: auto;
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

    .post {
        width: 95vw;
    }

    .createPost {
        width: 95vw;;
    }

    .container {
        width: 100%;
        margin: 0;
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

    .flex {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

  

  
}


}


@font-face {
    font-family: 'Kanit', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

}

</style>




<!-- What We Want

- Seperate Tabs for:
    - Activity feed 
    - Media Posted 
        - Ability to Blur content for non logged in users 
    - 

     -->