// $(window).bind('mousewheel', function(event) {
//     if (event.originalEvent.wheelDelta >= 0) {
//         console.log('Scroll up');
//         // document.getElementById('header').scrollIntoView({
//         //     behavior: 'smooth'
//         // })
//     }
//     else {
//         console.log('Scroll down');
//         document.getElementById('projects').scrollIntoView({
//             behavior: 'smooth'
//         })
//     }
// });

var cardIndex = 0;
function nextCard(){
    if(cardIndex === 3){
        cardIndex = 0
    }else{
        cardIndex++
    }
    if(cardIndex === 0){
        document.getElementById('card-title').innerHTML = "Experience"
        document.getElementById('card-description').innerHTML = "I know the following (coding) languages:<br><br>- Node.JS<br>- Java<br>- Lua<br>- HTML and CSS<br>- Javascript"
    }
    if(cardIndex === 1){
        document.getElementById('card-title').innerHTML = "Socials"
        document.getElementById('card-description').innerHTML = "<a href='https://github.com/IuCC123'>GitHub</a><br><a href='https://www.last.fm/user/IuCC'>Last.FM</a><br><a href='https://steamcommunity.com/id/IuCC/'>Steam</a><br>"
    }
    if(cardIndex === 2){
        document.getElementById('card-title').innerHTML = "About me"
        document.getElementById('card-description').innerHTML = "My name is Jamie, I am 15 years old and live in the Netherlands. My birthday is on the 10th of October.<br>I have been coding for over 4 years now<br>and I will always enjoy making cool things with my coding magic."
    }
    if(cardIndex === 3){
        document.getElementById('card-title').innerHTML = "Projects"
        document.getElementById('card-description').innerHTML = "Reko Radio - <a href='https://top.gg/bot/886249208515002449'>Discord bot link</a><br>UselessBot - <a href='https://discord.gg/GtDmwUuqkk'>Discord server invite</a>"
    }
}