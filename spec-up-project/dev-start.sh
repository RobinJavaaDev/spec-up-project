#!/bin/bash

echo "========================================"
echo "Spec-Up Project 개발 서버 시작"
echo "========================================"
echo

echo "1. 의존성 설치 확인 중..."
if [ ! -d "frontend/node_modules" ]; then
    echo "프론트엔드 의존성 설치 중..."
    cd frontend
    npm install
    cd ..
else
    echo "프론트엔드 의존성 이미 설치됨"
fi

echo
echo "2. 백엔드와 프론트엔드를 동시에 시작합니다..."
echo
echo "백엔드: http://localhost:8080"
echo "프론트엔드: http://localhost:3000"
echo "H2 콘솔: http://localhost:8080/h2-console"
echo

npm run dev
