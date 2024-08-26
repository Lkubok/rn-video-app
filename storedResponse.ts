interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  [key: string]: Thumbnail; // To handle any additional thumbnail sizes
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
}

interface Id {
  kind: string;
  videoId: string;
}

interface VideoItem {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface VideoResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: VideoItem[];
}

export const storedResponse = {
  data: {
    kind: "youtube#searchListResponse",
    etag: "JjvKnDCJo7ifrykLEtuSNvpqkQA",
    nextPageToken: "CAoQAA",
    regionCode: "PL",
    pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 10,
    },
    items: [
      {
        kind: "youtube#searchResult",
        etag: "iZH_FsufdoQwoXwIy5qWzPQwIUc",
        id: {
          kind: "youtube#video",
          videoId: "neWctLVh8Cg",
        },
        snippet: {
          publishedAt: "2024-08-25T19:00:34Z",
          channelId: "UCZfrp9yiu74BEUHBxkGORdA",
          title: "Duch daje życie",
          description:
            "Kim jesteśmy - Szkoła Nowej Ewangelizacji Jezusa Zmartwychwstałego w Gliwicach http://snegliwice.org Świadectwa ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/neWctLVh8Cg/default_live.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/neWctLVh8Cg/mqdefault_live.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/neWctLVh8Cg/hqdefault_live.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Dotyk Boga",
          liveBroadcastContent: "live",
          publishTime: "2024-08-25T19:00:34Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "a9rKWRcQPhyTdgQXGfgucRx_2Gk",
        id: {
          kind: "youtube#video",
          videoId: "BBj71NiXoK0",
        },
        snippet: {
          publishedAt: "2024-08-25T18:45:00Z",
          channelId: "UCygICIFaB6npPKJd4WHQ5zA",
          title: "COŚ TU NIE GRA... | Detektywi #shorts",
          description:
            "Matka upozorowała uprowadzenie jej dziecka? Zobacz: WSZYSTKIE AKCJE ZATRZYMANIA W DETEKTYWACH ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/BBj71NiXoK0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/BBj71NiXoK0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/BBj71NiXoK0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "TVN Series",
          liveBroadcastContent: "none",
          publishTime: "2024-08-25T18:45:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "lPWM4_IcXa769b2mi4ejfnA2rt4",
        id: {
          kind: "youtube#video",
          videoId: "5It935dfIno",
        },
        snippet: {
          publishedAt: "2024-08-25T18:35:27Z",
          channelId: "UC2acn2VYkzLAbR9Zc1n-NFA",
          title:
            "Jak zdobyłem broń na Niemcach #historia #europeanwar#history#story#warshaw#1944#powstanie#bohateron",
          description:
            'Zapraszamy do naszego odcinka "Zrobiłbym to samo" Poruszająca rozmowa z powstańcem warszawskim profesorem Panem ...',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/5It935dfIno/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/5It935dfIno/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/5It935dfIno/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Łukasz Kazek History Story",
          liveBroadcastContent: "none",
          publishTime: "2024-08-25T18:35:27Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "PTPqPV2eey5OseUtKYuwpS7u0AE",
        id: {
          kind: "youtube#video",
          videoId: "7Dg1XQAIzik",
        },
        snippet: {
          publishedAt: "2024-08-25T18:36:07Z",
          channelId: "UC1nWpaHQUjIVVqH0XoDPB0g",
          title:
            "Co stało się z włosami Arianny? Co może być przyczyną nagłej utraty włosów u małego dziecka?",
          description:
            "Dziś wydarzył się cud… Czaruś zaczął jeść! Tydzień temu karmiłam Czarusia na live i byłam pewna, że lepiej już nie będzie.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/7Dg1XQAIzik/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/7Dg1XQAIzik/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/7Dg1XQAIzik/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "RodzinaClarke",
          liveBroadcastContent: "none",
          publishTime: "2024-08-25T18:36:07Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "34kCJ-0lViVhHhDxk3PB1vWRVUs",
        id: {
          kind: "youtube#video",
          videoId: "sCxvMoBBzG8",
        },
        snippet: {
          publishedAt: "2024-08-25T18:34:51Z",
          channelId: "UC_C8A-nyqepnrJCZQLJGvZw",
          title: "DLACZEGO ZAWSZE TAK JEST?! #shorts",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/sCxvMoBBzG8/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/sCxvMoBBzG8/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/sCxvMoBBzG8/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Angelika Zaucha",
          liveBroadcastContent: "none",
          publishTime: "2024-08-25T18:34:51Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "gACs3zccrOMY5bjuM4nCTvIIjlg",
        id: {
          kind: "youtube#video",
          videoId: "hZA3k_07XzY",
        },
        snippet: {
          publishedAt: "2024-08-25T18:34:50Z",
          channelId: "UCh8f8vssLddD2PbnU3Ag_Bw",
          title: "I&#39;ve Been Hiding This BRAND NEW Truck From You...",
          description:
            "To check out all Cleetus merch, visit http://cleetusmcfarland.com Figured it was FINALLY time to unveil my short bed regular cab ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/hZA3k_07XzY/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/hZA3k_07XzY/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/hZA3k_07XzY/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Cleetus McFarland",
          liveBroadcastContent: "none",
          publishTime: "2024-08-25T18:34:50Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "Sj4BNNspPNDAcTkAY1xeS53_mqE",
        id: {
          kind: "youtube#video",
          videoId: "EKW0W1fITaU",
        },
        snippet: {
          publishedAt: "2024-08-25T18:30:46Z",
          channelId: "UCxlrEsbZCRsh7gUwD8AqeFg",
          title: "😨To NAJLEPSZA MAMA na ŚWIECIE! 😭❤️‍🩹",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/EKW0W1fITaU/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/EKW0W1fITaU/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/EKW0W1fITaU/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jaroosz",
          liveBroadcastContent: "none",
          publishTime: "2024-08-25T18:30:46Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "fb71OuOzD3CtSBgPOU2UwSXl9hg",
        id: {
          kind: "youtube#video",
          videoId: "IjXRoifXYUE",
        },
        snippet: {
          publishedAt: "2024-08-25T18:31:26Z",
          channelId: "UCXOZ4IxK5Uv_XFeCRDL4z2A",
          title: "ROBIMY TEST WODOODPORNOŚCI TYCH GWIAZDEK!!!",
          description: "",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/IjXRoifXYUE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/IjXRoifXYUE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/IjXRoifXYUE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Kamelemona",
          liveBroadcastContent: "none",
          publishTime: "2024-08-25T18:31:26Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "w_aDoHXyFB9bAhvxiuuS8tNYF2A",
        id: {
          kind: "youtube#video",
          videoId: "WX-s9_oe4Qs",
        },
        snippet: {
          publishedAt: "2024-08-25T18:21:48Z",
          channelId: "UClbFnMu72DbIvh6aZebAHsA",
          title:
            "(Restream) Bắt gặp bạn Cường trong rank đơn, loạt series bo5 rank flex hấp dẫn",
          description:
            "Mọi người nhớ nhấn like và đăng ký kênh để ủng hộ mình nha ! DONATE : Wescan & momo : https://qr.wescan.vn/Levi Paypal ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/WX-s9_oe4Qs/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/WX-s9_oe4Qs/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/WX-s9_oe4Qs/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Levi",
          liveBroadcastContent: "none",
          publishTime: "2024-08-25T18:21:48Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "bwvx-J2a7txt5CWyquFmIOW9r7Y",
        id: {
          kind: "youtube#video",
          videoId: "Msky8VICNnA",
        },
        snippet: {
          publishedAt: "2024-08-25T18:19:45Z",
          channelId: "UC5NVx2uLuwC9iXXS3TwAGIg",
          title:
            "La Persistencia te hará alcanzar el Éxito | Pastor Juan Carlos Harrigan (Mensaje Completo)",
          description:
            "Join this channel to get access to perks: https://www.youtube.com/channel/UC5NVx2uLuwC9iXXS3TwAGIg/join Adquiere el libro ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Msky8VICNnA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Msky8VICNnA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Msky8VICNnA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Juan Carlos Harrigan Oficial",
          liveBroadcastContent: "none",
          publishTime: "2024-08-25T18:19:45Z",
        },
      },
    ],
  },
  status: 200,
  headers: {
    "alt-svc": 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    "cache-control": "private",
    "content-encoding": "gzip",
    "content-length": "2545",
    "content-type": "application/json; charset=UTF-8",
    date: "Sun, 25 Aug 2024 19:15:20 GMT",
    server: "scaffolding on HTTPServer2",
    vary: "Origin, X-Origin, Referer",
    "x-content-type-options": "nosniff",
    "x-frame-options": "SAMEORIGIN",
    "x-xss-protection": "0",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "get",
    url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&channelId=&part=snippet&order=date&maxResults=10",
  },
  request: {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4,
    readyState: 4,
    status: 200,
    timeout: 0,
    withCredentials: true,
    upload: {},
    _aborted: false,
    _hasError: false,
    _method: "GET",
    _perfKey:
      "network_XMLHttpRequest_https://www.googleapis.com/youtube/v3/search?key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&channelId=&part=snippet&order=date&maxResults=10",
    _response:
      '{\n  "kind": "youtube#searchListResponse",\n  "etag": "JjvKnDCJo7ifrykLEtuSNvpqkQA",\n  "nextPageToken": "CAoQAA",\n  "regionCode": "PL",\n  "pageInfo": {\n    "totalResults": 1000000,\n    "resultsPerPage": 10\n  },\n  "items": [\n    {\n      "kind": "youtube#searchResult",\n      "etag": "iZH_FsufdoQwoXwIy5qWzPQwIUc",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "neWctLVh8Cg"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T19:00:34Z",\n        "channelId": "UCZfrp9yiu74BEUHBxkGORdA",\n        "title": "Duch daje życie",\n        "description": "Kim jesteśmy - Szkoła Nowej Ewangelizacji Jezusa Zmartwychwstałego w Gliwicach http://snegliwice.org Świadectwa ...",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/neWctLVh8Cg/default_live.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/neWctLVh8Cg/mqdefault_live.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/neWctLVh8Cg/hqdefault_live.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "Dotyk Boga",\n        "liveBroadcastContent": "live",\n        "publishTime": "2024-08-25T19:00:34Z"\n      }\n    },\n    {\n      "kind": "youtube#searchResult",\n      "etag": "a9rKWRcQPhyTdgQXGfgucRx_2Gk",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "BBj71NiXoK0"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T18:45:00Z",\n        "channelId": "UCygICIFaB6npPKJd4WHQ5zA",\n        "title": "COŚ TU NIE GRA... | Detektywi #shorts",\n        "description": "Matka upozorowała uprowadzenie jej dziecka? Zobacz: WSZYSTKIE AKCJE ZATRZYMANIA W DETEKTYWACH ...",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/BBj71NiXoK0/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/BBj71NiXoK0/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/BBj71NiXoK0/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "TVN Series",\n        "liveBroadcastContent": "none",\n        "publishTime": "2024-08-25T18:45:00Z"\n      }\n    },\n    {\n      "kind": "youtube#searchResult",\n      "etag": "lPWM4_IcXa769b2mi4ejfnA2rt4",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "5It935dfIno"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T18:35:27Z",\n        "channelId": "UC2acn2VYkzLAbR9Zc1n-NFA",\n        "title": "Jak zdobyłem broń na Niemcach #historia #europeanwar#history#story#warshaw#1944#powstanie#bohateron",\n        "description": "Zapraszamy do naszego odcinka \\"Zrobiłbym to samo\\" Poruszająca rozmowa z powstańcem warszawskim profesorem Panem ...",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/5It935dfIno/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/5It935dfIno/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/5It935dfIno/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "Łukasz Kazek History Story",\n        "liveBroadcastContent": "none",\n        "publishTime": "2024-08-25T18:35:27Z"\n      }\n    },\n    {\n      "kind": "youtube#searchResult",\n      "etag": "PTPqPV2eey5OseUtKYuwpS7u0AE",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "7Dg1XQAIzik"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T18:36:07Z",\n        "channelId": "UC1nWpaHQUjIVVqH0XoDPB0g",\n        "title": "Co stało się z włosami Arianny? Co może być przyczyną nagłej utraty włosów u małego dziecka?",\n        "description": "Dziś wydarzył się cud… Czaruś zaczął jeść! Tydzień temu karmiłam Czarusia na live i byłam pewna, że lepiej już nie będzie.",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/7Dg1XQAIzik/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/7Dg1XQAIzik/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/7Dg1XQAIzik/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "RodzinaClarke",\n        "liveBroadcastContent": "none",\n        "publishTime": "2024-08-25T18:36:07Z"\n      }\n    },\n    {\n      "kind": "youtube#searchResult",\n      "etag": "34kCJ-0lViVhHhDxk3PB1vWRVUs",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "sCxvMoBBzG8"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T18:34:51Z",\n        "channelId": "UC_C8A-nyqepnrJCZQLJGvZw",\n        "title": "DLACZEGO ZAWSZE TAK JEST?! #shorts",\n        "description": "",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/sCxvMoBBzG8/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/sCxvMoBBzG8/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/sCxvMoBBzG8/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "Angelika Zaucha",\n        "liveBroadcastContent": "none",\n        "publishTime": "2024-08-25T18:34:51Z"\n      }\n    },\n    {\n      "kind": "youtube#searchResult",\n      "etag": "gACs3zccrOMY5bjuM4nCTvIIjlg",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "hZA3k_07XzY"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T18:34:50Z",\n        "channelId": "UCh8f8vssLddD2PbnU3Ag_Bw",\n        "title": "I&#39;ve Been Hiding This BRAND NEW Truck From You...",\n        "description": "To check out all Cleetus merch, visit http://cleetusmcfarland.com Figured it was FINALLY time to unveil my short bed regular cab ...",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/hZA3k_07XzY/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/hZA3k_07XzY/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/hZA3k_07XzY/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "Cleetus McFarland",\n        "liveBroadcastContent": "none",\n        "publishTime": "2024-08-25T18:34:50Z"\n      }\n    },\n    {\n      "kind": "youtube#searchResult",\n      "etag": "Sj4BNNspPNDAcTkAY1xeS53_mqE",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "EKW0W1fITaU"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T18:30:46Z",\n        "channelId": "UCxlrEsbZCRsh7gUwD8AqeFg",\n        "title": "😨To NAJLEPSZA MAMA na ŚWIECIE! 😭❤️\\u200d🩹",\n        "description": "",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/EKW0W1fITaU/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/EKW0W1fITaU/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/EKW0W1fITaU/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "Jaroosz",\n        "liveBroadcastContent": "none",\n        "publishTime": "2024-08-25T18:30:46Z"\n      }\n    },\n    {\n      "kind": "youtube#searchResult",\n      "etag": "fb71OuOzD3CtSBgPOU2UwSXl9hg",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "IjXRoifXYUE"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T18:31:26Z",\n        "channelId": "UCXOZ4IxK5Uv_XFeCRDL4z2A",\n        "title": "ROBIMY TEST WODOODPORNOŚCI TYCH GWIAZDEK!!!",\n        "description": "",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/IjXRoifXYUE/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/IjXRoifXYUE/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/IjXRoifXYUE/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "Kamelemona",\n        "liveBroadcastContent": "none",\n        "publishTime": "2024-08-25T18:31:26Z"\n      }\n    },\n    {\n      "kind": "youtube#searchResult",\n      "etag": "w_aDoHXyFB9bAhvxiuuS8tNYF2A",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "WX-s9_oe4Qs"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T18:21:48Z",\n        "channelId": "UClbFnMu72DbIvh6aZebAHsA",\n        "title": "(Restream) Bắt gặp bạn Cường trong rank đơn, loạt series bo5 rank flex hấp dẫn",\n        "description": "Mọi người nhớ nhấn like và đăng ký kênh để ủng hộ mình nha ! DONATE : Wescan & momo : https://qr.wescan.vn/Levi Paypal ...",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/WX-s9_oe4Qs/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/WX-s9_oe4Qs/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/WX-s9_oe4Qs/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "Levi",\n        "liveBroadcastContent": "none",\n        "publishTime": "2024-08-25T18:21:48Z"\n      }\n    },\n    {\n      "kind": "youtube#searchResult",\n      "etag": "bwvx-J2a7txt5CWyquFmIOW9r7Y",\n      "id": {\n        "kind": "youtube#video",\n        "videoId": "Msky8VICNnA"\n      },\n      "snippet": {\n        "publishedAt": "2024-08-25T18:19:45Z",\n        "channelId": "UC5NVx2uLuwC9iXXS3TwAGIg",\n        "title": "La Persistencia te hará alcanzar el Éxito | Pastor Juan Carlos Harrigan (Mensaje Completo)",\n        "description": "Join this channel to get access to perks: https://www.youtube.com/channel/UC5NVx2uLuwC9iXXS3TwAGIg/join Adquiere el libro ...",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/Msky8VICNnA/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/Msky8VICNnA/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/Msky8VICNnA/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          }\n        },\n        "channelTitle": "Juan Carlos Harrigan Oficial",\n        "liveBroadcastContent": "none",\n        "publishTime": "2024-08-25T18:19:45Z"\n      }\n    }\n  ]\n}\n',
    _url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&channelId=&part=snippet&order=date&maxResults=10",
    _timedOut: false,
    _trackingName: "unknown",
    _incrementalEvents: false,
    _performanceLogger: {
      _timespans: {
        "network_XMLHttpRequest_https://www.googleapis.com/youtube/v3/search?key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&channelId=&part=snippet&order=date&maxResults=10":
          {
            startTime: 682929924.710375,
            endTime: 682930245.228125,
            totalTime: 320.51775002479553,
          },
      },
      _extras: {},
      _points: {
        initializeCore_start: 682929278.815708,
        initializeCore_end: 682929355.90425,
      },
      _pointExtras: {},
      _closed: false,
    },
    responseHeaders: {
      Server: "scaffolding on HTTPServer2",
      "Content-Type": "application/json; charset=UTF-8",
      "x-content-type-options": "nosniff",
      "x-xss-protection": "0",
      Date: "Sun, 25 Aug 2024 19:15:20 GMT",
      Vary: "Origin, X-Origin, Referer",
      "x-frame-options": "SAMEORIGIN",
      "Content-Encoding": "gzip",
      "Alt-Svc": 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
      "Cache-Control": "private",
      "Content-Length": "2545",
    },
    _requestId: null,
    _headers: {
      accept: "application/json, text/plain, */*",
    },
    _responseType: "",
    _sent: true,
    _lowerCaseResponseHeaders: {
      server: "scaffolding on HTTPServer2",
      "content-type": "application/json; charset=UTF-8",
      "x-content-type-options": "nosniff",
      "x-xss-protection": "0",
      date: "Sun, 25 Aug 2024 19:15:20 GMT",
      vary: "Origin, X-Origin, Referer",
      "x-frame-options": "SAMEORIGIN",
      "content-encoding": "gzip",
      "alt-svc": 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
      "cache-control": "private",
      "content-length": "2545",
    },
    _subscriptions: [],
    responseURL:
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&channelId=&part=snippet&order=date&maxResults=10",
  },
};
