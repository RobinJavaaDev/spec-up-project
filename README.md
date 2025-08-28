# Spec Up Project

## 📋 프로젝트 개요
이 프로젝트는 Spring Boot와 Next.js를 사용한 풀스택 웹 애플리케이션입니다.

## 🏗️ 프로젝트 구조
```
spec-up-project-main/
├── backend/                 # Spring Boot 백엔드
│   ├── src/
│   ├── pom.xml
│   └── mvnw
├── frontend/               # Next.js 프론트엔드
│   ├── src/
│   ├── package.json
│   └── next.config.ts
├── src/                    # 메인 Spring Boot 프로젝트
│   ├── main/java/
│   ├── main/resources/
│   └── main/webapp/
├── GIT_COLLABORATION_RULES.md  # Git 협업 규칙
├── SETUP_REMOTE_REPO.md        # 원격 저장소 설정 가이드
└── README.md                   # 이 파일
```

## 🚀 시작하기

### 1. 프로젝트 클론
```bash
git clone https://github.com/본인아이디/저장소명.git
cd 저장소명
```

### 2. 백엔드 실행 (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
```
이후 localhost:8080으로 접속하면 node.js 만든 웹페이지가 접속됨 현재는 아직 node로 백엔드 개발 하지않았기때문에 아무것도 뜨지가 않음음

### 3. 프론트엔드 실행 (Next.js)
```bash
cd frontend
npm install
npm run dev
```
이후 localhost:3000 으로 접속하면 해당 웹페이지가 접속됨


## 🔧 개발 환경

- **Java**: 17+
- **Maven**: 3.6+
- **Node.js**: 18+
- **Spring Boot**: 3.x
- **Next.js**: 14+

## 📚 주요 문서

- [Git 협업 규칙](./GIT_COLLABORATION_RULES.md) - Trunk-based 개발 방식
- [원격 저장소 설정](./SETUP_REMOTE_REPO.md) - GitHub 연결 가이드

## 🤝 협업 규칙

이 프로젝트는 **Trunk-based 개발 방식**을 사용합니다:

1. **main 브랜치에서 직접 작업하지 않음**
2. **새 작업은 feature 브랜치로 시작**
3. **Pull Request를 통한 코드 통합**
4. **코드 리뷰 필수**

자세한 내용은 [GIT_COLLABORATION_RULES.md](./GIT_COLLABORATION_RULES.md)를 참고하세요.

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**💡 팁**: 개발을 시작하기 전에 반드시 Git 협업 규칙을 읽고 이해하세요!
