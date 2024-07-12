fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.urls.json);
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjA3NzMwMjV8&ixlib=rb-4.0.3&q=80&w=1080)`;
    document.getElementById("author").textContent = `By: OC Gonzalez
`;
  });

fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then((res) => {
    if (!res.ok) {
      throw Error("Somthing went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById("crypto-top").innerHTML = `
    <img src= ${data.image.small}/>
    <span> ${data.name} </span>
    `;
    document.getElementById("crypto-bot").innerHTML = `
    <ul>
    <li>Current price: R${data.market_data.current_price.zar} </li> 
    <li>24 Hour-High: R${data.market_data.high_24h.zar} </li>
    <li>24 Hour-Low: R${data.market_data.low_24h.zar} </li>
    </ul>`;
  })
  .catch((err) => console.error(err));

setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date().toLocaleTimeString("en-sa", { timeStyle: "short" });
  document.querySelector(".time").textContent = date;
}
