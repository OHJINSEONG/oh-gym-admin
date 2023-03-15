# OhGym-admin

<img width="1000px" src="https://user-images.githubusercontent.com/107606892/221401018-cbbfa326-99f4-43fc-8144-d1716e08593d.png">

## 프로젝트 소개
OhGym은 간단하게 PT,락커 신청을 할수있고 운동일지를 쉽게 관리 할 수 있는 개인 프랜차이징 헬스장 관리 서비스입니다.

### 배포 URL
- 사용자 : [https://oh-gym.fly.dev/](https://oh-gym.fly.dev/)
- 어드민 : [https://oh-gym-admin.fly.dev/](https://oh-gym-admin.fly.dev/)

### Github
- 서버 : [https://github.com/OHJINSEONG/oh-gym-backend](https://github.com/OHJINSEONG/oh-gym-backend)
- 사용자 프론트 : [https://github.com/OHJINSEONG/oh-gym-frontend](https://github.com/OHJINSEONG/oh-gym-frontend)
- 어드민 프론트 : [https://github.com/OHJINSEONG/oh-gym-admin](https://github.com/OHJINSEONG/oh-gym-admin)

## 개발 기간
- 2022.11.26 ~ 2022.01.20(8주)
- 매주 스프린트 계획을 작성하며 프로젝트를 진행하였습니다.
<br>

## 기술 스택
### Front
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></a>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

<br>

## 주요 기능

### 관리자
- 회원,직원,락커,매출 목록
- 트레이너 시간 관리
- 피티,락커 신청 수락 및 거절
- 트레이너 상담톡
- 트레이너 담당 회원 관리

<br>

## 아키텍쳐
Flux Architecture를 참고했습니다.

1. View - Action
2. Dispatcher
3. Store