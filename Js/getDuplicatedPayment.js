db.wb_payment.aggregate(
    { $group: {
        _id: { meterJournalId: "$meterJournalId" },
        count: { $sum:  1 },
        docs: { $push: "$_id" }
    }},
    { $match: {
        count: { $gt : 1 }
    }}
)


/* 1 */
[
    "BGP6aGw3qSTiEMcm3",
    "yFtCLcTN9ovXpFJsK",
    "uB37haEReyYN44X8Z",
    "hmA8PQyabzwbrwZuZ",
    "J8qEhsoeC87Nmjsoe",
    "TTThBjDSBakH2uf6s",
    "sBSneyZSmxT9dpBLH",
    "d2RAqDSaji9b8p3vo",
    "stJXdQRWi4rvnt65E",
    "Jw5MPusC9N9JFocW2",
    "aYHa3tQgcd9vQTdAj",
    "zyKMia5zCLxomF9xi",
    "H5J6SDtPiBqzabuxR",
    "qRrAYy2dorn9JAyqr",
    "34wyavk9xBnPseaog",
    "64d7SJNyX5gG2rtGF",
    "FLvfztgdH4gZ435xh",
    "ppzQyEspRNPhnzZ7q",
    "XHHDfhkAAPfSZ8Hud",
    "BrMaqgr9oWDtTNGcc",
    "CZoWwbcDNLMMZrs3X",
    "EwJ6qHKCj49k5PfTv",
    "QdXERE4wjrtu6BvMh",
    "Fo2vG2ejGA6Ja8Ln6",
    "vHS4ejuzfTTMgxxDA",
    "iq6vaY5Jb4wMgRcn9",
    "t8bzGiiaANL2CpyiA",
    "MgvYX4qwRnQJ6j2mb",
    "sWD7M64diRHrgGPck",
    "9hhddnZqxHSfHvTC6",
    "z7YdCG7vWsn6nfMSk",
    "4kpmTzrRq7xTt5xnr",
    "AmDMNWatjAjJ6FmJB",
    "9Aj9CyAayDkvatmQW",
    "FY2dyXWT84kJb44iZ",
    "o27DeCJyBx2sCPFCx",
    "TAv4KyX258zXzkJMZ",
    "k4MJe62wC25DspLi4",
    "E8z3bDumZHntzDnZp",
    "Dk6JoWEBMikJQxzs3",
    "c5wEXhN7oehEySTs8",
    "dW6s4R9qgcDy9JDwo",
    "FLSSjQJon94TFwbkp",
    "zrGn8PnNC9ETWJP9w",
    "ivv6LLCWAot9FvyfL",
    "9cxED5wrHae8mCZcE",
    "K3zZXwzA2QrQjrmoP",
    "XYXfvkuNtF8AbvLs2",
    "uXhFnRdyKTTAJt7pE",
    "kMkgCwZjWaH5aKDZw",
    "ebA8QrLP9iESFhxBo",
    "aK4vPZTjrhFbzJTfY",
    "KM9wRyYD89HJWknmB"
]
