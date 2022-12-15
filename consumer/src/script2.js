document.addEventListener("DOMContentLoaded", () => {
    var list1 = document.getElementById("g1")
    var list2 = document.getElementById("g2")

    var socket = io.connect()
    socket.on('event', function (value) {
        parsed = JSON.parse(value)
        const accordion = document.createElement("details")
        accordion.innerHTML = "<summary> \
        <div class='lx-avatar'><img src="+ parsed.profile +"></div> \
        <p><b>"+parsed.screen_name+"</b><br/> \
        <b>⏱ </b> "+parsed.time+"<br/> \
        <b>🔁 </b> "+parsed.retweet_count+"<b>&nbsp&nbsp💟 </b>"+parsed.favorite_count+"</p>\
        </summary> \
        <h4>tweet</h4> \
        <p>"+parsed.processed_text+"</p>"

        if (parsed.group === 'blackpink'){
            list1.insertBefore(accordion, list1.children[0])
        } else {
            list2.insertBefore(accordion, list2.children[0])
        }
        
    })
  
  })

