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
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-002",
    name: "Lê Thanh Vũ",
    nickname: "Vũ LT",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/557731513_24824089977222656_2481311300486690446_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FoTLqCuIQ0cQ7kNvwHAYN6A&_nc_oc=Adl2t2_QeF26FVm5ZXraY74ORSh3jwfGLF_zafQ-QgI1niUef64x6QqOBjA-YBiK-NYSTDMfA0nYGttQ53X16q-b&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=NsBmIronS92retBXAZ_I6w&oh=00_AfnKn0atsSwwlMZ7YTc6YkQ9BpuPeT6vrLxOlXL_Bu-iXw&oe=6934EE7A",
    role: "Lớp trưởng",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
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
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-005",
    name: "Lê Bảo Hưng",
    nickname: "Hưng",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/79749335_1454777861338486_3429765873890492416_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=A28ukiKiMIEQ7kNvwFukKHc&_nc_oc=AdmPypRu8aYi4Mh0sl2IOjmaXpqpNSUwTwiu7krxmyqDaiu4n8ICRn5g8lV2q55vDLseAG4xSxnXVsOLSjAu_uZL&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=VOdLCaCfpMM64_GpYOnQFw&oh=00_AfnLcQaAmg3giZ5spdWxcAbmhIQfLrnxqxcAf1xee2Fdbg&oe=69568B78",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-006",
    name: "Lê Thị Thu Hồng",
    nickname: "Hồng",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/588141181_4318671631702248_7233124361324962335_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gjQYxK60ozMQ7kNvwHM6vaM&_nc_oc=AdnK994Mw97MtQ0EzjBjVqGuiLtzjdwqjSkujOH5nOvrXv0up2lXAXYG8D68ck7fROKa0EqBCI7hHvU33q60lxFd&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=gL4pzFmasUCoQYkwqrioBg&oh=00_Afllrjz3K7BwMS3N7ZrbvFJ7s7UfOx-jjd7vkHDI0xV03w&oe=6934C95D",
    role: "",
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
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-009",
    name: "Trần Thị Thái Hà",
    nickname: "Hà",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/527986925_3912840735533900_8127659940529731438_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=m-dfuIfyN6EQ7kNvwHz3BtV&_nc_oc=Adk_p1Y2k3y34iSEw-nbXv8HXRkb1ArN1gcfvEEXhCUD84BnbQMbcxr0cZr4aIyb8pJnxVZPZOGtyP5MgF407yA0&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=fmAYgvX24X9x7I1SIeotbQ&oh=00_AflI5qcLQMExOmNf2WCcU4DpYG2Ue5rYnIIQC3JFvAw4Gw&oe=6934CF9A",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-010",
    name: "Trần Xuân Thành",
    nickname: "Thành Heo",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/45186808_1092750044222431_3249275430963773440_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=2UiszPeDymQQ7kNvwES5uW1&_nc_oc=Adk6Qs7fMqfJrb2uOsvbFAM_qkL_ZhBvpX-peLkI8CQiJwoD6IPw7ghKeT13Gh8tSHOAcQ2Y2-AQRFIVdbdVSHmN&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=Ow7cND5T3gDRy8q6Xehf_Q&oh=00_Afm9XWtBsygmlvkiv9fwi07LlmR9UhDoDnCMjKObpecZuQ&oe=69567169",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-011",
    name: "Phạm Thị Linh",
    nickname: "Linh",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/74888329_2570078939773916_4648610079904366592_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=fSexLKc3qmIQ7kNvwHkIxUP&_nc_oc=AdkgF_w4mnxE7SbExyfxeCvXRP9lORsNS0du-mW-4h8IAKPA_3STFP5m2-FSPj1Ew58ObiV69KwOn_xL04MKVYBe&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=gPkLUoUbIcf6kZItpUU8wg&oh=00_AfkkCEr3lIccGnBr78uQ5vhHMGD2Uyf9FYuqZNCWY2AI2g&oe=69568211",
    role: "",
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
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-014",
    name: "Võ Thị Kim Oanh",
    nickname: "Oanh",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/475791911_495340846936439_4419701785029688488_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PsUSI7MacPAQ7kNvwFI4TqY&_nc_oc=AdlkduqCOPYEzwuMXAqW3RD29MikuTEYrkLgZwu3nd0_-6G1uzA7ixBrLTkcRiIDCKMDzNVl_ohu6sB0Fsr5n6pV&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=BHt-x93XcqtChg5xhDyMIQ&oh=00_Afnub06pzunOHWcz6KjMJPWvJJadzbsfG3tY07vF9KbGBQ&oe=6934E3FF",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-015",
    name: "Nguyễn Quang Đạt",
    nickname: "Ben",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/491007764_3022053597956818_240798978542083177_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5d1kQClTT9MQ7kNvwG4cGNy&_nc_oc=AdmOKfGUcBBLBjibbUK69HDgRJ-kr_pre3kdxFHKnr9kJMyDLSGuUr1RYs8kjjS4qExqtFLNCpWZHISEo1rnEZ5X&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=wUbmNHpOkiMT072f9uUcug&oh=00_Afkc7KHXoMMAO7ta5l09E1_SnwsgOh8_c5zCq0BHpov1_Q&oe=6934E331",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-016",
    name: "Lê Văn Duy",
    nickname: "Duy",
    photo: "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/509426656_9929654580487169_5673977849734755451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4wU0Do6XxXMQ7kNvwGn29jF&_nc_oc=AdlZIo_LfuW_lB30ts07mI8DEnG4ZT5IF-SE4z4hOc9AM5ZZcmFPivBerdqJVnLa_alvb76W3VS6WZ9nhiZu6MVn&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=SfkgpavrUeeiDGIQALDNvQ&oh=00_Afkyv8YZejsPncNhrqwt4TtxhyWP_GlKtgRE2UmG2fW99g&oe=6934EBB2",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-017",
    name: "Mai Đức Huy",
    nickname: "Hụ Be",
    photo: "images/members/default-avatar.svg",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-018",
    name: "Nguyễn Xuân Khánh",
    nickname: "Kệ",
    photo: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/556302338_3198133417029874_1665301481801193711_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OWvy0ENq8KQQ7kNvwFl-FES&_nc_oc=AdlRoW2fMVuMBQrRgjyRv5riIUw-wD4zeeXssAF8-zlAHx3cZ2_E_kGO1-xNBmt5qcH8r8tyBoWOstne9AQGlOTM&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=9_hbWdsJo3QXmO8ExrdHvw&oh=00_Aflb7Fm2AJ9fgcts1yzSgr7GPSA-miqfETgo4Cc4rzOjaA&oe=6934CC3E",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-019",
    name: "Nguyễn Thị Thanh Thảo",
    nickname: "Thảo Chuột",
    photo: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/485910029_9143197962475817_6741619377461411286_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oXD8Gd727zcQ7kNvwHsKLXK&_nc_oc=AdnU2MQGNWvIT7CaltAYZNzqG7pGKbplHaHK2P-RHRQA-xnOejgMXlY6DVkkRTXLHwTJifW537tSQsafpmx6IXAc&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=Tw4uqAVuWzilUHW3e-u3sA&oh=00_Afl6PTbIGb645Nft9YdKd3wLx6oITn-02yOxknF7shoDYg&oe=6934DDFA",
    role: "",
    birthday: "",
    contact: { email: "", phone: "", facebook: "" }
  },
  {
    id: "member-020",
    name: "Nguyễn Hữu Vũ",
    nickname: "Vũ Dê",
    photo: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/554096748_2933116140228527_5230965230468608967_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=finQ7HjkZyEQ7kNvwEkJG6v&_nc_oc=AdmuHsSc42QpMsG_nuVAzx314hCSFUU3WqMQWOdN1OgKo2BjpoemNZSJilzjSy6RwNAfAXQNqXURqR2vOLN3SYsQ&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=wUmsh2SUdnuUIioo5j33tg&oh=00_AfkKi-s_VVk4TdlAV2fyEW5LIeb4Z73CtKawYLn1a73cKQ&oe=6934F22D",
    role: "",
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
  }
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

    this.modalBody.innerHTML = `
      <div class="modal__header">
        <img class="modal__image" src="${member.photo}" alt="Ảnh ${member.name}" onerror="this.src='images/members/default-avatar.svg'">
        <div class="modal__title-group">
          <h3 class="modal__name">${member.name}</h3>
          ${member.nickname ? `<p class="modal__nickname">Biệt danh: ${member.nickname}</p>` : ''}
          ${roleHtml}
        </div>
      </div>
      <div class="modal__details">
        ${member.birthday ? `<p><strong>Ngày sinh:</strong> ${member.birthday}</p>` : ''}
        ${contactHtml}
      </div>
    `;
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
  Gallery.init();
  Animations.init();
  Particles.init();
  CounterAnimation.init();
  console.log('Class Webpage initialized!');
});
