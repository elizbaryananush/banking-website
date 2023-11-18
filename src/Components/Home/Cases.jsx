import React from 'react'
import design from '../../assets/Abstract Design (1).png'

function Cases() {
    return (
        <div className='Cases'>
            <div className="header">
                <h1>Use Cases</h1>
                <p>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
            </div>
            <div className="bottom">
                <div className="iconSection">
                    <img src={design} alt="" />
                    <div className="item">
                        <div className="round">
                            <div className="round2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                                    <g clip-path="url(#clip0_108_2458)">
                                        <path d="M11.154 5.50259C11.1804 5.53339 11.1848 5.54219 11.1892 5.54219C11.6247 5.60377 11.827 5.9293 12.0602 6.25483C12.3285 6.62435 12.6496 6.96308 12.9928 7.27102C13.8946 8.08484 14.4489 9.07023 14.6336 10.2712C14.9547 12.3739 13.7494 14.5339 11.7698 15.3741C8.76527 16.6498 5.40879 14.7098 5.06127 11.4633C4.87651 9.73449 5.50997 8.30479 6.82969 7.17863C7.2564 6.81351 7.61272 6.3912 7.90746 5.91171C7.96025 5.82372 8.05703 5.75334 8.14941 5.70935C8.29897 5.63896 8.46614 5.59937 8.6553 5.53339C8.59371 5.4586 8.54972 5.40581 8.50133 5.35303C8.20659 5.04949 7.91186 4.73716 7.61272 4.44242C7.50714 4.33684 7.45875 4.22687 7.46315 4.0773C7.47195 3.45263 7.46755 2.83237 7.46755 2.2077C7.46755 1.95695 7.77549 1.55664 8.02623 1.50825C8.31217 1.45106 8.60691 1.42027 8.89285 1.36308C8.97643 1.34548 9.06881 1.2927 9.1172 1.22671C9.53511 0.66363 10.2698 0.659231 10.6833 1.21791C10.7405 1.2927 10.8504 1.34988 10.9428 1.37188C11.2068 1.42907 11.4751 1.45986 11.7434 1.50825C12.0118 1.56104 12.2977 1.90856 12.2977 2.1813C12.2977 2.81037 12.2933 3.44383 12.3021 4.0729C12.3065 4.23566 12.2537 4.34564 12.1437 4.46002C11.8094 4.79874 11.4883 5.14627 11.154 5.50259ZM9.30636 7.95287C9.29316 8.00566 9.27996 8.03645 9.28436 8.06285C9.34155 8.35758 9.20518 8.48515 8.93244 8.59513C8.41335 8.81069 8.1802 9.24619 8.1934 9.80487C8.20659 10.3592 8.50573 10.7023 9.00722 10.8826C9.22717 10.9618 9.45593 11.019 9.67588 11.0938C9.87823 11.1598 10.0806 11.2258 10.2742 11.305C10.4369 11.3709 10.5293 11.4985 10.5117 11.6833C10.4941 11.8724 10.3753 11.9824 10.2082 12.0132C10.0366 12.0484 9.85184 12.0792 9.68908 12.0396C9.37234 11.9648 9.06881 11.8372 8.73448 11.7229C8.58491 11.9208 8.41335 12.1452 8.20659 12.4223C8.51893 12.5587 8.78727 12.6995 9.07321 12.7962C9.23597 12.849 9.30196 12.9194 9.27996 13.0866C9.26677 13.2053 9.27556 13.3285 9.27556 13.4649C9.52631 13.4649 9.73747 13.4649 9.94862 13.4649C10.2522 13.4649 10.2654 13.4649 10.2478 13.1526C10.239 12.959 10.2829 12.8534 10.4941 12.827C10.6041 12.8138 10.7141 12.7522 10.8152 12.6951C11.2815 12.4399 11.4751 12.0308 11.4663 11.5117C11.4575 11.019 11.2111 10.6803 10.7712 10.4823C10.5733 10.3943 10.3621 10.3284 10.151 10.258C9.88703 10.17 9.62309 10.0908 9.35915 9.99403C9.19638 9.93244 9.1304 9.80047 9.14359 9.62451C9.15679 9.45735 9.25797 9.34297 9.41193 9.31658C9.5967 9.28578 9.79465 9.26819 9.97501 9.29898C10.195 9.33857 10.4017 9.43975 10.6349 9.51893C10.78 9.29458 10.9296 9.05703 11.1056 8.77989C10.9032 8.68751 10.7317 8.57314 10.5469 8.54234C10.2873 8.49835 10.2082 8.37958 10.239 8.13323C10.2478 8.07604 10.1686 7.96167 10.1202 7.95727C9.85624 7.94407 9.5791 7.95287 9.30636 7.95287Z" fill="#CAFF33" />
                                        <path d="M9.54376 23.1912C8.60676 23.1912 7.66536 23.1648 6.72837 23.2C6.0993 23.222 5.56262 23.0328 5.05672 22.6985C4.33968 22.219 3.68422 21.6735 3.11234 21.0225C2.26772 20.0591 1.41431 19.0957 0.569687 18.1323C-0.120965 17.3405 0.191368 16.1703 1.17676 15.8492C1.29113 15.8096 1.4231 15.7964 1.54188 15.7964C2.32491 15.792 3.11234 15.7876 3.89537 15.8008C4.00535 15.8008 4.13732 15.858 4.2165 15.9328C4.75319 16.4519 5.28108 16.9841 5.80456 17.5164C5.91014 17.622 6.00692 17.644 6.15649 17.622C6.47322 17.5736 6.79875 17.5296 7.11988 17.5296C8.60236 17.5208 10.0804 17.5252 11.5629 17.5252C12.0688 17.5252 12.4427 17.7848 12.5747 18.2159C12.7771 18.8669 12.302 19.4784 11.5761 19.4828C10.5951 19.4872 9.60975 19.4828 8.62876 19.4828C8.4528 19.4828 8.27683 19.4784 8.10087 19.4828C7.78414 19.4916 7.57738 19.694 7.57299 19.9799C7.57299 20.2702 7.77974 20.4902 8.09207 20.4902C9.65374 20.4946 11.2154 20.4946 12.7771 20.4902C13.0938 20.4902 13.3226 20.3142 13.5425 20.1031C14.5631 19.1221 15.5837 18.1411 16.6086 17.1645C17.0266 16.7642 17.5808 16.7466 17.9768 17.1029C18.4035 17.49 18.4123 18.1147 17.9812 18.5502C17.5281 19.0121 17.0661 19.4476 16.6086 19.8919C15.5969 20.8729 14.5851 21.8495 13.5777 22.8305C13.3314 23.068 13.0586 23.1912 12.7111 23.1912C11.6553 23.1868 10.5995 23.1912 9.54376 23.1912Z" fill="#CAFF33" />
                                        <path d="M4.3089 4.60083C4.73561 5.02754 5.16232 5.45425 5.58023 5.87216C5.32069 6.1317 5.04794 6.40444 4.7752 6.67279C4.37049 6.25488 3.94378 5.81497 3.53467 5.39266C3.77662 5.14631 4.04936 4.86477 4.3089 4.60083Z" fill="#CAFF33" />
                                        <path d="M15.4169 4.60083C15.6764 4.86037 15.9447 5.13752 16.1955 5.38826C15.7776 5.80617 15.3421 6.24168 14.9198 6.65959C14.6646 6.40444 14.3963 6.1273 14.1279 5.85896C14.5458 5.44985 14.9769 5.02754 15.4169 4.60083Z" fill="#CAFF33" />
                                        <path d="M16.4283 11.5337C16.4283 11.1598 16.4239 10.8166 16.4327 10.4735C16.4327 10.4295 16.5163 10.3503 16.5603 10.3503C17.097 10.3416 17.6293 10.3416 18.166 10.3503C18.21 10.3503 18.2935 10.4163 18.2935 10.4515C18.3023 10.8079 18.2979 11.1642 18.2979 11.5337C17.6689 11.5337 17.0618 11.5337 16.4283 11.5337Z" fill="#CAFF33" />
                                        <path d="M3.28417 11.5469C2.6771 11.5469 2.10963 11.5513 1.53775 11.5425C1.49376 11.5425 1.42337 11.4589 1.41897 11.4105C1.41018 11.1026 1.40578 10.7947 1.41897 10.4867C1.41897 10.4383 1.50695 10.3503 1.55534 10.3503C2.08323 10.3416 2.61112 10.3416 3.13901 10.3503C3.18739 10.3503 3.27538 10.4207 3.27538 10.4647C3.28857 10.8079 3.28417 11.1598 3.28417 11.5469Z" fill="#CAFF33" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_108_2458">
                                            <rect width="18.1021" height="22.4" fill="white" transform="translate(0.200195 0.800049)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <p>Managing Personal Finances</p>
                    </div>
                    <div className="item">
                        <div className="round">
                            <div className="round2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
                                    <g clip-path="url(#clip0_108_2471)">
                                        <path d="M19.7262 7.21472C19.7262 7.813 19.7343 8.40734 19.7222 9.00562C19.7142 9.32838 19.8065 9.61177 19.9752 9.87942C20.4088 10.58 20.9829 11.1665 21.5651 11.7451C21.7819 11.9616 22.0067 12.1663 22.2355 12.367C22.348 12.4654 22.4001 12.5677 22.4001 12.7212C22.3921 13.3786 22.3921 14.0319 22.3961 14.6893C22.4001 15.2364 22.1593 15.6457 21.6574 15.874C21.1435 16.1062 20.6617 16.0078 20.2401 15.6497C19.3689 14.9018 18.5017 14.15 17.6345 13.4022C17.0443 12.8905 16.4581 12.3709 15.8559 11.875C15.6431 11.6979 15.3902 11.568 15.1453 11.4342C14.7839 11.2374 14.3945 11.1311 13.9729 11.1468C13.6678 11.1586 13.3546 11.1626 13.0495 11.139C12.6039 11.1035 12.2867 10.8005 12.2265 10.3832C12.1703 10.0172 12.3911 9.62358 12.7604 9.48188C12.901 9.42678 13.0575 9.40316 13.2101 9.40316C14.3664 9.39529 15.5227 9.39923 16.683 9.39923C17.1166 9.39923 17.2732 9.24572 17.2732 8.81669C17.2732 7.95076 17.2691 7.08483 17.2732 6.21891C17.2772 5.88828 17.1607 5.6285 16.9078 5.40415C15.4504 4.121 14.001 2.82998 12.5477 1.53896C12.1582 1.19258 12.114 0.680899 12.4393 0.306976C12.7604 -0.0669481 13.2864 -0.102372 13.6999 0.212511C15.5588 1.62948 17.4137 3.04646 19.2806 4.45556C19.5897 4.68779 19.7343 4.97118 19.7303 5.34511C19.7222 5.967 19.7262 6.58889 19.7262 7.21472Z" fill="#CAFF33" />
                                        <path d="M0.804021 13.7643C0.804021 13.41 0.808036 13.0558 0.800006 12.7015C0.795991 12.5638 0.8522 12.4732 0.944542 12.3788C1.55079 11.7687 2.149 11.1507 2.7432 10.5288C2.86766 10.3989 2.96001 10.2454 3.06841 10.1037C3.35346 9.72195 3.48595 9.30473 3.47391 8.81666C3.44982 7.69095 3.47792 6.56131 3.46186 5.43166C3.45384 4.98689 3.61443 4.67201 3.97978 4.39648C5.83465 3.011 7.66945 1.6019 9.51227 0.19673C9.8977 -0.0984731 10.4277 -0.0512406 10.7408 0.303003C11.062 0.665119 11.0339 1.18468 10.6605 1.52318C10.0944 2.03486 9.5203 2.53474 8.95019 3.04249C8.04685 3.8415 7.1435 4.64445 6.24015 5.44347C6.02737 5.6324 5.92298 5.86069 5.92298 6.13621C5.92298 7.05331 5.91897 7.97041 5.92298 8.89144C5.92298 9.22994 6.09963 9.39525 6.44893 9.39525C7.64134 9.39919 8.82975 9.39526 10.0222 9.39919C10.5842 9.39919 10.9777 9.78492 10.9657 10.3045C10.9576 10.702 10.6645 11.0602 10.259 11.1192C10.0181 11.1547 9.76521 11.1704 9.5203 11.1468C8.69726 11.0681 8.00268 11.3633 7.38841 11.8435C6.76209 12.3315 6.17592 12.8747 5.5777 13.3903C4.69844 14.1461 3.8232 14.9096 2.93993 15.6614C2.22529 16.2715 1.16937 16.0039 0.864244 15.134C0.824096 15.0238 0.812051 14.9018 0.808036 14.7876C0.800006 14.4491 0.804021 14.1067 0.804021 13.7643Z" fill="#CAFF33" />
                                        <path d="M12.1699 8.02949C12.1699 8.21842 12.1699 8.39554 12.1699 8.58841C11.8326 8.58841 11.5115 8.58841 11.1622 8.58841C11.1622 8.4349 11.1581 8.28533 11.1622 8.13576C11.1662 8.02555 11.1341 7.97832 11.0176 7.95077C10.6844 7.87205 10.3752 7.73822 10.0862 7.50993C10.2709 7.26983 10.4475 7.04154 10.6081 6.829C10.9132 6.94314 11.1903 7.07697 11.4834 7.14388C11.6961 7.19111 11.933 7.15962 12.1538 7.1242C12.3225 7.09665 12.4309 6.96676 12.4429 6.78964C12.459 6.60858 12.3626 6.48263 12.202 6.41965C11.929 6.31731 11.6439 6.23859 11.3669 6.14806C11.1662 6.08115 10.9574 6.02211 10.7607 5.93945C10.299 5.74659 10.0541 5.40415 10.042 4.90034C10.03 4.37291 10.2307 3.94782 10.7125 3.71953C11.0257 3.56996 11.2947 3.45975 11.1381 3.02285C11.4793 3.02285 11.7764 3.01891 12.0776 3.03072C12.1097 3.03072 12.1659 3.12912 12.1659 3.18422C12.186 3.51879 12.186 3.51092 12.5031 3.62112C12.6878 3.6841 12.8645 3.77463 13.0652 3.86516C12.8966 4.121 12.7601 4.34536 12.6075 4.5579C12.5834 4.58939 12.4871 4.58545 12.4309 4.56971C12.1659 4.5028 11.9089 4.4162 11.6439 4.36504C11.5396 4.34536 11.4191 4.37684 11.3107 4.4044C11.1501 4.44769 11.0417 4.55397 11.0297 4.72715C11.0176 4.8964 11.0939 5.02629 11.2505 5.08927C11.4552 5.17192 11.664 5.2349 11.8728 5.30181C12.1016 5.3766 12.3385 5.4317 12.5593 5.51436C13.1977 5.75839 13.4547 6.14413 13.4225 6.77783C13.3904 7.36036 13.0251 7.79333 12.4228 7.96258C12.3506 7.98619 12.2743 8.00587 12.1699 8.02949Z" fill="#CAFF33" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_108_2471">
                                            <rect width="21.6" height="16" fill="white" transform="translate(0.799805)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <p>Saving for the Future</p>
                    </div>
                    <div className="item">
                        <div className="round">
                            <div className="round2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.5841 2.37596C11.836 2.20801 12.1642 2.20801 12.4161 2.37596L21.4161 8.37596C21.7608 8.60573 21.8539 9.07138 21.6241 9.41603C21.3944 9.76067 20.9287 9.8538 20.5841 9.62404L12.0001 3.90139L3.4161 9.62404C3.07146 9.8538 2.60581 9.76067 2.37604 9.41603C2.14628 9.07138 2.23941 8.60573 2.58405 8.37596L11.5841 2.37596Z" fill="#CAFF33" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.25 10.3325V20.25H21C21.4142 20.25 21.75 20.5858 21.75 21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21C2.25 20.5858 2.58579 20.25 3 20.25H3.75V10.3325C3.75 9.96317 4.01888 9.64882 4.38374 9.59157C6.86578 9.20211 9.40954 9 12 9C14.5905 9 17.1342 9.20211 19.6163 9.59157C19.9811 9.64882 20.25 9.96317 20.25 10.3325ZM12.75 12.75C12.75 12.3358 12.4142 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75V19.5C11.25 19.9142 11.5858 20.25 12 20.25C12.4142 20.25 12.75 19.9142 12.75 19.5V12.75ZM15.75 12C16.1642 12 16.5 12.3358 16.5 12.75V19.5C16.5 19.9142 16.1642 20.25 15.75 20.25C15.3358 20.25 15 19.9142 15 19.5V12.75C15 12.3358 15.3358 12 15.75 12ZM9 12.75C9 12.3358 8.66421 12 8.25 12C7.83579 12 7.5 12.3358 7.5 12.75V19.5C7.5 19.9142 7.83579 20.25 8.25 20.25C8.66421 20.25 9 19.9142 9 19.5V12.75Z" fill="#CAFF33" />
                                    <path d="M12 7.875C12.6213 7.875 13.125 7.37132 13.125 6.75C13.125 6.12868 12.6213 5.625 12 5.625C11.3787 5.625 10.875 6.12868 10.875 6.75C10.875 7.37132 11.3787 7.875 12 7.875Z" fill="#CAFF33" />
                                </svg>
                            </div>
                        </div>
                        <p>Homeownership</p>
                    </div>
                    <div className="item">
                        <div className="round">
                            <div className="round2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.25 4.53286C9.73455 3.56279 7.93246 3 6 3C4.86178 3 3.76756 3.19535 2.75007 3.55499C2.45037 3.66091 2.25 3.94425 2.25 4.26212V18.5121C2.25 18.7556 2.36818 18.9839 2.56696 19.1245C2.76574 19.265 3.02039 19.3004 3.24993 19.2192C4.10911 18.9156 5.03441 18.75 6 18.75C7.99502 18.75 9.82325 19.4573 11.25 20.6357V4.53286Z" fill="#CAFF33" />
                                    <path d="M12.75 20.6357C14.1768 19.4573 16.005 18.75 18 18.75C18.9656 18.75 19.8909 18.9156 20.7501 19.2192C20.9796 19.3004 21.2343 19.265 21.433 19.1245C21.6318 18.9839 21.75 18.7556 21.75 18.5121V4.26212C21.75 3.94425 21.5496 3.66091 21.2499 3.55499C20.2324 3.19535 19.1382 3 18 3C16.0675 3 14.2655 3.56279 12.75 4.53286V20.6357Z" fill="#CAFF33" />
                                </svg>
                            </div>
                        </div>
                        <p>Education Funding</p>
                    </div>
                </div>

                <div className="percentSection">
                    <div className="text">
                        <h4>For Individuals</h4>
                        <p>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                    </div>
                    <div className="percent">
                        <div className="element">
                            <h3>78%</h3>
                            <p>Secure Retirement Planning</p>
                        </div>
                        <div className="line"></div>
                        <div className="element">
                            <h3>63%</h3>
                            <p>Manageable Debt Consolidation</p>
                        </div>
                        <div className="line"></div>
                        <div className="element">
                            <h3>91%</h3>
                            <p>Reducing financial burdens</p>
                        </div>
                    </div>
                    <button>Learn More</button>
                </div>

                <div className="percentSection">
                    <div className="text">
                        <h4>For Business</h4>
                        <p> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
                    </div>
                    <div className="percent">
                        <div className="element">
                            <h3>65%</h3>
                            <p>Cash Flow Management</p>
                        </div>
                        <div className="line"></div>
                        <div className="element">
                            <h3>70%</h3>
                            <p>Drive Business Expansion</p>
                        </div>
                        <div className="line"></div>
                        <div className="element">
                            <h3>45%</h3>
                            <p>Streamline payroll processing</p>
                        </div>
                    </div>
                    <button>Learn More</button>
                </div>

                <div className="iconSection">
                    <img src={design} alt="" />
                    <div className="item">
                        <div className="round">
                            <div className="round2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3C2.25 3.41421 2.58579 3.75 3 3.75V20.25H2.25C1.83579 20.25 1.5 20.5858 1.5 21C1.5 21.4142 1.83579 21.75 2.25 21.75H15V3.75C15.4142 3.75 15.75 3.41421 15.75 3C15.75 2.58579 15.4142 2.25 15 2.25H3ZM6.75 19.5V17.25C6.75 16.8358 7.08579 16.5 7.5 16.5H10.5C10.9142 16.5 11.25 16.8358 11.25 17.25V19.5C11.25 19.9142 10.9142 20.25 10.5 20.25H7.5C7.08579 20.25 6.75 19.9142 6.75 19.5ZM6 6.75C6 6.33579 6.33579 6 6.75 6H7.5C7.91421 6 8.25 6.33579 8.25 6.75C8.25 7.16421 7.91421 7.5 7.5 7.5H6.75C6.33579 7.5 6 7.16421 6 6.75ZM6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5H7.5C7.91421 10.5 8.25 10.1642 8.25 9.75C8.25 9.33579 7.91421 9 7.5 9H6.75ZM6 12.75C6 12.3358 6.33579 12 6.75 12H7.5C7.91421 12 8.25 12.3358 8.25 12.75C8.25 13.1642 7.91421 13.5 7.5 13.5H6.75C6.33579 13.5 6 13.1642 6 12.75ZM10.5 6C10.0858 6 9.75 6.33579 9.75 6.75C9.75 7.16421 10.0858 7.5 10.5 7.5H11.25C11.6642 7.5 12 7.16421 12 6.75C12 6.33579 11.6642 6 11.25 6H10.5ZM9.75 9.75C9.75 9.33579 10.0858 9 10.5 9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H10.5C10.0858 10.5 9.75 10.1642 9.75 9.75ZM10.5 12C10.0858 12 9.75 12.3358 9.75 12.75C9.75 13.1642 10.0858 13.5 10.5 13.5H11.25C11.6642 13.5 12 13.1642 12 12.75C12 12.3358 11.6642 12 11.25 12H10.5Z" fill="#CAFF33" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 6.75V21.75H21.75C22.1642 21.75 22.5 21.4142 22.5 21C22.5 20.5858 22.1642 20.25 21.75 20.25H21V8.25C21.4142 8.25 21.75 7.91421 21.75 7.5C21.75 7.08579 21.4142 6.75 21 6.75H16.5ZM18 11.25C18 10.8358 18.3358 10.5 18.75 10.5H18.7575C19.1717 10.5 19.5075 10.8358 19.5075 11.25V11.2575C19.5075 11.6717 19.1717 12.0075 18.7575 12.0075H18.75C18.3358 12.0075 18 11.6717 18 11.2575V11.25ZM18.75 13.5C18.3358 13.5 18 13.8358 18 14.25V14.2575C18 14.6717 18.3358 15.0075 18.75 15.0075H18.7575C19.1717 15.0075 19.5075 14.6717 19.5075 14.2575V14.25C19.5075 13.8358 19.1717 13.5 18.7575 13.5H18.75ZM18 17.25C18 16.8358 18.3358 16.5 18.75 16.5H18.7575C19.1717 16.5 19.5075 16.8358 19.5075 17.25V17.2575C19.5075 17.6717 19.1717 18.0075 18.7575 18.0075H18.75C18.3358 18.0075 18 17.6717 18 17.2575V17.25Z" fill="#CAFF33" />
                                </svg>
                            </div>
                        </div>
                        <p>Startups and Entrepreneurs</p>
                    </div>
                    <div className="item">
                        <div className="round">
                            <div className="round2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 7.5C10.7574 7.5 9.75 8.50736 9.75 9.75C9.75 10.9926 10.7574 12 12 12C13.2426 12 14.25 10.9926 14.25 9.75C14.25 8.50736 13.2426 7.5 12 7.5Z" fill="#CAFF33" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.875C1.5 3.83947 2.33947 3 3.375 3H20.625C21.6605 3 22.5 3.83947 22.5 4.875V14.625C22.5 15.6605 21.6605 16.5 20.625 16.5H3.375C2.33947 16.5 1.5 15.6605 1.5 14.625V4.875ZM8.25 9.75C8.25 7.67893 9.92893 6 12 6C14.0711 6 15.75 7.67893 15.75 9.75C15.75 11.8211 14.0711 13.5 12 13.5C9.92893 13.5 8.25 11.8211 8.25 9.75ZM18.75 9C18.3358 9 18 9.33579 18 9.75V9.7575C18 10.1717 18.3358 10.5075 18.75 10.5075H18.7575C19.1717 10.5075 19.5075 10.1717 19.5075 9.7575V9.75C19.5075 9.33579 19.1717 9 18.7575 9H18.75ZM4.5 9.75C4.5 9.33579 4.83579 9 5.25 9H5.2575C5.67171 9 6.0075 9.33579 6.0075 9.75V9.7575C6.0075 10.1717 5.67171 10.5075 5.2575 10.5075H5.25C4.83579 10.5075 4.5 10.1717 4.5 9.7575V9.75Z" fill="#CAFF33" />
                                    <path d="M2.25 18C1.83579 18 1.5 18.3358 1.5 18.75C1.5 19.1642 1.83579 19.5 2.25 19.5C7.65005 19.5 12.8802 20.2222 17.8498 21.5749C19.0404 21.899 20.25 21.0168 20.25 19.7551V18.75C20.25 18.3358 19.9142 18 19.5 18H2.25Z" fill="#CAFF33" />
                                </svg>
                            </div>
                        </div>
                        <p>Cash Flow Management</p>
                    </div>
                    <div className="item">
                        <div className="round">
                            <div className="round2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 2.25C1.83579 2.25 1.5 2.58579 1.5 3C1.5 3.41421 1.83579 3.75 2.25 3.75H3V14.25C3 15.9069 4.34315 17.25 6 17.25H7.20943L6.03849 20.7628C5.9075 21.1558 6.11987 21.5805 6.51283 21.7115C6.90579 21.8425 7.33053 21.6301 7.46151 21.2372L7.79057 20.25H16.2094L16.5385 21.2372C16.6695 21.6301 17.0942 21.8425 17.4872 21.7115C17.8801 21.5805 18.0925 21.1558 17.9615 20.7628L16.7906 17.25H18C19.6569 17.25 21 15.9069 21 14.25V3.75H21.75C22.1642 3.75 22.5 3.41421 22.5 3C22.5 2.58579 22.1642 2.25 21.75 2.25H2.25ZM8.29057 18.75L8.79057 17.25H15.2094L15.7094 18.75H8.29057ZM15.75 6.75C15.75 6.33579 15.4142 6 15 6C14.5858 6 14.25 6.33579 14.25 6.75V12.75C14.25 13.1642 14.5858 13.5 15 13.5C15.4142 13.5 15.75 13.1642 15.75 12.75V6.75ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9V12.75C11.25 13.1642 11.5858 13.5 12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75V9ZM9.75 11.25C9.75 10.8358 9.41421 10.5 9 10.5C8.58579 10.5 8.25 10.8358 8.25 11.25V12.75C8.25 13.1642 8.58579 13.5 9 13.5C9.41421 13.5 9.75 13.1642 9.75 12.75V11.25Z" fill="#CAFF33" />
                                </svg>
                            </div>
                        </div>
                        <p>Business Expansion</p>
                    </div>
                    <div className="item">
                        <div className="round">
                            <div className="round2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M10.4636 8.74626C10.6908 8.56577 10.9607 8.43451 11.25 8.35249V11.1474C10.9552 11.0637 10.686 10.9304 10.4636 10.7537C10.0699 10.441 9.91752 10.073 9.91752 9.75C9.91752 9.42705 10.0699 9.05904 10.4636 8.74626Z" fill="#CAFF33" />
                                    <path d="M12.75 15.6616V12.8383C13.0972 12.9228 13.4138 13.0658 13.6713 13.259C14.0978 13.5788 14.25 13.9448 14.25 14.25C14.25 14.5551 14.0978 14.9211 13.6713 15.241C13.4138 15.4342 13.0972 15.5772 12.75 15.6616Z" fill="#CAFF33" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V6.81563C10.6231 6.92669 10.0253 7.17873 9.53058 7.57176C8.81822 8.13765 8.41752 8.9213 8.41752 9.75C8.41752 10.5787 8.81822 11.3623 9.53058 11.9282C10.033 12.3274 10.6327 12.575 11.25 12.6843V15.6616C10.9028 15.5771 10.5864 15.4341 10.3289 15.241L9.45001 14.5818C9.11865 14.3333 8.64854 14.4004 8.40001 14.7318C8.15147 15.0631 8.21862 15.5332 8.54999 15.7818L9.42886 16.441C9.96206 16.8409 10.5979 17.0856 11.25 17.1903V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V17.1904C13.4021 17.0856 14.0381 16.8409 14.5714 16.441C15.3164 15.8821 15.75 15.0965 15.75 14.25C15.75 13.4034 15.3164 12.6178 14.5714 12.059C14.0381 11.659 13.4021 11.4143 12.75 11.3096V8.35257C13.0392 8.4346 13.309 8.56583 13.5361 8.74626L13.951 9.07585C14.2753 9.3335 14.7471 9.27944 15.0048 8.95511C15.2624 8.63078 15.2084 8.15899 14.884 7.90135L14.4691 7.57176C13.9745 7.17879 13.3768 6.92677 12.75 6.81567V6Z" fill="#CAFF33" />
                                </svg>
                            </div>
                        </div>
                        <p>Payment Solutions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cases