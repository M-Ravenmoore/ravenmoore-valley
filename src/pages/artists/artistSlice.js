import { createSlice } from '@reduxjs/toolkit'
// need to figure out how to feed this from my DB!! i have axios call all sorted just where to put it so data can flow>>

const initialState = [
  {"artistName": "Matthew Ravenmoore",
  "artistPrefered_name": "Dusk",
  "artistEmail": "dusk@ravenmoorevalley.com",
  "artistCraft": "Design, general Maker",
  "artistIntro": "Specializing in metal work, Muninn offers commisonable services that include: Metal craft, Wood Craft, Leather Craft, Resin, Finishing work and more...",
  "artistBio": "This is testy he testst things",
  "artistSkills": [
      "laser",
      "3d printing",
      "welding"
  ],
  "artistHeadshot": "./images/Headshots/matt-headshot.png",},
  {"artistName":"Dawn Gallows",
    "artistPrefered_name":"Dawn",
    "artistEmail":"dawn@ravenmoorevalley.com",
    "artistCraft":"Herbs, Oils, Jewlery",
    "artistBio":"Long for bio here for dawn",
    "artistIntro":"Dawn is adept in healing and jewlery",
    "artistSkills":["Herbal ifusions","Oils and balms","jewlery making"],
    "artistHeadshot": "./images/Headshots/profile_cultist_daymode.png",},
  
  {"artistName":"Jo Hill",
    "artistPrefered_name":"Trog",
    "artistEmail":"TrogtheGiantslayer@gmail.com",
    "artistCraft":"Chainmaile / Fabric craft",
    "artistBio":"Trog is a skilled master of chainmaile and needle craft having spend many decades bending rings and stabbign his fingers",
    "artistIntro":"Rings and needles if it uses those i can make it!",
    "artistSkills":["embroydery","Large seaming","costume stitching","chainmaile"],
    "artistHeadshot": "./images/Headshots/profile_cultist_daymode.png"}

]

export const artistSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
// export const { details } = artistSlice.actions



export default artistSlice.reducer