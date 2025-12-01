// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initScrollEffects();
    initBackToTop();
    initModals();
    initFormValidation();
    initAnimations();
    initHeroVideo();
});

// 导航功能
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const categoryCards = document.querySelectorAll('.category-card');
    
    // 滚动时导航栏样式变化
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 产品分类卡片点击事件
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
                // 触发产品筛选
                setTimeout(() => {
                    const categoryBtn = document.querySelector(`[data-category="${category}"]`);
                    if (categoryBtn) {
                        categoryBtn.click();
                    }
                }, 500);
            }
        });
    });
    
    // 移动端菜单切换
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // 平滑滚动到锚点
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // 导航栏高度
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 关闭移动端菜单
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // 高亮当前页面部分
    window.addEventListener('scroll', highlightCurrentSection);
}

// 高亮当前页面部分
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// 滚动效果
function initScrollEffects() {
    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.service-item, .product-item, .stat-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // 视差滚动效果
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// 返回顶部按钮
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 模态框功能
function initModals() {
    const modal = document.getElementById('pdfModal');
    const closeBtn = document.querySelector('.close');
    
    if (modal && closeBtn) {
        // 关闭模态框
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // 点击模态框外部关闭
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
    
    // 添加PDF下载按钮到产品卡片
    addPDFDownloadButtons();
}

// 添加PDF下载按钮
function addPDFDownloadButtons() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'btn btn-secondary';
        downloadBtn.innerHTML = '<i class="fas fa-download"></i> 下载资料';
        downloadBtn.addEventListener('click', () => {
            document.getElementById('pdfModal').style.display = 'block';
        });
        
        const productInfo = item.querySelector('.product-info');
        if (productInfo) {
            productInfo.appendChild(downloadBtn);
        }
    });
}

// 表单验证
function initFormValidation() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearError);
        });
        
        form.addEventListener('submit', handleFormSubmit);
    }
}

// 字段验证
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldType = field.type;
    
    clearError(e);
    
    if (field.hasAttribute('required') && !value) {
        showError(field, '此字段为必填项');
        return false;
    }
    
    if (fieldType === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(field, '请输入有效的邮箱地址');
            return false;
        }
    }
    
    if (fieldType === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) {
            showError(field, '请输入有效的电话号码');
            return false;
        }
    }
    
    return true;
}

// 显示错误信息
function showError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    field.classList.add('error');
    field.parentNode.appendChild(errorDiv);
}

// 清除错误信息
function clearError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// 表单提交处理
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const inputs = form.querySelectorAll('input, textarea');
    
    let isValid = true;
    
    // 验证所有字段
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    if (isValid) {
        // 这里可以添加实际的表单提交逻辑
        console.log('表单提交成功:', Object.fromEntries(formData));
        
        // 显示成功消息
        showSuccessMessage();
        
        // 重置表单
        form.reset();
    }
}

// 显示成功消息
function showSuccessMessage() {
    const currentLang = window.multiLang ? window.multiLang.getCurrentLanguage() : 'zh';
    
    const messages = {
        zh: '消息发送成功！我们会尽快回复您。',
        en: 'Message sent successfully! We will reply to you as soon as possible.',
        ja: 'メッセージが正常に送信されました！できるだけ早くご返信いたします。',
        ko: '메시지가 성공적으로 전송되었습니다! 가능한 빨리 답변드리겠습니다.'
    };
    
    const message = messages[currentLang] || messages.zh;
    
    // 创建成功提示
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    // 3秒后移除
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// 动画初始化
function initAnimations() {
    // 添加CSS动画类
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .navbar.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem;
        }
        
        .error-message {
            color: #e74c3c;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
        
        .error {
            border-color: #e74c3c !important;
            box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1) !important;
        }
        
        .success-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #27ae60;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 3000;
            animation: fadeInOut 3s ease-in-out forwards;
        }
        
        @keyframes fadeInOut {
            0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            10%, 90% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
            
            .nav-menu.active {
                display: flex;
            }
        }
    `;
    document.head.appendChild(style);
    
    // 初始化AOS动画（如果使用）
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
}

// 工具函数
const utils = {
    // 防抖函数
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // 节流函数
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // 格式化电话号码
    formatPhoneNumber: function(phoneNumber) {
        return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    },
    
    // 验证邮箱
    isValidEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};

// Hero视频功能
function initHeroVideo() {
    const heroVideo = document.querySelector('.hero-video-bg');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // 确保视频自动播放
    if (heroVideo) {
        heroVideo.addEventListener('loadedmetadata', () => {
            heroVideo.play().catch(err => {
                console.log('视频自动播放失败，可能需要用户交互:', err);
            });
        });
        
        // 处理视频加载错误，显示备用背景
        heroVideo.addEventListener('error', () => {
            console.log('视频加载失败，使用备用背景');
            const wrapper = document.querySelector('.hero-video-wrapper');
            if (wrapper) {
                wrapper.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)';
            }
        });
    }
    
    // 滚动指示器点击事件
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // 视频播放控制（可选：添加播放/暂停按钮）
    const videoControls = document.querySelector('.hero-video-controls');
    if (videoControls && heroVideo) {
        videoControls.addEventListener('click', () => {
            if (heroVideo.paused) {
                heroVideo.play();
            } else {
                heroVideo.pause();
            }
        });
    }
}

// 导出工具函数供其他脚本使用
window.utils = utils;
