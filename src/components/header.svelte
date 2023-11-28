
<script>
import Logo from '../lib/assets/logo.webp';
import accountIcon from '../lib/assets/user.png';


</script>

<main>
    <div class="grid">
        <div class="flex">
            <h1> 
               <a href="/"> <img class="logo" src={Logo} alt="Buncensored Logo" height="100px" width="200px"></a> 
            </h1>
        </div>
       <div class="flex">
        <nav>
            <ul>
                <li class="centerNav"> <a href="/"> Home </a> </li>
                <li class="centerNav"> Messages </li>
                <li class="centerNav"> Content </li>
            </ul>
        </nav>
        </div>
        <div class="flex">
            <div class="account">
                <div class="flex"> 
                   <a href="/account"> <img  src={accountIcon} height="30px" width="30px"> </a>
                    <li><a href="/account"> Account </a> </li>
                </div>



                <ul>
                    
                </ul>
            </div>
       
       </div>
    </div>
</main>


<style>
    main {
        margin: 0px;
        padding: 0px;
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

.account {
    border-radius: 5px;
    padding: 5px;
    font-family: 'Kanit', sans-serif;
    font-weight: 900;
    font-size: 20px;
    display: flex;
    justify-content: start;
}

.grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr ;
}

.logo {
    padding-left: 50px;

}
.flex {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}


</style>
