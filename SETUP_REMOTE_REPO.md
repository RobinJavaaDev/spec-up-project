# 원격 저장소 설정 가이드

## 🚀 GitHub 원격 저장소 연결하기

### 1. GitHub에서 새 저장소 생성
1. GitHub.com에 로그인
2. 우측 상단 "+" 버튼 클릭 → "New repository" 선택
3. 저장소 이름 입력 (예: `spec-up-project`)
4. Public 또는 Private 선택
5. README, .gitignore, license 체크하지 않음 (이미 있음)
6. "Create repository" 클릭

### 2. 로컬 저장소와 원격 저장소 연결
```bash
# 원격 저장소 추가
git remote add origin https://github.com/본인아이디/저장소명.git

# 원격 저장소 확인
git remote -v

# main 브랜치를 원격 저장소에 푸시
git push -u origin main
```

### 3. 팀원들이 프로젝트 참여하는 방법
```bash
# 저장소 클론
git clone https://github.com/본인아이디/저장소명.git
cd 저장소명

# main 브랜치 최신화
git checkout main
git pull origin main
```

## 🔧 원격 저장소 설정 예시

### 저장소 이름: `spec-up-project`
```bash
git remote add origin https://github.com/본인아이디/spec-up-project.git
git push -u origin main
```

### 저장소 이름: `my-project`
```bash
git remote add origin https://github.com/본인아이디/my-project.git
git push -u origin main
```

## 📋 다음 단계

원격 저장소 연결이 완료되면:

1. **GIT_COLLABORATION_RULES.md** 파일을 참고하여 Trunk-based 개발 시작
2. 팀원들에게 저장소 URL 공유
3. 각자 feature 브랜치를 생성하여 작업 시작

## ⚠️ 주의사항

- 원격 저장소 URL은 정확하게 입력해야 합니다
- `본인아이디` 부분을 실제 GitHub 사용자명으로 변경하세요
- `저장소명` 부분을 실제 저장소 이름으로 변경하세요
- HTTPS 또는 SSH 중 선호하는 방식으로 연결하세요

## 🔐 SSH 키 설정 (선택사항)

SSH를 사용하려면:

1. SSH 키 생성: `ssh-keygen -t ed25519 -C "이메일주소"`
2. SSH 에이전트에 키 추가: `ssh-add ~/.ssh/id_ed25519`
3. GitHub에 공개키 등록
4. SSH URL로 원격 저장소 연결: `git@github.com:본인아이디/저장소명.git`
