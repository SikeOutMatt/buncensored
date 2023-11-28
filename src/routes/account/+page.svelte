<script>
    import Header from '../../components/header.svelte';
    import profilePicture from '../../lib/assets/profilepicture.jpeg';
    /** @type {import('./$types').PageData} */
    export let data;
    let username = "Matt";
    let subPageType = "Account Info"


    // Fake Data //
    let userFullName = "Matt Johnson";
    let userAddress = "124 Jimmy Street, Las Vegas, NV, 89765";
    let userSubscriptionDate = "11/27/2023";
    let userSubscriptionType = `Bunny Subscription`;
    let userRenewalDate = "12/27/2023";
    let userOptions = "Cancel";
    let userEmail = "mattjohnson@gmail.com";



    import { onMount } from 'svelte';

    onMount(() => {
        let accountBtn = document.getElementById('accountBtn');
        let account = document.getElementById('account');
        let subscriptionBtn = document.getElementById('subscriptionBtn');
        let subscription = document.getElementById('subscriptions');
        let userOrderBtn = document.getElementById('userOrderBtn');
        let orders = document.getElementById('orders');
        let paymentBtn = document.getElementById('paymentBtn');
        let payment = document.getElementById('payment');


        accountBtn.addEventListener('click', () => {
            if (account.style.display === "none") {
                subscription.style.display = "none";
                orders.style.display = "none";
                payment.style.display = "none";
                account.style.display = "block";
                return subPageType = "Account Info"
            } else {
                account.style.display = "block";
                return subPageType = "Account Info";
            }
        });

        subscriptionBtn.addEventListener('click', () => {
            if (subscription.style.display === "none") {
                account.style.display = "none";
                orders.style.display = "none";
                payment.style.display = "none";
                subscription.style.display = "block";
                return subPageType = "Your Subscriptions"
            } else {
                subscription.style.display = "none";
                account.style.display = "block";
                return subPageType = "Account Info";
            }
        });

        userOrderBtn.addEventListener('click', () => {
            if (orders.style.display === "none") {
                account.style.display = "none";
                subscription.style.display = "none";
                payment.style.display = "none";
                orders.style.display = 'block';
                return subPageType = "Your Orders"
            } else {
                orders.style.display = "none";
                account.style.display = "block";
                return subPageType = "Account Info";
            }
        });

        paymentBtn.addEventListener('click', () => {
            if (payment.style.display === "none") {
                account.style.display = "none";
                subscription.style.display = "none";
                orders.style.display = "none";
                payment.style.display = 'block';
                return subPageType = "Payment"
            } else {
                payment.style.display = "none";
                account.style.display = "block";
                return subPageType = "Account Info";
            }
        });

 
    });

</script>

<main>
    <Header /> 
    <div>
        <div class="container">
            <div class="grid">
                <div class="profileInfo">  
                    <img class="profilePicture" src={profilePicture} alt="User Profile Picture">
                    <h1> Welcome {username}</h1>
                </div>
                <h1 class="pageType"> {subPageType} </h1>
            </div>
            <div class="grid">
                <div>
                    <h2>  </h2>
                        <ul class="columnFlex">
                            <button class="accountBtn" id="accountBtn" > Account Info</button>
                            <button class="subscriptionBtn" id="subscriptionBtn"> Subscriptions </button>
                            <button class="userOrdertBtn" id="userOrderBtn" > My Orders </button>
                            <button class="paymentBtn" id="paymentBtn" > Payment </button>
                        </ul>
                 </div>
                 <!-- Account Section-->
                 <div class="account" id="account">
                    <div> 
                        <h1 class="headings" > Username: </h1>
                        <h4> {username}</h4>
                        <input class="input" type="text" aria-label="Username" placeholder="{username}"  /> 
                        <button> Update </button>
                    </div>
                    <div> 
                        <h1 class="headings"> Full Name:</h1>
                        <h3> {userFullName} </h3>
                    </div>
                    <div> 
                        <h1 class="headings"> Address </h1>
                        <h3> {userAddress}</h3>
                    </div>
                    <div> 
                        <h1 class="headings"> E-mail:</h1>
                        <h3> {userEmail} </h3>
                    </div>

                 </div>
                <!-- Subscriptions Section-->

                 <div class="subscriptions" id="subscriptions" >
                   <table>
                    <tr> 
                        <th> Date</th>
                        <th> Subscription Type</th>
                        <th> Renewal Date </th>
                        <th> Options</th>
                    </tr>
                    <tr> 
                        <td> {userSubscriptionDate}</td>
                        <td> {userSubscriptionType }</td>
                        <td> {userRenewalDate}</td>
                        <td> {userOptions}</td>
                    </tr>
                   </table>
                 </div>
                 <div class="orders" id="orders"> 
                        <table> 
                            <tr>
                                <th> Product </th>
                                <th> Date </th>
                                <th> Price </th>
                                <th> Auto Renewal </th>
                                <th> Link </th>
                            </tr>
                            <tr>
                                <td> Buncensored Membership </td>
                                
                                <td> 11/28/2023</td>
                                <td> 19.95/month </td>
                                <td> Yes </td>
                                <td> <a href="/"> Access Video</a></td>
                            </tr>
                        </table>
                 </div>
                 <div class="payment" id="payment">
                        <h1> Default Payment Method </h1>
                        <div class="grid">
                            <div class="flexColumn"> 
                                <h3> Card ending in 1111 </h3>
                                <div class="flex">
                                    <button> Change Payment Method </button>
                                    <button> Update Payment Method </button>
                                </div>
                            
                            </div>
                      

                        </div>
                 </div>

          </div>

            </div>
        </div>

</main>


<style>

    * {
        font-family: 'Kanit', sans-serif;
    }
 .container {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 30px;

    }

    .profilePicture {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    .profileInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }



    ul {
        list-style:none;

    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .account {
        display: block;
        grid-template-columns: 1fr 1fr;
        padding-left: 20px;


    }

    .subscriptions {
        display: none;
    }

    .headings {
        font-size: 20px;
        font-family: 'Kanit', sans-serif;
        color: #00AEEF;
    }

    .pageType {
        font-size: 30px;
        font-family: 'Kanit', sans-serif;
        color: #00AEEF;

    }

    .input {
        border-radius: 20px;
        box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.25);
        height: 25px;
        padding: 5px;
    }

    .columnFlex {
        display: flex;
        flex-direction: column;
        
    }

    .flex {
        display: flex;
    }

    h3 {
        font-size: 20px;
        font-family: 'Kanit', sans-serif;
    }

    th {
        font-size: 20px;
        color: #00AEEF;
        text-align: start;
        padding-left: 20px;
    }

    td {
        font-size: 20px;
        text-align: start;
        padding-left: 20px;
    }

    table {
    width: 100%;
    }

button {
    border-color: black;
    border-radius: 10px;
    padding: 10px;
    font-weight: 900;
    margin: 10px 0px;
    background-color:white;
}

button:hover {
    box-shadow: 0px 0px 10px 2px;
}

.orders {
    display: none;
}

.payment {
    display: none;
}

</style>