# spec-up-project
스펙업 프로젝트 / 지역기반 커뮤니티 &amp; 중고 거래 플랫폼



깃 허브 사용 요령
# 1. main 브랜치로 이동
git checkout main

# 2. 최신 변경사항 받아오기
git pull origin main

# 3. 새 feature 브랜치 생성
git checkout -b feature/작업명


# 코드 작성 후 커밋
git add .
git commit -m "타입: 간단한 설명"

# 예시
git commit -m "feat: 회원가입 유효성 검사 추가"
git commit -m "fix: 로그인 버튼 CSS 오류 수정"
git commit -m "docs: README 설치 방법 추가"

git checkout main
git pull origin main
git branch -d feature/작업명  # 로컬 브랜치 삭제


🚨 절대 금지 사항
 ❌ main 브랜치에서 직접 작업

 ❌ git pull 없이 새 브랜치 생성

 ❌ 여러 기능을 하나의 브랜치에 섞어서 작업

 ❌ 의미 없는 커밋 메시지 (test, 수정, 123 등)

 ❌ 큰 파일이나 IDE 설정 파일 커밋



🔍 PR 생성 전 체크리스트
기능 테스트

 로컬에서 애플리케이션 정상 실행 확인

 본인이 작업한 기능 정상 동작 확인

 기존 기능에 영향 없는지 확인

코드 품질

 오타나 문법 오류 없는지 확인

 불필요한 주석이나 콘솔 로그 제거

 파일 경로와 이름 일관성 확인

보안 점검

 비밀번호 필드 type="password" 사용

 label의 for 속성과 input의 id 일치

 민감한 정보 하드코딩 없는지 확인


📢 팀 규칙
매일 작업 시작: git checkout main && git pull origin main

작업 단위: 하나의 브랜치에는 하나의 기능만

PR 리뷰: 최소 1명 이상 승인 후 머지

문제 발생: 혼자 해결하지 말고 팀원과 상의

코드 품질: 오타, 보안 이슈는 PR 전에 반드시 체크
