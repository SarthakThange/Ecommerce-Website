document.getElementById('faq-title').addEventListener('click', function() {
    var content = document.getElementById('faq-content');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
});