function DataForCarousel() {
  const catalog: {
    id: number;
    name: string;
    titleImage: string;
    genre: string;
    ageRestriction: string;
    image: string;
    discription: string;
  }[] = [
    {
      id: 1,
      name: "Palm Royale",
      titleImage:
        "https://is1-ssl.mzstatic.com/image/thumb/cZzCY0sU6ok8DdXspGvkLA/480x180.png",
      genre: "Drama",
      ageRestriction: "A",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/3c/69/ad/3c69ad1b-447f-ccf9-2bee-2b988d187bfc/cebd3ee0-eb9d-40b1-9382-48a1a332f146.png/1679x945sr.jpg",
      discription:
        "A woman fights for her spot in high society. Watch new episodes Wednesdays.",
    },
    {
      id: 2,
      name: "Maya Rodolpf Loot",
      titleImage:
        "https://is1-ssl.mzstatic.com/image/thumb/3ckGZ-c2a_OIvhMJ6MXNaA/480x180.png",
      genre: "Comedy",
      ageRestriction: "A",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/JNzNXNeuePMfnOF78HIQrA/3358x1889sr.jpg",
      discription:
        "Molly and her foundation are making major moves. Watch the Season 2 premiere.",
    },
    {
      id: 3,
      name: "Sugar",
      titleImage:
        "https://is1-ssl.mzstatic.com/image/thumb/Ens6pYdEw8o7VjRZrd--Ng/480x180.png",
      genre: "Drama",
      ageRestriction: "A",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/9VLn6zZ8PIpOo0cYgGcDdw/3358x1889sr.webp",
      discription: "Some men are a mystery. Watch the series premiere.",
    },
    {
      id: 4,
      name: "Argylle",
      titleImage:
        "https://is1-ssl.mzstatic.com/image/thumb/vhev3Vx830B2LDxgGtJxwg/480x180.png",
      genre: "Action",
      ageRestriction: "U/A 16+",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/kgtEpe7NtcOwEnCZaVOyXg/3358x1889sr.jpg",
      discription: "The star-studded spy comedy is coming Friday to Apple TV+.",
    },
    {
      id: 5,
      name: "The Reluctant Traveller With Eugene Levy",
      titleImage:
        "https://is1-ssl.mzstatic.com/image/thumb/bIUPruNoJG8AdLptGCtm8A/480x180.png",
      genre: "Travel",
      ageRestriction: "U/A 13+",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/8a/a0/6a/8aa06a19-c3b0-b59b-92c7-2e71bac193a1/6e60323a-b3f2-48eb-aade-3e79921ddd7e.png/3358x1889sr.jpg",
      discription:
        "Join Eugene on his next trip: a whirlwind tour of Europe. Watch new episodes Fridays.",
    },
    {
      id: 6,
      name: "Steve (Martin) A Documentary in 2 pieces",
      titleImage:
        "https://is1-ssl.mzstatic.com/image/thumb/EVBfnKib1UeNkUlNxq-Oxw/480x180.png",
      genre: "Documentary",
      ageRestriction: "A",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/dOyrEPIIfiAse6JSmqTHDg/3358x1889sr.jpg",
      discription:
        "Dive into the icon’s story from two points of view: then and now. Watch the new docuseries.",
    },
    {
      id: 7,
      name: "The Bloody Hundredth",
      titleImage:
        "https://is1-ssl.mzstatic.com/image/thumb/d1zgPOxO3KPXXEeWCQGOlQ/480x180.png",
      genre: "Documentary",
      ageRestriction: "U/A 13+",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/tVRYa4WYcHxa3gDLLOyeng/3358x1889sr.jpg",
      discription:
        "Meet the real-life airmen who inspired Masters of the Air. Watch the new film.",
    },
    {
      id: 8,
      name: "The Big Door Prize",
      titleImage:
        "https://is1-ssl.mzstatic.com/image/thumb/Kq5e_wCFmiiuoGS1Z72ZxA/480x180.png",
      genre: "Comedy",
      ageRestriction: "A",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/5f/88/aa/5f88aa65-51f4-3b38-8fdc-dfdc68a7af6f/82b38bfe-62ed-4200-84d9-60b466bfa54e.png/3358x1889sr.jpg",
      discription:
        "Morpho mania reaches a new level. Catch up before Season 2 premieres 24 April.",
    },
    {
      id: 9,
      name: "The Completely Made-Up Adventure Of Dick Turpin",
      titleImage:
        "https://is1-ssl.mzstatic.com/image/thumb/IpgVWY1b4nRF8MMmRcIoig/480x180.png",
      genre: "Comedy",
      ageRestriction: "U/A 16+",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/06/c9/c9/06c9c9f2-4fee-4f54-4450-560edccf1b6e/698b0ffd-b392-4323-9233-4a37fbcf159f.png/3358x1889sr.jpg",
      discription:
        "A highwayman embarks on thrillingly absurd escapades. Watch the season finale.",
    },
  ];
  return catalog;
}
export default DataForCarousel;
