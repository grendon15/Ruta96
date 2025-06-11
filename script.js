 // Funciones optimizadas
        function openModal(src) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = 'flex';
            modalImg.src = src;
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

       function closeVideo() {
  const video = document.getElementById('videoFloat');
  const iframe = video.querySelector('iframe');

  // Oculta el contenedor
  video.classList.add('hidden');
  setTimeout(() => {
    video.style.display = 'none';
  }, 300);

  // Detiene el audio reiniciando el src
  const src = iframe.src;
  iframe.src = '';
  iframe.src = src;
}

        // Smooth scroll para navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Lazy loading para el video
        window.addEventListener('load', () => {
            setTimeout(() => {
                const videoFloat = document.getElementById('videoFloat');
                if (window.innerWidth > 768) {
                    videoFloat.style.display = 'block';
                }
            }, 3000);
        });

        // Cerrar modal con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Base de datos de búsqueda
const searchData = [
    {
        title: "Camisetas Polo",
        content: "Camisetas tipo polo personalizadas para empresas",
        section: "servicios",
        keywords: ["polo", "camiseta", "personalizada", "empresa"]
    },
    {
        title: "Uniformes Médicos", 
        content: "Conjuntos antifluido para personal de salud",
        section: "servicios",
        keywords: ["medico", "antifluido", "salud", "conjunto", "hospital"]
    },
    {
        title: "Camisas Ejecutivas",
        content: "Camisas ejecutivas y en dril para profesionales", 
        section: "servicios",
        keywords: ["camisa", "ejecutiva", "dril", "profesional", "oficina"]
    },
    {
        title: "Calzado Industrial",
        content: "Botas de seguridad y calzado especializado",
        section: "servicios", 
        keywords: ["botas", "calzado", "seguridad", "industrial", "trabajo"]
    },
    {
        title: "Estampado Personalizado",
        content: "Servicios de estampado y bordado para uniformes",
        section: "servicios",
        keywords: ["estampado", "bordado", "personalizado", "logo", "diseño"]
    },
    {
        title: "Contacto",
        content: "Medellín, Antioquia. Teléfono: 3234619002", 
        section: "contacto",
        keywords: ["contacto", "telefono", "medellin", "antioquia", "direccion"]
    },
    {
        title: "Quiénes Somos",
        content: "Ruta 96, especialistas en fabricación de uniformes y dotaciones empresariales",
        section: "quienes", 
        keywords: ["empresa", "uniformes", "dotaciones", "ruta96", "quienes"]
    }
];

let searchTimeout;
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// Evento de entrada en tiempo real
searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    const query = this.value.trim();
    
    if (query.length === 0) {
        hideResults();
        return;
    }
    
    searchTimeout = setTimeout(() => {
        performSearch(query);
    }, 300);
});

// Ocultar resultados al hacer clic fuera
document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
        hideResults();
    }
});

// Función de búsqueda
function performSearch(query = null) {
    if (!query) {
        query = searchInput.value.trim();
    }
    
    if (query.length === 0) {
        hideResults();
        return;
    }

    const results = searchData.filter(item => {
        const searchTerm = query.toLowerCase();
        return item.title.toLowerCase().includes(searchTerm) ||
               item.content.toLowerCase().includes(searchTerm) ||
               item.keywords.some(keyword => keyword.includes(searchTerm));
    });

    displayResults(results, query);
}

// Mostrar resultados
function displayResults(results, query) {
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No se encontraron resultados para "' + query + '"</div>';
    } else {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="goToSection('${result.section}')">
                <div class="result-title">${highlightText(result.title, query)}</div>
                <div class="result-snippet">${highlightText(result.content, query)}</div>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
}

// Resaltar texto coincidente
function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span style="background-color: rgba(254, 99, 97, 0.3);">$1</span>');
}

// Ir a sección
function goToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        hideResults();
        searchInput.value = '';
    }
}

// Ocultar resultados
function hideResults() {
    searchResults.style.display = 'none';
}

// Manejar teclas
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideResults();
        this.blur();
    }
});




   // CONFIGURACIÓN - CAMBIA ESTOS VALORES
        const whatsappConfig = {
            phone: '573234619002',  // ← TU NÚMERO AQUÍ
            message: '¡Hola! Me interesa hacer una cotización',  // ← TU MENSAJE AQUÍ
        };

        // FUNCIÓN PRINCIPAL
        function openWhatsApp(event) {
            event.preventDefault();
            const encodedMessage = encodeURIComponent(whatsappConfig.message);
            const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappConfig.phone}&text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        }



















          const galleryImages = [

    { src: 'imagenes/uniformesempresariales.jpeg', alt: 'Uniformes empresariales Ruta 96' },
    { src: 'imagenes/dotacionescorporativas.jpeg', alt: 'Dotaciones corporativas' },
    { src: 'imagenes/estampadospersonalizados.jpeg', alt: 'Estampados personalizados' },
    { src: 'imagenes/uniformesdesalud.jpeg', alt: 'Uniformes de salud' },
    { src: 'imagenes/ropadetrabajo.jpeg', alt: 'Ropa de trabajo' },
    { src: 'imagenes/calzadoempresarial.jpeg', alt: 'Calzado empresarial' },
    { src: 'imagenes/bordadoscorporativos.jpeg', alt: 'Bordados corporativos' },
    { src: 'imagenes/Accesoriosempresariales.jpeg', alt: 'Accesorios empresariales' },
    { src: 'imagenes/productostuta96.jpeg', alt: 'Productos Ruta 96' }
       
        ];

        let currentImageIndex = 0;

        // Abrir modal con imagen específica
        function openModal(index) {
            currentImageIndex = index;
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const counter = document.getElementById('modalCounter');
            
            modal.style.display = 'flex';
            modalImg.src = galleryImages[index].src;
            modalImg.alt = galleryImages[index].alt;
            counter.textContent = `${index + 1} / ${galleryImages.length}`;
            
            document.body.style.overflow = 'hidden';
            updateIndicators();
            
            // Precargar imágenes adyacentes para navegación más fluida
            preloadAdjacentImages(index);
        }

        // Cerrar modal
        function closeModal(event) {
            if (event && event.target !== event.currentTarget && !event.target.classList.contains('modal-close')) {
                return;
            }
            const modal = document.getElementById('imageModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Imagen anterior
        function prevImage(event) {
            event.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            updateModalImage();
        }

        // Imagen siguiente
        function nextImage(event) {
            event.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            updateModalImage();
        }

        // Actualizar imagen del modal
        function updateModalImage() {
            const modalImg = document.getElementById('modalImage');
            const counter = document.getElementById('modalCounter');
            
            // Efecto de transición suave
            modalImg.style.opacity = '0.5';
            
            setTimeout(() => {
                modalImg.src = galleryImages[currentImageIndex].src;
                modalImg.alt = galleryImages[currentImageIndex].alt;
                counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
                modalImg.style.opacity = '1';
                updateIndicators();
                preloadAdjacentImages(currentImageIndex);
            }, 150);
        }

        // Precargar imágenes adyacentes
        function preloadAdjacentImages(index) {
            const prevIndex = (index - 1 + galleryImages.length) % galleryImages.length;
            const nextIndex = (index + 1) % galleryImages.length;
            
            // Precargar imagen anterior
            const prevImg = new Image();
            prevImg.src = galleryImages[prevIndex].src;
            
            // Precargar imagen siguiente
            const nextImg = new Image();
            nextImg.src = galleryImages[nextIndex].src;
        }


        // Crear indicadores
        function createIndicators() {
            const indicatorsContainer = document.getElementById('modalIndicators');
            indicatorsContainer.innerHTML = '';
            
            galleryImages.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.className = 'modal-indicator';
                indicator.onclick = () => goToImage(index);
                indicatorsContainer.appendChild(indicator);
            });
        }

        // Actualizar indicadores
        function updateIndicators() {
            const indicators = document.querySelectorAll('.modal-indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentImageIndex);
            });
        }

        // Ir a imagen específica
        function goToImage(index) {
            currentImageIndex = index;
            updateModalImage();
        }

        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('imageModal');
            if (modal.style.display === 'flex') {
                switch(e.key) {
                    case 'Escape':
                        closeModal();
                        break;
                    case 'ArrowLeft':
                        prevImage(e);
                        break;
                    case 'ArrowRight':
                        nextImage(e);
                        break;
                }
            }
        });

        // Navegación táctil para móviles
        let touchStartX = 0;
        let touchEndX = 0;

        document.getElementById('imageModal').addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.getElementById('imageModal').addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe izquierda - imagen siguiente
                    nextImage(new Event('swipe'));
                } else {
                    // Swipe derecha - imagen anterior
                    prevImage(new Event('swipe'));
                }
            }
        }

        // Smooth scroll para navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Inicializar indicadores cuando se carga la página
        document.addEventListener('DOMContentLoaded', () => {
            createIndicators();
        });
  