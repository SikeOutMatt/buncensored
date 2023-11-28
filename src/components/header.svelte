
<script>



</script>

<main>
    <div class="grid">
        <div>
            <h1> LOGO 
                <img src="" alt="">
            </h1>
        </div>
       <div >
        <nav>
            <ul class="centerNav">
                <li> <a href="/"> Home </a> </li>
                <li> Messages </li>
                <li> Content </li>
            </ul>
        </nav>
        </div>
        <div>
            <div class="account">
                <ul>
                    <li> <a href="/account"> Account </a> </li>
                </ul>
            </div>
       
       </div>
    </div>
</main>


<style>
    main {
        background-color: gray;
        margin: 0px;
        padding: 5px;
    }


ul {
    display: flex;
    justify-content: space-around;
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



</style>
