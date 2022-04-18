import { joinUrl } from "@amcharts/amcharts4/.internal/core/utils/Utils";
import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [liverpoolTeam, setLiverpoolTeam] = useState([
    {
      teamId: 0,
      id: 0,
      name: "Alisson Becker",
      number: 1,
      isSelected: true,
      position: "Goalkeeper",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125131_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 10,
      midfield: 20,
      defense: 50,
    },

    {
      teamId: 0,
      id: 3,
      name: "Virgil Van Dijk",
      number: 4,
      isSelected: true,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125163_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 40,
      midfield: 60,
      defense: 100,
    },
    {
      teamId: 0,
      id: 4,
      name: "Ibrahima Konate",
      number: 5,
      isSelected: true,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125140_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 40,
      midfield: 50,
      defense: 80,
    },

    {
      teamId: 0,
      id: 6,
      name: "Andy Robertson",
      number: 26,
      isSelected: true,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/27/thumb_126368_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 70,
      midfield: 50,
      defense: 85,
    },

    {
      teamId: 0,
      id: 10,
      name: " Alexander-Arnold",
      number: 66,
      isSelected: true,
      position: "Defender",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125156_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 80,
      midfield: 50,
      defense: 85,
    },

    {
      teamId: 0,
      id: 13,
      name: "Jordan Hnderdon",
      number: 14,
      isSelected: true,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125161_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 70,
      midfield: 90,
      defense: 65,
    },

    {
      teamId: 0,
      id: 15,
      name: "Thiago Alcantara",
      number: 6,
      isSelected: true,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125155_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 85,
      midfield: 80,
      defense: 75,
    },
    {
      teamId: 0,
      id: 16,
      name: "Naby Keita",
      number: 8,
      isSelected: true,
      position: "Midfielder",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125162_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 60,
      midfield: 87,
      defense: 75,
    },

    {
      teamId: 0,
      id: 19,
      name: "Mohamed Salah",
      number: 11,
      isSelected: true,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125158_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 95,
      midfield: 60,
      defense: 66,
    },
    {
      teamId: 0,
      id: 20,
      name: "Diogo Jota",
      number: 20,
      isSelected: true,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125136_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 87,
      midfield: 70,
      defense: 65,
    },

    {
      teamId: 0,
      id: 22,
      name: "Sadio Mane",
      number: 10,
      isSelected: true,
      position: "Forward",
      img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125153_misc_general_500.jpeg",
      team: "Liverpool",
      attack: 90,
      midfield: 70,
      defense: 63,
    },

    {
      teamId: 1,
      id: 26,
      name: " tibo courtois",
      number: 1,
      isSelected: true,
      position: "Goalkeeper",
      img: "https://www.realmadrid.com/img/vertical_220px/courtois_380x501_20210826062816.jpg",
      team: "Real Madrid",
      attack: 10,
      midfield: 20,
      defense: 65,
    },

    {
      teamId: 1,
      id: 28,
      name: "Dani Karvajal",
      number: 2,
      isSelected: true,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/carvajal_380x501_20210826062807.jpg",
      team: "Real Madrid",
      attack: 70,
      midfield: 40,
      defense: 85,
    },
    {
      teamId: 1,
      id: 29,
      name: "Militao",
      number: 67,
      isSelected: true,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/militao_380x501_20210826062825.jpg",
      team: "Real Madrid",
      attack: 40,
      midfield: 50,
      defense: 83,
    },
    {
      teamId: 1,
      id: 30,
      name: "David Alaba ",
      number: 4,
      isSelected: true,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/alaba_380x501_20210826062826.jpg",
      team: "Real Madrid",
      attack: 50,
      midfield: 40,
      defense: 86,
    },

    {
      teamId: 1,
      id: 32,
      name: "Marcelo",
      number: 12,
      isSelected: true,
      position: "Defender",
      img: "https://www.realmadrid.com/img/vertical_220px/marcelo_380x501_20210826062808.jpg",
      team: "Real Madrid",
      attack: 70,
      midfield: 40,
      defense: 75,
    },

    {
      teamId: 1,
      id: 34,
      name: " Toni Kroos",
      number: 8,
      isSelected: true,
      position: "Midfielder",
      img: "https://www.realmadrid.com/img/vertical_220px/kroos_380x501_20210826062809.jpg",
      team: "Real Madrid",
      attack: 70,
      midfield: 80,
      defense: 55,
    },
    {
      teamId: 1,
      id: 35,
      name: " Loca Modric",
      number: 10,
      isSelected: true,
      position: "Midfielder",
      img: "https://www.realmadrid.com/img/vertical_220px/modric_380x501_20210826062810.jpg",
      team: "Real Madrid",
      attack: 80,
      midfield: 90,
      defense: 75,
    },
    {
      teamId: 1,
      id: 36,
      name: "Casemiro ",
      number: 14,
      isSelected: true,
      position: "Midfielder",
      img: "https://www.realmadrid.com/img/vertical_220px/casemiro_380x501_20210826062810.jpg",
      team: "Real Madrid",
      attack: 60,
      midfield: 90,
      defense: 75,
    },

    {
      teamId: 1,
      id: 41,
      name: " Karim Benzema",
      number: 9,
      isSelected: true,
      position: "Forward",
      img: "https://www.realmadrid.com/img/vertical_220px/benzema_380x501_20210826062812.jpg",
      team: "Real Madrid",
      attack: 90,
      midfield: 60,
      defense: 65,
    },
    {
      teamId: 1,
      id: 42,
      name: " Asensio ",
      number: 11,
      isSelected: true,
      position: "Forward",
      img: "https://www.realmadrid.com/img/vertical_220px/asensio_he19417_380x501_20210910082737.jpg",
      team: "Real Madrid",
      attack: 80,
      midfield: 40,
      defense: 75,
    },
    {
      teamId: 1,
      id: 43,
      name: "  Vini JR",
      number: 20,
      isSelected: true,
      position: "Forward",
      img: "https://www.realmadrid.com/img/vertical_220px/vinijr_380x501_20210826062815.jpg",
      team: "Real Madrid",
      attack: 89,
      midfield: 50,
      defense: 55,
    },
  ]);

  const [couch, setCouch] = useState([
    {
      id: 0,
      national: "Germany",
      team: "Liverpool",
      name: "Jürgen Cloop",
      isSelected: true,
      experience: 80,
      leaderShipSkills: 90,
      couchHistory: 90,
      couchImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg/440px-Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg",
    },
    {
      id: 1,
      national: "Italian",
      team: "Real Madrid",
      name: "Carlo Ancelotti",
      experience: 90,
      leaderShipSkills: 85,
      couchHistory: 80,
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
      players: [
        {
          id: 0,
          name: "Alisson Becker",
          number: 1,
          position: "Goalkeeper",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125131_misc_general_500.jpeg",
          team: "Liverpool",
          isSelected: true,
          attack: 10,
          midfield: 20,
          defense: 50,
        },
        {
          teamId: 0,
          id: 3,
          name: "Virgil Van Dijk",
          number: 4,
          position: "Defender",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125163_misc_general_500.jpeg",
          team: "Liverpool",
          isSelected: true,
          attack: 10,
          midfield: 20,
          defense: 50,
        },
        {
          teamId: 0,
          id: 4,
          name: "Ibrahima Konate",
          number: 5,
          position: "Defender",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125140_misc_general_500.jpeg",
          team: "Liverpool",
          isSelected: true,
        },
        {
          teamId: 0,
          id: 6,
          name: "Andy Robertson",
          number: 26,
          position: "Defender",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/27/thumb_126368_misc_general_500.jpeg",
          team: "Liverpool",
        },

        {
          teamId: 0,
          id: 10,
          name: " Alexander-Arnold",
          number: 66,
          position: "Defender",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125156_misc_general_500.jpeg",
          team: "Liverpool",
        },

        {
          teamId: 0,
          id: 13,
          name: "Jordan Hnderdon",
          number: 14,
          position: "Midfielder",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125161_misc_general_500.jpeg",
          team: "Liverpool",
        },

        {
          teamId: 0,
          id: 15,
          name: "Thiago Alcantara",
          number: 6,
          position: "Midfielder",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125155_misc_general_500.jpeg",
          team: "Liverpool",
        },
        {
          teamId: 0,
          id: 16,
          name: "Naby Keita",
          number: 8,
          position: "Midfielder",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125162_misc_general_500.jpeg",
          team: "Liverpool",
        },

        {
          teamId: 0,
          id: 19,
          name: "Mohamed Salah",
          number: 11,
          position: "Forward",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125158_misc_general_500.jpeg",
          team: "Liverpool",
        },
        {
          teamId: 0,
          id: 20,
          name: "Diogo Jota",
          number: 20,
          position: "Forward",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125136_misc_general_500.jpeg",
          team: "Liverpool",
        },

        {
          teamId: 0,
          id: 22,
          name: "Sadio Mane",
          number: 10,
          position: "Forward",
          img: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/misc/0002/26/thumb_125153_misc_general_500.jpeg",
          team: "Liverpool",
        },
      ],

      teamCountry: "England",
      teamStaidum: "Anfield",
      Founded: 1892,
      teamType: "Club Team",
      attack: 90,
      midfield: 80,
      defense: 85,
      all: "All",
    },
    {
      teamName: "Real Madrid",
      id: 1,
      logoUrl:
        "https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo_mobile.svg",
      players: [
        {
          teamId: 1,
          id: 26,
          name: " tibo courtois",
          number: 1,
          position: "Goalkeeper",
          img: "https://www.realmadrid.com/img/vertical_220px/courtois_380x501_20210826062816.jpg",
          team: "Real Madrid",
        },

        {
          teamId: 1,
          id: 28,
          name: "Dani Karvajal",
          number: 2,
          position: "Defender",
          img: "https://www.realmadrid.com/img/vertical_220px/carvajal_380x501_20210826062807.jpg",
          team: "Real Madrid",
        },
        {
          teamId: 1,
          id: 29,
          name: "Militao",
          number: 67,
          position: "Defender",
          img: "https://www.realmadrid.com/img/vertical_220px/militao_380x501_20210826062825.jpg",
          team: "Real Madrid",
        },
        {
          teamId: 1,
          id: 30,
          name: "David Alaba ",
          number: 4,
          position: "Defender",
          img: "https://www.realmadrid.com/img/vertical_220px/alaba_380x501_20210826062826.jpg",
          team: "Real Madrid",
        },

        {
          teamId: 1,
          id: 32,
          name: "Marcelo",
          number: 12,
          position: "Defender",
          img: "https://www.realmadrid.com/img/vertical_220px/marcelo_380x501_20210826062808.jpg",
          team: "Real Madrid",
        },

        {
          teamId: 1,
          id: 34,
          name: " Toni Kroos",
          number: 8,
          position: "Midfielder",
          img: "https://www.realmadrid.com/img/vertical_220px/kroos_380x501_20210826062809.jpg",
          team: "Real Madrid",
        },
        {
          teamId: 1,
          id: 35,
          name: " Loca Modric",
          number: 10,
          position: "Midfielder",
          img: "https://www.realmadrid.com/img/vertical_220px/modric_380x501_20210826062810.jpg",
          team: "Real Madrid",
        },
        {
          teamId: 1,
          id: 36,
          name: "Casemiro ",
          number: 14,
          position: "Midfielder",
          img: "https://www.realmadrid.com/img/vertical_220px/casemiro_380x501_20210826062810.jpg",
          team: "Real Madrid",
        },

        {
          teamId: 1,
          id: 41,
          name: " Karim Benzema",
          number: 9,
          position: "Forward",
          img: "https://www.realmadrid.com/img/vertical_220px/benzema_380x501_20210826062812.jpg",
          team: "Real Madrid",
        },
        {
          teamId: 1,
          id: 42,
          name: " Asensio ",
          number: 11,
          position: "Forward",
          img: "https://www.realmadrid.com/img/vertical_220px/asensio_he19417_380x501_20210910082737.jpg",
          team: "Real Madrid",
        },
        {
          teamId: 1,
          id: 43,
          name: "  Vini JR",
          number: 20,
          position: "Forward",
          img: "https://www.realmadrid.com/img/vertical_220px/vinijr_380x501_20210826062815.jpg",
          team: "Real Madrid",
        },
      ],
      teamCountry: "Spain",
      teamStaidum: "Santiago Bernabéu ",
      Founded: 1902,
      teamType: "Club Team",
      attack: 90,
      midfield: 90,
      defense: 80,
      all: "All",
    },
  ]);

  const [saveChangeTeam, setSaveChangeTeam] = useState();
  const [saveChangePlayer, setSaveChangePlayer] = useState();
  const [saveChangeCouch, setSaveChangeCouch] = useState();
  const [chosenPlayer, setChosenPlayer] = useState([]);
  const [updateTeam, setUpdateTeam] = useState([]);
  const [chosenTeam, setChosenTeam] = useState();
  const [playerCard, setPlayerCard] = useState();
  const [currentPlayer, setCurrentPlayer] = useState();

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

  const findPlayerByTeamId = (id) => {
    const p = liverpoolTeam.findIndex((item) => item.id == id);
    if (p === -1) return null;
    return liverpoolTeam[p];
  };

  const findCouchById = (id) => {
    const p = couch.findIndex((item) => item.id == id);
    if (p === -1) return null;
    return couch[p];
  };

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
        findCouchById,
        chosenTeam,
        setChosenTeam,
        findPlayerByTeamId,
        playerCard,
        setPlayerCard,
        currentPlayer,
        setCurrentPlayer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextProvider };
