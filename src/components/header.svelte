
<script>
import Logo from '../lib/assets/logo.webp';
import HamburgerIcon from '../lib/assets/hamburger.png'
import messageIcon from '../lib/assets/messages.png'
import accountIcon from '../lib/assets/user.png'
import videoIcon from '../lib/assets/video.png'
import { onMount } from 'svelte';



onMount(() => {
   let hamburgerMenu = document.getElementById('hamburgerMenu');
    let sidebar = document.getElementById('sidebar');

    hamburgerMenu.addEventListener('click', () => {
        if (sidebar.style.display === "none") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    });
    });

</script>

<main>

 <div class="flex">
    <div> 
       <a href="/"><img class="logo" src={Logo} width="200" height="100" alt="Logo"></a> 
    </div>
    <div>
        <nav>
            <ul>
                <li> Home </li>
                <li><a href="/"><img src={messageIcon} height="20px" width="20px" alt="Message Icon"> Messages</a></li>
                <li> <a href="/"> <img src={videoIcon} height="20px" width="20px" alt="Video Icon" > Videos </a> </li>
                <li> <a href="/profile/profile"> <img > Profile</a></li>
                <li> <a href="/account"><img src={accountIcon} height="20px" width="20px" alt="User Icon"> Acocunt </a> </li>
            </ul>
        </nav>
    <div> 
        <img src={HamburgerIcon} id="hamburgerMenu" class="flex hamburgerMenu" alt="Hamburger Menu" width="50" height="50"> 
    </div>
    <!-- Sidebar-->
    <div class="sidebar" id="sidebar"> 
        <nav class="sidebarMenu"> 
            <ul class="flexColumn"> 
                <li class="padding" > Home </li>
                <li class="padding"> Messages </li>
                <li class="padding"> Content </li>
                <li class="padding"> <a href="/account"> Account </a> </li>
            </ul>
        </nav>


     </div>
    </div>


      
</main>


<style>

    * {
        font-family: 'Kanit', sans-serif;
    }
    
    main {
        margin: 0px;
        padding: 0px;
    }

    .padding {
        padding-top: 10px;
        padding-bottom: 10px;
    }

ul {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    text-decoration: none;
    list-style: none;
    margin-bottom: 20px;
    margin-top: 20px;
}


li {
    padding-left: 30px;
    padding-right: 30px;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 900;
}

.flex {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
}


.hamburgerMenu {
    display: none;
}

.sidebar {
    display: none;
}

.flexColumn {
    display: flex;
    flex-direction: column;
}

.sidebarMenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

a {
    color: black;
    text-decoration: none;
}



@media (max-width:1000px) {
    .hamburgerMenu {
        display: block;
        padding-right: 50px;
    }

    nav {
        display: none;
    }

    .logo {
        padding-left: 25px;
    }

    .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

@font-face {
    font-family: 'Kanit', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

}

</style>
