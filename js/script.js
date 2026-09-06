const video =document.querySelector("video");

console.log("mp4:", video.canPlayType("video/mp4"));
console.log("WebM:", video.canPlayType("video/webm"));
