let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
function showInfo() {
  if(moreInfo.style.display === 'none'){
    moreInfo.style.display = 'block';
    readMore.innerHTML = 'Read Less';
  }else{
    moreInfo.style.display = 'none';
    readMore.innerHTML = 'Read More';
  }

}

readMore.addEventListener('click', showInfo)
