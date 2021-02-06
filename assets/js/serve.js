

function initAOS() {

    AOS.init(
        {
            offset: 120, // offset (in px) from the original trigger point
            // delay: 0, // values from 0 to 3000, with step 50ms
            // duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            // once: false, // whether animation should happen only once - while scrolling down
            // mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        }
    );
}


function setCopyRight() {
    const div = document.createElement('div');

    div.className = 'row';

    div.innerHTML = `
  <div id="dev-info">
            <span class="number">&copy;2021  </span><span>PFC - Desenvolvido por <a href="https://nojoje.com" target="_blank">NoJoJe</a> </span>
        </div>
  `;

    document.getElementById('content').appendChild(div);
}


export function run() {
    initAOS();
    setCopyRight();
}