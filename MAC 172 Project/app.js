//For the Rating system
let likeCount = 0;
let dislikeCount = 0;

function like(ratingId) {
  let likeCount = parseInt(document.getElementById('like-count-' + ratingId).innerText);
  likeCount++;
  document.getElementById('like-count-' + ratingId).innerText = likeCount;
  document.getElementById('like-icon-' + ratingId).classList.add("liked");
  document.getElementById('dislike-icon-' + ratingId).classList.remove("disliked");
}

function dislike(ratingId) {
  let dislikeCount = parseInt(document.getElementById('dislike-count-' + ratingId).innerText);
  dislikeCount++;
  document.getElementById('dislike-count-' + ratingId).innerText = dislikeCount;
  document.getElementById('dislike-icon-' + ratingId).classList.add("disliked");
  document.getElementById('like-icon-' + ratingId).classList.remove("liked");
}