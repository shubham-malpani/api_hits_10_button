// import _ from "lodash";
//import data from './data.json'
const url = "http://127.0.0.1:8000/poll/camfeed/";

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
  },
  "cam3" : {
      "camera_id": 3,
      "person_id": "123",
      "is_present": true
  },
  "cam4" : {
      "camera_id": 4,
      "person_id": "124",
      "is_present": true
  },
  "cam5" : {
      "camera_id": 5,
      "person_id": "125",
      "is_present": false
  },
  "cam6" : {
      "camera_id": 6,
      "person_id": "126",
      "is_present": true
  },
  "cam7" : {
      "camera_id": 7,
      "person_id": "127",
      "is_present": true
  },
  "cam8" : {
      "camera_id": 8,
      "person_id": "128",
      "is_present": false
  },
  "cam9" : {
      "camera_id": 9,
      "person_id": "129",
      "is_present": true
  },
  "cam10" : {
      "camera_id": 10,
      "person_id": "130",
      "is_present": false
  }
}

function onbtnClick(event){
    console.log(event)
    
    let data_config =  data[event.id]

    let request = {
        "camera_details": "face_exists",
        "message": "face found",
        "face_cordinate": "[]",
        "match_score": "Matched",
        "person_image_url": ""
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

