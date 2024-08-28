document.querySelectorAll('ul#menu li').forEach(function(item) {
    item.addEventListener('click', function() {
        const foodName = item.querySelector('h3').textContent;
        const foodPrice = item.querySelector('p').textContent;
        alert(`You selected ${foodName}, which costs ${foodPrice}.`);
    });
});
