/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "../assets/SVG";
import ImageSlider from "./ImageSlider";

function ClonePage() {
  return (
    <>
      <header>
        <div className="header-inner">
          <div className="brand-logo">
            <a href="#">
              <div className="visible-on-pc">
                <SVG name="miniintern-logo-PC" width={203} height={34} />
              </div>
              <div className="visible-on-mobile">
                <SVG name="miniintern-logo-mobile" width={135} height={50} />
              </div>
            </a>
          </div>
          <nav type="NAVI" className="header-container visible-on-pc">
            <ul>
              <li name="미니인턴 리스트" className="nav-li">
                <a className="" href="#">
                  미니인턴 리스트
                </a>
              </li>
              <li name="채용관" className="nav-li">
                <a className="" href="#">
                  채용관
                </a>
              </li>
              <li name="M클래스" className="nav-li">
                <a className="" href="#">
                  M클래스
                </a>
              </li>
              <li name="해피폴리오" className="nav-li">
                <a className="" href="#">
                  해피폴리오
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-right">
            <div className="hamburger-menu visible-on-mobile">
              <SVG name="hamburger-bar" width={28} height={28}></SVG>
            </div>
            <section
              type="USER"
              className="header-container user-section visible-on-pc"
            >
              <ul>
                <li name="서비스 소개" className="nav-li service-intro">
                  <a className="" href="#">
                    서비스 소개
                  </a>
                </li>
                <li name="회원가입" className="nav-li">
                  <a className="" href="#">
                    회원가입
                  </a>
                </li>
                <li name="로그인" className="nav-li">
                  <a className="" href="#">
                    로그인
                  </a>
                </li>
                <li name="기업회원" className="nav-li">
                  <a className="" href="#">
                    기업회원
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </header>
      <main>
        <div className="main">
          <section>
            {/* <!-- 메인 배너 --> */}
            <div className="main-banner">
              <div className="visible-on-pc">
                <div className="main-banner-image-wrapper">
                  <div className="main-banner-right">
                    <img
                      src="/main/main-banner-01.jpg"
                      alt="메인 배너 이미지 01"
                    />
                    <div className="main-banner-text-box">
                      <p className="main-banner-title">
                        최대한의 효율로 직무경험을 쌓아보세요
                      </p>
                      <p className="main-banner-subtitle">
                        2주만에 실무 경험을 만드는, 미니인턴
                      </p>
                    </div>
                    <span className="main-banner-bottom-arrow">
                      <SVG name="white-arrow" width={118} height={8} />
                      <span>회원가입하기</span>
                    </span>
                  </div>
                  <div className="main-banner-left">
                    <img
                      src="/main/main-banner-02.jpg"
                      alt="메인 배너 이미지 02"
                    />
                    <div className="main-banner-text-box">
                      <p className="main-banner-title">
                        미니인턴? <br />
                        미니인턴!
                      </p>
                    </div>
                    <span className="main-banner-bottom-arrow">
                      <SVG name="white-arrow" width={118} height={8} />
                      <span>서비스 더 알아보기</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="visible-on-mobile">
                <div className="main-banner-image-wrapper">
                  <div className="main-banner-right">
                    <img
                      src="/main/main-banner-01.jpg"
                      alt="메인 배너 이미지 01"
                    />
                    <div className="main-banner-text-box">
                      <p className="main-banner-title">
                        최대한의 효율로 직무경험을 쌓아보세요
                      </p>
                      <p className="main-banner-subtitle">
                        2주만에 실무 경험을 만드는, 미니인턴
                      </p>
                    </div>
                    <span className="main-banner-bottom-arrow">
                      <SVG name="white-arrow" width={118} height={8} />
                      <span>회원가입하기</span>
                    </span>
                  </div>
                  <div className="main-banner-left">
                    <img
                      src="/main/main-banner-02.jpg"
                      alt="메인 배너 이미지 02"
                    />
                    <div className="main-banner-text-box">
                      <p className="main-banner-title">
                        미니인턴? <br />
                        미니인턴!
                      </p>
                    </div>
                    <span className="main-banner-bottom-arrow">
                      <SVG name="white-arrow" width={118} height={8} />
                      <span>서비스 더 알아보기</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 미니 인턴 리스트 --> */}
            <div className="miniintern-list">
              <div className="miniiintern-list title-wrapper">
                <div className="miniintern-list title">
                  <p className="main-section-title">미니인턴으로 취업하세요</p>
                  <div className="main-project-tooltip-svg">
                    <SVG name="question-mark-tooltip" width={24} height={24} />
                    {/* <!-- <div className="main-project-tooltip-content">
                    <div className="main-project-tooltip-content-line">
                      <svg
                        width="12"
                        height="18"
                        viewBox="0 0 12 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 18V0l12 8.99z"
                          fill="#1BC481"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <p className="main-project-tooltip-content-text">
                        교육형 미니인턴 : 실무경험을 쌓을 수 있습니다.
                      </p>
                    </div>
                    <div className="main-project-tooltip-content-line">
                      <svg
                        width="12"
                        height="18"
                        viewBox="0 0 12 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 18V0l12 8.99z"
                          fill="#FE883C"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <p className="main-project-tooltip-content-text">
                        채용형 미니인턴 : 실무역량을 평가받을 수 있습니다.
                      </p>
                    </div>
                  </div> --> */}
                  </div>
                </div>
                <div className="miniiintern-list subtitle">
                  <p className="main-section-description">
                    이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고,
                    실무역량평가로 취업하세요
                  </p>
                  <a href="#">
                    <SVG name="blue-arrow" width={28} height={8} />
                    모든 기업과제 보기
                  </a>
                </div>
              </div>
              <ul className="miniintern-list card-wrapper">
                <li className="miniintern-list card-li">
                  <div className="miniintern-list card">
                    <div className="project-card-image-wrapper">
                      <img
                        className="project-card-image"
                        src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35850/c01b2e9e-7d99-4ae4-8b20-33999cd81216/제니럭스미니인턴랜딩페이지커버이미지.png"
                        alt="동남아시아 시장에 마이크로니들패치 판매를 위한 '활용 가능한' 온라인 마케팅 전략 제안 커버 이미지"
                      />
                      <div className="project-card-type">
                        {/* <svg
                          width="60"
                          height="26"
                          viewBox="0 0 60 26"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <defs>
                            <filter
                              x="-3.4%"
                              y="-4.2%"
                              width="106.9%"
                              height="116.7%"
                              filterUnits="objectBoundingBox"
                              id="project_recruitment_badge_svg__a"
                            >
                              <feOffset
                                dy="1"
                                in="SourceAlpha"
                                result="shadowOffsetOuter1"
                              ></feOffset>
                              <feGaussianBlur
                                stdDeviation="0.5"
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"
                              ></feGaussianBlur>
                              <feColorMatrix
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                                in="shadowBlurOuter1"
                              ></feColorMatrix>
                            </filter>
                            <path
                              id="project_recruitment_badge_svg__b"
                              d="M16 0h42v24H16L0 12.013z"
                            ></path>
                          </defs>
                          <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1)">
                              <use
                                fill="#000"
                                filter="url(#project_recruitment_badge_svg__a)"
                                xlink:href="#project_recruitment_badge_svg__b"
                              ></use>
                              <use
                                fill="#FE883C"
                                xlink:href="#project_recruitment_badge_svg__b"
                              ></use>
                            </g>
                            <text
                              font-family="NotoSansKR-Bold, Noto Sans KR"
                              font-size="12"
                              font-weight="bold"
                              fill="#FFF"
                              transform="translate(1)"
                            >
                              <tspan x="16.88" y="16">
                                채용형
                              </tspan>
                            </text>
                          </g>
                        </svg> */}
                      </div>
                    </div>
                    <div className="project-card-info-wrapper">
                      <div className="project-card-info-status-wrapper">
                        <div className="project-card-info-current-status recruiting">
                          D-20
                        </div>
                        <span className="project-card-current-categories">
                          마케팅
                        </span>
                      </div>
                      <p className="project-card-info-name">
                        동남아시아 시장에 마이크로니들패치 판매를 위한 '활용
                        가능한' 온라인 마케팅 전략 제안
                      </p>
                    </div>
                  </div>
                </li>
                <li className="miniintern-list card-li">
                  <div className="miniintern-list card">
                    <div className="project-card-image-wrapper">
                      <img
                        className="project-card-image"
                        src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35830/be758802-e5dc-471c-a36b-ec0103a5d6d7/나모펀딩미니인턴랜딩페이지커버이미지.png"
                        alt="온라인 투자연계 금융업 사용자(투자 및 대출) 활성화 방안 커버 이미지"
                      />
                      <div className="project-card-type">
                        {/* <svg
                          width="60"
                          height="26"
                          viewBox="0 0 60 26"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <defs>
                            <filter
                              x="-3.4%"
                              y="-4.2%"
                              width="106.9%"
                              height="116.7%"
                              filterUnits="objectBoundingBox"
                              id="project_recruitment_badge_svg__a"
                            >
                              <feOffset
                                dy="1"
                                in="SourceAlpha"
                                result="shadowOffsetOuter1"
                              ></feOffset>
                              <feGaussianBlur
                                stdDeviation="0.5"
                                in="shadowOffsetOuter1"
                                result="shadowBlurOuter1"
                              ></feGaussianBlur>
                              <feColorMatrix
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                                in="shadowBlurOuter1"
                              ></feColorMatrix>
                            </filter>
                            <path
                              id="project_recruitment_badge_svg__b"
                              d="M16 0h42v24H16L0 12.013z"
                            ></path>
                          </defs>
                          <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1)">
                              <use
                                fill="#000"
                                filter="url(#project_recruitment_badge_svg__a)"
                                xlink:href="#project_recruitment_badge_svg__b"
                              ></use>
                              <use
                                fill="#FE883C"
                                xlink:href="#project_recruitment_badge_svg__b"
                              ></use>
                            </g>
                            <text
                              font-family="NotoSansKR-Bold, Noto Sans KR"
                              font-size="12"
                              font-weight="bold"
                              fill="#FFF"
                              transform="translate(1)"
                            >
                              <tspan x="16.88" y="16">
                                채용형
                              </tspan>
                            </text>
                          </g>
                        </svg> */}
                      </div>
                    </div>
                    <div className="project-card-info-wrapper">
                      <div className="project-card-info-status-wrapper">
                        <div className="project-card-info-current-status recruiting">
                          D-6
                        </div>
                        <span className="project-card-current-categories">
                          영업
                        </span>
                      </div>
                      <p className="project-card-info-name">
                        온라인 투자연계 금융업 사용자(투자 및 대출) 활성화 방안
                      </p>
                    </div>
                  </div>
                </li>
                <li className="miniintern-list card-li">
                  <div className="miniintern-list card">
                    <div className="project-card-image-wrapper">
                      <img
                        className="project-card-image"
                        src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35816/5a7d299e-bec6-4e1b-ac84-05938869937a/미니인턴-커버-만들기.png"
                        alt="중장년의 재취업 교육에 필요한 프로그램 기획 및 개발 커버 이미지"
                      />
                      <div className="project-card-type">
                        <SVG
                          name="card-label-employment"
                          width={60}
                          height={26}
                        />
                      </div>
                    </div>
                    <div className="project-card-info-wrapper">
                      <div className="project-card-info-status-wrapper">
                        <div className="project-card-info-current-status recruiting">
                          D-20
                        </div>
                        <span className="project-card-current-categories">
                          기획·비즈니스
                        </span>
                      </div>
                      <p className="project-card-info-name">
                        중장년의 재취업 교육에 필요한 프로그램 기획 및 개발
                      </p>
                    </div>
                  </div>
                </li>
                <li className="miniintern-list card-li">
                  <div className="project-card-image-wrapper">
                    <img
                      className="project-card-image"
                      src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35583/810d17c1-60a9-4f46-9d12-6b365fbb6ac6/엔닷라이트미니인턴.png"
                      alt="엔닷캐드의 신규 서비스에 대한 UI/UX 개선점 제안 커버 이미지"
                    />
                    <div className="project-card-type">
                      <SVG name="card-label-education" width="60" height="26" />
                    </div>
                  </div>
                  <div className="project-card-info-wrapper">
                    <div className="project-card-info-status-wrapper">
                      <div className="project-card-info-current-status recruiting">
                        D-7
                      </div>
                      <span className="project-card-current-categories">
                        디자인
                      </span>
                    </div>
                    <p className="project-card-info-name">
                      엔닷캐드의 신규 서비스에 대한 UI/UX 개선점 제안
                    </p>
                  </div>
                </li>
                <li className="miniintern-list card-li">
                  <div className="project-card-image-wrapper">
                    <img
                      className="project-card-image"
                      src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35463/92596434-cbe7-4b45-bae1-45b73e65caa3/듀코젠미니인턴-랜딩커버.jpg"
                      alt="과학 및 공학 분야 VR 콘텐츠 기획 커버 이미지"
                    />
                    <div className="project-card-type">
                      <SVG
                        name="card-label-employment"
                        width={60}
                        height={26}
                      />
                    </div>
                  </div>
                  <div className="project-card-info-wrapper">
                    <div className="project-card-info-status-wrapper">
                      <div className="project-card-info-current-status recruiting">
                        D-5
                      </div>
                      <span className="project-card-current-categories">
                        기획·비즈니스
                      </span>
                    </div>
                    <p className="project-card-info-name">
                      과학 및 공학 분야 VR 콘텐츠 기획
                    </p>
                  </div>
                </li>
                <li className="miniintern-list card-li">
                  <div className="project-card-image-wrapper">
                    <img
                      className="project-card-image"
                      src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35462/25e36151-1419-4219-ac24-67e4bca3ec5a/알바임배너-2.png"
                      alt="대학생들의 밈 현상을 유도할 수 있는 영상 리뷰 챌린지 이벤트 기획 커버 이미지"
                    />
                    <div className="project-card-type">
                      <SVG name="card-label-education" width="60" height="26" />
                    </div>
                  </div>
                  <div className="project-card-info-wrapper">
                    <div className="project-card-info-status-wrapper">
                      <div className="project-card-info-current-status recruiting">
                        D-5
                      </div>
                      <span className="project-card-current-categories">
                        마케팅
                      </span>
                    </div>
                    <p className="project-card-info-name">
                      대학생들의 밈 현상을 유도할 수 있는 영상 리뷰 챌린지
                      이벤트 기획
                    </p>
                  </div>
                </li>
                <li className="miniintern-list card-li">
                  <div className="project-card-image-wrapper">
                    <img
                      className="project-card-image"
                      src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35403/2b6b96f0-8c67-4853-91d6-8755ab86196f/오롬미니인턴.png"
                      alt=" 오롬이 추구하는 방향과 부합하는 인플루언서와의 신규 협업 마케팅 기획 커버 이미지"
                    />
                    <div className="project-card-type">
                      <SVG name="card-label-education" width="60" height="26" />
                    </div>
                  </div>
                  <div className="project-card-info-wrapper">
                    <div className="project-card-info-status-wrapper">
                      <div className="project-card-info-current-status draftOngoing">
                        진행 중
                      </div>
                      <span className="project-card-current-categories">
                        마케팅
                      </span>
                    </div>
                    <p className="project-card-info-name">
                      오롬이 추구하는 방향과 부합하는 인플루언서와의 신규 협업
                      마케팅 기획
                    </p>
                  </div>
                </li>
                <li className="miniintern-list card-li">
                  <div className="project-card-image-wrapper">
                    <img
                      className="project-card-image"
                      src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35168/2a6d49a0-161f-4ad6-920f-f364bdb0babb/코스알엑스미니인턴.jpg"
                      alt="구직자들의 입사 지원을 효과적으로 유도하기 위한 채용공고문 개선 커버 이미지"
                    />
                    <div className="project-card-type">
                      <SVG name="card-label-education" width="60" height="26" />
                    </div>
                  </div>
                  <div className="project-card-info-wrapper">
                    <div className="project-card-info-status-wrapper">
                      <div className="project-card-info-current-status draftOngoing">
                        진행 중
                      </div>
                      <span className="project-card-current-categories">
                        회계·인사·총무
                      </span>
                    </div>
                    <p className="project-card-info-name">
                      구직자들의 입사 지원을 효과적으로 유도하기 위한 채용공고문
                      개선
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- 해피폴리오 배너 --> */}
            <div className="happyfolio-banner">
              <ImageSlider />
              <div className="happyfolio-banner-info-box">
                <span className="happyfolio-banner-info-badge">
                  서비스 런칭
                </span>
                <p className="happyfolio-banner-info-title">
                  해피폴리오로 취업 정보를 받으세요
                </p>
                <p className="happyfolio-banner-info-text">
                  검증된 현직자의 취업 스토리로
                  <br />
                  취준 전략을 세우세요
                </p>
              </div>
            </div>
            {/* <!-- 채용관 리스트 --> */}
            <div className="recruitment-list">
              <div className="recruitment-list title-wrapper">
                <div className="recruitment-list title">
                  <p className="main-section-title">
                    채용 중인 기업을 확인하세요
                  </p>
                </div>
                <div className="recruitment subtitle">
                  <p className="main-section-description">
                    내게 맞는 기업을 찾았나요? 바로 지원해 보세요
                  </p>
                  <a href="#">
                    <SVG name="blue-arrow" width={28} height={8} />
                    모든 채용정보 보기
                  </a>
                </div>
              </div>
              <ul className="recruitment-list card-wrapper">
                <li className="recruitment-list card-li">
                  <div className="recruitment-list card">
                    <button
                      type="button"
                      data-gtm="unbookmarked-button"
                      className="sc-991ffdcc-1 bVyTJf"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                    <div className="recruitment-card-image-wrapper">
                      <span>
                        <img
                          alt="채용공고 카드배너"
                          src="https://i.imgur.com/ZOsUSvO.png"
                          decoding="async"
                          data-nimg="fill"
                        />
                      </span>
                    </div>
                    <div className="recruitment-card-info-wrapper">
                      <p className="recruitment-card-info-categories">개발</p>
                      <p className="recruitment-card-info-name">
                        Frontend Engineer (Web)
                      </p>
                      <p className="recruitment-card-info-company-name">
                        루덴시티(주)
                      </p>
                      <div className="recruitment-card-info-emplyment-type-wrapper">
                        <div className="recruitment-card-info-emplyment-type">
                          정규직
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="recruitment-list card-li">
                  <div className="recruitment-list card">
                    <button
                      type="button"
                      data-gtm="unbookmarked-button"
                      className="sc-991ffdcc-1 bVyTJf"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                    <div className="recruitment-card-image-wrapper">
                      <span>
                        <img
                          alt="채용공고 카드배너"
                          src="https://i.imgur.com/5jGBFp7.png"
                          decoding="async"
                          data-nimg="fill"
                        />
                      </span>
                    </div>
                    <div className="recruitment-card-info-wrapper">
                      <p className="recruitment-card-info-categories">개발</p>
                      <p className="recruitment-card-info-name">
                        Data Scientist
                      </p>
                      <p className="recruitment-card-info-company-name">
                        (주)지지큐컴퍼니
                      </p>
                      <div className="recruitment-card-info-emplyment-type-wrapper">
                        <div className="recruitment-card-info-emplyment-type">
                          정규직
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="recruitment-list card-li">
                  <div className="recruitment-list card">
                    <button
                      type="button"
                      data-gtm="unbookmarked-button"
                      className="sc-991ffdcc-1 bVyTJf"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                    <div className="recruitment-card-image-wrapper">
                      <span>
                        <img
                          alt="채용공고 카드배너"
                          src="https://i.imgur.com/2Z6gFjY.png"
                          decoding="async"
                          data-nimg="fill"
                        />
                      </span>
                    </div>
                    <div className="recruitment-card-info-wrapper">
                      <p className="recruitment-card-info-categories">
                        기획·비즈니스
                      </p>
                      <p className="recruitment-card-info-name">
                        [CG팀] 운영 매니저
                      </p>
                      <p className="recruitment-card-info-company-name">
                        (주)인티그레이션
                      </p>
                      <div className="recruitment-card-info-emplyment-type-wrapper">
                        <div className="recruitment-card-info-emplyment-type">
                          정규직
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="recruitment-list card-li">
                  <div className="recruitment-list card">
                    <button
                      type="button"
                      data-gtm="unbookmarked-button"
                      className="sc-991ffdcc-1 bVyTJf"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                    <div className="recruitment-card-image-wrapper">
                      <span>
                        <img
                          alt="채용공고 카드배너"
                          src="https://i.imgur.com/UrHaSJQ.png"
                          decoding="async"
                          data-nimg="fill"
                        />
                      </span>
                    </div>
                    <div className="recruitment-card-info-wrapper">
                      <p className="recruitment-card-info-categories">영업</p>
                      <p className="recruitment-card-info-name">
                        업라이즈 MFO VIP 영업관리 매니저
                      </p>
                      <p className="recruitment-card-info-company-name">
                        업라이즈
                      </p>
                      <div className="recruitment-card-info-emplyment-type-wrapper">
                        <div className="recruitment-card-info-emplyment-type">
                          정규직
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="recruitment-list card-li">
                  <div className="recruitment-list card">
                    <button
                      type="button"
                      data-gtm="unbookmarked-button"
                      className="sc-991ffdcc-1 bVyTJf"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                    <div className="recruitment-card-image-wrapper">
                      <span>
                        <img
                          alt="채용공고 카드배너"
                          src="https://i.imgur.com/CrKvDbk.png"
                          decoding="async"
                          data-nimg="fill"
                        />
                      </span>
                    </div>
                    <div className="recruitment-card-info-wrapper">
                      <p className="recruitment-card-info-categories">마케팅</p>
                      <p className="recruitment-card-info-name">
                        퍼포먼스 마케터 (Performance Marketer)
                      </p>
                      <p className="recruitment-card-info-company-name">
                        (주)라포랩스
                      </p>
                      <div className="recruitment-card-info-emplyment-type-wrapper">
                        <div className="recruitment-card-info-emplyment-type">
                          정규직
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="recruitment-list card-li">
                  <div className="recruitment-list card">
                    <button
                      type="button"
                      data-gtm="unbookmarked-button"
                      className="sc-991ffdcc-1 bVyTJf"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                    <div className="recruitment-card-image-wrapper">
                      <span>
                        <img
                          alt="채용공고 카드배너"
                          src="https://i.imgur.com/3FWfLNb.png"
                          decoding="async"
                          data-nimg="fill"
                        />
                      </span>
                    </div>
                    <div className="recruitment-card-info-wrapper">
                      <p className="recruitment-card-info-categories">영업</p>
                      <p className="recruitment-card-info-name">
                        기업(B2B) 영업 관리 주니어(사원, 대리 급)
                      </p>
                      <p className="recruitment-card-info-company-name">
                        설로인(주)
                      </p>
                      <div className="recruitment-card-info-emplyment-type-wrapper">
                        <div className="recruitment-card-info-emplyment-type">
                          정규직
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="recruitment-list card-li">
                  <div className="recruitment-list card">
                    <button
                      type="button"
                      data-gtm="unbookmarked-button"
                      className="sc-991ffdcc-1 bVyTJf"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                    <div className="recruitment-card-image-wrapper">
                      <span>
                        <img
                          alt="채용공고 카드배너"
                          src="https://i.imgur.com/PnV52w8.png"
                          decoding="async"
                          data-nimg="fill"
                        />
                      </span>
                    </div>
                    <div className="recruitment-card-info-wrapper">
                      <p className="recruitment-card-info-categories">영업</p>
                      <p className="recruitment-card-info-name">
                        국내영업 온라인 팀원
                      </p>
                      <p className="recruitment-card-info-company-name">
                        (주)미미박스
                      </p>
                      <div className="recruitment-card-info-emplyment-type-wrapper">
                        <div className="recruitment-card-info-emplyment-type">
                          정규직
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="recruitment-list card-li">
                  <div className="recruitment-list card">
                    <button
                      type="button"
                      data-gtm="unbookmarked-button"
                      className="sc-991ffdcc-1 bVyTJf"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                    <div className="recruitment-card-image-wrapper">
                      <span>
                        <img
                          alt="채용공고 카드배너"
                          src="https://i.imgur.com/FV2HoKG.png"
                          decoding="async"
                          data-nimg="fill"
                        />
                      </span>
                    </div>
                    <div className="recruitment-card-info-wrapper">
                      <p className="recruitment-card-info-categories">
                        기획·비즈니스
                      </p>
                      <p className="recruitment-card-info-name">
                        Medical Device Product Owner
                      </p>
                      <p className="recruitment-card-info-company-name">
                        (주)에이슬립
                      </p>
                      <div className="recruitment-card-info-emplyment-type-wrapper">
                        <div className="recruitment-card-info-emplyment-type">
                          정규직
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- 헤드헌팅 설정 배너 --> */}
            <div className="headhunting-banner">
              <div className="headhunting-image-wrapper">
                <img
                  src="/main/headhunting-banner.jpg"
                  alt="미니인턴 헤드헌팅 배너"
                />
              </div>
              <div className="banner-text-area">
                <p className="headhunting-description">
                  <strong>이력서 피드백</strong>도 받고 <strong>회사</strong>도
                  <strong>추천</strong>받고 싶다면?
                </p>
                <a className="headhunting-setup-button" href="#">
                  헤드헌팅 설정하기
                </a>
              </div>
            </div>
            {/* <!-- M클래스 리스트 --> */}
            <div className="mclass-list">
              <div className="mclass-list title-wrapper">
                <div className="mclass-list title">
                  <p className="main-section-title">M클래스를 신청하세요</p>
                </div>
                <div className="mclass-lisst subtitle">
                  <p className="main-section-description">
                    미니인턴만의 색깔을 가진 교육을 제공해 드려요
                  </p>
                  <a href="#">
                    <SVG name="blue-arrow" width={28} height={8} />
                    모든 M클래스 보기
                  </a>
                </div>
              </div>
              <ul className="mclass-list card-wrapper">
                <li className="mclass-list card-li">
                  <div className="event-card-image-wrapper">
                    <img
                      className="event-card-image"
                      src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35805/18014478-d8ac-4000-a5cf-70176dde43be/배너에디터톡.png"
                      alt="[직무역량강화] 글쓰는 사람들의 이야기 공간, 에디터톡"
                    />
                  </div>
                  <div className="event-card-payment event-card-without-payment">
                    무료
                  </div>
                  <div className="event-card-info-wrapper">
                    <p className="event-card-info-category">실무</p>
                    <p className="event-card-info-title">
                      [직무역량강화] 글쓰는 사람들의 이야기 공간, 에디터톡
                    </p>
                    <p className="event-card-info-location">구로청년이룸</p>
                    <p className="event-card-info-number-of-recruiters orange">
                      28명 모집
                    </p>
                    <div className="event-card-info-stage-wrapper">
                      <p className="event-card-info-stage orange">
                        기간 선발 모집중
                      </p>
                      <span className="event-card-info-remaining-days">
                        D-20
                      </span>
                    </div>
                  </div>
                </li>
                <li className="mclass-list card-li">
                  <div className="event-card-image-wrapper">
                    <img
                      className="event-card-image"
                      src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35638/b368d74e-746a-4dae-9aa4-bcc5a9209470/2023청년지원사업부코취cover.png"
                      alt="[직무역량강화] 코딩테스트 대비로 취업하기 (코-취)"
                    />
                  </div>
                  <div className="event-card-payment event-card-without-payment">
                    무료
                  </div>
                  <div className="event-card-info-wrapper">
                    <p className="event-card-info-category">취업</p>
                    <p className="event-card-info-title">
                      [직무역량강화] 코딩테스트 대비로 취업하기 (코-취)
                    </p>
                    <p className="event-card-info-location">구로 청년이룸</p>
                    <p className="event-card-info-number-of-recruiters orange">
                      15명 모집
                    </p>
                    <div className="event-card-info-stage-wrapper">
                      <p className="event-card-info-stage orange">
                        기간 선발 모집중
                      </p>
                      <span className="event-card-info-remaining-days">
                        D-19
                      </span>
                    </div>
                  </div>
                </li>
                <li className="mclass-list card-li">
                  <div className="event-card-image-wrapper">
                    <img
                      className="event-card-image"
                      src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35916/2d0411b9-77c2-4673-aa00-8c21434da6e2/클래스취업특강-랜딩커버.png"
                      alt="[창업] 스타트업에 성공의 날개를 달아줄 S-className 창업 특강"
                    />
                  </div>
                  <div className="event-card-payment event-card-without-payment">
                    무료
                  </div>
                  <div className="event-card-info-wrapper">
                    <p className="event-card-info-category">창업</p>
                    <p className="event-card-info-title">
                      [창업] 스타트업에 성공의 날개를 달아줄 S-className 창업
                      특강
                    </p>
                    <p className="event-card-info-location">
                      서울창업카페 낙성대점
                    </p>
                    <p className="event-card-info-number-of-recruiters orange">
                      00명 모집
                    </p>
                    <div className="event-card-info-stage-wrapper">
                      <p className="event-card-info-stage orange">
                        기간 선발 모집중
                      </p>
                      <span className="event-card-info-remaining-days">
                        D-12
                      </span>
                    </div>
                  </div>
                </li>
                <li className="mclass-list card-li">
                  <div className="event-card-image-wrapper">
                    <img
                      className="event-card-image"
                      src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35866/47451226-8bfe-48c7-a9c1-97815f0fac21/20232박3일실무경험프로젝트2기landingpagecover.jpg"
                      alt="[실무경험] 2박3일 실무경험 프로젝트 2기 마케팅"
                    />
                  </div>
                  <div className="event-card-payment event-card-without-payment">
                    무료
                  </div>
                  <div className="event-card-info-wrapper">
                    <p className="event-card-info-category">취업</p>
                    <p className="event-card-info-title">
                      [실무경험] 2박3일 실무경험 프로젝트 2기 마케팅
                    </p>
                    <p className="event-card-info-location">
                      중소벤처기업연수원(안산)
                    </p>
                    <p className="event-card-info-number-of-recruiters orange">
                      30명 모집
                    </p>
                    <div className="event-card-info-stage-wrapper">
                      <p className="event-card-info-stage orange">
                        기간 선발 모집중
                      </p>
                      <span className="event-card-info-remaining-days">
                        D-12
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- 해피폴리오 리스트 --> */}
            <div className="happyfolio-list">
              <div className="happyfolio-list title-wrapper">
                <div className="happyfolio-list title">
                  <p className="main-section-title">
                    해피폴리오로 취업 정보를 받으세요
                  </p>
                </div>
                <div className="recruitment subtitle">
                  <p className="main-section-description">
                    검증된 현직자의 취업 스토리로 취준 전략을 세우세요
                  </p>
                  <a href="#">
                    <SVG name="blue-arrow" width={28} height={8} />
                    모든 해피폴리오 보기
                  </a>
                </div>
              </div>
              <ul className="happyfolio-list card-wrapper">
                <li className="happyfolio-list card-li">
                  <div className="happyfolio-card-image-wrapper">
                    <span>
                      <img
                        alt="30대 비전공자의 개발자 커리어 전환기"
                        src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35427/43aa25a9-5574-4874-94f5-4c2bfdc3345e/붙임4-대표이미지.png"
                        decoding="async"
                        data-nimg="fill"
                      />
                    </span>
                    <button
                      type="button"
                      data-gtm="unliked-button"
                      className="happyfolio-list like-button"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                  </div>
                  <div className="happyfolio-card-info-wrapper">
                    <div className="happyfolio-card-info-categories">
                      <div className="happyfolio-card-info-category">
                        취업스토리
                      </div>
                    </div>
                    <div className="happyfolio-card-info-title">
                      30대 비전공자의 개발자 커리어 전환기
                    </div>
                    <div className="happyfolio-card-info-host-and-price-wrapper">
                      <div className="happyfolio-card-info-host">
                        <div className="happyfolio-card-info-host-image-wrapper">
                          <span>
                            <img
                              alt="호스트 이미지"
                              src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35357/aef072ac-83a0-4c5d-86ff-8646b90a1fb6/공슬기ddururiiiiiii.jpeg"
                              decoding="async"
                              data-nimg="fill"
                            />
                          </span>
                        </div>
                        <p className="happyfolio-card-info-host-name">뚜루리</p>
                      </div>
                      <div className="happyfolio-card-info-price">5,000원</div>
                    </div>
                  </div>
                </li>
                <li className="happyfolio-list card-li">
                  <div className="happyfolio-card-image-wrapper">
                    <span>
                      <img
                        alt="알잘딱깔센! 취업준비! 신입사원 노하우! 공유"
                        src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35405/2480abbf-dfaf-4105-bdb9-4a9b62f2a051/알잘딱깔센-취업준비-신입사원-노하우-공유-cover.jpg"
                        decoding="async"
                        data-nimg="fill"
                      />
                    </span>
                    <button
                      type="button"
                      data-gtm="unliked-button"
                      className="happyfolio-list like-button"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                  </div>
                  <div className="happyfolio-card-info-wrapper">
                    <div className="happyfolio-card-info-categories">
                      <div className="happyfolio-card-info-category">
                        역량개발
                      </div>
                      <div className="happyfolio-card-info-category">
                        직장생활
                      </div>
                    </div>
                    <div className="happyfolio-card-info-title">
                      알잘딱깔센! 취업준비! 신입사원 노하우! 공유
                    </div>
                    <div className="happyfolio-card-info-host-and-price-wrapper">
                      <div className="happyfolio-card-info-host">
                        <div className="happyfolio-card-info-host-image-wrapper">
                          <span>
                            <img
                              alt="호스트 이미지"
                              src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35341/adbdeb18-0cfa-413b-b5b8-dade95d467c4/유창석-캐리커쳐.jpg"
                              decoding="async"
                              data-nimg="fill"
                            />
                          </span>
                        </div>
                        <p className="happyfolio-card-info-host-name">
                          열쩡!열쩡!열쩡
                        </p>
                      </div>
                      <div className="happyfolio-card-info-price">8,000원</div>
                    </div>
                  </div>
                </li>
                <li className="happyfolio-list card-li">
                  <div className="happyfolio-card-image-wrapper">
                    <span>
                      <img
                        alt="3년차 제약회사 연구원이 알려주는 자소서&amp;면접 노하우"
                        src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35108/4e4efa39-896d-4fa6-9dee-d5f243fe7b96/붙임4-대표이미지.png"
                        decoding="async"
                        data-nimg="fill"
                      />
                    </span>
                    <button
                      type="button"
                      data-gtm="unliked-button"
                      className="happyfolio-list like-button"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                  </div>
                  <div className="happyfolio-card-info-wrapper">
                    <div className="happyfolio-card-info-categories">
                      <div className="happyfolio-card-info-category">
                        이력서/자소서
                      </div>
                      <div className="happyfolio-card-info-category">면접</div>
                    </div>
                    <div className="happyfolio-card-info-title">
                      3년차 제약회사 연구원이 알려주는 자소서&amp;면접 노하우
                    </div>
                    <div className="happyfolio-card-info-host-and-price-wrapper">
                      <div className="happyfolio-card-info-host">
                        <div className="happyfolio-card-info-host-image-wrapper">
                          <span>
                            <img
                              alt="호스트 이미지"
                              src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/34339/197b291b-dfd3-4c6d-a97a-16192c993e8e/IMG4687.JPG"
                              decoding="async"
                              data-nimg="fill"
                            />
                          </span>
                        </div>
                        <p className="happyfolio-card-info-host-name">둥가둥</p>
                      </div>
                      <div className="happyfolio-card-info-price">15,000원</div>
                    </div>
                  </div>
                </li>
                <li className="happyfolio-list card-li">
                  <div className="happyfolio-card-image-wrapper">
                    <span>
                      <img
                        alt="지방대 문과생이 IT 취업에 이직까지 성공했다고?"
                        src="https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35132/fcb703d1-6104-4175-be4c-8982bed44e71/지방대-문과생이-IT-취업에-이직까지-성공했다고-cover.jpg"
                        decoding="async"
                        data-nimg="fill"
                      />
                    </span>
                    <button
                      type="button"
                      data-gtm="unliked-button"
                      className="happyfolio-list like-button"
                    >
                      <SVG name="card-button-heart" width="24" height="24" />
                    </button>
                  </div>
                  <div className="happyfolio-card-info-wrapper">
                    <div className="happyfolio-card-info-categories">
                      <div className="happyfolio-card-info-category">
                        취업스토리
                      </div>
                    </div>
                    <div className="happyfolio-card-info-title">
                      지방대 문과생이 IT 취업에 이직까지 성공했다고?
                    </div>
                    <div className="happyfolio-card-info-host-and-price-wrapper">
                      <div className="happyfolio-card-info-host">
                        <div className="happyfolio-card-info-host-image-wrapper">
                          <span>
                            <img
                              alt="호스트 이미지"
                              src="https://api.miniintern.com/images/happyfolio/host_default.svg"
                              decoding="async"
                              data-nimg="fill"
                            />
                          </span>
                        </div>
                        <p className="happyfolio-card-info-host-name">노을</p>
                      </div>
                      <div className="happyfolio-card-info-price">12,000원</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <footer id="footer-wrapper">
        <div className="footer-wrapper-inner">
          <div className="footer-upper">
            <div className="footer-wrapper-site-info">
              <div className="footer-wrapper-site-menu-info">
                <div className="footer-wrapper-site-menu-logo-box">
                  <a className="footer-logo" href="#">
                    <SVG
                      name="miniintern-logo-mobile"
                      width={135}
                      height={24}
                    />
                  </a>
                </div>
                <div className="footer-wrapper-menu">
                  <ul className="site-menu">
                    <li>
                      <a href="#">이용약관</a>
                    </li>
                    <li>
                      <a href="#">개인정보취급방침</a>
                    </li>
                    <li>
                      <a href="#">새로운 소식</a>
                    </li>
                    <li>
                      <a href="#">자주하는 질문</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-wrapper-site-cs-info">
                <ul className="cs-info-list">
                  <li>
                    <p className="service-title">고객센터</p>
                    <p className="service-detail-info">
                      이메일
                      <a href="mailto: help@miniintern.com">
                        &nbsp;help@miniintern.com
                      </a>
                      <b className="slash">&nbsp;/&nbsp;</b> 전화
                      <a href="tel: 010-4875-3056">&nbsp;010-4875-3056</a>
                    </p>
                  </li>
                  <li>
                    <p className="service-title">기업 서비스</p>
                    <p className="service-detail-info">
                      기업 회원 페이지
                      <a className="page-link" href="#">
                        &nbsp;바로가기
                      </a>
                    </p>
                  </li>
                </ul>
                <ul className="sns-menu-pc">
                  <li>
                    <a
                      href="https://www.instagram.com/miniintern/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SVG name="button-instagram" width={26} height={26} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-lower">
            <div className="footer-wrapper-company-info-textbox">
              <p>
                (주)오픈놀 | 대표이사 : 권인택 | 이메일 : help@miniintern.com |
                문의 : 070-8221-3056
              </p>
              <p>
                서울특별시 영등포구 양평로 2 주식회사 오픈놀 | 사업자등록번호 :
                110-81-99930
              </p>
              <p>
                직업정보제공사업 : 서울서부 제2018-19호 | 통신판매업신고 :
                제2021-서울영등포-2467호 | 유료직업소개사업등록번호 :
                제2021-3180239-14-5-00015호
              </p>
            </div>
            <a href="https://openknowl.com/">ⓒ OPENKNOWL</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ClonePage;
