        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        const nucleusParticles = document.getElementById('nucleusParticles');
        const colors = ['#3776AB', '#02569B', '#E34F26', '#1572B6', '#00ffff', '#ff00ff'];
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'flying-particle';
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 250 + Math.random() * 100;
            const startX = Math.cos(angle) * distance;
            const startY = Math.sin(angle) * distance;
            
            particle.style.setProperty('--particle-color', colors[Math.floor(Math.random() * colors.length)]);
            particle.style.setProperty('--start-x', startX + 'px');
            particle.style.setProperty('--start-y', startY + 'px');
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (2 + Math.random() * 2) + 's';
            
            nucleusParticles.appendChild(particle);
            
            setTimeout(() => particle.remove(), 5000);
        }
        setInterval(createParticle, 300);

        const projects = {
            'Python': [
                {
                    name: 'AI Models & LLMs',
                    description: 'Explored various AI models with focus on Large Language Models, experimenting with training and fine-tuning',
                    tech: ['Python', 'Transformers', 'PyTorch', 'Hugging Face'],
                    highlights: 'Hands-on experience with modern LLM architectures',
                    timeTaken: '3 months',
                    details: {
                        overview: 'Deep dive into the world of AI and Large Language Models, experimenting with different architectures and understanding how modern AI systems work.',
                        features: [
                            'Worked with pre-trained language models',
                            'Experimented with fine-tuning techniques',
                            'Built understanding of transformer architecture',
                            'Tested various prompt engineering strategies',
                            'Learned model evaluation and testing'
                        ],
                        challenges: 'Understanding the complex mathematics behind transformers and managing computational resources for training.',
                        outcome: 'Gained solid foundation in AI/ML concepts and practical experience with state-of-the-art language models.'
                    }
                },
                {
                    name: 'Pirate Maker 2D',
                    description: 'A Mario Maker-style level editor and platformer with a pirate theme, built entirely with Pygame',
                    tech: ['Python', 'Pygame', 'JSON', 'PIL'],
                    highlights: 'Custom physics engine, Level editor with 20+ objects',
                    timeTaken: '2 months',
                    details: {
                        overview: 'Created a full-featured 2D platformer game with a level editor, allowing players to create and share custom pirate-themed levels.',
                        features: [
                            'Drag-and-drop level editor',
                            'Custom physics and collision detection',
                            '20+ placeable objects and enemies',
                            'Save/load level functionality',
                            'Player movement and animations',
                            'Enemy AI patterns'
                        ],
                        challenges: 'Implementing smooth collision detection and creating an intuitive level editor interface.',
                        outcome: 'Completed game with fully functional editor, learned game development fundamentals and pygame mechanics.'
                    }
                },
                {
                    name: 'Chessed It - Chess Platform',
                    description: 'Custom online chess platform with game rules, move validation, and multiplayer functionality',
                    tech: ['Python', 'Flask', 'Socket.io', 'SQLite'],
                    highlights: 'Full chess rules implementation, Real-time multiplayer',
                    timeTaken: '6 weeks',
                    details: {
                        overview: 'Built a complete chess platform from scratch, implementing all chess rules, move validation, and real-time multiplayer gameplay.',
                        features: [
                            'Complete chess rules and logic',
                            'Legal move validation',
                            'Check and checkmate detection',
                            'Real-time multiplayer via websockets',
                            'Move history and game replay',
                            'Basic UI with drag-and-drop pieces'
                        ],
                        challenges: 'Implementing complex chess rules like castling, en passant, and checkmate detection logic.',
                        outcome: 'Fully functional chess game with working multiplayer, deep understanding of game logic and networking.'
                    }
                },
                {
                    name: 'Chitti 4.0 Chatbot',
                    description: 'Personal chatbot project experimenting with conversational AI (early learning project, not fully trained)',
                    tech: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
                    highlights: 'Learning project - explored chatbot fundamentals',
                    timeTaken: '1 month',
                    details: {
                        overview: 'Early exploration into chatbot development, learning the basics of NLP and conversational AI. Honest assessment: it was a learning experience and the results were pretty mid.',
                        features: [
                            'Basic intent recognition',
                            'Pattern matching responses',
                            'Simple conversation flow',
                            'Web interface for interaction',
                            'Learned tokenization and NLP basics'
                        ],
                        challenges: 'Understanding NLP concepts, realizing how complex good chatbots actually are, limited training data.',
                        outcome: 'Valuable learning experience about what goes into real chatbots. Taught me the complexity of NLP and motivated deeper AI study.'
                    }
                },
                {
                    name: 'Library Management System',
                    description: 'Complete system for managing library operations including book tracking, user management, and borrowing',
                    tech: ['Python', 'Tkinter', 'SQLite', 'Datetime'],
                    highlights: 'Full CRUD operations, User-friendly GUI',
                    timeTaken: '3 weeks',
                    details: {
                        overview: 'Developed a desktop application for managing library operations with a focus on practical functionality and clean database design.',
                        features: [
                            'Book inventory management',
                            'User account system',
                            'Borrow and return tracking',
                            'Due date calculations and late fees',
                            'Search and filter functionality',
                            'Reports and statistics'
                        ],
                        challenges: 'Designing a normalized database schema and creating an intuitive GUI with Tkinter.',
                        outcome: 'Practical application demonstrating database management, GUI development, and real-world problem solving.'
                    }
                }
            ],
            'Flutter': [
                {
                    name: 'Jet Punk - Social Media Platform',
                    description: 'Full-featured multi-platform social media app with posts, real-time chat, profiles, and social interactions',
                    tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'WebSocket'],
                    highlights: 'Cross-platform (iOS, Android, Web), Real-time features',
                    timeTaken: '4 months',
                    details: {
                        overview: 'Built a complete social media platform from scratch using Flutter, featuring all the core social networking features you\'d expect from modern apps.',
                        features: [
                            'User authentication and profiles',
                            'Create and share posts with images',
                            'Real-time chat messaging',
                            'Like, comment, and share system',
                            'Follow/unfollow users',
                            'News feed with personalized content',
                            'Push notifications',
                            'Dark mode support',
                            'Responsive design for all screen sizes'
                        ],
                        challenges: 'Managing real-time updates across multiple users, optimizing image uploads and storage, implementing efficient state management for complex social features.',
                        outcome: 'Fully functional social media app running on multiple platforms. Gained deep understanding of Flutter, Firebase, real-time systems, and app architecture.'
                    }
                }
            ],
            'HTML': [
                {
                    name: 'Portfolio Website',
                    description: 'Personal portfolio website showcasing projects and skills with modern design',
                    tech: ['HTML5', 'Semantic markup', 'Responsive design'],
                    highlights: 'Clean structure, Accessibility focused',
                    timeTaken: '1 week',
                    details: {
                        overview: 'Created a personal portfolio website using semantic HTML, focusing on proper structure and accessibility.',
                        features: [
                            'Semantic HTML5 elements',
                            'Proper heading hierarchy',
                            'Accessible forms and navigation',
                            'SEO-optimized markup',
                            'Mobile-friendly structure',
                            'Project showcase section'
                        ],
                        challenges: 'Understanding semantic HTML best practices and ensuring proper document structure.',
                        outcome: 'Well-structured portfolio site that serves as foundation for styling and interactivity.'
                    }
                },
                {
                    name: 'Jet Punk Social Media (Frontend)',
                    description: 'HTML structure for Jet Punk social media platform with complex layouts and components',
                    tech: ['HTML5', 'Forms', 'Media elements', 'Canvas'],
                    highlights: 'Complex component structure, Form validation',
                    timeTaken: '2 weeks',
                    details: {
                        overview: 'Built the complete HTML foundation for Jet Punk social media app, including all pages, forms, and interactive components.',
                        features: [
                            'Multi-page structure (feed, profile, chat, settings)',
                            'Complex form elements for posts and comments',
                            'Media upload interfaces',
                            'Modal dialogs and overlays',
                            'Navigation and routing structure',
                            'Accessible interactive elements'
                        ],
                        challenges: 'Organizing a large-scale app structure and maintaining consistency across many pages.',
                        outcome: 'Solid HTML foundation that made styling and JavaScript integration much easier.'
                    }
                }
            ],
            'CSS': [
                {
                    name: 'Portfolio Website Animations',
                    description: 'First portfolio website featuring custom CSS animations and hover effects',
                    tech: ['CSS3', 'Animations', 'Transitions', 'Keyframes'],
                    highlights: 'Smooth hover effects, Custom animations',
                    timeTaken: '2 weeks',
                    details: {
                        overview: 'My first deep dive into CSS animations, creating a portfolio website with smooth transitions and eye-catching hover effects.',
                        features: [
                            'Hover animations on cards and buttons',
                            'Fade-in animations on scroll',
                            'Custom keyframe animations',
                            'Smooth transitions throughout',
                            'Animated navigation menu',
                            'Loading animations'
                        ],
                        challenges: 'Learning animation timing functions and creating smooth, performant animations.',
                        outcome: 'Portfolio site with polished animations that taught me CSS animation fundamentals.'
                    }
                },
                {
                    name: 'Jet Punk Social Media (Styling)',
                    description: 'Complete CSS styling for Jet Punk social media platform with modern design and dark mode',
                    tech: ['CSS3', 'Flexbox', 'Grid', 'CSS Variables', 'Media Queries'],
                    highlights: 'Dark mode, Fully responsive, Modern UI',
                    timeTaken: '3 weeks',
                    details: {
                        overview: 'Designed and styled the entire Jet Punk social media platform, creating a modern, responsive interface with light and dark themes.',
                        features: [
                            'Modern, clean UI design',
                            'Dark and light mode with CSS variables',
                            'Fully responsive layout (mobile to desktop)',
                            'Custom styled form elements',
                            'Grid and flexbox layouts',
                            'Smooth transitions and micro-animations',
                            'Consistent design system',
                            'Mobile-first approach'
                        ],
                        challenges: 'Creating a consistent design system across many components, implementing smooth dark mode switching, making everything responsive.',
                        outcome: 'Professional-looking social media UI that works great on all devices. Mastered CSS layout techniques and theming.'
                    }
                }
            ]
        };

        let currentTech = '';

        function showPersonalInfo() {
            document.getElementById('personalModal').classList.add('active');
        }

        function showProjects(tech) {
            currentTech = tech;
            const modal = document.getElementById('projectsModal');
            const projectsList = document.getElementById('projectsList');
            const projectDetail = document.getElementById('projectDetail');
            const terminalTitle = document.getElementById('terminalTitle');
            
            const colors = {
                'Python': '#3776AB',
                'Flutter': '#02569B',
                'HTML': '#E34F26',
                'CSS': '#1572B6'
            };
            modal.style.setProperty('--modal-glow', colors[tech]);
            
            terminalTitle.textContent = `${tech.toUpperCase()}_PROJECTS.db`;
            
            let html = '<div style="margin-bottom: 2rem;">';
            html += `<div style="color: ${colors[tech]}; font-size: 1.1rem; margin-bottom: 1rem; text-shadow: 0 0 10px ${colors[tech]};">> LOADING ${tech.toUpperCase()} PROJECTS...</div>`;
            html += '<div style="height: 2px; background: linear-gradient(to right, transparent, ' + colors[tech] + ', transparent); margin-bottom: 2rem;"></div>';
            html += '</div>';
            
            projects[tech].forEach((project, index) => {
                html += `
                    <div class="project-item" onclick="showProjectDetail(${index})">
                        <div class="project-item-header">
                            <h3>[${String(index + 1).padStart(2, '0')}] ${project.name}</h3>
                            <span class="project-time">⏱ ${project.timeTaken}</span>
                        </div>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                        </div>
                        <p style="margin-top: 0.8rem; color: #ff00ff; font-weight: 700;">▸ ${project.highlights}</p>
                    </div>
                `;
            });
            
            projectsList.innerHTML = html;
            projectsList.style.display = 'block';
            projectDetail.style.display = 'none';
            modal.classList.add('active');
        }

        function showProjectDetail(index) {
            const projectsList = document.getElementById('projectsList');
            const projectDetail = document.getElementById('projectDetail');
            const projectDetailContent = document.getElementById('projectDetailContent');
            
            const project = projects[currentTech][index];
            const colors = {
                'Python': '#3776AB',
                'Flutter': '#02569B',
                'HTML': '#E34F26',
                'CSS': '#1572B6'
            };
            
            let html = `
                <div class="detail-header">
                    <h2>${project.name}</h2>
                    <div class="detail-meta">
                        <div class="meta-item">
                            <span class="meta-label">Time Taken</span>
                            <span class="meta-value">⏱ ${project.timeTaken}</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Status</span>
                            <span class="meta-value">✓ COMPLETED</span>
                        </div>
                        <div class="meta-item">
                            <span class="meta-label">Language</span>
                            <span class="meta-value" style="color: ${colors[currentTech]}; text-shadow: 0 0 10px ${colors[currentTech]};">${currentTech}</span>
                        </div>
                    </div>
                    <div class="project-tags">
                        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>

                <div class="detail-section">
                    <h3>Overview</h3>
                    <p>${project.details.overview}</p>
                </div>

                <div class="detail-section">
                    <h3>Key Features</h3>
                    <ul>
                        ${project.details.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>

                <div class="detail-section">
                    <h3>Challenges</h3>
                    <p>${project.details.challenges}</p>
                </div>

                <div class="detail-section">
                    <h3>Outcome</h3>
                    <p>${project.details.outcome}</p>
                </div>

                <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0, 255, 136, 0.05); border: 1px solid rgba(0, 255, 136, 0.3); border-radius: 8px;">
                    <div style="color: #ff00ff; font-weight: 700; margin-bottom: 0.5rem;">📊 Highlights:</div>
                    <div style="color: #00ff88; font-size: 1.1rem;">${project.highlights}</div>
                </div>
            `;
            
            projectDetailContent.innerHTML = html;
            projectsList.style.display = 'none';
            projectDetail.style.display = 'block';
        }

        function backToProjects() {
            const projectsList = document.getElementById('projectsList');
            const projectDetail = document.getElementById('projectDetail');
            projectsList.style.display = 'block';
            projectDetail.style.display = 'none';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.remove('active');
                });
            }
        });
