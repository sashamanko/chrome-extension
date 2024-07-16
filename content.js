
// Create eleements
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const wrapper = document.createElement('div');
const container = document.createElement('div');
const button = document.createElement('button');
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Create eleements

// Add attributes
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
wrapper.classList = 'ext_wrapper'
container.classList = 'ext_container'
button.classList = 'ext_button';

button.innerText = '+';
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Add attributes

let imgNum = 1;

button.addEventListener('click', () => {
  wrapper.classList.toggle('active');

  if (wrapper.classList.contains('active')) {
    const input = document.createElement('input');
    const img = document.createElement('img');
    
    const btnContainer = document.createElement('span');
    const barCodeBtn = document.createElement('button');
    const smykImgBtn = document.createElement('button');

    input.classList = 'ext_input'
    input.placeholder = "Wpisz tekst..."
    
    img.classList = 'ext_img';

    btnContainer.classList = 'ext_btn-container'
    barCodeBtn.classList = 'ext_btn';
    smykImgBtn.classList = "ext_btn";

    barCodeBtn.textContent = "Bar-code"
    smykImgBtn.textContent = "Smyk"

    barCodeBtn.addEventListener('click', () => {
      if (!input.value.trim().length) return
      if (btnContainer.children.length >= 4) {
        btnContainer.children[0].remove()
        btnContainer.children[2].remove()
      }
      img.src = `https://www.kreseczki.pl/ind2.php?j=128&ska=2&rot=0&kod=${input.value.toUpperCase()}&typ=png&klk=0e0e0&kres=1&napr=1`

    })

    smykImgBtn.addEventListener('click', () => {
      
      if (isNaN(+input.value.trim()) && !input.value.trim().length) return
      img.src = `https://img.smyk.com/760x/https://bin.smyk.com/media/product/1600/1/i-${input.value.trim()}.jpg`

      if (btnContainer.children.length >= 4) return
      const imgPrevBtn = document.createElement('button');
      const imgNextBtn = document.createElement('button');
    
      imgPrevBtn.classList = 'ext_btn ext_btn-arrow'
      imgNextBtn.classList = 'ext_btn ext_btn-arrow'
      
      imgPrevBtn.textContent = "<"
      imgNextBtn.textContent = ">"

      imgPrevBtn.addEventListener('click', () => {
        if (imgNum === 1) {
          imgNum = 7;
        } else {
          imgNum -= 1;
        }
        img.src = `https://img.smyk.com/760x/https://bin.smyk.com/media/product/1600/${imgNum}/i-${input.value.trim()}.jpg`
      })

      imgNextBtn.addEventListener('click', () => {
        if (imgNum === 7) {
          imgNum = 1;
        } else {
          imgNum += 1;
        }
        img.src = `https://img.smyk.com/760x/https://bin.smyk.com/media/product/1600/${imgNum}/i-${input.value.trim()}.jpg`
      })

      btnContainer.prepend(imgPrevBtn);
      btnContainer.append(imgNextBtn);
    })

    btnContainer.appendChild(barCodeBtn)
    btnContainer.appendChild(smykImgBtn)

    container.appendChild(input);
    container.appendChild(img);
    container.appendChild(btnContainer);

  } else {
    container.innerHTML = ''
  }

});

wrapper.appendChild(container);
wrapper.appendChild(button);
document.body.appendChild(wrapper);