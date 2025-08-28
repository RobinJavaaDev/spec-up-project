# Git 협업 규칙 (Trunk-based 방식)

## 📋 개요
이 프로젝트는 Trunk-based 개발 방식을 사용합니다. 모든 개발자는 main 브랜치에서 직접 작업하지 않고, feature 브랜치를 생성하여 작업한 후 Pull Request를 통해 코드를 통합합니다.

## 🚀 처음 세팅

### 1. 저장소 클론
```bash
git clone https://github.com/본인아이디/저장소명.git
cd 저장소명
```

### 2. main 브랜치 최신화
```bash
git checkout main
git pull origin main
```

## 🔧 새 작업 시작할 때

### 1. main에서 새 브랜치 생성
```bash
git checkout main
git pull origin main
git checkout -b feature/작업이름
```

### 2. 브랜치 이름 규칙
- **형식**: `feature/작업이름`
- **예시**:
  - `feature/register` (회원가입 기능)
  - `feature/login` (로그인 기능)
  - `feature/user-profile` (사용자 프로필 기능)
  - `feature/backend-api` (백엔드 API 개발)

## 💾 작업 후 커밋 & 푸시

### 1. 변경사항 확인
```bash
git status
```

### 2. 스테이징 & 커밋
```bash
git add .
git commit -m "작업 내용 (예: 회원가입 페이지 JSP 작성)"
```

### 3. 브랜치 푸시
```bash
git push origin feature/작업이름
```

## 🔄 PR (Pull Request) 생성

### 1. GitHub 저장소 접속
- GitHub에서 해당 저장소로 이동

### 2. Pull Request 생성
- "Compare & pull request" 클릭
- base: main ←→ compare: feature/작업이름 확인
- 제목과 설명 작성 후 "Create pull request"

### 3. PR 설명 예시
```
제목: 회원가입 기능 구현

설명:
- 회원가입 페이지 JSP 작성
- 사용자 입력 폼 검증 로직 추가
- 데이터베이스 연동 구현
- 에러 처리 및 사용자 피드백 추가

테스트 완료 여부: ✅
```

## 👥 리뷰 & 머지

### 1. 코드 리뷰 과정
- 팀장/리뷰어가 PR 확인
- 코드 품질 검토 및 코멘트 작성
- 승인 또는 수정 요청

### 2. 수정이 필요한 경우
- 해당 feature 브랜치에서 수정
- 다시 커밋 & 푸시
- 기존 PR에 자동 반영됨

### 3. 머지
- 리뷰 승인 후 main 브랜치에 머지
- feature 브랜치 삭제 (선택사항)

## ⚠️ 주의사항

### 🚫 절대 하지 말 것
- **main 브랜치에서 직접 작업하지 않기**
- **직접 main에 푸시하지 않기**
- **커밋 메시지를 명확하지 않게 작성하지 않기**

### ✅ 항상 지켜야 할 것
- 새 작업은 무조건 `git checkout -b feature/작업명`으로 시작
- 작업 전 `git pull origin main`으로 최신화
- 의미있는 커밋 메시지 작성
- PR 설명을 상세하게 작성

## 🔧 유용한 Git 명령어

### 브랜치 관리
```bash
# 브랜치 목록 확인
git branch -a

# 현재 브랜치 확인
git branch

# 브랜치 삭제
git branch -d feature/작업이름

# 원격 브랜치 삭제
git push origin --delete feature/작업이름
```

### 작업 중인 변경사항 관리
```bash
# 변경사항 임시 저장
git stash

# 저장된 변경사항 불러오기
git stash pop

# 변경사항 취소
git checkout -- .
```

### 히스토리 확인
```bash
# 커밋 히스토리 확인
git log --oneline

# 특정 파일의 변경사항 확인
git log -p 파일명
```

## 📝 커밋 메시지 규칙

### 형식
```
타입: 간단한 설명

상세한 설명 (선택사항)
```

### 타입 예시
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드
- `chore`: 빌드 업무, 패키지 매니저 등

### 예시
```
feat: 회원가입 페이지 구현

- 사용자 입력 폼 작성
- 이메일 중복 검사 기능 추가
- 비밀번호 유효성 검사 로직 구현
```

## 🆘 문제 해결

### 충돌 해결
1. `git pull origin main` 실행
2. 충돌 파일 확인 및 수정
3. 충돌 해결 후 커밋
4. 푸시

### 잘못된 브랜치에서 작업한 경우
1. 현재 작업 내용을 stash로 저장
2. 올바른 브랜치로 이동
3. stash 내용을 적용하여 작업 계속

---

**💡 팁**: 처음에는 작은 단위로 작업하고 자주 커밋하는 것이 좋습니다. 큰 변경사항을 한 번에 커밋하면 리뷰와 디버깅이 어려워집니다.
