const cargarImagen = (entradas) => {
	entradas.forEach((entrada, observador) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	rootMargin: '200px 400px 200px 800px',
	threshold: 1
});

//SECTION 1
const section_1_imgs = document.querySelectorAll('#section-1-imgs ul li img');
section_1_imgs.forEach((element) => {
    observador.observe(element);
});

const section_1_title_info_mobile = document.getElementById('section-1-title-info-mobile');
observador.observe(section_1_title_info_mobile);

const section_1_box_info_mobile = document.getElementById('section-1-box-info-mobile');
observador.observe(section_1_box_info_mobile);

const container_imgs_section_1_mobile = document.getElementById('section-1-imgs-mobile');
observador.observe(container_imgs_section_1_mobile);

//SECTION 1

//SECTION 2

const container_imgs_section_2 = document.querySelectorAll('#img-section-2 div img');
container_imgs_section_2.forEach((element) => {
    observador.observe(element);
});

const caracteristics_section_2 = document.querySelectorAll('#caracteristics-section-2 li');
caracteristics_section_2.forEach((element) => {
    observador.observe(element);
});

const text_section_2 = document.querySelector('.section-2 .info-phone-mobile');
observador.observe(text_section_2);

const container_imgs_section_2_mobile = document.querySelector('.section-2 .container-imgs-phone-mobile .phone-img img');
observador.observe(container_imgs_section_2_mobile);

//SECTION 2

//SECTION 3
const text_section_3 = document.querySelector('.section-3 .box-info');
observador.observe(text_section_3);

const img_section_3 = document.querySelector('.img-section-3');
observador.observe(img_section_3);

//SECTION 3


//SECTION 4
const text_section_4 = document.querySelector('.section-4 #section-4-box-info');
observador.observe(text_section_4);

const equipos_section_4 = document.querySelectorAll('.section-4 .slider-phones li');
equipos_section_4.forEach((element) => {
    observador.observe(element);
});
//SECTION 4

//SECTION 5
const text_section_5 = document.querySelector('.section-5 .box-info');
observador.observe(text_section_5);

const img_section_5 = document.querySelector('.img-section-5');
observador.observe(img_section_5);
//SECTION 5

//SECTION 6
const text_section_6 = document.querySelector('.section-6 #section-6-box-info');
observador.observe(text_section_6);

const equipos_section_6 = document.querySelectorAll('.section-6 .slider-accessories li');
equipos_section_6.forEach((element) => {
    observador.observe(element);
});
//SECTION 6


//SECTION 7

const caracteristics_section_7 = document.querySelectorAll('#caracteristics-section-7 li');
caracteristics_section_7.forEach((element) => {
    observador.observe(element);
});

//SECTION 7


//SECTION 8
const formulario_contacto_section_8 = document.querySelector('.section-8 .row');
observador.observe(formulario_contacto_section_8);
//SECTION 8



