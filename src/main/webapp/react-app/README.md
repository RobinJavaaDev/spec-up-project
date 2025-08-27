# 중고거래 플랫폼 React 앱

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm start
```

### 3. 프로덕션 빌드
```bash
npm run build
```

## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트들
│   ├── Header.js       # 헤더 컴포넌트
│   ├── Footer.js       # 푸터 컴포넌트
│   ├── Sidebar.js      # 사이드바 컴포넌트
│   ├── ProductCard.js  # 상품 카드 컴포넌트
│   ├── PostCard.js     # 게시글 카드 컴포넌트
│   └── RestaurantCard.js # 맛집 카드 컴포넌트
├── pages/              # 페이지 컴포넌트들
│   └── HomePage.js     # 메인 홈페이지
├── App.js              # 메인 앱 컴포넌트
└── index.js            # 앱 진입점
```

## 주요 기능

- **우리 동네 추천 상품**: 지역 기반 상품 추천
- **우리 동네 인기 글**: 커뮤니티 인기 게시글
- **우리 동네 맛집**: 지역 맛집 정보
- **사이드바**: 찜한 상품, 내 상점, 최근 본 상품, 챗봇 연결

## 스타일링

- Styled Components를 사용한 CSS-in-JS 스타일링
- 반응형 디자인
- 모던한 UI/UX






