// SVG representing a play icon.
const playIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
playIcon.setAttribute('viewBox', '0 0 18 18');
playIcon.setAttribute('width', '14px');
playIcon.setAttribute('height', '14px');

const playIconContent = document.createElementNS('http://www.w3.org/2000/svg', 'path');
playIconContent.setAttribute('d', 'M 0 0, 0 18, 18 9 Z');
playIconContent.style.opacity = '1';
playIconContent.style.stroke = '#ffffff';
playIconContent.style.strokeWidth = '0.2';
playIconContent.style.strokeOpacity = '1';
playIconContent.style.fill = '#ffffff';
playIconContent.style.fillOpacity = '1';
playIconContent.style.strokeLineJoin = 'round';
playIcon.appendChild(playIconContent);

// SVG representing a pause icon.
const pauseIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
pauseIcon.setAttribute('viewBox', '0 0 18 18');
pauseIcon.setAttribute('width', '14px');
pauseIcon.setAttribute('height', '14px');

const leftRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
leftRect.setAttribute('x', '0');
leftRect.setAttribute('y', '0');
leftRect.setAttribute('width', '6px');
leftRect.setAttribute('height', '18px');
leftRect.style.opacity = '1';
leftRect.style.stroke = '#ffffff';
leftRect.style.strokeWidth = '0.2';
leftRect.style.strokeOpacity = '1';
leftRect.style.fill = '#ffffff';
leftRect.style.fillOpacity = '1';
leftRect.style.strokeLineJoin = 'round';
pauseIcon.appendChild(leftRect);

const rightRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rightRect.setAttribute('x', '12');
rightRect.setAttribute('y', '0');
rightRect.setAttribute('width', '6px');
rightRect.setAttribute('height', '18px');
rightRect.style.opacity = '1';
rightRect.style.stroke = '#ffffff';
rightRect.style.strokeWidth = '0.2';
rightRect.style.strokeOpacity = '1';
rightRect.style.fill = '#ffffff';
rightRect.style.fillOpacity = '1';
rightRect.style.strokeLineJoin = 'round';
pauseIcon.appendChild(rightRect);
exports.play = playIcon;
exports.pause = pauseIcon;
