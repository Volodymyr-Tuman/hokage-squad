const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));

async function getdata() {
    const response = await fetch("https://discord.com/api/guilds/1416734785635745943/widget.json")
    const data = await response.json()
    document.querySelector("#online-players").innerHTML=data.presence_count

    
}

getdata()