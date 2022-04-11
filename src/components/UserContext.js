import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [liverpoolTeam, setLiverpoolTeam] = useState([
    {
      id: 0,
      name: "Alisson Becker",
      number: 1,
      position: "Goalkeeper",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125131_misc_general_500.jpeg",
      team: "Liverpool",
      isSelected: true,
    },
    {
      id: 1,
      name: "Adrin",
      number: 13,
      position: "Goalkeeper",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125139_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 2,
      name: "Loris Karius",
      number: 22,
      position: "Goalkeeper",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125146_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 3,
      name: "Virgil Van Dijk",
      number: 4,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125163_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 4,
      name: "Ibrahima Konate",
      number: 5,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125140_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 5,
      name: "Joe Gomez",
      number: 12,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125142_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 6,
      name: "Andy Robertson",
      number: 26,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/27/thumb_126368_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 7,
      name: "Rhys Williams",
      number: 46,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125151_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 8,
      name: "Kostas Tsimikas",
      number: 21,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125145_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 9,
      name: "Joel Matip",
      number: 32,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125143_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 10,
      name: " Alexander-Arnold",
      number: 66,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125156_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 11,
      name: "Fabinho",
      number: 3,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125164_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 12,
      name: "James Milner",
      number: 7,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125141_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 13,
      name: "Jordan Hnderdon",
      number: 14,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125161_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 14,
      name: "Curtis Jones",
      number: 17,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125135_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 15,
      name: "Thiago Alcantara",
      number: 6,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125155_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 16,
      name: "Naby Keita",
      number: 8,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125162_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 17,
      name: "Alex Oxlade-Chamberlain",
      number: 15,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125130_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 18,
      name: "Roberto Firmino",
      number: 9,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125152_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 19,
      name: "Mohamed Salah",
      number: 11,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125158_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 20,
      name: "Diogo Jota",
      number: 20,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125136_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 21,
      name: "Divock Origi",
      number: 27,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125137_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 22,
      name: "Sadio Mane",
      number: 10,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125153_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 23,
      name: "Takumi Minamino",
      number: 18,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125154_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 24,
      name: "Luis Diaz",
      number: 23,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/31/thumb_130448_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 25,
      name: "Harvey Elliott",
      number: 67,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125147_misc_general_500.jpeg",
      team: "Liverpool",
    },
    {
      id: 26,
      name: " tibo courtois",
      number: 1,
      position: "Goalkeeper",
      img: "https://www.realmadrid.com/img/vertical_220px/courtois_380x501_20210826062816.jpg",
      team: "Real Madrid",
    },
    {
      id: 27,
      name: "Lunin",
      number: 13,
      position: "Goalkeeper",
      img: "https://www.realmadrid.com/img/vertical_220px/lunin_380x501_20210826062826.jpg",
      team: "Real Madrid",
    },
    {
      id: 28,
      name: "Dani Karvajal",
      number: 2,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/carvajal_380x501_20210826062807.jpg",
      team: "Real Madrid",
    },
    {
      id: 29,
      name: "Militao",
      number: 67,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/militao_380x501_20210826062825.jpg",
      team: "Real Madrid",
    },
    {
      id: 30,
      name: "David Alaba ",
      number: 4,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/alaba_380x501_20210826062826.jpg",
      team: "Real Madrid",
    },
    {
      id: 31,
      name: "Nacho ",
      number: 6,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/nacho_380x501_20210826062808.jpg",
      team: "Real Madrid",
    },
    {
      id: 32,
      name: "Marcelo",
      number: 12,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/marcelo_380x501_20210826062808.jpg",
      team: "Real Madrid",
    },
    {
      id: 33,
      name: "Mendi ",
      number: 23,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/mendy_he19491_380x501_20210910082744.jpg",
      team: "Real Madrid",
    },
    {
      id: 34,
      name: " Toni Kroos",
      number: 8,
      position: "Midfielder",
      img: "https://www.realmadrid.com/img/vertical_220px/kroos_380x501_20210826062809.jpg",
      team: "Real Madrid",
    },
    {
      id: 35,
      name: " Loca Modric",
      number: 10,
      position: "Midfielder",
      img: "https://www.realmadrid.com/img/vertical_220px/modric_380x501_20210826062810.jpg",
      team: "Real Madrid",
    },
    {
      id: 36,
      name: "Casemiro ",
      number: 14,
      position: "Midfielder",
      img: "https://www.realmadrid.com/img/vertical_220px/casemiro_380x501_20210826062810.jpg",
      team: "Real Madrid",
    },
    {
      id: 37,
      name: "Valverde ",
      number: 15,
      position: "Midfielder",
      img: "https://www.realmadrid.com/img/vertical_220px/valverde_380x501_20210826062806.jpg",
      team: "Real Madrid",
    },
    {
      id: 38,
      name: " Lucas",
      number: 17,
      position: "Midfielder",
      img: "https://www.realmadrid.com/img/vertical_220px/lucasv_380x501_20210826062813.jpg",
      team: "Real Madrid",
    },
    {
      id: 39,
      name: "ISCO ",
      number: 22,
      position: "Midfielder",
      img: "https://www.realmadrid.com/img/vertical_220px/isco_380x501_20210826062811.jpg",
      team: "Real Madrid",
    },
    {
      id: 40,
      name: " Hazard",
      number: 7,
      position: "Forward",
      img: "https://www.realmadrid.com/img/vertical_220px/hazard_380x501_20210826062817.jpg",
      team: "Real Madrid",
    },
    {
      id: 41,
      name: " Karim Benzema",
      number: 9,
      position: "Forward",
      img: "https://www.realmadrid.com/img/vertical_220px/benzema_380x501_20210826062812.jpg",
      team: "Real Madrid",
    },
    {
      id: 42,
      name: " Asensio ",
      number: 11,
      position: "Forward",
      img: "https://www.realmadrid.com/img/vertical_220px/asensio_he19417_380x501_20210910082737.jpg",
      team: "Real Madrid",
    },
    {
      id: 43,
      name: "  Vini JR",
      number: 20,
      position: "Forward",
      img: "https://www.realmadrid.com/img/vertical_220px/vinijr_380x501_20210826062815.jpg",
      team: "Real Madrid",
    },
    {
      id: 44,
      name: " Bale ",
      number: 18,
      position: "Forward",
      img: "https://www.realmadrid.com/img/vertical_220px/bale_380x501_20210826062812.jpg",
      team: "Real Madrid",
    },
  ]);
  const [couch, setCouch] = useState([
    {
      id: 0,
      national: "Germany",
      team: "Liverpool",
      name: "Jürgen Cloop",
      couchImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg/440px-Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg",
    },
    {
      id: 1,
      national: "Italian",
      team: "Real Madrid",
      name: "Carlo Ancelotti",
      couchImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Carlo_Ancelotti_2016_%28cropped%29.jpg/440px-Carlo_Ancelotti_2016_%28cropped%29.jpg",
    },
  ]);
  const [teams, setTeams] = useState([
    {
      teamName: "Liverpool",
      id: 0,
      logoUrl:
        "https://d3j2s6hdd6a7rg.cloudfront.net/v2/JE-697/lfc/images/logo.png",
      players: { id: 0, name: "Alison Becker", position: "goalkeeper" },
      teamCountry: "England",
      teamStaidum: "Anfield",
      Founded: 1892,
      teamType: "Club Team",
      attack: 95,
      midfield: 80,
      defense: 85,
    },
    {
      teamName: "Real Madrid",
      id: 1,
      logoUrl:
        "https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo_mobile.svg",
      teamCountry: "Spain",
      teamStaidum: "Santiago Bernabéu ",
      Founded: 1902,
      teamType: "Club Team",
      attack: 90,
      midfield: 90,
      defense: 80,
    },
  ]);

  const [saveChangeTeam, setSaveChangeTeam] = useState();
  const [saveChangePlayer, setSaveChangePlayer] = useState();
  const [saveChangeCouch, setSaveChangeCouch] = useState()
  const [chosenPlayer, setChosenPlayer] = useState([]);
  const [updateTeam, setUpdateTeam] = useState([]);

  const findTeamById = (id) => {
    const p = teams.findIndex((item) => item.id == id);
    if (p === -1) return null;
    return teams[p];
  };

  const findPlayerById = (id) => {
    const p = liverpoolTeam.findIndex((item) => item.id == id);
    if (p === -1) return null;
    return liverpoolTeam[p];
  };

  const findCouchById = (id) => {
    const p = couch.findIndex(item => item.id == id)
    if(p === -1) return null
    return couch[p]
  }

  return (
    <UserContext.Provider
      value={{
        liverpoolTeam,
        setLiverpoolTeam,
        teams,
        setTeams,
        findTeamById,
        saveChangeTeam,
        setSaveChangeTeam,
        chosenPlayer,
        setChosenPlayer,
        findPlayerById,
        saveChangePlayer,
        setSaveChangePlayer,
        updateTeam,
        setUpdateTeam,
        couch,
        setCouch,
        saveChangeCouch,
         setSaveChangeCouch,
         findCouchById
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextProvider };
