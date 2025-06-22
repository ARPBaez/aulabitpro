document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mainMenu.classList.toggle('active');
        });
    }

    // Active Nav Link
    // Adiciona a classe 'active' ao link de navegação da página atual
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('#main-menu a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (currentLocation === linkPath || (currentLocation === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });


    // Contact Form Handling (Exemplo básico, sem envio real)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Se não estiver usando um serviço como Formspree ou um backend,
            // você pode prevenir o envio padrão e mostrar uma mensagem.
            // event.preventDefault(); 

            // Validação básica (exemplo)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                event.preventDefault(); // Impede o envio se a validação falhar
                return;
            }
            
            // Se você não tem um backend ou serviço de formulário:
            // Comente a linha event.preventDefault() acima se quiser que o formulário tente enviar (e falhe ou vá para um action).
            // Ou, se você quer apenas simular:
            // event.preventDefault();
            // alert('Obrigado por sua mensagem! (Isso é uma demonstração, o formulário não foi enviado de verdade).');
            // contactForm.reset(); // Limpa o formulário

            // Se estiver usando Formspree ou similar, o 'action' do form cuidará disso.
            // Você pode adicionar uma mensagem de "enviando..." aqui.
            console.log('Formulário enviado (ou tentativa de envio).');
        });
    }

    // Preencher campo "Assunto" do formulário de contato se veio de um link de curso/serviço
    const urlParams = new URLSearchParams(window.location.search);
    const cursoParam = urlParams.get('curso');
    const servicoParam = urlParams.get('servico');
    const subjectSelect = document.getElementById('subject');

    if (subjectSelect) {
        if (cursoParam) {
            subjectSelect.value = cursoParam;
        } else if (servicoParam) {
            subjectSelect.value = servicoParam;
        }
    }

});