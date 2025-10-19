// Smooth scroll for Explore button
document.getElementById('exploreBtn').addEventListener('click', () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

// Stock cards 
const stocks = [
    {name:"RELIANCE", rating:85, action:"Buy", url:"https://www.tradingview.com/symbols/NSE-RELIANCE/"},
    {name:"TCS", rating:60, action:"Hold", url:"https://www.tradingview.com/symbols/NSE-TCS/"},
    {name:"INFY", rating:40, action:"Sell", url:"https://www.tradingview.com/symbols/NSE-INFY/"},
    {name:"HDFC", rating:75, action:"Buy", url:"https://in.tradingview.com/symbols/NSE-HDFCBANK/"},
    {name:"ICICI", rating:50, action:"Hold", url:"https://www.tradingview.com/symbols/NSE-ICICIBANK/"},
    {name:"SBIN", rating:35, action:"Sell", url:"https://in.tradingview.com/symbols/NSE-SBIN/"},
    {name:"WIPRO", rating:70, action:"Buy", url:"https://www.tradingview.com/symbols/NSE-WIPRO/"},
    {name:"LT", rating:45, action:"Hold", url:"https://www.tradingview.com/symbols/NSE-LT/"},
    {name:"AXIS", rating:55, action:"Hold", url:"https://in.tradingview.com/symbols/NSE-AXISBANK/"},
    {name:"MARUTI", rating:80, action:"Buy", url:"https://www.tradingview.com/symbols/NSE-MARUTI/"},
];

// Container for stock cards
const stockContainer = document.getElementById('stockContainer');

// To generate stock cards
stocks.forEach(stock => {
    const card = document.createElement('div');
    card.classList.add('stock-card');

    // Color
    const color = stock.rating >= 70 ? '#00bfae' : 
                  stock.rating >= 50 ? '#FFD700' : 
                  '#ff4d4d';

    // Card content
    card.innerHTML = `
        <h3>${stock.name}</h3>
        <p>Rating: ${stock.rating}%</p>
        <p>Action: <span style="color:${color}; font-weight: bold;">${stock.action}</span></p>
        <div class="rating-bar" style="width:${stock.rating}%; background-color:${color}"></div>
    `;

    // Redirect to stock on tradingView
    card.addEventListener('click', () => {
        window.open(stock.url, '_blank');
    });

    stockContainer.appendChild(card);
});

// Contact 
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    console.log("Contact Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you! Your message has been sent.");
    this.reset();
});