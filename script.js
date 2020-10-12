const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Promt to select media stream, pass to video element and play

async function selectMediaStream() {
    try {
       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream;
       videoElement.onloadedmetadata = () => {
           videoElement.play();
       }

    } catch(error) {
        //catch error here
    }
}

button.addEventListener('click' , async () => {
     //Disable the button
     button.disabled = true;
     //Start picture in picture
     await videoElement.requestPictureInPicture();
     // reset the button
     button.disabled = false;

});

selectMediaStream();


