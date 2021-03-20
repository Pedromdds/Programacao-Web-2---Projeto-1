$(document).ready(function () {

    var user = ''

    $("#form").submit(function (event) {
        event.preventDefault()

        var username = $("#username").val()

        searchUsers(username)
    })

    $("#username").change(function () {
        var username = $("#username").val()

        searchUsers(username)
    })

    function searchUsers(username) {

        $("#resultado-pesquisa").empty()


        $.get("https://api.github.com/search/users?q=" + username + "+in:user&per_page=100", function (data) {
            console.log(data)

            data.items.forEach(item => {
                user = `<a target="blank" href="${item.html_url}"><img class="rounded mx-auto d-block width="100"
                 height="100"src="${item.avatar_url}"/></a>`

                $("#resultado-pesquisa").append(user)
            });

        })
    }
})

//------------------------------------

var form = document.getElementById("myForm")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')

    //document.getElementById("result").innerHTML = ""

    fetch("https://api.github.com/users/" + originalName).then((result) => result.json()).then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML =
            `<a target="_blank" href="https://www.github.com/${originalName}?tab=repositories"><img src="${data.avatar_url}"/>`
    })
})