var yes = [
    "mrrp :3",
    "i just wanna mrrp nya MROW!",
    "estrogen",
    "null",
    "im starting to run out of ideas",
    "i love gayming",
    "i wil hak u! wath out!!",
    "your ip: 127.0.0.1, prepare for the attack!!!11",
    "gimme more ideas ples :c",
    "professional kaboom.pw hacker!",
    "This website is made using Wix.com",
    "grandma is really doijng tech",
    "meow.",
    "mrrrp nYAAA :3"
]

document.getElementById("motd").innerText = yes[Math.round(Math.random()*yes.length)]

document.getElementById('discord').addEventListener('mousemove', (event) => {
    document.getElementById('discord-popup').style.visibility = 'inherit';
    document.getElementById('discord-popup').style.left = event.clientX-20+"px"
    document.getElementById('discord-popup').style.top = event.clientY-40+"px"
    
})
document.getElementById('discord').addEventListener('mouseleave', () => {
    document.getElementById('discord-popup').style.visibility = 'hidden';
})