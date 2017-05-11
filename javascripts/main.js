"use strict";

// let SlideShowDiv = $("#slideshow");
let SlideShowButton = $("#SlideShowButton");
let SlideShowDiv = $("#slideshow")
let imageArray = [];
let captionArray = [];

SlideShowButton.click(function() {

  let organizeData = (data) => {
    for (var i = 0; i < data.length; i++) {
      imageArray.push(data[i].image);
      captionArray.push(data[i].caption);
    }
    console.log(imageArray);
    console.log(captionArray);
    Slideshow(imageArray, captionArray);
  }

    let Slideshow = (data, caption) => {
              var i = 0;
              function showPics (data, caption) {
                 setTimeout(function () {
                   var newsrc = [data[i]];
                   var newcap = captionArray[i];
                   ($("#imageTag").attr("src", newsrc)).fadeIn(1000).delay(2000).fadeOut(1000);
                   document.getElementById('captionDiv').innerHTML = `<p>${newcap}</p>`
                    i++;
                    if (i < 6) {
                       showPics(data);
                    }
                 }, 4000)
              }

                showPics(data);

        }

        $.ajax({
          url:"images.json"
        }).done(organizeData);

})

// 2. includes arrows so that when a use clicks on the arrow it goes to the next photo




// when a use clicks on an image - begin the slideshow
