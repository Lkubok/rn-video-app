export const responseMovie = {
  data: {
    kind: "youtube#videoListResponse",
    etag: "vCaIHlrnBNhKQOgyJar8lLOLG5s",
    items: [
      {
        kind: "youtube#video",
        etag: "CcJT4mS2fZ7auEv2ebJ4zEihxIE",
        id: "cPN4H0sSCHQ",
        snippet: {
          publishedAt: "2023-01-16T16:58:40Z",
          channelId: "UComsbK6jkwg3lZ5JuGAzsKQ",
          title: "Switch Disco - REACT (feat. Ella Henderson) (Lyric Video)",
          description:
            'Stream "REACT" here: https://switchdisco.lnk.to/REACToutnow \nINSTAGRAM: https://www.instagram.com/switchdisco\nFACEBOOK: https://www.facebook.com/SwitchDisco \nSOUNDCLOUD: https://soundcloud.com/switchdisco \nMIXCLOUD: https://www.mixcloud.com/SwitchDisco',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/cPN4H0sSCHQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/cPN4H0sSCHQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/cPN4H0sSCHQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
            standard: {
              url: "https://i.ytimg.com/vi/cPN4H0sSCHQ/sddefault.jpg",
              width: 640,
              height: 480,
            },
            maxres: {
              url: "https://i.ytimg.com/vi/cPN4H0sSCHQ/maxresdefault.jpg",
              width: 1280,
              height: 720,
            },
          },
          channelTitle: "SwitchDiscoVEVO",
          tags: ["Dance", "REACT", "Relentless Records", "Switch Disco"],
          categoryId: "10",
          liveBroadcastContent: "none",
          localized: {
            title: "Switch Disco - REACT (feat. Ella Henderson) (Lyric Video)",
            description:
              'Stream "REACT" here: https://switchdisco.lnk.to/REACToutnow \nINSTAGRAM: https://www.instagram.com/switchdisco\nFACEBOOK: https://www.facebook.com/SwitchDisco \nSOUNDCLOUD: https://soundcloud.com/switchdisco \nMIXCLOUD: https://www.mixcloud.com/SwitchDisco',
          },
        },
        statistics: {
          viewCount: "33118775",
          likeCount: "114259",
          favoriteCount: "0",
          commentCount: "1201",
        },
      },
    ],
    pageInfo: {
      totalResults: 1,
      resultsPerPage: 1,
    },
  },
  status: 200,
  headers: {
    "alt-svc": 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    "cache-control": "private",
    "content-encoding": "gzip",
    "content-length": "788",
    "content-type": "application/json; charset=UTF-8",
    date: "Sun, 25 Aug 2024 22:46:54 GMT",
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
    url: "https://www.googleapis.com/youtube/v3/videos?id=cPN4H0sSCHQ&key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&part=snippet,statistics",
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
      "network_XMLHttpRequest_https://www.googleapis.com/youtube/v3/videos?id=cPN4H0sSCHQ&key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&part=snippet,statistics",
    _response:
      '{\n  "kind": "youtube#videoListResponse",\n  "etag": "vCaIHlrnBNhKQOgyJar8lLOLG5s",\n  "items": [\n    {\n      "kind": "youtube#video",\n      "etag": "CcJT4mS2fZ7auEv2ebJ4zEihxIE",\n      "id": "cPN4H0sSCHQ",\n      "snippet": {\n        "publishedAt": "2023-01-16T16:58:40Z",\n        "channelId": "UComsbK6jkwg3lZ5JuGAzsKQ",\n        "title": "Switch Disco - REACT (feat. Ella Henderson) (Lyric Video)",\n        "description": "Stream \\"REACT\\" here: https://switchdisco.lnk.to/REACToutnow \\nINSTAGRAM: https://www.instagram.com/switchdisco\\nFACEBOOK: https://www.facebook.com/SwitchDisco \\nSOUNDCLOUD: https://soundcloud.com/switchdisco \\nMIXCLOUD: https://www.mixcloud.com/SwitchDisco",\n        "thumbnails": {\n          "default": {\n            "url": "https://i.ytimg.com/vi/cPN4H0sSCHQ/default.jpg",\n            "width": 120,\n            "height": 90\n          },\n          "medium": {\n            "url": "https://i.ytimg.com/vi/cPN4H0sSCHQ/mqdefault.jpg",\n            "width": 320,\n            "height": 180\n          },\n          "high": {\n            "url": "https://i.ytimg.com/vi/cPN4H0sSCHQ/hqdefault.jpg",\n            "width": 480,\n            "height": 360\n          },\n          "standard": {\n            "url": "https://i.ytimg.com/vi/cPN4H0sSCHQ/sddefault.jpg",\n            "width": 640,\n            "height": 480\n          },\n          "maxres": {\n            "url": "https://i.ytimg.com/vi/cPN4H0sSCHQ/maxresdefault.jpg",\n            "width": 1280,\n            "height": 720\n          }\n        },\n        "channelTitle": "SwitchDiscoVEVO",\n        "tags": [\n          "Dance",\n          "REACT",\n          "Relentless Records",\n          "Switch Disco"\n        ],\n        "categoryId": "10",\n        "liveBroadcastContent": "none",\n        "localized": {\n          "title": "Switch Disco - REACT (feat. Ella Henderson) (Lyric Video)",\n          "description": "Stream \\"REACT\\" here: https://switchdisco.lnk.to/REACToutnow \\nINSTAGRAM: https://www.instagram.com/switchdisco\\nFACEBOOK: https://www.facebook.com/SwitchDisco \\nSOUNDCLOUD: https://soundcloud.com/switchdisco \\nMIXCLOUD: https://www.mixcloud.com/SwitchDisco"\n        }\n      },\n      "statistics": {\n        "viewCount": "33118775",\n        "likeCount": "114259",\n        "favoriteCount": "0",\n        "commentCount": "1201"\n      }\n    }\n  ],\n  "pageInfo": {\n    "totalResults": 1,\n    "resultsPerPage": 1\n  }\n}\n',
    _url: "https://www.googleapis.com/youtube/v3/videos?id=cPN4H0sSCHQ&key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&part=snippet,statistics",
    _timedOut: false,
    _trackingName: "unknown",
    _incrementalEvents: false,
    _performanceLogger: {
      _timespans: {
        "network_XMLHttpRequest_http://localhost:8081/symbolicate": {
          startTime: 695697441.085333,
          endTime: 695697495.293541,
          totalTime: 54.208207964897156,
        },
        "network_XMLHttpRequest_https://www.googleapis.com/youtube/v3/videos?id=cPN4H0sSCHQ&key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&part=snippet,statistics":
          {
            startTime: 695701767.971666,
            endTime: 695701893.6945,
            totalTime: 125.72283399105072,
          },
      },
      _extras: {},
      _points: {
        initializeCore_start: 695695847.023375,
        initializeCore_end: 695695976.176625,
      },
      _pointExtras: {},
      _closed: false,
    },
    responseHeaders: {
      Server: "scaffolding on HTTPServer2",
      "Content-Type": "application/json; charset=UTF-8",
      "x-content-type-options": "nosniff",
      "x-xss-protection": "0",
      Date: "Sun, 25 Aug 2024 22:46:54 GMT",
      Vary: "Origin, X-Origin, Referer",
      "x-frame-options": "SAMEORIGIN",
      "Content-Encoding": "gzip",
      "Alt-Svc": 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
      "Cache-Control": "private",
      "Content-Length": "788",
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
      date: "Sun, 25 Aug 2024 22:46:54 GMT",
      vary: "Origin, X-Origin, Referer",
      "x-frame-options": "SAMEORIGIN",
      "content-encoding": "gzip",
      "alt-svc": 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
      "cache-control": "private",
      "content-length": "788",
    },
    _subscriptions: [],
    responseURL:
      "https://www.googleapis.com/youtube/v3/videos?id=cPN4H0sSCHQ&key=AIzaSyAP2Na9LzH-gK_VzIHju3j3BDEP8NNLL5c&part=snippet,statistics",
  },
};
