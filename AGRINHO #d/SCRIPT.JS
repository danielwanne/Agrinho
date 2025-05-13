// JavaScript do Site Agrinho

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegação suave
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Botão Explorar
    const explorerBtn = document.getElementById('explorer-btn');
    
    explorerBtn.addEventListener('click', function() {
        const agriculturaSection = document.getElementById('agricultura');
        agriculturaSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validação simples
        if (name && email && message) {
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso!`);
            
            // Limpar formulário
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
    
    // Efeito hover nos cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f8f0';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#ffffff';
        });
    });
    
    // Mudança de cor do header ao scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#2c5530';
        } else {
            header.style.backgroundColor = '#4a7c59';
        }
    });
    
    // Animação simples para elementos visíveis
    function animateOnScroll() {
        const elements = document.querySelectorAll('.card, .hero h2, .hero p');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Aplicar estilos iniciais para animação
    const elementsToAnimate = document.querySelectorAll('.card, .hero h2, .hero p');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Executar animação no scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Executar na primeira carga
    animateOnScroll();
    
    // Funcionalidade de mudança de tema (contraste)
    function createAccessibilityButton() {
        const accessBtn = document.createElement('button');
        accessBtn.textContent = 'Alto Contraste';
        accessBtn.style.position = 'fixed';
        accessBtn.style.top = '100px';
        accessBtn.style.right = '20px';
        accessBtn.style.zIndex = '1000';
        accessBtn.style.padding = '10px 15px';
        accessBtn.style.backgroundColor = '#4a7c59';
        accessBtn.style.color = 'white';
        accessBtn.style.border = 'none';
        accessBtn.style.borderRadius = '5px';
        accessBtn.style.cursor = 'pointer';
        
        accessBtn.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
        });
        
        document.body.appendChild(accessBtn);
    }
    
    // Criar botão de acessibilidade
    createAccessibilityButton();
    
    // CSS para alto contraste
    const contrastCSS = `
        .high-contrast {
            filter: contrast(2) brightness(1.2);
        }
        .high-contrast .hero {
            background-color: #000000 !important;
            color: #ffffff !important;
        }
        .high-contrast h2, .high-contrast h3 {
            color: #ffffff !important;
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = contrastCSS;
    document.head.appendChild(style);
    
    console.log('Site do Agrinho carregado com sucesso!');
});// JavaScript do Site Agrinho

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegação suave
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Botão Explorar
    const explorerBtn = document.getElementById('explorer-btn');
    
    explorerBtn.addEventListener('click', function() {
        const agriculturaSection = document.getElementById('agricultura');
        agriculturaSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter valores dos campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validação simples
        if (name && email && message) {
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso!`);
            
            // Limpar formulário
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
    
    // Efeito hover nos cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f8f0';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#ffffff';
        });
    });
    
    // Mudança de cor do header ao scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#2c5530';
        } else {
            header.style.backgroundColor = '#4a7c59';
        }
    });
    
    // Animação simples para elementos visíveis
    function animateOnScroll() {
        const elements = document.querySelectorAll('.card, .hero h2, .hero p');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Aplicar estilos iniciais para animação
    const elementsToAnimate = document.querySelectorAll('.card, .hero h2, .hero p');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Executar animação no scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Executar na primeira carga
    animateOnScroll();
    
    // Funcionalidade de mudança de tema (contraste)
    function createAccessibilityButton() {
        const accessBtn = document.createElement('button');
        accessBtn.textContent = 'Alto Contraste';
        accessBtn.style.position = 'fixed';
        accessBtn.style.top = '100px';
        accessBtn.style.right = '20px';
        accessBtn.style.zIndex = '1000';
        accessBtn.style.padding = '10px 15px';
        accessBtn.style.backgroundColor = '#4a7c59';
        accessBtn.style.color = 'white';
        accessBtn.style.border = 'none';
        accessBtn.style.borderRadius = '5px';
        accessBtn.style.cursor = 'pointer';
        
        accessBtn.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
        });
        
        document.body.appendChild(accessBtn);
    }
    
    // Criar botão de acessibilidade
    createAccessibilityButton();
    
    // CSS para alto contraste
    const contrastCSS = `
        .high-contrast {
            filter: contrast(2) brightness(1.2);
        }
        .high-contrast .hero {
            background-color: #000000 !important;
            color: #ffffff !important;
        }
        .high-contrast h2, .high-contrast h3 {
            color: #ffffff !important;
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = contrastCSS;
    document.head.appendChild(style);
    
    console.log('Site do Agrinho carregado com sucesso!');
});