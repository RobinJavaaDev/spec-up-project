# Spec-Up Project

지역기반 커뮤니티 & 중고 거래 플랫폼

## 🏗️ 프로젝트 구조

```
spec-up-project/
├── frontend/          # Next.js 프론트엔드
│   ├── src/
│   │   ├── app/      # Next.js App Router
│   │   ├── components/ # React 컴포넌트
│   │   ├── styles/   # CSS 스타일
│   │   └── lib/      # 유틸리티 함수
│   ├── package.json
│   └── next.config.ts
├── backend/           # 백엔드 API (향후 구현 예정)
├── shared/            # 공유 모듈
└── README.md
```

## 🚀 시작하기

### 프론트엔드 개발 서버 실행

```bash
cd spec-up-project/frontend
npm install
npm run dev
```

### 백엔드 개발 서버 실행 (향후)

```bash
cd spec-up-project/backend
# 백엔드 실행 명령어
```

## 🛠️ 기술 스택

- **프론트엔드**: Next.js 14, React 18, TypeScript
- **스타일링**: Tailwind CSS, CSS Modules
- **백엔드**: Node.js (향후 구현)
- **데이터베이스**: (향후 구현)

## 📋 개발 가이드

### Git 워크플로우

1. **작업 시작**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/작업명
   ```

2. **커밋**
   ```bash
   git add .
   git commit -m "feat: 새로운 기능 추가"
   ```

3. **푸시 및 PR**
   ```bash
   git push origin feature/작업명
   # GitHub에서 PR 생성
   ```

### 커밋 메시지 규칙

- `feat:` 새로운 기능
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` 코드 포맷팅
- `refactor:` 코드 리팩토링

## 🔧 환경 설정

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 9.0.0 이상

### 개발 도구

- VS Code (권장)
- ESLint
- Prettier

## 📱 주요 기능

- [ ] 사용자 인증 (로그인/회원가입)
- [ ] 중고거래 게시판
- [ ] 동네 커뮤니티
- [ ] 실시간 채팅
- [ ] 위치 기반 서비스

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다
3. 변경사항을 커밋합니다
4. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.
