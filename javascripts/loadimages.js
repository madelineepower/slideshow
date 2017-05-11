"use strict";
var imageData;

let showImages = (data) => {
  console.log("data", data);
  var imageData = data;
  console.log(data[0].image);
  if(data){
    for (var i = 0; i < data.length; i++) {
      var currentpic = data[i].image;
      var currentcaption = data[i].caption;
      $("#thumbnails").append(`<div class="col-md-4 col-sm-4 col-xs-4">
                                  <div class="thumbnail kitchen-image">
                                      <img class="pic" src="${currentpic}" alt="Kitchen" style="width:100%">
                                      <div class="caption">
                                        <p>${currentcaption}</p>
                                      </div>
                                </div>
                              </div>`
      );
    }
  }
}

$.ajax({
  url:"images.json"
}).done(showImages);
