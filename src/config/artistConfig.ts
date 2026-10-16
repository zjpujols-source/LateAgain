import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // ============================================================
  // ARTIST INFORMATION
  // ============================================================
  artistName: "Late Again",
  tagline: "Official Artist Website",
  genre: "Indie Rock / Alternative",
  bio: "Late Again is an indie alternative rock band delivering hook-heavy anthems, emotive songwriting, and driving energetic melodies.",

  // ============================================================
  // HERO ASSETS
  // ============================================================
  heroVideoUrl: "/hero-loop.webp",
  heroImage: "/hero-poster.jpg",
  profileImage: "/profile.jpg",

  // ============================================================
  // DESIGN
  // ============================================================
  accentColor: "#ffffff",
  theme: "dark",

  // ============================================================
  // SOCIALS (SoundCloud omitted from footer per request)
  // ============================================================
  socials: [
    {
      id: "spotify",
      platform: "spotify",
      url: "https://open.spotify.com/artist/7qnOGa8Zkp73wNWyXJauEf",
      label: "Spotify",
      isStreaming: true
    },
    {
      id: "apple-music",
      platform: "apple-music",
      url: "https://music.apple.com/us/artist/late-again/1734136733",
      label: "Apple Music",
      isStreaming: true
    },
    {
      id: "youtube",
      platform: "youtube",
      url: "https://www.youtube.com/channel/UCaKjq9nHqP34juNc508AvGg",
      label: "YouTube"
    },
    {
      id: "instagram",
      platform: "instagram",
      url: "https://www.instagram.com/lateagainsta",
      label: "Instagram"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      url: "https://www.tiktok.com/@reallylateagain",
      label: "TikTok"
    }
  ],

  // ============================================================
  // SITE TABS
  // ============================================================
  tabs: {
    music: {
      enabled: true,
      title: "MUSIC",
      releases: [
        {
          id: "if-you-have-a-bridge-im-buying",
          title: "If You Have A Bridge (I'm Buying)",
          type: "single",
          coverArt: "/covers/if-you-have-a-bridge-im-buying.jpg",
          spotifyUrl: "https://open.spotify.com/track/1F4GdW3wF4IfTzd0ac82jK",
          appleMusicUrl: "https://music.apple.com/us/album/if-you-have-a-bridge-im-buying/6767303769?i=6767303770",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/if-you-have-a-bridge-im-buying",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=LaYkCmC0JTo",
          deezerUrl: "https://www.deezer.com/track/4008100021",
          youtubeUrl: "https://www.youtube.com/watch?v=LaYkCmC0JTo"
        },
        {
          id: "to-stop-the-time",
          title: "To Stop The Time",
          type: "single",
          coverArt: "/covers/to-stop-the-time.jpg",
          spotifyUrl: "https://open.spotify.com/track/3ajeDs9lkluKBvks60Zp8N",
          appleMusicUrl: "https://music.apple.com/us/album/to-stop-the-time/6766678626?i=6766678627",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/to-stop-the-time",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=BOpG-FxXqKA",
          deezerUrl: "https://www.deezer.com/track/4003861241",
          youtubeUrl: "https://www.youtube.com/watch?v=BOpG-FxXqKA"
        },
        {
          id: "crazy-or-stupid",
          title: "Crazy or Stupid",
          type: "single",
          coverArt: "/covers/crazy-or-stupid.jpg",
          spotifyUrl: "https://open.spotify.com/track/3wH6Zp1x8TCFgyYXIHFrLs",
          appleMusicUrl: "https://music.apple.com/us/album/crazy-or-stupid/6767328835?i=6767328836",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/late-again-crazy-or-stupid",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=dMNOd0M2heI",
          deezerUrl: "https://www.deezer.com/track/4008178371",
          youtubeUrl: "https://www.youtube.com/watch?v=dMNOd0M2heI"
        },
        {
          id: "all-my-exes-moved-to-the-countryside",
          title: "All My Exes Moved to the Countryside",
          type: "single",
          coverArt: "/covers/all-my-exes-moved-to-the-countryside.jpg",
          spotifyUrl: "https://open.spotify.com/track/54SglP0bikKwX2UVXfnQal",
          appleMusicUrl: "https://music.apple.com/us/album/all-my-exes-moved-to-the-countryside/6780967925?i=6780967926",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/all-my-exes-moved-to-the-countryside",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=GA61wabffEQ",
          deezerUrl: "https://www.deezer.com/track/4091376231",
          youtubeUrl: "https://www.youtube.com/watch?v=GA61wabffEQ"
        },
        {
          id: "chickn-tenders",
          title: "Chick'n Tenders",
          type: "single",
          coverArt: "/covers/chickn-tenders.jpg",
          spotifyUrl: "https://open.spotify.com/track/1LqR65Z05Y3ZpGfL48mrhK",
          appleMusicUrl: "https://music.apple.com/us/album/chickn-tenders/1825990152?i=1825990153",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/chickn-tenders",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=-Nn7us5JtEQ",
          deezerUrl: "https://www.deezer.com/track/3452186891",
          youtubeUrl: "https://www.youtube.com/watch?v=-Nn7us5JtEQ"
        },
        {
          id: "easy-on-myself",
          title: "Easy On Myself",
          type: "single",
          coverArt: "/covers/easy-on-myself.jpg",
          spotifyUrl: "https://open.spotify.com/track/5sxE1s2XQIE2nKs4PFRrBW",
          appleMusicUrl: "https://music.apple.com/us/album/easy-on-myself/1824673551?i=1824673552",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/easy-on-myself",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=MrhaR5w85vs",
          deezerUrl: "https://www.deezer.com/track/3452186941",
          youtubeUrl: "https://www.youtube.com/watch?v=MrhaR5w85vs"
        },
        {
          id: "ick",
          title: "Ick?",
          type: "single",
          coverArt: "/covers/ick.jpg",
          spotifyUrl: "https://open.spotify.com/track/2ZqH5ZpB68c34L7m7m4X1n",
          appleMusicUrl: "https://music.apple.com/us/album/ick/1798867451?i=1798867452",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/ick",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=ugZ3X3rzjco",
          deezerUrl: "https://www.deezer.com/track/3452186911",
          youtubeUrl: "https://www.youtube.com/watch?v=ugZ3X3rzjco"
        },
        {
          id: "nothing-by-it",
          title: "Nothing By It (feat. Ella Walton)",
          type: "single",
          coverArt: "/covers/nothing-by-it.jpg",
          spotifyUrl: "https://open.spotify.com/track/7Kn831p5It0wEUalPEfJI6",
          appleMusicUrl: "https://music.apple.com/us/album/nothing-by-it/1825990152?i=1825990157",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/nothing-by-it",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=bULsyqfrOIg",
          deezerUrl: "https://www.deezer.com/track/3452186931",
          youtubeUrl: "https://www.youtube.com/watch?v=bULsyqfrOIg"
        },
        {
          id: "sunrise-sunset",
          title: "Sunrise/Sunset",
          type: "single",
          coverArt: "/covers/sunrise-sunset.jpg",
          spotifyUrl: "https://open.spotify.com/track/7pBYmrNCuTTiDyQxCTYm6W",
          appleMusicUrl: "https://music.apple.com/us/album/sunrise-sunset/1806536850?i=1806536851",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/sunrisesunset",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=JpMGS3M7PGU",
          deezerUrl: "https://www.deezer.com/track/4317738612",
          youtubeUrl: "https://www.youtube.com/watch?v=JpMGS3M7PGU"
        },
        {
          id: "everything-nothing",
          title: "Everything, Nothing",
          type: "single",
          coverArt: "/covers/everything-nothing.jpg",
          spotifyUrl: "https://open.spotify.com/track/6wG365pzhHOUDAog8lVDWa",
          appleMusicUrl: "https://music.apple.com/us/album/everything-nothing/6771549065?i=6771549066",
          soundcloudUrl: "https://soundcloud.com/reallylateagain/everything-nothing",
          youtubeMusicUrl: "https://music.youtube.com/watch?v=8My0DvkHdPI",
          deezerUrl: "https://www.deezer.com/track/4034799481",
          youtubeUrl: "https://www.youtube.com/watch?v=8My0DvkHdPI"
        }
      ]
    },

    videos: {
      enabled: true,
      title: "VIDEOS",
      items: [
        {
          id: "to-stop-the-time",
          title: "To Stop the Time",
          youtubeId: "BOpG-FxXqKA"
        },
        {
          id: "chickn-tenders",
          title: "Chick'n Tenders",
          youtubeId: "-Nn7us5JtEQ"
        },
        {
          id: "easy-on-myself",
          title: "Easy On Myself",
          youtubeId: "MrhaR5w85vs"
        },
        {
          id: "ick",
          title: "Ick?",
          youtubeId: "ugZ3X3rzjco"
        },
        {
          id: "if-you-have-a-bridge-im-buying",
          title: "If You Have A Bridge (I'm Buying)",
          youtubeId: "LaYkCmC0JTo"
        }
      ]
    },

    live: {
      enabled: true,
      title: "LIVE",
      status: "active",
      flyerUrl: "/tour-flyer.jpg",
      tourDates: [
        {
          id: "gold-diggers-los-angeles-2026-10-28",
          date: "OCTOBER 28, 2026",
          doors: "7:00 PM",
          city: "Los Angeles, CA",
          venue: "Gold-Diggers",
          address: "5632 Santa Monica Blvd, Los Angeles, CA 90038",
          ticketUrl: "https://dice.fm/event/xe3are-vlsf-kcrw-presents-late-again-w-special-guests-jiwon-mirror-ball-veronicavon-28th-oct-gold-diggers-los-angeles-tickets",
          price: "$19.57",
          status: "on_sale",
          presenter: "VLSF & KCRW Presents",
          specialGuests: "JIWON • Mirror Ball • Veronicavon",
          flyerUrl: "/tour-flyer.jpg"
        }
      ]
    },

    shop: {
      enabled: true,
      title: "STORE",
      status: "coming_soon"
    },

    contact: {
      enabled: true,
      title: "CONTACT",
      managementEmail: ""
    }
  }
};
