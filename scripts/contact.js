// 联系表单处理
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.submitText = document.getElementById('submitText');
        this.loadingIcon = document.getElementById('loadingIcon');
        this.formMessage = document.getElementById('formMessage');
        
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.addInputValidation();
        }
    }

    addInputValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        const errorElement = document.getElementById(fieldName + 'Error');

        // 清除之前的错误
        this.clearError(field);

        // 验证规则
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'name':
                if (!value) {
                    errorMessage = '请输入您的姓名';
                    isValid = false;
                } else if (value.length < 2) {
                    errorMessage = '姓名至少需要2个字符';
                    isValid = false;
                } else if (value.length > 50) {
                    errorMessage = '姓名不能超过50个字符';
                    isValid = false;
                }
                break;

            case 'email':
                if (!value) {
                    errorMessage = '请输入您的邮箱';
                    isValid = false;
                } else if (!this.isValidEmail(value)) {
                    errorMessage = '请输入有效的邮箱地址';
                    isValid = false;
                }
                break;

            case 'phone':
                if (value && !this.isValidPhone(value)) {
                    errorMessage = '请输入有效的手机号码';
                    isValid = false;
                }
                break;

            case 'message':
                if (!value) {
                    errorMessage = '请输入您的需求';
                    isValid = false;
                } else if (value.length < 10) {
                    errorMessage = '消息至少需要10个字符';
                    isValid = false;
                } else if (value.length > 1000) {
                    errorMessage = '消息不能超过1000个字符';
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        }

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^1[3-9]\d{9}$/;
        return phoneRegex.test(phone);
    }

    showError(field, message) {
        const errorElement = document.getElementById(field.name + 'Error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        field.style.borderColor = '#e74c3c';
    }

    clearError(field) {
        const errorElement = document.getElementById(field.name + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
        field.style.borderColor = '';
    }

    async handleSubmit(e) {
        e.preventDefault();

        // 验证所有字段
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showMessage('请检查并修正表单中的错误', 'error');
            return;
        }

        // 显示加载状态
        this.setLoading(true);

        try {
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());

            const response = await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                this.showMessage(result.message, 'success');
                this.form.reset();
            } else {
                this.showMessage(result.message || '发送失败，请稍后重试', 'error');
            }

        } catch (error) {
            console.error('表单提交错误:', error);
            this.showMessage('网络错误，请检查网络连接后重试', 'error');
        } finally {
            this.setLoading(false);
        }
    }

    setLoading(loading) {
        if (loading) {
            this.submitBtn.disabled = true;
            this.submitText.style.display = 'none';
            this.loadingIcon.style.display = 'inline-block';
        } else {
            this.submitBtn.disabled = false;
            this.submitText.style.display = 'inline';
            this.loadingIcon.style.display = 'none';
        }
    }

    showMessage(message, type) {
        this.formMessage.textContent = message;
        this.formMessage.className = `form-message ${type}`;
        this.formMessage.style.display = 'block';

        // 3秒后自动隐藏成功消息
        if (type === 'success') {
            setTimeout(() => {
                this.formMessage.style.display = 'none';
            }, 5000);
        }
    }
}

// 页面加载完成后初始化表单
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});
