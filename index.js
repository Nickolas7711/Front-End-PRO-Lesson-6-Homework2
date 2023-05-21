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
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

for (i = 0; i < rainbow.length; i++) {
    rainbowHtml += `<div class='box'><div class='circle' style='background-color: ${colors[i]}'></div>
    <div class='text'>${rainbow[i]}</div></div>`;
}

document.write(`<div class="wrapp">
${rainbowHtml}
</div>`);