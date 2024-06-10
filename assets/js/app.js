function toggleTabBox(tabBox) {
    var activeTab = tabBox.querySelector('.active');
    var tabs = tabBox.querySelectorAll('.tabtext');

    // Toggle active class
    activeTab.classList.remove('active');
    var nextTab = activeTab.nextElementSibling || tabs[0]; 
    nextTab.classList.add('active');

    // Toggle content based on active tab
    var activeTabName = nextTab.getAttribute('data-tab');
    toggleContent(activeTabName);
}

function toggleContent(tabName) {
    var imageContainer = document.getElementById('imageContainer');
    var videoContainer = document.getElementById('videoContainer');

    if (tabName === 'images') {
        imageContainer.style.display = 'block';
        videoContainer.style.display = 'none';
    } else if (tabName === 'videos') {
        imageContainer.style.display = 'none';
        videoContainer.style.display = 'block';
    }
}
