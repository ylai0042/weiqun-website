// 产品管理系统
class ProductManager {
    constructor() {
        this.products = [
            {
                id: 1,
                category: 'furniture',
                name: '可折叠户外桌椅套装',
                nameEn: 'Foldable Outdoor Table and Chair Set',
                nameJa: '折りたたみ式アウトドアテーブルチェアセット',
                nameKo: '접이식 아웃도어 테이블 의자 세트',
                description: '高品质可折叠户外桌椅套装，便携易用，适合各种户外活动',
                descriptionEn: 'High-quality foldable outdoor table and chair set, portable and easy to use, suitable for various outdoor activities',
                descriptionJa: '高品質折りたたみ式アウトドアテーブルチェアセット、ポータブルで使いやすく、様々なアウトドア活動に適しています',
                descriptionKo: '고품질 접이식 아웃도어 테이블 의자 세트, 휴대용이고 사용하기 쉬우며 다양한 아웃도어 활동에 적합',
                image: 'outdoor-furniture.jpg',
                specs: ['铝合金材质', '防水面料', '快速折叠', '便携收纳'],
                specsEn: ['Aluminum Material', 'Waterproof Fabric', 'Quick Fold', 'Portable Storage'],
                specsJa: ['アルミ素材', '防水生地', '高速折りたたみ', 'ポータブル収納'],
                specsKo: ['알루미늄 소재', '방수 원단', '빠른 접기', '휴대용 수납'],
                price: '起价 ¥599/套'
            },
            {
                id: 2,
                category: 'tents',
                name: '定制品牌大帐篷',
                nameEn: 'Customized Branding Marquee',
                nameJa: 'カスタムブランディングマーキー',
                nameKo: '맞춤형 브랜딩 마키',
                description: '专业定制品牌大帐篷，可承载企业标识，适合品牌推广活动',
                descriptionEn: 'Professional customized branding marquee, can carry corporate logos, suitable for brand promotion activities',
                descriptionJa: 'プロフェッショナルカスタムブランディングマーキー、企業ロゴを搭載でき、ブランドプロモーション活動に適しています',
                descriptionKo: '전문 맞춤형 브랜딩 마키, 기업 로고를 담을 수 있으며 브랜드 홍보 활동에 적합',
                image: 'custom-marquee.jpg',
                specs: ['定制设计', '品牌印刷', '防风防水', '快速搭建'],
                specsEn: ['Custom Design', 'Brand Printing', 'Windproof & Waterproof', 'Quick Setup'],
                specsJa: ['カスタムデザイン', 'ブランド印刷', '防風・防水', '迅速設置'],
                specsKo: ['맞춤 디자인', '브랜드 인쇄', '방풍 방수', '빠른 설치'],
                price: '起价 ¥1299/顶'
            },
            {
                id: 3,
                category: 'flags',
                name: '羽毛旗杆和底座',
                nameEn: 'Feather Flag Poles and Bases',
                nameJa: 'フェザーフラッグポールとベース',
                nameKo: '깃털 깃발 폴과 베이스',
                description: '专业羽毛旗杆和底座，材质多样，适合各种户外广告展示',
                descriptionEn: 'Professional feather flag poles and bases, various materials, suitable for various outdoor advertising displays',
                descriptionJa: 'プロフェッショナルフェザーフラッグポールとベース、多様な素材、様々な屋外広告展示に適しています',
                descriptionKo: '전문 깃털 깃발 폴과 베이스, 다양한 소재, 다양한 야외 광고 전시에 적합',
                image: 'flag-poles.jpg',
                specs: ['玻璃钢材质', '铝合金材质', '防风设计', '便携安装'],
                specsEn: ['Fiberglass Material', 'Aluminum Material', 'Windproof Design', 'Portable Installation'],
                specsJa: ['グラスファイバー素材', 'アルミ素材', '防風デザイン', 'ポータブル設置'],
                specsKo: ['글래스파이버 소재', '알루미늄 소재', '방풍 설계', '휴대용 설치'],
                price: '起价 ¥299/套'
            },
            {
                id: 4,
                category: 'custom',
                name: '弹性桌布',
                nameEn: 'Stretchy Table Cloth',
                nameJa: 'ストレッチテーブルクロス',
                nameKo: '스트레치 테이블 클로스',
                description: '高质量弹性桌布，可定制印刷，适合各种活动场合',
                descriptionEn: 'High-quality stretchy table cloth, customizable printing, suitable for various event occasions',
                descriptionJa: '高品質ストレッチテーブルクロス、カスタム印刷可能、様々なイベントシーンに適しています',
                descriptionKo: '고품질 스트레치 테이블 클로스, 맞춤형 인쇄 가능, 다양한 이벤트 장소에 적합',
                image: 'table-cloth.jpg',
                specs: ['弹性面料', '定制印刷', '易清洁', '多种尺寸'],
                specsEn: ['Stretchy Fabric', 'Custom Printing', 'Easy Clean', 'Various Sizes'],
                specsJa: ['ストレッチ生地', 'カスタム印刷', '簡単清掃', '様々なサイズ'],
                specsKo: ['스트레치 원단', '맞춤 인쇄', '쉬운 청소', '다양한 크기'],
                price: '起价 ¥99/张'
            },
            {
                id: 5,
                category: 'tents',
                name: '车辆遮阳篷',
                nameEn: 'Vehicle Shelter',
                nameJa: '車両日除け',
                nameKo: '차량 차양막',
                description: '专业车辆遮阳篷，保护车辆免受日晒雨淋，适合各种户外停车需求',
                descriptionEn: 'Professional vehicle shelter, protects vehicles from sun and rain, suitable for various outdoor parking needs',
                descriptionJa: 'プロフェッショナル車両日除け、車両を日差しや雨から保護、様々な屋外駐車ニーズに適しています',
                descriptionKo: '전문 차량 차양막, 차량을 햇빛과 비로부터 보호, 다양한 야외 주차 요구에 적합',
                image: 'vehicle-shelter.jpg',
                specs: ['防水材料', '防晒涂层', '防风设计', '快速搭建'],
                specsEn: ['Waterproof Material', 'Sun Protection Coating', 'Windproof Design', 'Quick Setup'],
                specsJa: ['防水材料', '日焼け防止コーティング', '防風デザイン', '迅速設置'],
                specsKo: ['방수 소재', '자외선 차단 코팅', '방풍 설계', '빠른 설치'],
                price: '起价 ¥799/顶'
            },
            {
                id: 6,
                category: 'flags',
                name: '染料升华印刷旗帜',
                nameEn: 'Dye-sub Printed Flag',
                nameJa: '染料昇華印刷フラッグ',
                nameKo: '염료 승화 인쇄 깃발',
                description: '高质量染料升华印刷旗帜，色彩鲜艳持久，适合品牌宣传展示',
                descriptionEn: 'High-quality dye-sub printed flag, bright and durable colors, suitable for brand promotion display',
                descriptionJa: '高品質染料昇華印刷フラッグ、鮮やかで耐久性のある色、ブランドプロモーション展示に適しています',
                descriptionKo: '고품질 염료 승화 인쇄 깃발, 선명하고 내구성이 뛰어난 색상, 브랜드 홍보 전시에 적합',
                image: 'dye-flag.jpg',
                specs: ['染料升华', '色彩持久', '防水防晒', '多种尺寸'],
                specsEn: ['Dye Sublimation', 'Color Fast', 'Waterproof & UV Resistant', 'Various Sizes'],
                specsJa: ['染料昇華', '色落ちしない', '防水・日焼け防止', '様々なサイズ'],
                specsKo: ['염료 승화', '색상 고정', '방수 자외선 차단', '다양한 크기'],
                price: '起价 ¥199/面'
            },
            {
                id: 7,
                category: 'custom',
                name: '织物横幅',
                nameEn: 'Fabric Banner',
                nameJa: 'ファブリックバナー',
                nameKo: '패브릭 배너',
                description: '专业织物横幅，可定制印刷，适合各类宣传展示活动',
                descriptionEn: 'Professional fabric banner, customizable printing, suitable for various promotional display activities',
                descriptionJa: 'プロフェッショナルファブリックバナー、カスタム印刷可能、様々なプロモーション展示活動に適しています',
                descriptionKo: '전문 패브릭 배너, 맞춤형 인쇄 가능, 다양한 홍보 전시 활동에 적합',
                image: 'fabric-banner.jpg',
                specs: ['优质织物', '定制印刷', '防水防晒', '多种规格'],
                specsEn: ['Quality Fabric', 'Custom Printing', 'Waterproof & UV Resistant', 'Various Specifications'],
                specsJa: ['高品質ファブリック', 'カスタム印刷', '防水・日焼け防止', '様々な仕様'],
                specsKo: ['고품질 패브릭', '맞춤 인쇄', '방수 자외선 차단', '다양한 규격'],
                price: '起价 ¥299/平米'
            },
            {
                id: 8,
                category: 'tents',
                name: '帐篷框架和配件',
                nameEn: 'Tent Frame and Accessories',
                nameJa: 'テントフレームとアクセサリー',
                nameKo: '텐트 프레임과 액세서리',
                description: '专业帐篷框架和配件，结构坚固，配件齐全，适合各种帐篷搭建需求',
                descriptionEn: 'Professional tent frame and accessories, sturdy structure, complete accessories, suitable for various tent setup needs',
                descriptionJa: 'プロフェッショナルテントフレームとアクセサリー、頑丈な構造、完全なアクセサリー、様々なテント設置ニーズに適しています',
                descriptionKo: '전문 텐트 프레임과 액세서리, 견고한 구조, 완전한 액세서리, 다양한 텐트 설치 요구에 적합',
                image: 'tent-frame.jpg',
                specs: ['铝合金框架', '不锈钢配件', '快速组装', '多种规格'],
                specsEn: ['Aluminum Frame', 'Stainless Steel Accessories', 'Quick Assembly', 'Various Specifications'],
                specsJa: ['アルミフレーム', 'ステンレスアクセサリー', '迅速組み立て', '様々な仕様'],
                specsKo: ['알루미늄 프레임', '스테인리스 액세서리', '빠른 조립', '다양한 규격'],
                price: '起价 ¥899/套'
            }
        ];
        
        this.currentCategory = 'all';
        this.currentLanguage = 'zh';
        
        this.init();
    }
    
    init() {
        this.setupCategoryFilter();
        this.renderProducts();
        this.setupLanguageListener();
    }
    
    setupCategoryFilter() {
        const categoryButtons = document.querySelectorAll('.category-btn');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.filterProducts(category);
                this.updateActiveCategoryButton(category);
            });
        });
    }
    
    filterProducts(category) {
        this.currentCategory = category;
        this.renderProducts();
    }
    
    updateActiveCategoryButton(category) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
    }
    
    renderProducts() {
        const productsGrid = document.querySelector('.products-grid');
        if (!productsGrid) return;
        
        const filteredProducts = this.currentCategory === 'all' 
            ? this.products 
            : this.products.filter(product => product.category === this.currentCategory);
        
        productsGrid.innerHTML = '';
        
        filteredProducts.forEach(product => {
            const productElement = this.createProductElement(product);
            productsGrid.appendChild(productElement);
        });
    }
    
    createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.setAttribute('data-category', product.category);
        
        const name = this.getLocalizedName(product);
        const description = this.getLocalizedDescription(product);
        const specs = this.getLocalizedSpecs(product);
        
        productDiv.innerHTML = `
            <div class="product-image">
                <i class="fas fa-${this.getProductIcon(product.category)}"></i>
            </div>
            <div class="product-info">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="product-specs">
                    ${specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
                <div class="product-price">${product.price}</div>
                <button class="btn btn-primary product-btn" onclick="window.productManager.showProductModal(${product.id})">
                    <i class="fas fa-info-circle"></i> 查看详情
                </button>
                <button class="btn btn-secondary product-btn" onclick="window.productManager.downloadProductInfo(${product.id})">
                    <i class="fas fa-download"></i> 下载资料
                </button>
            </div>
        `;
        
        return productDiv;
    }
    
    getProductIcon(category) {
        const icons = {
            furniture: 'chair',
            tents: 'home',
            flags: 'flag',
            custom: 'tools'
        };
        return icons[category] || 'home';
    }
    
    getLocalizedName(product) {
        const nameMap = {
            zh: product.name,
            en: product.nameEn,
            ja: product.nameJa,
            ko: product.nameKo
        };
        return nameMap[this.currentLanguage] || product.name;
    }
    
    getLocalizedDescription(product) {
        const descMap = {
            zh: product.description,
            en: product.descriptionEn,
            ja: product.descriptionJa,
            ko: product.descriptionKo
        };
        return descMap[this.currentLanguage] || product.description;
    }
    
    getLocalizedSpecs(product) {
        const specsMap = {
            zh: product.specs,
            en: product.specsEn,
            ja: product.specsJa,
            ko: product.specsKo
        };
        return specsMap[this.currentLanguage] || product.specs;
    }
    
    setupLanguageListener() {
        // 监听语言变化
        document.addEventListener('languageChanged', (e) => {
            this.currentLanguage = e.detail.language;
            this.renderProducts();
        });
    }
    
    showProductModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;
        
        const name = this.getLocalizedName(product);
        const description = this.getLocalizedDescription(product);
        const specs = this.getLocalizedSpecs(product);
        
        // 创建产品详情模态框
        const modal = document.createElement('div');
        modal.className = 'modal product-modal';
        modal.innerHTML = `
            <div class="modal-content product-modal-content">
                <span class="close">&times;</span>
                <div class="product-modal-header">
                    <h3>${name}</h3>
                    <div class="product-price">${product.price}</div>
                </div>
                <div class="product-modal-body">
                    <div class="product-modal-image">
                        <i class="fas fa-${this.getProductIcon(product.category)}"></i>
                    </div>
                    <div class="product-modal-info">
                        <p>${description}</p>
                        <h4>技术规格</h4>
                        <div class="product-specs">
                            ${specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                        </div>
                        <h4>应用场景</h4>
                        <ul class="application-list">
                            ${this.getApplicationScenarios(product.category).map(scenario => `<li>${scenario}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="product-modal-footer">
                    <button class="btn btn-primary" onclick="window.productManager.downloadProductInfo(${product.id})">
                        <i class="fas fa-download"></i> 下载详细资料
                    </button>
                    <button class="btn btn-secondary" onclick="window.productManager.contactForQuote(${product.id})">
                        <i class="fas fa-envelope"></i> 获取报价
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'block';
        
        // 添加关闭功能
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    getApplicationScenarios(category) {
        const scenarios = {
            furniture: ['户外活动', '野餐聚会', '商务会议', '展览展示'],
            tents: ['品牌推广', '活动庆典', '展览展示', '户外活动'],
            flags: ['广告宣传', '品牌展示', '活动标识', '户外广告'],
            custom: ['定制需求', '特殊活动', '品牌定制', '个性化服务']
        };
        return scenarios[category] || [];
    }
    
    downloadProductInfo(productId) {
        // 显示PDF下载模态框
        const modal = document.getElementById('pdfModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }
    
    contactForQuote(productId) {
        // 滚动到联系表单
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // 预填充产品信息到表单
        const product = this.products.find(p => p.id === productId);
        if (product) {
            const messageField = document.querySelector('textarea[data-translate-placeholder="form_message"]');
            if (messageField) {
                messageField.value = `我想了解${product.name}的详细报价信息。`;
            }
        }
    }
}

// 产品模态框样式
const productModalStyles = `
    .product-modal-content {
        max-width: 800px;
        width: 90%;
    }
    
    .product-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .product-modal-header h3 {
        margin: 0;
        color: var(--primary-color);
    }
    
    .product-modal-body {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
        margin-bottom: 2rem;
    }
    
    .product-modal-image {
        background: var(--secondary-color);
        border-radius: var(--radius-lg);
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 200px;
    }
    
    .product-modal-image i {
        font-size: 4rem;
        color: var(--primary-color);
    }
    
    .product-modal-info h4 {
        color: var(--primary-color);
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    .product-modal-info h4:first-child {
        margin-top: 0;
    }
    
    .application-list {
        list-style: none;
        padding: 0;
    }
    
    .application-list li {
        padding: 0.25rem 0;
        color: var(--text-light);
        position: relative;
        padding-left: 1.5rem;
    }
    
    .application-list li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: bold;
    }
    
    .product-modal-footer {
        display: flex;
        gap: 1rem;
        justify-content: center;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
    }
    
    .product-btn {
        margin: 0.25rem;
    }
    
    @media (max-width: 768px) {
        .product-modal-body {
            grid-template-columns: 1fr;
        }
        
        .product-modal-footer {
            flex-direction: column;
        }
    }
`;

// 添加样式到页面
const styleSheet = document.createElement('style');
styleSheet.textContent = productModalStyles;
document.head.appendChild(styleSheet);

// 初始化产品管理器
document.addEventListener('DOMContentLoaded', () => {
    window.productManager = new ProductManager();
});
