var form = document.getElementById("myForm")

fetch("https://api.github.com/users?since=0")
.then((result) => result.json() )
.then ((users) => {
 // console.log(data.login) 

var login = document.getElementById("users");
console.log(users.length)
 users.forEach(user => {
   console.log(user);
  login.innerHTML += "<li>" + user.login +"</li>";
  login.innerHTML += "<a href="+ user.html_url + "><img src=" + user.avatar_url+" width=\"100px\" height=\"100px\" /></a>"
 })
})

