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

// SVG representing a pencil icon.
const pencilIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
pencilIcon.setAttribute('viewBox', '0 0 20 14');
pencilIcon.setAttribute('width', '20px');
pencilIcon.setAttribute('height', '14px');

const pencilShaft = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
pencilShaft.setAttribute('x', '9');
pencilShaft.setAttribute('y', '0');
pencilShaft.setAttribute('width', '6px');
pencilShaft.setAttribute('height', '16px');
pencilShaft.setAttribute('transform', 'rotate(58 13 6)');
pencilShaft.style.opacity = '1';
pencilShaft.style.stroke = '#ffffff';
pencilShaft.style.strokeWidth = '0.2';
pencilShaft.style.strokeOpacity = '1';
pencilShaft.style.fill = '#ffffff';
pencilShaft.style.fillOpacity = '1';
pencilShaft.style.strokeLineJoin = 'round';
pencilIcon.appendChild(pencilShaft);

const pencilPoint = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pencilPoint.setAttribute('d', 'M 0 13, 0 8, 6 16, Z');
pencilPoint.style.opacity = '1';
pencilPoint.style.stroke = '#ffffff';
pencilPoint.style.strokeWidth = '0.2';
pencilPoint.style.strokeOpacity = '1';
pencilPoint.style.fill = '#ffffff';
pencilPoint.style.fillOpacity = '1';
pencilPoint.style.strokeLineJoin = 'round';
pencilIcon.appendChild(pencilPoint);

// SVG representing a random icon.
const randomIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
randomIcon.setAttribute('viewBox', '0 0 18 18');
randomIcon.setAttribute('width', '14px');
randomIcon.setAttribute('height', '14px');

const tlRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
tlRect.setAttribute('x', '0');
tlRect.setAttribute('y', '12');
tlRect.setAttribute('width', '6px');
tlRect.setAttribute('height', '6px');
tlRect.style.opacity = '1';
tlRect.style.stroke = '#000000';
tlRect.style.strokeWidth = '0.2';
tlRect.style.strokeOpacity = '1';
tlRect.style.fill = '#ffffff';
tlRect.style.fillOpacity = '1';
tlRect.style.strokeLineJoin = 'round';
randomIcon.appendChild(tlRect);

const tmRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
tmRect.setAttribute('x', '6');
tmRect.setAttribute('y', '12');
tmRect.setAttribute('width', '6px');
tmRect.setAttribute('height', '6px');
tmRect.style.opacity = '1';
tmRect.style.stroke = '#000000';
tmRect.style.strokeWidth = '0.2';
tmRect.style.strokeOpacity = '1';
tmRect.style.fill = '#ffffff';
tmRect.style.fillOpacity = '1';
tmRect.style.strokeLineJoin = 'round';
randomIcon.appendChild(tmRect);

const trRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
trRect.setAttribute('x', '12');
trRect.setAttribute('y', '12');
trRect.setAttribute('width', '6px');
trRect.setAttribute('height', '6px');
trRect.style.opacity = '1';
trRect.style.stroke = '#000000';
trRect.style.strokeWidth = '0.2';
trRect.style.strokeOpacity = '1';
trRect.style.fill = '#000000';
trRect.style.fillOpacity = '1';
trRect.style.strokeLineJoin = 'round';
randomIcon.appendChild(trRect);

const mlRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
mlRect.setAttribute('x', '0');
mlRect.setAttribute('y', '6');
mlRect.setAttribute('width', '6px');
mlRect.setAttribute('height', '6px');
mlRect.style.opacity = '1';
mlRect.style.stroke = '#000000';
mlRect.style.strokeWidth = '0.2';
mlRect.style.strokeOpacity = '1';
mlRect.style.fill = '#000000';
mlRect.style.fillOpacity = '1';
mlRect.style.strokeLineJoin = 'round';
randomIcon.appendChild(mlRect);

const mmRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
mmRect.setAttribute('x', '6');
mmRect.setAttribute('y', '6');
mmRect.setAttribute('width', '6px');
mmRect.setAttribute('height', '6px');
mmRect.style.opacity = '1';
mmRect.style.stroke = '#000000';
mmRect.style.strokeWidth = '0.2';
mmRect.style.strokeOpacity = '1';
mmRect.style.fill = '#000000';
mmRect.style.fillOpacity = '1';
mmRect.style.strokeLineJoin = 'round';
randomIcon.appendChild(mmRect);

const mrRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
mrRect.setAttribute('x', '12');
mrRect.setAttribute('y', '6');
mrRect.setAttribute('width', '6px');
mrRect.setAttribute('height', '6px');
mrRect.style.opacity = '1';
mrRect.style.stroke = '#000000';
mrRect.style.strokeWidth = '0.2';
mrRect.style.strokeOpacity = '1';
mrRect.style.fill = '#000000';
mrRect.style.fillOpacity = '1';
mrRect.style.strokeLineJoin = 'round';
randomIcon.appendChild(mrRect);

const llRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
llRect.setAttribute('x', '0');
llRect.setAttribute('y', '0');
llRect.setAttribute('width', '6px');
llRect.setAttribute('height', '6px');
llRect.style.opacity = '1';
llRect.style.stroke = '#000000';
llRect.style.strokeWidth = '0.2';
llRect.style.strokeOpacity = '1';
llRect.style.fill = '#ffffff';
llRect.style.fillOpacity = '1';
llRect.style.strokeLineJoin = 'round';
randomIcon.appendChild(llRect);

const lmRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
lmRect.setAttribute('x', '6');
lmRect.setAttribute('y', '0');
lmRect.setAttribute('width', '6px');
lmRect.setAttribute('height', '6px');
lmRect.style.opacity = '1';
lmRect.style.stroke = '#000000';
lmRect.style.strokeWidth = '0.2';
lmRect.style.strokeOpacity = '1';
lmRect.style.fill = '#000000';
lmRect.style.fillOpacity = '1';
lmRect.style.strokeLineJoin = 'round';
randomIcon.appendChild(lmRect);

const lrRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
lrRect.setAttribute('x', '12');
lrRect.setAttribute('y', '0');
lrRect.setAttribute('width', '6px');
lrRect.setAttribute('height', '6px');
lrRect.style.opacity = '1';
lrRect.style.stroke = '#000000';
lrRect.style.strokeWidth = '0.2';
lrRect.style.strokeOpacity = '1';
lrRect.style.fill = '#ffffff';
lrRect.style.fillOpacity = '1';
lrRect.style.strokeLineJoin = 'round';
randomIcon.appendChild(lrRect);

exports.play = playIcon;
exports.pause = pauseIcon;
exports.pencil = pencilIcon;
exports.random = randomIcon;
