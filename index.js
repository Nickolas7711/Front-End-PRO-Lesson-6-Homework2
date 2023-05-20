// ['Richard','Of','York','Gave','Battle','In','Vain'];

hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = destination.concat(native, hero);
rainbow.reverse();

rainbow.splice(0, 1, 'Richard');
rainbow.splice(3, 0, 'Gave','Battle');
rainbow.pop()
rainbow.push('Vain');

rainbowHtml = '';

for (i = 0; i < rainbow.length; i++) {
    element = rainbow[i];

    switch (element) {
        case 'Richard':
            rainbowHtml += `<div class='box'><div class='circle' style='background-color: #f54336'>
            </div><div class='text'>${rainbow[i]}</div></div>`;
            break;
        case 'Of':
            rainbowHtml += `<div class='box'><div class='circle' style='background-color: #ff9901'>
            </div><div class='text'>${rainbow[i]}</div></div>`;
            break;
        case 'York':
            rainbowHtml += `<div class='box'><div class='circle' style='background-color: #ffec3b'>
            </div><div class='text'>${rainbow[i]}</div></div>`;
            break;
        case 'Gave':
            rainbowHtml += `<div class='box'><div class='circle' style='background-color: #8cc44a'>
            </div><div class='text'>${rainbow[i]}</div></div>`;
            break;
        case 'Battle':
            rainbowHtml += `<div class='box'><div class='circle' style='background-color: #03aaf4'>
            </div><div class='text'>${rainbow[i]}</div></div>`;
            break;
        case 'In':
            rainbowHtml += `<div class='box'><div class='circle' style='background-color: #4051b6'>
            </div><div class='text'>${rainbow[i]}</div></div>`;
            break;
        case 'Vain':
            rainbowHtml += `<div class='box'><div class='circle' style='background-color: #9c27b0'>
            </div><div class='text'>${rainbow[i]}</div></div>`;
            break;
    }
}

document.write(`<div class="wrapp">
${rainbowHtml}
</div>`);