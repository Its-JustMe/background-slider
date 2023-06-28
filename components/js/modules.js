/** Função que remove a classe active de todos os slides
 * @param { HTMLDivElement[] } slides Array contendo todos os slides da página 
 */
export function clearSlides (slides) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            slides[i].classList.remove('active');
        }
    }
}

/** Função que avança um slide na página
 * @param { HTMLDivElement[] } slides Array contendo todos os slides da página 
 * @param { number } index_slide Posição do slide que será mostrado na página
 */
export function avancarSlide (slides, index_slide) {
    slides[index_slide].classList.add('active');
}

/** Função que Troca a imagem de fundo pela imagem apresentada no slide
 * @param { HTMLDivElement[] } slides Array contendo todos os slides da página 
 * @param { number } slide_atual Posição do slide que será mostrado na página
 */
export function changeBackgroundImage (slides, slide_atual) {
    const body = document.body;
    body.style.backgroundImage = 'var(--bg-shadow),' + slides[slide_atual].style.backgroundImage;
}

/** Função que volta um slide na página
 * @param { HTMLDivElement[] } slides Array contendo todos os slides da página 
 * @param { number } index_slide Posição do slide que será mostrado na página
 */
export function voltarSlide (slides, index_slide) {
    slides[index_slide].classList.remove('active');
}

/** Função responsável pelas interações com o Slider
 * @param { HTMLDivElement[] } slides Array contendo todos os slides da página 
 */
export function bgSlider (slides) {
    const arrow_left = document.querySelector('.arrow-btn-left');
    const arrow_right = document.querySelector('.arrow-btn-right');

    let slide_atual = 0;

    arrow_right.addEventListener('click', () => {
        slide_atual++;
        slide_atual = slide_atual > slides.length - 1 ? 0 : slide_atual;

        clearSlides(slides);
        avancarSlide(slides, slide_atual);
        changeBackgroundImage(slides, slide_atual);
    });

    arrow_left.addEventListener('click', () => {
        slide_atual--;
        slide_atual = slide_atual < 0 ? slides.length - 1 : slide_atual;

        clearSlides(slides);
        avancarSlide(slides, slide_atual);
        changeBackgroundImage(slides, slide_atual);
    });
}