// 多语言支持系统
class MultiLanguageSystem {
    constructor() {
        this.currentLanguage = 'zh';
        this.translations = {
            zh: {
                // 导航
                nav_home: '首页',
                nav_about: '公司介绍',
                nav_products: '产品中心',
                nav_services: '服务范围',
                nav_contact: '联系我们',
                
                // 公司信息
                company_name: '广西伟群帐篷公司',
                tagline: '专业户外家具制造商',
                
                // 首页
                hero_badge: '专业制造',
                hero_title: '专业的户外家具制造解决方案',
                hero_subtitle: '为您的品牌提供高质量、创新性的户外家具和展示产品，致力于成为您最可靠的制造伙伴',
                btn_explore: '探索产品',
                btn_contact: '联系我们',
                
                // 公司介绍
                about_title: '关于伟群',
                about_subtitle: '专业、创新、可靠的户外家具制造合作伙伴',
                about_mission: '我们的使命',
                about_mission_text: '致力于为客户提供最优质的便携式户外品牌家具和织物展示产品，通过先进的技术和专业的团队，帮助客户实现更好的品牌展示效果。',
                about_vision: '我们的愿景',
                about_vision_text: '成为中国最大的便携式户外品牌家具和织物展示产品专业制造商，不断创新技术，提升产品质量，为客户创造更大价值。',
                stat_years: '年经验',
                stat_clients: '客户',
                stat_products: '产品',
                
                // 产品特色
                feature_quality: '最高品质',
                feature_quality_desc: '使用优质材料，严格质量控制，确保产品耐用可靠',
                feature_fast: '快速交付',
                feature_fast_desc: '高效生产流程，快速物流配送，确保及时送达',
                feature_custom: '定制服务',
                feature_custom_desc: '专业设计团队，支持OEM/ODM，满足您的个性化需求',
                feature_global: '全球出口',
                feature_global_desc: '产品出口至多个国家，丰富的国际市场经验',
                
                // 热门尺寸
                popular_sizes_title: '热门产品尺寸',
                popular_sizes_subtitle: '我们提供多种标准尺寸，也可根据您的需求定制',
                size_10x10: '适合小型活动',
                size_20x20: '中型活动首选',
                size_20x30: '展览展示',
                size_30x60: '大型活动',
                size_40x60: '大型展览',
                size_40x100: '超大型活动',
                
                // 客户评价
                testimonials_title: '客户评价',
                testimonials_subtitle: '来自全球客户的真实反馈',
                testimonial_1_text: '"产品质量非常好，服务专业，交付及时。我们非常满意与伟群的合作。"',
                testimonial_1_name: 'David T.',
                testimonial_1_role: '活动策划公司',
                testimonial_2_text: '"定制服务非常专业，能够满足我们的特殊需求。产品质量超出预期。"',
                testimonial_2_name: 'Antonio C.',
                testimonial_2_role: '餐厅老板',
                testimonial_3_text: '"团队非常专业，响应迅速。产品设计精美，完全符合我们的品牌形象。"',
                testimonial_3_name: 'Owen B.',
                testimonial_3_role: '娱乐行业',
                
                // 产品中心
                products_title: '产品中心',
                products_subtitle: '多样化的户外家具和展示产品，满足您的各种需求',
                category_all: '全部产品',
                category_furniture: '户外家具',
                category_tents: '帐篷展示',
                category_flags: '旗帜广告',
                category_custom: '定制产品',
                category_popup: '快幕秀',
                category_frames: '帐篷框架',
                
                // 顶部栏
                top_bar_text: '服务企业超过15年！值得信赖的客户服务！',
                
                // 导航
                nav_products_by_size: '按尺寸',
                nav_info: '信息',
                
                // 产品分类
                product_categories_title: '产品分类',
                category_tents_desc: '专业帐篷产品，适用于各种活动场景',
                category_flags_desc: '沙滩旗、横幅等广告展示产品',
                category_popup_desc: '快速搭建的展示系统',
                category_furniture_desc: '可折叠桌椅等户外家具',
                category_frames_desc: '专业帐篷框架和配件',
                category_custom_desc: '根据需求定制专属产品',
                
                // 服务范围
                services_title: '服务范围',
                services_subtitle: '全方位的户外家具制造服务，从设计到成品',
                service_design: '设计服务',
                service_design_desc: '专业的产品设计团队，为您打造独特的户外家具解决方案',
                service_manufacturing: '制造服务',
                service_manufacturing_desc: '先进的制造设备，确保每一个户外家具产品都完美呈现',
                service_customization: '定制服务',
                service_customization_desc: '专业的产品定制服务，满足您的特殊需求和品牌要求',
                service_delivery: '配送服务',
                service_delivery_desc: '快速、安全的物流配送，确保帐篷产品及时送达',
                
                // 联系我们
                contact_title: '联系我们',
                contact_subtitle: '我们期待与您的合作',
                contact_address_title: '公司地址',
                contact_address: '2nd Xuweiqian Building, Bridge South xilian Dong Cun Gaosha Development District, Nanhai Danzao, Foshan, China',
                contact_phone_title: '联系电话',
                contact_email_title: '电子邮箱',
                contact_qr_title: '扫码联系',
                whatsapp_label: 'WhatsApp',
                wechat_label: 'WeChat',
                
                // 表单
                form_name: '您的姓名',
                form_email: '您的邮箱',
                form_phone: '联系电话',
                form_message: '您的需求',
                form_submit: '发送消息',
                
                // 页脚
                footer_desc: '专业的户外家具制造服务提供商，致力于为客户提供最优质的产品和服务。',
                footer_links_title: '快速链接',
                footer_contact_title: '联系方式',
                footer_rights: '保留所有权利。',
                
                // PDF下载
                pdf_download_title: '下载产品资料',
                pdf_download_desc: '点击下方按钮下载完整的产品目录和公司介绍。',
                btn_download_pdf: '下载PDF',
                
                // 购物车
                cart_title: '购物车',
                cart_total: '总计:',
                cart_clear: '清空购物车',
                cart_checkout: '联系询价',
                cart_empty: '购物车是空的'
            },
            en: {
                // Navigation
                nav_home: 'Home',
                nav_about: 'About Us',
                nav_products: 'Products',
                nav_services: 'Services',
                nav_contact: 'Contact',
                
                // Company Info
                company_name: 'GuangXi Waikwan Tent Company',
                tagline: 'Professional Outdoor Furniture Manufacturer',
                
                // Homepage
                hero_badge: 'Professional Manufacturing',
                hero_title: 'Professional Outdoor Furniture Manufacturing Solutions',
                hero_subtitle: 'Providing high-quality, innovative outdoor furniture and display products for your brand, committed to being your most reliable manufacturing partner',
                btn_explore: 'Explore Products',
                btn_contact: 'Contact Us',
                
                // About
                about_title: 'About Weiqun',
                about_subtitle: 'Professional, Innovative, Reliable Outdoor Furniture Manufacturing Partner',
                about_mission: 'Our Mission',
                about_mission_text: 'Committed to providing customers with the highest quality portable outdoor branding furniture and fabric display products, helping customers achieve better brand exposure through advanced technology and professional teams.',
                about_vision: 'Our Vision',
                about_vision_text: 'To become one of the biggest specialist manufacturers of portable outdoor branding furniture and fabric displays in China, continuously innovating technology, improving product quality, and creating greater value for customers.',
                stat_years: 'Years',
                stat_clients: 'Clients',
                stat_products: 'Products',
                
                // Features
                feature_quality: 'Highest Quality',
                feature_quality_desc: 'Using premium materials, strict quality control, ensuring durable and reliable products',
                feature_fast: 'Fast Delivery',
                feature_fast_desc: 'Efficient production process, fast logistics delivery, ensuring timely arrival',
                feature_custom: 'Customization Service',
                feature_custom_desc: 'Professional design team, supporting OEM/ODM, meeting your personalized needs',
                feature_global: 'Global Export',
                feature_global_desc: 'Products exported to multiple countries, rich international market experience',
                
                // Popular Sizes
                popular_sizes_title: 'Popular Product Sizes',
                popular_sizes_subtitle: 'We offer various standard sizes, and can customize according to your needs',
                size_10x10: 'Suitable for small events',
                size_20x20: 'Preferred for medium events',
                size_20x30: 'Exhibitions and displays',
                size_30x60: 'Large events',
                size_40x60: 'Large exhibitions',
                size_40x100: 'Extra large events',
                
                // Testimonials
                testimonials_title: 'Customer Reviews',
                testimonials_subtitle: 'Real feedback from customers worldwide',
                testimonial_1_text: '"Excellent product quality, professional service, timely delivery. We are very satisfied with our cooperation with Weiqun."',
                testimonial_1_name: 'David T.',
                testimonial_1_role: 'Event Planning Company',
                testimonial_2_text: '"Very professional customization service, able to meet our special needs. Product quality exceeded expectations."',
                testimonial_2_name: 'Antonio C.',
                testimonial_2_role: 'Restaurant Owner',
                testimonial_3_text: '"Very professional team, quick response. Beautiful product design, perfectly matches our brand image."',
                testimonial_3_name: 'Owen B.',
                testimonial_3_role: 'Entertainment Industry',
                
                // Products
                products_title: 'Product Center',
                products_subtitle: 'Diverse outdoor furniture and display products to meet your various needs',
                category_all: 'All Products',
                category_furniture: 'Outdoor Furniture',
                category_tents: 'Tent Display',
                category_flags: 'Flag Advertising',
                category_custom: 'Custom Products',
                category_popup: 'Pop-up Display',
                category_frames: 'Tent Frame',
                
                // Top Bar
                top_bar_text: 'Serving businesses for over 15 years! Customer service you can trust!',
                
                // Navigation
                nav_products_by_size: 'By Size',
                nav_info: 'Information',
                
                // Product Categories
                product_categories_title: 'Product Categories',
                category_tents_desc: 'Professional tent products for various event scenarios',
                category_flags_desc: 'Beach flags, banners and advertising display products',
                category_popup_desc: 'Quick-setup display systems',
                category_furniture_desc: 'Foldable tables and chairs for outdoor use',
                category_frames_desc: 'Professional tent frames and accessories',
                category_custom_desc: 'Custom products tailored to your needs',
                
                // Services
                services_title: 'Service Range',
                services_subtitle: 'Comprehensive outdoor furniture manufacturing services from design to finished product',
                service_design: 'Design Services',
                service_design_desc: 'Professional product design team to create unique outdoor furniture solutions for you',
                service_manufacturing: 'Manufacturing Services',
                service_manufacturing_desc: 'Advanced manufacturing equipment ensures every outdoor furniture product is perfectly presented',
                service_customization: 'Customization Services',
                service_customization_desc: 'Professional product customization services to meet your special needs and brand requirements',
                service_delivery: 'Delivery Services',
                service_delivery_desc: 'Fast and secure logistics delivery to ensure timely tent product delivery',
                
                // Contact
                contact_title: 'Contact Us',
                contact_subtitle: 'We look forward to working with you',
                contact_address_title: 'Company Address',
                contact_address: '2nd Xuweiqian Building, Bridge South xilian Dong Cun Gaosha Development District, Nanhai Danzao, Foshan, China',
                contact_phone_title: 'Phone Number',
                contact_email_title: 'Email Address',
                contact_qr_title: 'Scan to Contact',
                whatsapp_label: 'WhatsApp',
                wechat_label: 'WeChat',
                
                // Form
                form_name: 'Your Name',
                form_email: 'Your Email',
                form_phone: 'Phone Number',
                form_message: 'Your Message',
                form_submit: 'Send Message',
                
                // Footer
                footer_desc: 'Professional tent manufacturing service provider, committed to providing customers with the highest quality products and services.',
                footer_links_title: 'Quick Links',
                footer_contact_title: 'Contact Information',
                footer_rights: 'All rights reserved.',
                
                // PDF Download
                pdf_download_title: 'Download Product Information',
                pdf_download_desc: 'Click the button below to download the complete product catalog and company introduction.',
                btn_download_pdf: 'Download PDF',
                
                // Shopping Cart
                cart_title: 'Shopping Cart',
                cart_total: 'Total:',
                cart_clear: 'Clear Cart',
                cart_checkout: 'Request Quote',
                cart_empty: 'Your cart is empty'
            },
            ja: {
                // ナビゲーション
                nav_home: 'ホーム',
                nav_about: '会社概要',
                nav_products: '製品センター',
                nav_services: 'サービス',
                nav_contact: 'お問い合わせ',
                
                // 会社情報
                company_name: '広西偉群',
                tagline: 'プロフェッショナル印刷サービス',
                
                // ホームページ
                hero_title: 'プロフェッショナル印刷ソリューション',
                hero_subtitle: 'ブランドに高品質で革新的な印刷サービスを提供',
                btn_explore: '製品を探す',
                btn_contact: 'お問い合わせ',
                
                // 会社概要
                about_title: '偉群について',
                about_subtitle: 'プロフェッショナル、革新的、信頼できる印刷パートナー',
                about_mission: '私たちの使命',
                about_mission_text: 'お客様に最高品質の印刷サービスを提供し、先進技術とプロフェッショナルチームを通じて、お客様のブランド価値の最大化を支援します。',
                about_vision: '私たちのビジョン',
                about_vision_text: '業界をリードする印刷サービスプロバイダーとなり、技術の継続的な革新、サービス品質の向上、お客様へのより大きな価値創造を目指します。',
                stat_years: '年の業界経験',
                stat_clients: '満足したクライアント',
                stat_products: '製品タイプ',
                
                // 製品特徴
                feature_quality: '最高品質',
                feature_quality_desc: '高品質材料を使用し、厳格な品質管理により、製品の耐久性と信頼性を確保',
                feature_fast: '迅速な配送',
                feature_fast_desc: '効率的な生産プロセス、迅速な物流配送により、タイムリーな到着を確保',
                feature_custom: 'カスタマイズサービス',
                feature_custom_desc: 'プロフェッショナルなデザインチーム、OEM/ODM対応、お客様の個別ニーズに対応',
                feature_global: 'グローバル輸出',
                feature_global_desc: '複数の国に製品を輸出、豊富な国際市場経験',
                
                // 人気サイズ
                popular_sizes_title: '人気製品サイズ',
                popular_sizes_subtitle: '様々な標準サイズを提供、お客様のニーズに応じてカスタマイズ可能',
                size_10x10: '小型イベントに適しています',
                size_20x20: '中型イベントに最適',
                size_20x30: '展示・展示会',
                size_30x60: '大型イベント',
                size_40x60: '大型展示会',
                size_40x100: '超大型イベント',
                
                // お客様の声
                testimonials_title: 'お客様の声',
                testimonials_subtitle: '世界中のお客様からの実際のフィードバック',
                testimonial_1_text: '"製品品質は非常に優れており、サービスもプロフェッショナルで、配送も迅速でした。ウェイチュンとの協力に非常に満足しています。"',
                testimonial_1_name: 'David T.',
                testimonial_1_role: 'イベント企画会社',
                testimonial_2_text: '"カスタマイズサービスは非常にプロフェッショナルで、私たちの特別なニーズに対応できました。製品品質は期待を超えました。"',
                testimonial_2_name: 'Antonio C.',
                testimonial_2_role: 'レストランオーナー',
                testimonial_3_text: '"チームは非常にプロフェッショナルで、対応も迅速でした。製品デザインは美しく、私たちのブランドイメージに完全に一致しています。"',
                testimonial_3_name: 'Owen B.',
                testimonial_3_role: 'エンターテインメント業界',
                
                // 製品センター
                products_title: '製品センター',
                products_subtitle: '多様な印刷ソリューションで、様々なニーズに対応',
                category_all: '全製品',
                category_commercial: '商業印刷',
                category_packaging: '包装印刷',
                category_digital: 'デジタル印刷',
                category_large: '大型印刷',
                
                // サービス
                services_title: 'サービス範囲',
                services_subtitle: 'デザインから完成品まで、包括的な印刷サービス',
                service_design: 'デザインサービス',
                service_design_desc: 'プロフェッショナルなグラフィックデザインチームが、ユニークなビジュアルアイデンティティを作成',
                service_printing: '印刷サービス',
                service_printing_desc: '先進的な印刷設備で、すべての作品を完璧に表現',
                service_finishing: '仕上げサービス',
                service_finishing_desc: 'プロフェッショナルな製本、ラミネート、ホットスタンプなどの仕上げサービス',
                service_delivery: '配送サービス',
                service_delivery_desc: '迅速で安全な物流配送で、製品のタイムリーな配送を保証',
                
                // お問い合わせ
                contact_title: 'お問い合わせ',
                contact_subtitle: '皆様とのご協力をお待ちしております',
                contact_address_title: '会社住所',
                contact_address: '2nd Xuweiqian Building, Bridge South xilian Dong Cun Gaosha Development District, Nanhai Danzao, Foshan, China',
                contact_phone_title: '電話番号',
                contact_email_title: 'メールアドレス',
                
                // フォーム
                form_name: 'お名前',
                form_email: 'メールアドレス',
                form_phone: '電話番号',
                form_message: 'お問い合わせ内容',
                form_submit: 'メッセージを送信',
                
                // フッター
                footer_desc: 'プロフェッショナル印刷サービスプロバイダーとして、お客様に最高品質の製品とサービスを提供することをお約束します。',
                footer_links_title: 'クイックリンク',
                footer_contact_title: '連絡先情報',
                footer_rights: 'すべての権利を保有。',
                
                // PDFダウンロード
                pdf_download_title: '製品資料ダウンロード',
                pdf_download_desc: '下のボタンをクリックして、完全な製品カタログと会社紹介をダウンロードしてください。',
                btn_download_pdf: 'PDFダウンロード'
            },
            ko: {
                // 내비게이션
                nav_home: '홈',
                nav_about: '회사소개',
                nav_products: '제품센터',
                nav_services: '서비스',
                nav_contact: '문의하기',
                
                // 회사 정보
                company_name: '광시웨이췬',
                tagline: '전문 인쇄 서비스',
                
                // 홈페이지
                hero_title: '전문 인쇄 솔루션',
                hero_subtitle: '브랜드를 위한 고품질, 혁신적인 인쇄 서비스 제공',
                btn_explore: '제품 둘러보기',
                btn_contact: '문의하기',
                
                // 회사소개
                about_title: '웨이췬에 대해',
                about_subtitle: '전문적이고 혁신적이며 신뢰할 수 있는 인쇄 파트너',
                about_mission: '우리의 사명',
                about_mission_text: '고객에게 최고 품질의 인쇄 서비스를 제공하고, 첨단 기술과 전문 팀을 통해 고객의 브랜드 가치를 최대화하는 것을 목표로 합니다.',
                about_vision: '우리의 비전',
                about_vision_text: '업계를 선도하는 인쇄 서비스 제공업체가 되어 지속적인 기술 혁신, 서비스 품질 향상, 고객을 위한 더 큰 가치 창출을 추구합니다.',
                stat_years: '년 업계 경험',
                stat_clients: '만족한 고객',
                stat_products: '제품 유형',
                
                // 제품 특징
                feature_quality: '최고 품질',
                feature_quality_desc: '고품질 소재 사용, 엄격한 품질 관리로 제품의 내구성과 신뢰성 보장',
                feature_fast: '빠른 배송',
                feature_fast_desc: '효율적인 생산 프로세스, 빠른 물류 배송으로 적시 도착 보장',
                feature_custom: '맞춤 서비스',
                feature_custom_desc: '전문 디자인 팀, OEM/ODM 지원, 고객의 개별 요구사항 충족',
                feature_global: '글로벌 수출',
                feature_global_desc: '여러 국가로 제품 수출, 풍부한 국제 시장 경험',
                
                // 인기 사이즈
                popular_sizes_title: '인기 제품 사이즈',
                popular_sizes_subtitle: '다양한 표준 사이즈 제공, 고객 요구에 따라 맞춤 제작 가능',
                size_10x10: '소규모 이벤트에 적합',
                size_20x20: '중형 이벤트에 최적',
                size_20x30: '전시 및 전시회',
                size_30x60: '대형 이벤트',
                size_40x60: '대형 전시회',
                size_40x100: '초대형 이벤트',
                
                // 고객 후기
                testimonials_title: '고객 후기',
                testimonials_subtitle: '전 세계 고객들의 실제 피드백',
                testimonial_1_text: '"제품 품질이 매우 우수하고, 서비스도 전문적이며, 배송도 신속했습니다. 웨이췬과의 협력에 매우 만족합니다."',
                testimonial_1_name: 'David T.',
                testimonial_1_role: '이벤트 기획 회사',
                testimonial_2_text: '"맞춤 서비스가 매우 전문적이며, 우리의 특별한 요구사항을 충족할 수 있었습니다. 제품 품질은 기대를 뛰어넘었습니다."',
                testimonial_2_name: 'Antonio C.',
                testimonial_2_role: '레스토랑 사장',
                testimonial_3_text: '"팀이 매우 전문적이며, 대응도 신속했습니다. 제품 디자인이 아름답고, 우리의 브랜드 이미지와 완벽하게 일치합니다."',
                testimonial_3_name: 'Owen B.',
                testimonial_3_role: '엔터테인먼트 업계',
                
                // 제품센터
                products_title: '제품센터',
                products_subtitle: '다양한 인쇄 솔루션으로 다양한 요구사항 충족',
                category_all: '전체 제품',
                category_commercial: '상업 인쇄',
                category_packaging: '포장 인쇄',
                category_digital: '디지털 인쇄',
                category_large: '대형 인쇄',
                
                // 서비스
                services_title: '서비스 범위',
                services_subtitle: '디자인에서 완성품까지 전방위적인 인쇄 서비스',
                service_design: '디자인 서비스',
                service_design_desc: '전문 그래픽 디자인 팀이 고유한 비주얼 아이덴티티를 제작',
                service_printing: '인쇄 서비스',
                service_printing_desc: '첨단 인쇄 장비로 모든 작품을 완벽하게 표현',
                service_finishing: '후가공 서비스',
                service_finishing_desc: '전문적인 제본, 라미네이션, 황금박 등의 후가공 서비스',
                service_delivery: '배송 서비스',
                service_delivery_desc: '빠르고 안전한 물류 배송으로 제품의 적시 배송 보장',
                
                // 문의하기
                contact_title: '문의하기',
                contact_subtitle: '여러분과의 협력을 기대합니다',
                contact_address_title: '회사 주소',
                contact_address: '2nd Xuweiqian Building, Bridge South xilian Dong Cun Gaosha Development District, Nanhai Danzao, Foshan, China',
                contact_phone_title: '전화번호',
                contact_email_title: '이메일 주소',
                
                // 폼
                form_name: '성함',
                form_email: '이메일 주소',
                form_phone: '전화번호',
                form_message: '문의 내용',
                form_submit: '메시지 보내기',
                
                // 푸터
                footer_desc: '전문 인쇄 서비스 제공업체로서 고객에게 최고 품질의 제품과 서비스를 제공하기 위해 최선을 다하겠습니다.',
                footer_links_title: '빠른 링크',
                footer_contact_title: '연락처 정보',
                footer_rights: '모든 권리 보유.',
                
                // PDF 다운로드
                pdf_download_title: '제품 자료 다운로드',
                pdf_download_desc: '아래 버튼을 클릭하여 완전한 제품 카탈로그와 회사 소개를 다운로드하세요.',
                btn_download_pdf: 'PDF 다운로드'
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupLanguageSwitcher();
        this.loadSavedLanguage();
        this.translatePage();
        this.setupFormTranslations();
    }
    
    setupLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const selectedLang = e.target.dataset.lang;
                this.switchLanguage(selectedLang);
            });
        });
    }
    
    switchLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.saveLanguage(lang);
            this.updateActiveLanguageButton(lang);
            this.translatePage();
            this.updateDocumentLanguage(lang);
            this.animateLanguageChange();
        }
    }
    
    updateActiveLanguageButton(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (this.translations[this.currentLanguage][key]) {
                element.textContent = this.translations[this.currentLanguage][key];
            }
        });
        
        // 处理placeholder属性
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.dataset.translatePlaceholder;
            if (this.translations[this.currentLanguage][key]) {
                element.placeholder = this.translations[this.currentLanguage][key];
            }
        });
    }
    
    setupFormTranslations() {
        // 为表单添加语言特定的验证消息
        const form = document.querySelector('.contact-form form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
    }
    
    handleFormSubmit() {
        // 显示成功消息（根据当前语言）
        const successMessages = {
            zh: '消息发送成功！我们会尽快回复您。',
            en: 'Message sent successfully! We will reply to you as soon as possible.',
            ja: 'メッセージが正常に送信されました！できるだけ早くご返信いたします。',
            ko: '메시지가 성공적으로 전송되었습니다! 가능한 빨리 답변드리겠습니다.'
        };
        
        alert(successMessages[this.currentLanguage]);
        
        // 重置表单
        const form = document.querySelector('.contact-form form');
        form.reset();
    }
    
    updateDocumentLanguage(lang) {
        document.documentElement.lang = lang;
        
        // 更新字体方向（如果需要）
        const rtlLanguages = ['ar', 'he', 'fa'];
        document.documentElement.dir = rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
    }
    
    animateLanguageChange() {
        const content = document.querySelector('main');
        content.classList.add('lang-transition');
        
        setTimeout(() => {
            content.classList.remove('lang-transition');
        }, 300);
    }
    
    saveLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
    }
    
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && this.translations[savedLang]) {
            this.switchLanguage(savedLang);
        } else {
            // 检测浏览器语言
            const browserLang = navigator.language.split('-')[0];
            if (this.translations[browserLang]) {
                this.switchLanguage(browserLang);
            }
        }
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    addTranslation(lang, key, value) {
        if (!this.translations[lang]) {
            this.translations[lang] = {};
        }
        this.translations[lang][key] = value;
    }
}

// 初始化多语言系统
document.addEventListener('DOMContentLoaded', () => {
    window.multiLang = new MultiLanguageSystem();
});
