import { createSlice } from '@reduxjs/toolkit'
// need to figure out how to feed this from my DB!! i have axios call all sorted just where to put it so data can flow>>

const initialState = [{
  "_id": "637be68c978d378ac4f2b6b0",
  "artistName": "Test",
  "artistId":"1000",
  "artistPrefered_name": "Testypants",
  "artistEmail": "testy@xyxz.com",
  "artistCraft": "Making Tests",
  "artistIntro": "Hi im testy i like to break your builds",
  "artistBio": "This is testy he testst things",
  "artistSkills": [
      "testing",
      "pushing buttons",
      "breaking things"
  ],
  "artistHeadshot": "./images/Headshots/profile_cultist_daymode.png",
  "artistWebsite":"https://ravenmoore-profile.netlify.app/"
},
{
  "_id": "637bea6f978d378ac4f2b6b7",
  "artistName": "Matthew Ravenmoore",
  "artistId":"1001",
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
  "artistHeadshot": "./images/Headshots/profile_cultist_daymode.png",
  "artistWebsite":"https://ravenmoore-profile.netlify.app/"
},
{
  "_id": "637eb42af29fa9a2cccd75cf",
  "artistId":"1002",
  "artistName": "Dawn Gallows",
  "artistPrefered_name": "Dawn",
  "artistEmail": "dawn@ravenmoorevalley.com",
  "artistCraft": "Herbs, Oils, Jewlery",
  "artistIntro": "Dawn is adept in healing and jewlery",
  "artistBio": "Long for bio here for dawn",
  "artistSkills": [
      "Herbal ifusions",
      "Oils and balms",
      "jewlery making"
  ],
  "artistHeadshot": "./images/Headshots/profile_cultist_daymode.png",
  "artistWebsite":"https://ravenmoore-profile.netlify.app/"
  
},
{
  "_id": "637eb438f29fa9a2cccd75d1",
  "artistName": "Jo Hill",
  "artistId":"1003",
  "artistPrefered_name": "Trog",
  "artistEmail": "TrogtheGiantslayer@gmail.com",
  "artistCraft": "Chainmaile / Fabric craft",
  "artistIntro": "Rings and needles if it uses those i can make it!",
  "artistBio": "Trog is a skilled master of chainmaile and needle craft having spend many decades bending rings and stabbign his fingers",
  "artistSkills": [
      "embroydery",
      "Large seaming",
      "costume stitching",
      "chainmaile"
  ],
  "artistHeadshot": "./images/Headshots/profile_cultist_daymode.png",
  "artistWebsite":"https://ravenmoore-profile.netlify.app/"
}
]

export const artistSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
// export const { details } = artistSlice.actions



export default artistSlice.reducer