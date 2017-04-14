var addRippleEffect = function (e) {
    var target = e.target,
        rect = target.getBoundingClientRect(),
        ripple = document.createElement('span'),
        diameter = Math.max(rect.width, rect.height),
        top = e.pageY - rect.top - diameter / 2 - window.scrollY,
        left = e.pageX - rect.left - diameter / 2 - window.scrollX;
    ripple.style.height = ripple.style.width = diameter + 'px';
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('ripple', 'show');
    target.appendChild(ripple);
    setTimeout(() => {
        target.removeChild(ripple);
    }, 500);
    return false;
}
Array.prototype.slice.call(document.querySelectorAll('.grid')).forEach(element => {
    element.addEventListener('click', addRippleEffect);
});