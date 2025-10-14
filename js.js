document.getElementById('exploreBtn').addEventListener('click', () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

function showFeatureInfo(info) {
    alert(info);
}

const stocks = [
    {name:"RELIANCE", rating:85, action:"Buy"},
    {name:"TCS", rating:60, action:"Hold"},
    {name:"INFY", rating:40, action:"Sell"},
    {name:"HDFC", rating:75, action:"Buy"},
    {name:"ICICI", rating:50, action:"Hold"},
    {name:"SBIN", rating:35, action:"Sell"},
    {name:"WIPRO", rating:70, action:"Buy"},
    {name:"LT", rating:45, action:"Hold"},
    {name:"AXIS", rating:55, action:"Hold"},
    {name:"MARUTI", rating:80, action:"Buy"},
];

const stockContainer = document.getElementById('stockContainer');

stocks.forEach(stock => {
    const card = document.createElement('div');
    card.classList.add('stock-card');


    const color = stock.rating >= 70 ? '#00bfae' : // Buy
                  stock.rating >= 50 ? '#FFD700' : // Hold
                  '#ff4d4d';                       // Sell

    card.innerHTML = `
        <h3>${stock.name}</h3>
        <p>Rating: ${stock.rating}%</p>
        <p>Action: <span style="color:${color}; font-weight: bold;">${stock.action}</span></p>
        <div class="rating-bar" style="width:${stock.rating}%; background-color:${color}"></div>
    `;
    stockContainer.appendChild(card);
});

document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
});
