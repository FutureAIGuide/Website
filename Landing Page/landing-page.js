document.addEventListener('DOMContentLoaded', () => {

    // --- HOVER EFFECTS FOR GATEWAY ---
    const directoryLink = document.getElementById('directoryLink');
    const corners = document.querySelectorAll('.corner');

    directoryLink.addEventListener('mouseenter', () => {
        corners.forEach(c => {
            c.style.borderColor = '#fff';
            c.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.8)';
        });
    });

    directoryLink.addEventListener('mouseleave', () => {
        corners.forEach(c => {
            c.style.borderColor = '#ff6600';
            c.style.boxShadow = '0 0 10px rgba(255, 102, 0, 0.5)';
        });
    });

    // --- BACK TO TOP LOGIC ---
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- GLITCH TEXT EFFECT ON LOAD ---
    const title = document.querySelector('.glitch-text');
    const originalText = title.getAttribute('data-text');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";
    
    let iterations = 0;
    const interval = setInterval(() => {
        title.innerText = title.innerText.split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)]
            })
            .join("");
        
        if(iterations >= originalText.length){ 
            clearInterval(interval);
        }
        
        iterations += 1/3;
    }, 30);
});