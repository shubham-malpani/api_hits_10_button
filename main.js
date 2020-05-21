const url = "http://api.com/";

let data = {
  "cam1" : {
      "camera_id": 1,
      "person_id": "121",
      "is_present": true
  },
  "cam2" : {
      "camera_id": 2,
      "person_id": "122",
      "is_present": false
  }
}

function onbtnClick(event){
    console.log(event)
    
    let data_config =  data[event.id]

    let request = {
        //payload
    }

    request = Object.assign(request, data_config);

    send(request)
}


function send(request) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

setInterval(function (){
    let date = new Date()
    request = Object.assign(request, { date : date })
    
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(request) 
    };
  
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
    },15000)

}

