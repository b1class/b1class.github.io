/**
 * Class Webpage - Single File Application
 * All JavaScript bundled for static hosting (GitHub Pages)
 */

// ==================== DATA ====================

const membersData = [
  {
    id: "member-001",
    name: "Hồ Thị Thu Huyền",
    nickname: "Huyền",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/438240377_3194018950733477_6034067467652695982_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GkloBvgiflgQ7kNvwEhmMDH&_nc_oc=AdkZz9_3XvYMsaKaIlAmxcc4A9p4c8RF7r4zdLb-W_3t8MRaAkFSI487pZ0sjXAnQInlrX2mS4wv-1Cul4aVixss&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=TfssE1m2DA4WjzjUtBSr_w&oh=00_Afl1k9OkOP1eSvVwAPw1_hrXNUQsgM5UJERAp63hlY8d1g&oe=6934EE2D",
    role: "",
    job: "Kinh Doanh",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-002",
    name: "Lê Thanh Vũ",
    nickname: "Vũ LT",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/557731513_24824089977222656_2481311300486690446_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FoTLqCuIQ0cQ7kNvwHAYN6A&_nc_oc=Adl2t2_QeF26FVm5ZXraY74ORSh3jwfGLF_zafQ-QgI1niUef64x6QqOBjA-YBiK-NYSTDMfA0nYGttQ53X16q-b&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=NsBmIronS92retBXAZ_I6w&oh=00_AfnKn0atsSwwlMZ7YTc6YkQ9BpuPeT6vrLxOlXL_Bu-iXw&oe=6934EE7A",
    role: "Lớp trưởng",
    job: "IT",
    birthday: "20/01/1993",
    contact: { email: "itmanz.com@gmail.com", phone: "", facebook: "fb.com/itmanz" }
  },
  {
    id: "member-003",
    name: "Bùi Quang Hiếu",
    nickname: "Hiếu",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/80388618_2546071995488125_1742180825660653568_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lInlNHqw5iEQ7kNvwFB3Mz_&_nc_oc=AdmxsmGwwPz6JEbQxeKp8Q0rFx4j234JXCL11DIltc2MUDRntaVFRH8hYcjZvl23VmrF1VdNgWAOfjeD7bLT3Yre&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=J6jYraf74BwbQ2X0OREqvw&oh=00_AfnOSRqZmkac5n9dSbF-ssBwnFZ1iH_7ZzyPi9oxudSASw&oe=69565C1D",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-004",
    name: "Nguyễn Thị Mỹ Trinh",
    nickname: "Trinh",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/50823698_1183582011811270_1948282549415444480_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lf87znFxBM0Q7kNvwGi3TFZ&_nc_oc=Adkpg8181Iw8JHcgVFF4D6QkqvDLF5PHNgTmK8AXr2SQAcAMai8PtXmn694yEGnQrzLSd1BLqnUyF3lVHCWVh37q&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=nXJCBuM8xGpMxGAEDln53A&oh=00_AfmTJC-fCLOK3TquKAnrTJSICbbSKmwxkWBN3nSIwX62_w&oe=69566019",
    role: "",
    job: "Kinh Doanh",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-005",
    name: "Lê Bảo Hưng",
    nickname: "Hưng",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/79749335_1454777861338486_3429765873890492416_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=A28ukiKiMIEQ7kNvwFukKHc&_nc_oc=AdmPypRu8aYi4Mh0sl2IOjmaXpqpNSUwTwiu7krxmyqDaiu4n8ICRn5g8lV2q55vDLseAG4xSxnXVsOLSjAu_uZL&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=VOdLCaCfpMM64_GpYOnQFw&oh=00_AfnLcQaAmg3giZ5spdWxcAbmhIQfLrnxqxcAf1xee2Fdbg&oe=69568B78",
    role: "",
    job: "Quân Nhân",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-006",
    name: "Lê Thị Thu Hồng",
    nickname: "Hồng",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/588141181_4318671631702248_7233124361324962335_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gjQYxK60ozMQ7kNvwHM6vaM&_nc_oc=AdnK994Mw97MtQ0EzjBjVqGuiLtzjdwqjSkujOH5nOvrXv0up2lXAXYG8D68ck7fROKa0EqBCI7hHvU33q60lxFd&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=gL4pzFmasUCoQYkwqrioBg&oh=00_Afllrjz3K7BwMS3N7ZrbvFJ7s7UfOx-jjd7vkHDI0xV03w&oe=6934C95D",
    role: "",
    job: "Giáo Viên",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-007",
    name: "Nguyễn Thị Huyền Trang",
    nickname: "Ty Ty",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/583098965_3749244548553128_5926935321485392248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=edCa15RbJKwQ7kNvwGLS61l&_nc_oc=Adlnxxl9Rxm5E7gLDnt9b6R1nuOq1gAnmbk37ibIQENFyzCJ1FiTDkVM-ch2pzr25VSkNejk30yx24rCmpLf4HGO&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=CPK8dPyqCZRyx5il2H0Kxw&oh=00_AfmATzGJMUBL1h3X6UMwSFkjOiHcorxOlo3tJ3VT8sv-9A&oe=6934F183",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-008",
    name: "Trần Ngọc Anh",
    nickname: "Bò",
    photo: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/518297354_10070924489682307_2049836912380718212_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=pcmc5n2iBuIQ7kNvwFK4cQf&_nc_oc=Adm256n5bmxJo1NBVRKbF-SVbEPG0yNFdYwKXCr72fmS3K8_gYt3n_6KshtLFQ63pLT3hLq9aH2YkRyxlCQNoUvQ&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=h4kcXDzHqI8hDI8dH3phWA&oh=00_AfmtgbasOl8u3uTDEbFc7jwLHXsvDH0ZIVAFXYu-pNDpqw&oe=6934BEC8",
    role: "",
    job: "Designer",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-009",
    name: "Trần Thị Thái Hà",
    nickname: "Hà",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/527986925_3912840735533900_8127659940529731438_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=m-dfuIfyN6EQ7kNvwHz3BtV&_nc_oc=Adk_p1Y2k3y34iSEw-nbXv8HXRkb1ArN1gcfvEEXhCUD84BnbQMbcxr0cZr4aIyb8pJnxVZPZOGtyP5MgF407yA0&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=fmAYgvX24X9x7I1SIeotbQ&oh=00_AflI5qcLQMExOmNf2WCcU4DpYG2Ue5rYnIIQC3JFvAw4Gw&oe=6934CF9A",
    role: "",
    job: "Kinh Doanh",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-010",
    name: "Trần Xuân Thành",
    nickname: "Thành Heo",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/45186808_1092750044222431_3249275430963773440_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=2UiszPeDymQQ7kNvwES5uW1&_nc_oc=Adk6Qs7fMqfJrb2uOsvbFAM_qkL_ZhBvpX-peLkI8CQiJwoD6IPw7ghKeT13Gh8tSHOAcQ2Y2-AQRFIVdbdVSHmN&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=Ow7cND5T3gDRy8q6Xehf_Q&oh=00_Afm9XWtBsygmlvkiv9fwi07LlmR9UhDoDnCMjKObpecZuQ&oe=69567169",
    role: "",
    job: "Công An",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-011",
    name: "Phạm Thị Linh",
    nickname: "Linh",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/74888329_2570078939773916_4648610079904366592_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=fSexLKc3qmIQ7kNvwHkIxUP&_nc_oc=AdkgF_w4mnxE7SbExyfxeCvXRP9lORsNS0du-mW-4h8IAKPA_3STFP5m2-FSPj1Ew58ObiV69KwOn_xL04MKVYBe&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=gPkLUoUbIcf6kZItpUU8wg&oh=00_AfkkCEr3lIccGnBr78uQ5vhHMGD2Uyf9FYuqZNCWY2AI2g&oe=69568211",
    role: "",
    job: "Nhà Nước",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-012",
    name: "Phan Thị Hằng",
    nickname: "Hằng",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/89151439_527185354844542_8065962390207856640_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BXUSOG0QoxEQ7kNvwFWbr4R&_nc_oc=AdmgmIIpmC36nYnUFQKI03h0dR40kgXld1GY9TJM4743u4NbPvv3f3EsPzmP_jF8iGv6Y3OGjrSYgV8xTXm0_h4N&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=UwHNo5YWxIdfgchd2R4DXg&oh=00_AfmM4f8SPWl6e9xKP8mh2nigBlXj0p6HkWpcHCbxFeGcxg&oe=69566B1D",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-013",
    name: "Lê Công Nghĩa",
    nickname: "Nghĩa",
    photo: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/504478254_2831132177072073_6895867528211320313_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_koIXS7yPusQ7kNvwGWGWCs&_nc_oc=Adm1ZjMXPXGqAOSKmlpqkr1d8IEfTKfy_hnIBp34NUPnPT08f-qB6Y8DRPluHzsQV0nJvlgfPx1pqW3GZMhi5z1D&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=X8TKgS97Oe6wYL18UdIzow&oh=00_AfnH70gQH3WXCuylQxhRejb11huatfWxgwAlQmmLwPulbQ&oe=6934C2B9",
    role: "",
    job: "Quân Nhân",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-014",
    name: "Võ Thị Kim Oanh",
    nickname: "Oanh",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/475791911_495340846936439_4419701785029688488_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PsUSI7MacPAQ7kNvwFI4TqY&_nc_oc=AdlkduqCOPYEzwuMXAqW3RD29MikuTEYrkLgZwu3nd0_-6G1uzA7ixBrLTkcRiIDCKMDzNVl_ohu6sB0Fsr5n6pV&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=BHt-x93XcqtChg5xhDyMIQ&oh=00_Afnub06pzunOHWcz6KjMJPWvJJadzbsfG3tY07vF9KbGBQ&oe=6934E3FF",
    role: "",
    job: "Kinh Doanh",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-015",
    name: "Nguyễn Quang Đạt",
    nickname: "Ben",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/491007764_3022053597956818_240798978542083177_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5d1kQClTT9MQ7kNvwG4cGNy&_nc_oc=AdmOKfGUcBBLBjibbUK69HDgRJ-kr_pre3kdxFHKnr9kJMyDLSGuUr1RYs8kjjS4qExqtFLNCpWZHISEo1rnEZ5X&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=wUbmNHpOkiMT072f9uUcug&oh=00_Afkc7KHXoMMAO7ta5l09E1_SnwsgOh8_c5zCq0BHpov1_Q&oe=6934E331",
    role: "",
    job: "Airport",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-016",
    name: "Lê Văn Duy",
    nickname: "Duy",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/509426656_9929654580487169_5673977849734755451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4wU0Do6XxXMQ7kNvwGn29jF&_nc_oc=AdlZIo_LfuW_lB30ts07mI8DEnG4ZT5IF-SE4z4hOc9AM5ZZcmFPivBerdqJVnLa_alvb76W3VS6WZ9nhiZu6MVn&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=SfkgpavrUeeiDGIQALDNvQ&oh=00_Afkyv8YZejsPncNhrqwt4TtxhyWP_GlKtgRE2UmG2fW99g&oe=6934EBB2",
    role: "",
    job: "Kỹ Sư Điện",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-017",
    name: "Mai Đức Huy",
    nickname: "Hụ Be",
    photo: "images/members/default-avatar.svg",
    role: "",
    job: "Thu Y",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-018",
    name: "Nguyễn Xuân Khánh",
    nickname: "Kệ",
    photo: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/556302338_3198133417029874_1665301481801193711_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OWvy0ENq8KQQ7kNvwFl-FES&_nc_oc=AdlRoW2fMVuMBQrRgjyRv5riIUw-wD4zeeXssAF8-zlAHx3cZ2_E_kGO1-xNBmt5qcH8r8tyBoWOstne9AQGlOTM&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=9_hbWdsJo3QXmO8ExrdHvw&oh=00_Aflb7Fm2AJ9fgcts1yzSgr7GPSA-miqfETgo4Cc4rzOjaA&oe=6934CC3E",
    role: "",
    job: "IT",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-019",
    name: "Nguyễn Thị Thanh Thảo",
    nickname: "Thảo Chuột",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/485910029_9143197962475817_6741619377461411286_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oXD8Gd727zcQ7kNvwHsKLXK&_nc_oc=AdnU2MQGNWvIT7CaltAYZNzqG7pGKbplHaHK2P-RHRQA-xnOejgMXlY6DVkkRTXLHwTJifW537tSQsafpmx6IXAc&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=Tw4uqAVuWzilUHW3e-u3sA&oh=00_Afl6PTbIGb645Nft9YdKd3wLx6oITn-02yOxknF7shoDYg&oe=6934DDFA",
    role: "",
    job: "Giảng Viên",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-020",
    name: "Nguyễn Hữu Vũ",
    nickname: "Vũ Dê",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/554096748_2933116140228527_5230965230468608967_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=finQ7HjkZyEQ7kNvwEkJG6v&_nc_oc=AdmuHsSc42QpMsG_nuVAzx314hCSFUU3WqMQWOdN1OgKo2BjpoemNZSJilzjSy6RwNAfAXQNqXURqR2vOLN3SYsQ&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=wUmsh2SUdnuUIioo5j33tg&oh=00_AfkKi-s_VVk4TdlAV2fyEW5LIeb4Z73CtKawYLn1a73cKQ&oe=6934F22D",
    role: "",
    job: "Kiến Trúc Sư",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-021",
    name: "Tăng Bảo Ngọc",
    nickname: "Ngọc",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/430986969_3038715566270746_1724521696039631767_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oy1d8FWlk1IQ7kNvwErbE-q&_nc_oc=AdnKIF6yOPO6GMbbBU1yMOXWAL7Q6g3aG5JSmLT0dkSpqUGAej3omxevijA5QfdilJKksilTbwbaxXsGPZGkAReo&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=c9e8eS9tksJlqykITZ1vNA&oh=00_Afm5v72O_jK7V8o-H9BBz-7pqTRbK3EiUplE0agTwwE6Qg&oe=6934E1E9",
    role: "Phó học tập",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-022",
    name: "Nguyễn Thị Thảo",
    nickname: "Thảo",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-023",
    name: "Nguyễn Thái Thảo Trang",
    nickname: "Trang",
    photo: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/499226950_2965896520244857_1341679373321606779_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BODPXyLYAFEQ7kNvwEEyTlE&_nc_oc=AdmLLjrwUyUxxXx1b33mjNClR-oi_VYzpYxfKy9tcklaoD-NFVOE-quVxjEOaz-R3jixkFej8buA_AUweXOapnU8&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=yyVK79t6gNS45JxVcw500w&oh=00_AfnmyAmvCv8aDRd3JUocuNhjMzaXZc7VKSSunD4384zPQQ&oe=6934D95F",
    role: "",
    job: "Kinh Doanh",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-024",
    name: "Lê Văn Toản",
    nickname: "Toản",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-025",
    name: "Hồ Thị Phương Nhi",
    nickname: "Nhi",
    photo: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/497823232_122105914100865050_5794639936240419975_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=K7vAvfGwo4cQ7kNvwHRlegY&_nc_oc=Adliz1lVvk-IHXi6OmMz2fwtOSQwLum7pJphZhZw9bl6By-G2g4N5ZgouLnd_o5fBRnGRwKlUCWj1HCFLCorq1_J&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=DhpAj9y09hTA2Up__TRLGw&oh=00_AfnK2-B_VFD9g1LLesU7506x9Fs8giVmBuW_EJpG5IEU7g&oe=6934ECB1",
    role: "",
    job: "Giáo Viên",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-026",
    name: "Nguyễn Thị Hồng Nga",
    nickname: "Nga",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/474791007_8677264345729885_118594519635216486_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=L3NXgZzwdugQ7kNvwHCkVv9&_nc_oc=AdlLVmIGVUZ1Ha1suKPFznB23cARj0C7kc4booMhO8YHeaO9uZDnq9jux-aIQBd9r6LZKV1b1v7DEzdhTlOK_JdM&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=ebBfCWFcEaqX__3sGegHSA&oh=00_AfnEZZ89fqUz5FakvL1iL7CdbYcPQPEjhz1K_SV3nXuvjw&oe=6934D8CF",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-027",
    name: "Lê Thị Nhàn",
    nickname: "Nhàn",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/431351663_1594318121321563_6889846639992407263_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uS5BqzAQpq8Q7kNvwHg6yyJ&_nc_oc=AdmduwdErDmsXnxa7PTXFJQe-gatHWg-aryqLcCGvQ43XoHcTWPRmnQTwrYZZTPmpHVOcbrMMtfRwKuoxv1vxx19&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=1uOkbNx_93BBi-GMvBLtrg&oh=00_AflkSpcoNX9EOS6_urclY9FdJLTlBrUpX4jcTP_h3kzpPw&oe=6934D8D4",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-028",
    name: "Hồ Thị Việt Yên",
    nickname: "Yên",
    photo: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/448251534_2272706979750327_4168142429313985966_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TLiadAhulgwQ7kNvwFBR5RO&_nc_oc=Adm6ixqUsBppZOSWAVenuQAgwGr_v2FWas0Li6Wh4B-bmvZkkDV7i8T3xVHYEJ9FXBfebR2hZ0NF78wSGVCJfLuq&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=dbb8m4qJDrRS4q3uTSf4iA&oh=00_Afm-qUewYfAUuoM5_k1ZSIUew6FDDIizTHsBxur-Ja7egA&oe=6934CBBD",
    role: "",
    job: "Điều Dưỡng",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-029",
    name: "Nguyễn Thị Thảo Yến",
    nickname: "Yến",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/61989314_2426611590906871_6933744513458372608_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=LVAmy80i1fwQ7kNvwEOIwxV&_nc_oc=AdkpUbIwbNYYjSTkNA-X2nKKPmWB-dEwWizX4N_naNigbB5JHGsgGalvX2X9IJceml8nWu8SoeY7prvdQwHBh_Vg&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=IdsVs-5B7QZlnKhU8Zp5yw&oh=00_Afm9-9U2PSXTdkTgYrGBhin2VvSCGXVY4Rc-YgVTbV1ubw&oe=69567AC5",
    role: "",
    job: "Kế Toán",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-030",
    name: "Phan Minh Hải",
    nickname: "Hải",
    photo: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/469316450_3844882542493317_8776456152770617885_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=elym3CiwtToQ7kNvwF6UGKp&_nc_oc=Adl_uDunqAZBgm-edIvORW6LTXYYKHHw-GSBXI8AfKM2wkLiICKkdNztO0QlwmZpptgJw76Aoqp-6LuzLfjlll88&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=y2x4YlB68yhvvm646d3P-g&oh=00_Afmr5v7Pg76SIJKcXN-HEKxMBZnvAUrct2UsQ8cEk8JW6g&oe=6934D2D5",
    role: "",
    job: "Kinh Doanh",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-031",
    name: "Trần Trọng Bảo Trung",
    nickname: "Trung",
    photo: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/540210683_1599531677684578_1625834998606371815_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vVL3B9F02vUQ7kNvwFyEt9W&_nc_oc=AdmZm28mxQnNNMrqlAKCmAOk5K2ES2zirKPPHXo5eqJKtWABJ-ddO4-cHPKih-UKHsBBoT8gVT8MYDxshcxz4m1A&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=aE64xfVkbJ97XCKgf6pKrw&oh=00_AflueOF4B3bWHlnESgqD209dPIl0ubXup-QygEIZGk7ocQ&oe=6934F5CD",
    role: "",
    job: "Công An",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-032",
    name: "Ngô Bá Ngọc Hoàng",
    nickname: "Hoàng",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/485770461_2923836017776723_5971644428971530054_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=rhJI4_GXO0cQ7kNvwGSozTb&_nc_oc=AdnjJBHxbFPUsAX8pYcxrTs7CB8F3-Zb6Yq9eY5VsuHHI35rDlncsISTwGbpSPQRp876KrSwsT26TPyo-T_i0rdD&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=pk-G5w5eijoRER7UX_TLog&oh=00_AfnHp3pFWSrdg6vlCrpSB2lKd1GpPxc4FUNwFN9oGjw4yA&oe=6934D25D",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-033",
    name: "Lê Văn Hiếu",
    nickname: "Hiếu",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-034",
    name: "Lê Thanh Nam",
    nickname: "Nam",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/561030085_3944678522331012_9165802719273519554_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ey-q11f2TyQQ7kNvwEh_i9E&_nc_oc=Adkh2SV8KXPf5nqrz8Iag7Z7goiodTLEfdpKE5dLL9eY0prgRfZHM3b01JNu-8fEI5Y685UVaDgCXkR7GbUB58lW&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=rcUDXzUlI9x-0hHicqdYgw&oh=00_AfmGbOT41eYK2ViOMCdz3iebOHjRvJwqbFu32oJ9m8Gb-Q&oe=6934F66D",
    role: "",
    job: "Ca Sỹ",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-035",
    name: "Nguyễn Thị Linh",
    nickname: "Linh",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/49051479_2088243844625032_677272748661145600_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Uj_4U5Qf32kQ7kNvwGh-3l7&_nc_oc=Adl1psdLRiJCF7xZAjJjsIdfzUOzWWWb3DY83ovqHVi4gywiFnqJ5kixDHuyI0EjZzNxORIflFY7cevJkNSOEYwZ&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=JihEZG0dKwkcOjv9muSqdw&oh=00_AfnVnF0Q4OuYv67_P6QgtD9-sjdmgG0I2aBs7JzNF3Lflg&oe=69568020",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-036",
    name: "Đoàn Thị Thu Hiệp",
    nickname: "Hiệp",
    photo: "https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-9/70882547_1410335979107098_3431221502731616256_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MoByM5JGiVoQ7kNvwEGlrGk&_nc_oc=AdlBPiynX4-la0yZrgleBkzIQv2w_8tflWekuirMMgdeYuj6phxZf4jCSMFHXodJHwiYgtaDM9K9cM3B1aY6fzgq&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=oGJgKHx8zKxGYwmRy-Q5JQ&oh=00_Afk0xmnZycUDAPtpSfF7vtM90IGbxgTFxNI_lZbwV5VFcw&oe=69567605",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-037",
    name: "Nguyễn Thị Đức Ly",
    nickname: "Ly",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/480565224_3094754737346878_5418936432656616522_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=U9qpspll4KAQ7kNvwEA7NkX&_nc_oc=AdnLf_xvEDN061muPn6OssTwUXilxl8-bjUbKmq2_08Od1L-SB0YYUN1wSjxxL-un-hnpB_Sr1NmkfFNn8s6_bff&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=Lt_krEY_vnJ44Rj4Ne9ncQ&oh=00_AfnEqNNaGBYx1uonjDGigV-D2_15O4o6nRizDPzcLE-lHQ&oe=6934DC35",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-038",
    name: "Nguyễn Thị Tuyết Sương",
    nickname: "Sương",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-039",
    name: "Lê Đình Minh Khánh",
    nickname: "Khánh",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-040",
    name: "Trần Hữu Thắng",
    nickname: "Mèo",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/268044848_4457406587705597_3862248351912430175_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=71dLocUj5noQ7kNvwG0K81r&_nc_oc=Adk7Sygp0oufpmWMzZ320_qTDpS4ZtuBnnngfBa8prHk41mqM4YLo-DDo4oBgs0IEVVPMEmuIqyyp98WqRwC0qUi&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=DKqgzQgriIBW-TRHoO2u_Q&oh=00_AfmbvliNrCNlyGFhwy_0s79-y3KEjJ02PEI3PDFiAKTHZQ&oe=69358370",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-041",
    name: "Lê Thị Lộc",
    nickname: "Lộc",
    photo: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/279056808_997622237812109_5502293309768180651_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=24S2XO4UCpsQ7kNvwGf02wU&_nc_oc=AdnM9AwE_8fJGkJsfPGDnjCNBXJfWsMzyCDnBIjWrmuWcGN0LlpJ2IT4Vfkk78odfLcdx45cnRlHRJaDSVjBBhVT&_nc_zt=24&_nc_ht=scontent.fdad1-1.fna&_nc_gid=dYpH0CBobaU_afBbL5N4Xg&oh=00_AfmaavlbKR4OPPg9RtM0iGBXT8KmzjBP9k8v2bzjBtsSjw&oe=69358250",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-042",
    name: "Nguyễn Thành Chung",
    nickname: "Chung",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/490094181_3371201626343118_2971127715698679869_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Tjj4_A2rlPEQ7kNvwEpAajt&_nc_oc=AdmU4mrfRtplxcdpEgeYwbxNNHoV34VlHt1cUXOA-K9pyWCgwPLJrMKRVf9THfMdjg1vTpJr9dQEm9zv6-S5IeaU&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=6NzW0Mv44VKt-t7FAi0FEw&oh=00_AfkLvHoMQMX5z1Aosq3e1ucSBlYyonTAWsiLvrOp-k3v1Q&oe=693580C6",
    role: "",
    job: "Kỹ Sư",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-043",
    name: "Nguyễn Thành An",
    nickname: "An",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-044",
    name: "Nguyễn Công Định",
    nickname: "Định",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/480440512_8932097940249665_9005704797796219434_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=q4585gBHtc8Q7kNvwEDqyW1&_nc_oc=AdlLA4fLfoW8APatZ8o6c3-gX5TFZxw53w3FyyiUQUvYfqKn2E6pOQNIzQeodUSGCgFqgdneeUalohPNLPdf-XYt&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=pqhunZQdi90zvhM127AyyA&oh=00_AflhmWn-ftkdDsD-5lXFyoIIYyOmjoJSLb0v0v8585hd4Q&oe=69355FD5",
    role: "",
    job: "Ngân Hàng",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
    {
    id: "member-045",
    name: "Cáp Hữu Thiện",
    nickname: "Thiện",
    photo: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/493272312_3536250333338644_4338566331873608835_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ncj04FgvDsoQ7kNvwElnXwu&_nc_oc=AdkNW1e9z8J_weL1eJJ9ZkW0Jqu6C8CqKcYiG4-kjT879XthE6JBcnq-Wt08ulpxNPc87ORLdCoY2xj8IUBBXeK2&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=SGjGNay-oeybvhFOLjAnLw&oh=00_AfmIFC-MyXpqwQOUfi5_bTGEIibshe1iRINn8FKt8dq6Og&oe=69356B4A",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
   {
    id: "member-046",
    name: "Hồ Minh Hoàng Giang",
    nickname: "Giang",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
   {
    id: "member-047",
    name: "Nguyễn Văn Banh",
    nickname: "Banh",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
   {
    id: "member-048",
    name: "Lê Hải Thành",
    nickname: "Thành",
    photo: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/327719469_965226777772280_2818018298089427583_n.jpg?stp=c304.0.1405.1406a_dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=dKJwIddOBXoQ7kNvwElWQ10&_nc_oc=AdmuozNyX1QLUWynY3k-HbedOWUn1LEghtHtEm3DETfGyrSekkO33C9LYfbTOZVilW1jrX5_z894VHMoPkR-HzKM&_nc_zt=24&_nc_ht=scontent.fdad1-3.fna&_nc_gid=tfdxK9-E_q6CPn87Om8T3Q&oh=00_AflQzi-rENQz76-YSR9UWQUMmI1cQ15Z0bqFXD_IC6amsw&oe=6935765C",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-049",
    name: "Hồ Thị Diệu Ny",
    nickname: "Ny",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-050",
    name: "Nguyễn Bá Sáng",
    nickname: "Sáng",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-051",
    name: "Hoàng Thị Thanh Thuỷ",
    nickname: "Thuỷ",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
    {
    id: "member-052",
    name: "Hoàng Thị Thành Gơn",
    nickname: "Thuỷ",
    photo: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/490167068_3123231914482309_6597812347888420681_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6S8fHIToNOkQ7kNvwE_yai8&_nc_oc=Adlp5FMrezxaMs6_MA9YlPLnjxXu81_1LNcxq2vX_2LV_kXsTZsngusNTqKMQjeNOTFxwtG0NnrC2jnqNUHDfUDf&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=M04Vzp_Ha3w21nmkXOzh1Q&oh=00_AfkjQV7FzcPyt-STCFhf10QdLZmOhaecuk_jCRABD9nuaw&oe=69357FEC",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
];

const galleryData = [
  // TEMPORARILY HIDDEN - Uncomment when images are available
  // {
  //   name: "Khai giảng 2023",
  //   date: "05/09/2023",
  //   images: [
  //     { id: "img-001", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Lễ khai giảng năm học mới 2023-2024" },
  //     { id: "img-002", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Cả lớp chụp ảnh kỷ niệm" },
  //     { id: "img-003", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Thầy cô và học sinh" }
  //   ]
  // },
  // {
  //   name: "Ngày Nhà giáo Việt Nam",
  //   date: "20/11/2023",
  //   images: [
  //     { id: "img-004", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Tặng hoa cho thầy cô" },
  //     { id: "img-005", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Văn nghệ chào mừng 20/11" },
  //     { id: "img-006", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Lớp chụp ảnh cùng GVCN" },
  //     { id: "img-007", src: "images/gallery/placeholder.svg", thumbnail: "images/gallery/placeholder.svg", caption: "Tiết mục múa của các bạn nữ" }
  //   ]
  // },
  {
    name: "Tháng năm học trò",
    date: "15/05/2024",
    images: [
      { id: "img-000", src: "images/gallery/anhlop/fullclass.jpg", thumbnail: "images/gallery/anhlop/fullclass.jpg", caption: "Ảnh tập thể cả lớp" },
      { id: "img-008", src: "images/gallery/anhlop/DSC01667.JPG", thumbnail: "images/gallery/anhlop/DSC01667.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-009", src: "images/gallery/anhlop/DSC01702.JPG", thumbnail: "images/gallery/anhlop/DSC01702.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-010", src: "images/gallery/anhlop/DSC03209.JPG", thumbnail: "images/gallery/anhlop/DSC03209.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-011", src: "images/gallery/anhlop/DSC03239.JPG", thumbnail: "images/gallery/anhlop/DSC03239.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-012", src: "images/gallery/anhlop/DSC03243.JPG", thumbnail: "images/gallery/anhlop/DSC03243.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-013", src: "images/gallery/anhlop/DSC03245.JPG", thumbnail: "images/gallery/anhlop/DSC03245.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-014", src: "images/gallery/anhlop/DSC03251.JPG", thumbnail: "images/gallery/anhlop/DSC03251.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-015", src: "images/gallery/anhlop/DSC05452.JPG", thumbnail: "images/gallery/anhlop/DSC05452.JPG", caption: "Kỷ niệm dã ngoại" },
      { id: "img-016", src: "images/gallery/anhlop/DSC05475.JPG", thumbnail: "images/gallery/anhlop/DSC05475.JPG", caption: "Kỷ niệm dã ngoại" }
    ]
  }
];

// ==================== NAVIGATION ====================

const Navigation = {
  header: null,
  navMenu: null,
  navToggle: null,
  navClose: null,
  navLinks: null,

  init() {
    this.header = document.getElementById('header');
    this.navMenu = document.getElementById('nav-menu');
    this.navToggle = document.getElementById('nav-toggle');
    this.navClose = document.getElementById('nav-close');
    this.navLinks = document.querySelectorAll('.nav__link');

    this.setupMobileMenu();
    this.setupSmoothScroll();
    this.setupActiveLink();
    this.setupStickyHeader();
  },

  toggleMobileMenu() {
    this.navMenu.classList.toggle('show-menu');
    document.body.classList.toggle('no-scroll');
  },

  closeMobileMenu() {
    this.navMenu.classList.remove('show-menu');
    document.body.classList.remove('no-scroll');
  },

  setupMobileMenu() {
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }
    if (this.navClose) {
      this.navClose.addEventListener('click', () => this.closeMobileMenu());
    }
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });
  },

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = this.header ? this.header.offsetHeight : 0;
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  },

  setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        this.scrollToSection(targetId);
      });
    });
  },

  setActiveLink(sectionId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      if (href === sectionId) {
        link.classList.add('active');
      }
    });
  },

  setupActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  },

  setupStickyHeader() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.header.classList.add('header--scrolled');
      } else {
        this.header.classList.remove('header--scrolled');
      }
    });
  }
};

// ==================== MEMBERS ====================

const Members = {
  membersGrid: null,
  memberModal: null,
  modalOverlay: null,
  modalClose: null,
  modalBody: null,
  members: [],

  init() {
    this.membersGrid = document.getElementById('members-grid');
    this.memberModal = document.getElementById('member-modal');
    this.modalOverlay = document.getElementById('modal-overlay');
    this.modalClose = document.getElementById('modal-close');
    this.modalBody = document.getElementById('modal-body');

    this.members = this.sortMembers([...membersData]);
    this.renderGrid();
    this.setupModalEvents();
    this.updateMemberCount();
  },

  sortMembers(membersList) {
    return membersList.sort((a, b) => a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' }));
  },

  renderGrid() {
    if (!this.membersGrid) return;
    this.membersGrid.innerHTML = '';

    this.members.forEach((member, index) => {
      const card = document.createElement('div');
      card.className = 'member-card stagger-item';
      card.dataset.memberId = member.id;
      card.style.transitionDelay = `${index * 50}ms`;

      const roleHtml = member.role ? `<span class="member-card__role">${member.role}</span>` : '';

      card.innerHTML = `
        <div class="member-card__image-wrapper">
          <img class="member-card__image" src="${member.photo}" alt="Ảnh ${member.name}" loading="lazy" onerror="this.src='images/members/default-avatar.svg'">
        </div>
        <div class="member-card__info">
          <h3 class="member-card__name">${member.name}</h3>
          ${roleHtml}
        </div>
      `;

      card.addEventListener('click', () => this.openModal(member.id));
      this.membersGrid.appendChild(card);
    });
  },

  openModal(memberId) {
    const member = this.members.find(m => m.id === memberId);
    if (!member) return;

    this.renderModalContent(member);
    this.memberModal.classList.add('show');
    document.body.classList.add('no-scroll');
  },

  closeModal() {
    this.memberModal.classList.remove('show');
    document.body.classList.remove('no-scroll');
  },

  renderModalContent(member) {
    if (!this.modalBody) return;

    const roleHtml = member.role ? `<p class="modal__role">${member.role}</p>` : '';
    const contactHtml = member.contact ? `
      <div class="modal__contact">
        <h4>Thông tin liên hệ</h4>
        ${member.contact.email ? `<p><strong>Email:</strong> <a href="mailto:${member.contact.email}">${member.contact.email}</a></p>` : ''}
        ${member.contact.phone ? `<p><strong>Điện thoại:</strong> <a href="tel:${member.contact.phone}">${member.contact.phone}</a></p>` : ''}
        ${member.contact.facebook ? `<p><strong>Facebook:</strong> <a href="https://${member.contact.facebook}" target="_blank" rel="noopener">${member.contact.facebook}</a></p>` : ''}
      </div>
    ` : '';

    const jobText = member.job || 'Chưa cập nhật';
    
    this.modalBody.innerHTML = `
      <div class="modal__header">
        <div class="modal__image-wrapper" data-photo="${member.photo}">
          <img class="modal__image" src="${member.photo}" alt="Ảnh ${member.name}" onerror="this.src='images/members/default-avatar.svg'">
          <div class="modal__image-zoom-hint">🔍 Nhấn để xem ảnh lớn</div>
        </div>
        <div class="modal__title-group">
          <h3 class="modal__name">${member.name}</h3>
          ${member.nickname ? `<p class="modal__nickname">Biệt danh: ${member.nickname}</p>` : ''}
          ${roleHtml}
        </div>
      </div>
      <div class="modal__details">
        <p><strong>💼 Nghề nghiệp:</strong> ${jobText}</p>
        ${member.birthday ? `<p><strong>🎂 Ngày sinh:</strong> ${member.birthday}</p>` : ''}
        ${contactHtml}
      </div>
    `;
    
    // Add click event for avatar zoom
    const imageWrapper = this.modalBody.querySelector('.modal__image-wrapper');
    if (imageWrapper) {
      imageWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        AvatarViewer.open(member.photo, member.name);
      });
    }
  },

  setupModalEvents() {
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }
    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', () => this.closeModal());
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.memberModal.classList.contains('show')) {
        this.closeModal();
      }
    });
  },

  updateMemberCount() {
    const el = document.getElementById('member-count');
    if (el) el.textContent = this.members.length;
  }
};

// ==================== GALLERY ====================

const Gallery = {
  galleryContainer: null,
  lightbox: null,
  lightboxOverlay: null,
  lightboxImage: null,
  lightboxCaption: null,
  lightboxClose: null,
  lightboxPrev: null,
  lightboxNext: null,
  allImages: [],
  currentImageIndex: 0,
  touchStartX: 0,
  touchEndX: 0,

  init() {
    this.galleryContainer = document.getElementById('gallery-container');
    this.lightbox = document.getElementById('lightbox');
    this.lightboxOverlay = document.getElementById('lightbox-overlay');
    this.lightboxImage = document.getElementById('lightbox-image');
    this.lightboxCaption = document.getElementById('lightbox-caption');
    this.lightboxClose = document.getElementById('lightbox-close');
    this.lightboxPrev = document.getElementById('lightbox-prev');
    this.lightboxNext = document.getElementById('lightbox-next');

    this.allImages = galleryData.flatMap(event => 
      event.images.map(img => ({ ...img, eventName: event.name }))
    );

    this.renderGallery();
    this.setupLightboxEvents();
    this.updateGalleryCounts();
  },

  renderGallery() {
    if (!this.galleryContainer) return;
    this.galleryContainer.innerHTML = '';

    galleryData.forEach(event => {
      const section = document.createElement('div');
      section.className = 'gallery__event scroll-animate';

      section.innerHTML = `
        <div class="gallery__event-header">
          <h3 class="gallery__event-title">${event.name}</h3>
          <span class="gallery__event-date">${event.date}</span>
        </div>
        <div class="gallery__grid"></div>
      `;

      const grid = section.querySelector('.gallery__grid');

      event.images.forEach((image, index) => {
        const item = document.createElement('div');
        // First image is featured (larger)
        const isFeatured = index === 0;
        item.className = `gallery__item stagger-item${isFeatured ? ' gallery__item--featured' : ''}`;
        item.style.transitionDelay = `${index * 80}ms`;

        item.innerHTML = `
          <img class="gallery__thumbnail" src="${image.thumbnail}" alt="${image.caption}" loading="lazy" data-image-id="${image.id}">
          <div class="gallery__item-icon">🔍</div>
          <div class="gallery__item-overlay">
            <span class="gallery__item-caption">${image.caption}</span>
          </div>
        `;

        item.addEventListener('click', () => this.openLightbox(image.id));
        grid.appendChild(item);
      });

      this.galleryContainer.appendChild(section);
    });
  },

  openLightbox(imageId) {
    const index = this.allImages.findIndex(img => img.id === imageId);
    if (index === -1) return;

    this.currentImageIndex = index;
    this.updateLightboxContent();
    this.lightbox.classList.add('show');
    document.body.classList.add('no-scroll');
    this.updateNavigationButtons();
  },

  closeLightbox() {
    this.lightbox.classList.remove('show');
    document.body.classList.remove('no-scroll');
  },

  navigateLightbox(direction) {
    if (direction === 'prev' && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else if (direction === 'next' && this.currentImageIndex < this.allImages.length - 1) {
      this.currentImageIndex++;
    }
    this.updateLightboxContent();
    this.updateNavigationButtons();
  },

  updateLightboxContent() {
    const image = this.allImages[this.currentImageIndex];
    if (!image) return;
    this.lightboxImage.src = image.src;
    this.lightboxImage.alt = image.caption;
    this.lightboxCaption.textContent = image.caption;
  },

  updateNavigationButtons() {
    if (this.lightboxPrev) {
      this.lightboxPrev.disabled = this.currentImageIndex === 0;
      this.lightboxPrev.style.opacity = this.currentImageIndex === 0 ? '0.3' : '1';
    }
    if (this.lightboxNext) {
      this.lightboxNext.disabled = this.currentImageIndex === this.allImages.length - 1;
      this.lightboxNext.style.opacity = this.currentImageIndex === this.allImages.length - 1 ? '0.3' : '1';
    }
  },

  handleSwipe(direction) {
    if (direction === 'left') this.navigateLightbox('next');
    else if (direction === 'right') this.navigateLightbox('prev');
  },

  setupLightboxEvents() {
    if (this.lightboxClose) {
      this.lightboxClose.addEventListener('click', () => this.closeLightbox());
    }
    if (this.lightboxOverlay) {
      this.lightboxOverlay.addEventListener('click', () => this.closeLightbox());
    }
    if (this.lightboxPrev) {
      this.lightboxPrev.addEventListener('click', () => this.navigateLightbox('prev'));
    }
    if (this.lightboxNext) {
      this.lightboxNext.addEventListener('click', () => this.navigateLightbox('next'));
    }

    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('show')) return;
      if (e.key === 'Escape') this.closeLightbox();
      else if (e.key === 'ArrowLeft') this.navigateLightbox('prev');
      else if (e.key === 'ArrowRight') this.navigateLightbox('next');
    });

    // Touch swipe
    if (this.lightbox) {
      this.lightbox.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.lightbox.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        const diff = this.touchStartX - this.touchEndX;
        if (Math.abs(diff) > 50) {
          this.handleSwipe(diff > 0 ? 'left' : 'right');
        }
      }, { passive: true });
    }
  },

  updateGalleryCounts() {
    const photoEl = document.getElementById('photo-count');
    const eventEl = document.getElementById('event-count');
    if (photoEl) photoEl.textContent = this.allImages.length;
    if (eventEl) eventEl.textContent = galleryData.length;
  }
};

// ==================== ANIMATIONS ====================

const Animations = {
  observer: null,

  init() {
    if (!('IntersectionObserver' in window)) {
      this.showAllElements();
      return;
    }
    this.setupObserver();
    this.observeElements();
  },

  setupObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  },

  observeElements() {
    document.querySelectorAll('.scroll-animate, .stagger-item').forEach(el => {
      this.observer.observe(el);
    });
  },

  showAllElements() {
    document.querySelectorAll('.scroll-animate, .stagger-item').forEach(el => {
      el.classList.add('visible');
    });
  }
};

// ==================== SEARCH ====================

const Search = {
  // Inline search elements (in members section)
  searchInput: null,
  searchClear: null,
  noResultsMessage: null,
  membersGrid: null,
  allMembers: [],
  
  // Modal search elements (in header)
  searchModal: null,
  searchModalOverlay: null,
  searchModalInput: null,
  searchModalClear: null,
  searchModalClose: null,
  searchToggle: null,
  searchResults: null,
  searchTags: null,

  init() {
    // Inline search elements
    this.searchInput = document.getElementById('members-search-input');
    this.searchClear = document.getElementById('members-search-clear');
    this.noResultsMessage = document.getElementById('members-no-results');
    this.membersGrid = document.getElementById('members-grid');
    
    // Modal search elements
    this.searchModal = document.getElementById('search-modal');
    this.searchModalOverlay = document.getElementById('search-overlay');
    this.searchModalInput = document.getElementById('search-input');
    this.searchModalClear = document.getElementById('search-clear');
    this.searchModalClose = document.getElementById('search-close');
    this.searchToggle = document.getElementById('search-toggle');
    this.searchResults = document.getElementById('search-results');
    this.searchTags = document.querySelectorAll('.search-tag');
    
    // Get sorted members from Members module
    this.allMembers = Members.members;
    
    this.setupEventListeners();
    this.setupModalEventListeners();
  },

  normalizeForSearch(str) {
    if (str === null || str === undefined) {
      return '';
    }
    return String(str).toLowerCase();
  },

  memberMatchesQuery(member, query) {
    if (!query || query.trim() === '') {
      return true;
    }
    
    const normalizedQuery = this.normalizeForSearch(query);
    
    const name = this.normalizeForSearch(member.name);
    if (name.includes(normalizedQuery)) return true;
    
    const nickname = this.normalizeForSearch(member.nickname);
    if (nickname.includes(normalizedQuery)) return true;
    
    const role = this.normalizeForSearch(member.role);
    if (role.includes(normalizedQuery)) return true;
    
    return false;
  },

  searchMembers(query) {
    if (!query || query.trim() === '') {
      return [...this.allMembers];
    }
    
    return this.allMembers.filter(member => this.memberMatchesQuery(member, query));
  },

  handleSearchInput() {
    const query = this.searchInput.value;
    const results = this.searchMembers(query);
    
    // Show/hide clear button
    if (this.searchClear) {
      this.searchClear.classList.toggle('show', query.length > 0);
    }
    
    // Show/hide no results message
    if (this.noResultsMessage && this.membersGrid) {
      if (results.length === 0 && query.trim() !== '') {
        this.noResultsMessage.classList.remove('hidden');
        this.membersGrid.classList.add('hidden');
      } else {
        this.noResultsMessage.classList.add('hidden');
        this.membersGrid.classList.remove('hidden');
      }
    }
    
    // Render filtered results
    this.renderFilteredGrid(results);
  },

  renderFilteredGrid(membersList) {
    if (!this.membersGrid) return;
    this.membersGrid.innerHTML = '';

    membersList.forEach((member, index) => {
      const card = document.createElement('div');
      card.className = 'member-card stagger-item visible';
      card.dataset.memberId = member.id;
      card.style.transitionDelay = `${index * 50}ms`;

      const roleHtml = member.role ? `<span class="member-card__role">${member.role}</span>` : '';

      card.innerHTML = `
        <div class="member-card__image-wrapper">
          <img class="member-card__image" src="${member.photo}" alt="Ảnh ${member.name}" loading="lazy" onerror="this.src='images/members/default-avatar.svg'">
        </div>
        <div class="member-card__info">
          <h3 class="member-card__name">${member.name}</h3>
          ${roleHtml}
        </div>
      `;

      card.addEventListener('click', () => Members.openModal(member.id));
      this.membersGrid.appendChild(card);
    });
  },

  handleClearSearch() {
    if (this.searchInput) {
      this.searchInput.value = '';
      this.searchInput.focus();
    }
    this.handleSearchInput();
  },

  setupEventListeners() {
    // Inline search in members section
    if (this.searchInput) {
      this.searchInput.addEventListener('input', () => this.handleSearchInput());
      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.handleClearSearch();
        }
      });
    }
    
    if (this.searchClear) {
      this.searchClear.addEventListener('click', () => this.handleClearSearch());
    }
  },

  // Modal search methods
  openSearchModal() {
    if (this.searchModal) {
      this.searchModal.classList.add('show');
      document.body.classList.add('no-scroll');
      // Focus the input after modal opens
      setTimeout(() => {
        if (this.searchModalInput) {
          this.searchModalInput.focus();
        }
      }, 100);
    }
  },

  closeSearchModal() {
    if (this.searchModal) {
      this.searchModal.classList.remove('show');
      document.body.classList.remove('no-scroll');
      // Clear the modal input
      if (this.searchModalInput) {
        this.searchModalInput.value = '';
      }
      if (this.searchModalClear) {
        this.searchModalClear.classList.remove('show');
      }
      // Reset results to hint
      this.resetSearchResults();
    }
  },

  resetSearchResults() {
    if (this.searchResults) {
      this.searchResults.innerHTML = `
        <div class="search-modal__hint">
          <p>💡 Gợi ý tìm kiếm:</p>
          <div class="search-modal__tags">
            <span class="search-tag" data-search="Lớp trưởng">Lớp trưởng</span>
            <span class="search-tag" data-search="Phó">Phó học tập</span>
            <span class="search-tag" data-search="Nguyễn">Họ Nguyễn</span>
            <span class="search-tag" data-search="Trần">Họ Trần</span>
          </div>
        </div>
      `;
      // Re-attach tag click events
      this.searchResults.querySelectorAll('.search-tag').forEach(tag => {
        tag.addEventListener('click', () => {
          const searchTerm = tag.dataset.search;
          if (this.searchModalInput) {
            this.searchModalInput.value = searchTerm;
            this.handleModalSearchInput();
          }
        });
      });
    }
  },

  handleModalSearchInput() {
    const query = this.searchModalInput ? this.searchModalInput.value : '';
    
    // Show/hide clear button
    if (this.searchModalClear) {
      this.searchModalClear.classList.toggle('show', query.length > 0);
    }
    
    // If empty, show hints
    if (!query || query.trim() === '') {
      this.resetSearchResults();
      return;
    }
    
    // Search members
    const results = this.searchMembers(query);
    this.renderModalSearchResults(results, query);
  },

  renderModalSearchResults(results, query) {
    if (!this.searchResults) return;
    
    if (results.length === 0) {
      this.searchResults.innerHTML = `
        <div class="search-no-results">
          <div class="search-no-results__icon">🔍</div>
          <p>Không tìm thấy kết quả cho "${query}"</p>
        </div>
      `;
      return;
    }
    
    let html = '';
    results.forEach(member => {
      html += `
        <div class="search-result" data-member-id="${member.id}">
          <div class="search-result__icon search-result__icon--member">
            <img src="${member.photo}" alt="${member.name}" onerror="this.src='images/members/default-avatar.svg'">
          </div>
          <div class="search-result__info">
            <div class="search-result__title">${member.name}</div>
            <div class="search-result__subtitle">${member.nickname || ''}${member.role ? ' • ' + member.role : ''}</div>
          </div>
          <span class="search-result__type">Thành viên</span>
        </div>
      `;
    });
    
    this.searchResults.innerHTML = html;
    
    // Add click events to results
    this.searchResults.querySelectorAll('.search-result').forEach(result => {
      result.addEventListener('click', () => {
        const memberId = result.dataset.memberId;
        this.closeSearchModal();
        // Scroll to members section and open modal
        Navigation.scrollToSection('members');
        setTimeout(() => {
          Members.openModal(memberId);
        }, 500);
      });
    });
  },

  setupModalEventListeners() {
    // Open modal on search button click
    if (this.searchToggle) {
      this.searchToggle.addEventListener('click', () => this.openSearchModal());
    }
    
    // Close modal
    if (this.searchModalClose) {
      this.searchModalClose.addEventListener('click', () => this.closeSearchModal());
    }
    if (this.searchModalOverlay) {
      this.searchModalOverlay.addEventListener('click', () => this.closeSearchModal());
    }
    
    // Modal input events
    if (this.searchModalInput) {
      this.searchModalInput.addEventListener('input', () => this.handleModalSearchInput());
      this.searchModalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeSearchModal();
        }
      });
    }
    
    // Clear button in modal
    if (this.searchModalClear) {
      this.searchModalClear.addEventListener('click', () => {
        if (this.searchModalInput) {
          this.searchModalInput.value = '';
          this.searchModalInput.focus();
        }
        this.searchModalClear.classList.remove('show');
        this.resetSearchResults();
      });
    }
    
    // Search tags
    this.searchTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const searchTerm = tag.dataset.search;
        if (this.searchModalInput) {
          this.searchModalInput.value = searchTerm;
          this.handleModalSearchInput();
        }
      });
    });
    
    // Keyboard shortcut (Ctrl/Cmd + K)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (this.searchModal && this.searchModal.classList.contains('show')) {
          this.closeSearchModal();
        } else {
          this.openSearchModal();
        }
      }
    });
  }
};

// ==================== FILTER ====================

const Filter = {
  filterButtons: null,
  currentSort: 'az',

  init() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.setupEventListeners();
  },

  // Check if member has a real photo (not default avatar)
  hasRealPhoto(member) {
    return member.photo && 
           member.photo !== 'images/members/default-avatar.svg' &&
           member.photo.startsWith('http');
  },

  // Check if member has a role
  hasRole(member) {
    return member.role && member.role.trim() !== '';
  },

  // Sort members based on current sort type
  sortMembers(members, sortType) {
    const sorted = [...members];
    
    switch (sortType) {
      case 'az':
        // A-Z by Vietnamese name
        return sorted.sort((a, b) => 
          a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' })
        );
      
      case 'za':
        // Z-A by Vietnamese name
        return sorted.sort((a, b) => 
          b.name.localeCompare(a.name, 'vi', { sensitivity: 'base' })
        );
      
      case 'photo':
        // Members with real photos first, then A-Z
        return sorted.sort((a, b) => {
          const aHasPhoto = this.hasRealPhoto(a);
          const bHasPhoto = this.hasRealPhoto(b);
          
          if (aHasPhoto && !bHasPhoto) return -1;
          if (!aHasPhoto && bHasPhoto) return 1;
          return a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' });
        });
      
      case 'role':
        // Members with roles first, then A-Z
        return sorted.sort((a, b) => {
          const aHasRole = this.hasRole(a);
          const bHasRole = this.hasRole(b);
          
          if (aHasRole && !bHasRole) return -1;
          if (!aHasRole && bHasRole) return 1;
          return a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' });
        });
      
      default:
        return sorted;
    }
  },

  // Apply filter and re-render
  applyFilter(sortType) {
    this.currentSort = sortType;
    
    // Update button states
    this.filterButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sort === sortType);
    });
    
    // Get current search query
    const searchQuery = Search.searchInput ? Search.searchInput.value : '';
    
    // Get filtered members (from search)
    let members = Search.searchMembers(searchQuery);
    
    // Apply sort
    members = this.sortMembers(members, sortType);
    
    // Update Search.allMembers order for consistency
    Search.allMembers = this.sortMembers([...membersData], sortType);
    
    // Re-render grid
    Search.renderFilteredGrid(members);
  },

  setupEventListeners() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const sortType = btn.dataset.sort;
        this.applyFilter(sortType);
      });
    });
  }
};

// ==================== AVATAR VIEWER ====================

const AvatarViewer = {
  viewer: null,
  image: null,
  closeBtn: null,
  zoomInBtn: null,
  zoomOutBtn: null,
  resetBtn: null,
  currentZoom: 1,
  minZoom: 0.5,
  maxZoom: 4,
  zoomStep: 0.5,

  init() {
    this.createViewer();
    this.setupEventListeners();
  },

  createViewer() {
    // Create avatar viewer HTML
    const viewerHtml = `
      <div class="avatar-viewer" id="avatar-viewer">
        <div class="avatar-viewer__overlay" id="avatar-viewer-overlay"></div>
        <div class="avatar-viewer__content">
          <button class="avatar-viewer__close" id="avatar-viewer-close" aria-label="Đóng">&times;</button>
          <div class="avatar-viewer__controls">
            <button class="avatar-viewer__btn" id="avatar-zoom-out" aria-label="Thu nhỏ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35M8 11h6"></path>
              </svg>
            </button>
            <button class="avatar-viewer__btn" id="avatar-zoom-reset" aria-label="Đặt lại">100%</button>
            <button class="avatar-viewer__btn" id="avatar-zoom-in" aria-label="Phóng to">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"></path>
              </svg>
            </button>
          </div>
          <div class="avatar-viewer__image-container" id="avatar-image-container">
            <img class="avatar-viewer__image" id="avatar-viewer-image" src="" alt="" draggable="false">
          </div>
          <p class="avatar-viewer__caption" id="avatar-viewer-caption"></p>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', viewerHtml);

    // Get elements
    this.viewer = document.getElementById('avatar-viewer');
    this.image = document.getElementById('avatar-viewer-image');
    this.closeBtn = document.getElementById('avatar-viewer-close');
    this.zoomInBtn = document.getElementById('avatar-zoom-in');
    this.zoomOutBtn = document.getElementById('avatar-zoom-out');
    this.resetBtn = document.getElementById('avatar-zoom-reset');
    this.overlay = document.getElementById('avatar-viewer-overlay');
    this.caption = document.getElementById('avatar-viewer-caption');
    this.imageContainer = document.getElementById('avatar-image-container');
  },

  open(photoUrl, name) {
    if (!this.viewer || !this.image) return;
    
    this.image.src = photoUrl;
    this.image.alt = `Ảnh ${name}`;
    this.caption.textContent = name;
    this.currentZoom = 1;
    this.updateZoom();
    this.viewer.classList.add('show');
    document.body.classList.add('no-scroll');
  },

  close() {
    if (!this.viewer) return;
    this.viewer.classList.remove('show');
    document.body.classList.remove('no-scroll');
    this.currentZoom = 1;
    this.updateZoom();
  },

  zoomIn() {
    if (this.currentZoom < this.maxZoom) {
      this.currentZoom += this.zoomStep;
      this.updateZoom();
    }
  },

  zoomOut() {
    if (this.currentZoom > this.minZoom) {
      this.currentZoom -= this.zoomStep;
      this.updateZoom();
    }
  },

  resetZoom() {
    this.currentZoom = 1;
    this.updateZoom();
  },

  updateZoom() {
    if (this.image) {
      this.image.style.transform = `scale(${this.currentZoom})`;
    }
    if (this.resetBtn) {
      this.resetBtn.textContent = `${Math.round(this.currentZoom * 100)}%`;
    }
  },

  setupEventListeners() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }
    if (this.zoomInBtn) {
      this.zoomInBtn.addEventListener('click', () => this.zoomIn());
    }
    if (this.zoomOutBtn) {
      this.zoomOutBtn.addEventListener('click', () => this.zoomOut());
    }
    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.resetZoom());
    }

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
      if (!this.viewer || !this.viewer.classList.contains('show')) return;
      
      if (e.key === 'Escape') this.close();
      else if (e.key === '+' || e.key === '=') this.zoomIn();
      else if (e.key === '-') this.zoomOut();
      else if (e.key === '0') this.resetZoom();
    });

    // Mouse wheel zoom
    if (this.imageContainer) {
      this.imageContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
          this.zoomIn();
        } else {
          this.zoomOut();
        }
      }, { passive: false });
    }

    // Double click to reset
    if (this.image) {
      this.image.addEventListener('dblclick', () => this.resetZoom());
    }
  }
};

// ==================== FUND IFRAME ====================

const FundIframe = {
  container: null,

  init() {
    this.container = document.querySelector('.fund__sheet-container');
    if (!this.container) return;
    this.setupEventListeners();
  },

  activate() {
    if (this.container) {
      this.container.classList.add('active');
    }
  },

  deactivate() {
    if (this.container) {
      this.container.classList.remove('active');
    }
  },

  setupEventListeners() {
    // Click on container to activate iframe interaction
    this.container.addEventListener('click', (e) => {
      if (!this.container.classList.contains('active')) {
        e.preventDefault();
        e.stopPropagation();
        this.activate();
      }
    });

    // Deactivate when clicking outside
    document.addEventListener('click', (e) => {
      if (this.container.classList.contains('active') && 
          !this.container.contains(e.target)) {
        this.deactivate();
      }
    });

    // Deactivate when scrolling away
    window.addEventListener('scroll', () => {
      const rect = this.container.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isVisible && this.container.classList.contains('active')) {
        this.deactivate();
      }
    }, { passive: true });
  }
};

// ==================== PARTICLES ====================

const Particles = {
  container: null,
  particleCount: 20,

  init() {
    this.container = document.getElementById('particles');
    if (!this.container) return;
    this.createParticles();
  },

  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 10 + 5;
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = Math.random() * 10 + 10;
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        opacity: ${Math.random() * 0.5 + 0.2};
      `;
      
      this.container.appendChild(particle);
    }
  }
};

// ==================== COUNTER ANIMATION ====================

const CounterAnimation = {
  init() {
    this.animateCounters();
  },

  animateCounters() {
    const counters = document.querySelectorAll('.stat__number');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.textContent) || 0;
          this.animateValue(target, 0, finalValue, 1500);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  },

  animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      
      element.textContent = current;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    
    requestAnimationFrame(update);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  Members.init();
  Search.init();  // Initialize search after members
  Filter.init();  // Initialize filter after search
  Gallery.init();
  Animations.init();
  Particles.init();
  CounterAnimation.init();
  FundIframe.init();  // Initialize fund iframe click handler
  AvatarViewer.init();  // Initialize avatar viewer for zoom
  console.log('Class Webpage initialized!');
});
