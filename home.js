document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'MESSAGE SENT';
            btn.style.backgroundColor = '#10b981';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                this.reset();
            }, 3000);
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const navLinks = document.querySelector('.md\\:flex');
        
        menuBtn?.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('top-full');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('w-full');
            navLinks.classList.toggle('glass');
            navLinks.classList.toggle('p-6');
            navLinks.classList.toggle('space-y-4');
        });