let td= db.wb_transactionDetail.find({});
let tdIds=[];
td.forEach(function(t){
    let p=db.wb_payment.findOne({_id:t.refId});
    let j=db.wb_meterReadingJournalDetails.findOne({_id:t.refId});
    if(p==null && j==null){
        tdIds.push(t._id)
    }
})
tdIds  =

[
    "EKXu2hLaftHFtiaG2",

    "vEoemZPvctCzRHuCC",

    "Db7CaqxNGZoGvCMAN",

    "pzpKBQZXeFHzHgmcQ",

    "mSR4mHK2NJ6fK5Sx6",

    "Nk5TeSc6uGZD45n4K",

    "mK3H7nM7KjGGPxPqK",

    "5GbX5b92TdSPh6GDw",

    "5GF5XhLyCNcWcHuZo",

    "tZuhJfBfXGSCKfPgJ",

    "TXu4qWgbzAAvWiJyt",

    "MkNEMhSg2u8HWuSEa",

    "m59PKJJPzEvCBJyrD",

    "EXyu8kxEr7ARavShi",

    "EmktBNdx9TNBBnqp5",

    "p6BMXY6KDj98pW7Be",

    "Ksri7GTPZXSbo3zsx",

    "SC9wr3yJJyzhxo26X",

    "LafDEt86eT97uKZZD",

    "KuoAtuyjsGXLc4PAS",

    "FAMrPKsAXjWQ5cKv9",

    "5trqZGEtG3RZcQZah",

    "g8ENiMSD6BhM5rjWq",

    "8dxm7JDxYdahZ3wxP",

    "JfRjMiywsZZJDg94q",

    "rwZpiiBFk94Nf6vjd",

    "m3nw8qqMH7LjWtZ9K",

    "k4wKFHjLqjLHBnbGg",

    "3fgXQpxTbpYs7pwdH",

    "25k6q2zWfpF8rq5LR",

    "vaDPHLDRPRaotvQx2",

    "6fiQMdKDhjbPp2ERC",

    "9se8LnvkvzveoJ8Zi",

    "fgpBDnRHvWkTF7zBZ",

    "tCpDS9KizQoEYLX8x",

    "8tKpc73xMbr9su72p",

    "YfH9d4WFCQo9x3B8e",

    "ZCBDmj2qNwu3fDsko",

    "bqwf6cbXYcqjFyBCB",

    "HAkSsRnN2wPgsFmkQ",

    "y96pNKDK3apmXtPER",

    "S5gPQMFPkNcpTZwnb",

    "qN8g23Qnnp4faTGxB",

    "4XP9SYG3WfyzRkjMp",

    "DsJu4hsQw4rwr4ueG",

    "Lx3zmiPpgCWvkxNSE",

    "qDHv4HHuoWWAGWSJJ",

    "iTnvSbxq2LEmX968M",

    "CstNBzHSAwRzDXxsd",

    "uFWujdEL42gwXk5aW",

    "hvAQJJN464JDHeqfT",

    "K8yYE3BwYrusg5HiR",

    "e8RL4nN7Bni5LERn9",

    "SWTnQa5Re3WQSFHfa",

    "ncePqGtBZmwmjTrpG",

    "PPuBmMPHCy6hrjHuH",

    "qgE6AniQ8owP4MsQY",

    "LsakHR47oDQvDrmY2",

    "5TFcrJTZTqCGJ8xZM",

    "gWjajvRg8p4dBgCYa",

    "oFzndixQ4ppKA7CZX",

    "kbE8fph8CuQqR7afs",

    "c8MFJ79iALAogxkRw",

    "gtvTMWpx7PbGggQQM",

    "qJuKJZAcSkpRPaCGh",

    "oo8PMYvQa7bw3BTZN",

    "yZ72p9z9Tre8TDwhC",

    "Aofu2Xuh4y4Gj9LxK",

    "RGyTB4j9fpZffd86P",

    "kTCkZ3ifzQZwR37gr",

    "ZYDHukb5sS5sP6jpG",

    "EYBj2uTAz5jnhM4az",

    "GMTmLKooXtg5yZKFf",

    "Ybr5mkM4c3tky6ZiK",

    "4hmwi6h9zKtaSGLz6",

    "ErhfFaEp4msjBNuEs",

    "yPhpJF4DqY5bNnJAE",

    "QFbpXsLqZKWwTwDNj",

    "phem2dcKBZueuKTXF",

    "fhAQKswFnTqJu4PRA",

    "3hLY4p2LdQojGmPuH",

    "hfJ4vm6tpdf4nXNkw",

    "Kruovsu2mv4crZnNA",

    "L2QhSFwroBjYkYfXJ",

    "ivLbXgGGdazTjoERZ",

    "c7o5zZLmzKj43t6Cd",

    "dcucn8QZdWfiTnPLB",

    "ETfSN9v92CckMdhnv",

    "FoWMmr9xeZo6Lssf9",

    "KHoYzs3z77z8XEpR2",

    "h8Qws46uweG5MHewQ",

    "cHqTy4WcvPK3bDSuu",

    "nv4mBBADe8ihNMezS",

    "SfrATpG5xsL2ckPGd",

    "mzfjhNrvqsBDKifZT",

    "R46eG8fTBe3zmaiEA",

    "AcAiFG9wWJFN9yZdD",

    "zKknrTsrZQng8ePu6",

    "B8s7C9CvipJXZuyHv",

    "mJpuJ474mCwygThRc",

    "WB9vjjraH9rfgamfh",

    "ByXwmR6RP4PwiutfJ",

    "YGjurfDY6C2KGWXuW",

    "qnvCiFyrxtFsZdimb",

    "484Ta5QMkGNjCRhWA",

    "83p9ZKppN6bcZAsfx",

    "gwZcdg7ATspDcRKiX",

    "pYWR8ytbCEXCdm3o3",

    "SdoYN4qcEsKe5FiTW",

    "GZisMn9zYbFJ28QDN",

    "9CLTEFHPguNDqwFYe",

    "ScPJqHJScsaac8Nuc",

    "3dsyCTWRhsAbmH5co",

    "6QRbwDaRRDSL5Xhn2",

    "WGemkbxQEB6LuRpih",

    "NbngGmotMdsWSvzh8",

    "QDQgYPurREWzYcMd6",

    "wjTbnZqMKHBYPjdzS",

    "x89vuhXXrGt9gxrLL",

    "8nWXgwKpQXi6APHm5",

    "3XgtA95brXTCL78jo",

    "DPPsSwghZWnnLzq6k",

    "EWAy67byKaXGwNey5",

    "xzf4NTnm5fqbxm9t9",

    "znp5Dr2YHgbix2M3n",

    "pxSpnShBfgT42nxL5",

    "9cx2itK4Def8XGumk",

    "kb9oFQF8KC7K6CRxs",

    "X7jSAp9ncNfikFjrz",

    "9Wb86TG2heLqDxpZ9",

    "LTyaphgM5kiKQvEgP",

    "8Adb4Yo5GcqHyAeXW",

    "ADD9xEmmK9ea7Ch8N",

    "5WTQ7oCtYnn6Fu57x",

    "E9t7P5uKPL5BEAvBQ",

    "zrRhGENZBSH5ivs4k",

    "vsNxYwQcmMmNtv4Yz",

    "efzJweD3szPLMAw5Z",

    "BwSoTeCBFnjvNeiaH",

    "wDZ6tRxwz6iMKMFnH",

    "fdFPfr9smgBu2zL6K",

    "QJTTd2BjnvbfikKyP",

    "3r9wshZpqGY64BLPe",

    "2FDvuz5rZ2iGLkdc5",

    "e6A69svk3hFqybxKX",

    "7mJYMKPKpzLKhf66g",

    "EfM8A9mMzSw2uNn5h",

    "QtJQFYLhctHRYjFba",

    "FouEeH9LZ7Sz2FGc3",

    "J3TjMgsMWyNuCkuff",

    "48xD6Y6AiBfXSb7hL",

    "FPYhFEhxXk9qJCkQk",

    "sGw7bq84c4rLSPf7E",

    "oXQoLKoWJryuDmT9T",

    "BMmMwXFFbHXuKEP9Q",

    "KKzzupLcDq79Wn33R",

    "qdqDTY8QmBTziodF2",

    "PRpBJSMgsjzfm8qvK",

    "f5SPCCB7D6zgwN6ut",

    "95q6yxd2GEpY9DeNf",

    "TP3LZqmrBxfQ2NZqR",

    "bnnEDdD6HLkDpugee",

    "9osQ45hZW5h8T4pWP",

    "Loh6dJE9qSKz5iXuD",

    "jcQMFnr6B8FSJFnah",

    "4BKNcBD9RmrwzyGKb",

    "AggcXyfcKPDamkD2E",

    "SkWfsPuhwMg9wJAMa",

    "AZDPGyeGBBfpL939A",

    "v3aP2h5Ed3WX5kbeS",

    "66RxDLnWLzBfL7k5Y",

    "iurXQG9wHH4uRNbdD",

    "ri8qDMiFYLhaQqP7R",

    "38Qt3Z7dBBtTWp3WX",

    "E85foMMA6oP4kQi8A",

    "H4rHpnNh956exNud6",

    "SWhqYG6AuKsGYnnCo",

    "Lz5Ssy6iFYXTeRsk9",

    "SJp4RWWvyzv9cL2Rc",

    "Mkc47jeTWB3EtpnCZ",

    "a4ur5fgEPfs32rzcE",

    "PJ3jvyPfJ4HXGEMtt",

    "PpwEbCABcFd9uDozc",

    "3cpNQ9A6f5vx8dcMK",

    "vGRL38nqBfckEngT7",

    "qDm7HESriqekAkavF",

    "hR5CZPo8BJWkPiDAg",

    "MMztErkHYCpyEHbAo",

    "S3vSgD6aXosPeNJL3",

    "FJz9sGB2vQjot7DkJ",

    "uMM7fN8tnFGh5LocD",

    "tyKAP986jApCBwR9X",

    "85yCi42y4p2g8dmtT",

    "b3MNmYWx8jsYFXqup",

    "XK8kGY8zAS5r32poa",

    "PTKPM7xZwFBh8RPDb",

    "SLWrTxCQgoYDfyQYi",

    "u6BLkgoiaksZhsHBh",

    "PtjbobXYBqCj2eDXR",

    "YEgvPmjQNr5TQ27tg",

    "3WZKsZHnHkdLgCkPK",

    "XeL3DL7TPMHJywEEB",

    "G9MiEKfX8E95jAWC3",

    "48Saaj8Rfmssw7MQi",

    "fo456BY3Qbvz4Maqn",

    "sEer79pef7xa4LQgj",

    "WroXpXYz9WiJdgwnP",

    "2XHW3nYL7nBbeHRNF",

    "3g9JMndPE9St88mtE",

    "KcsS94hpLmsqkrP77",

    "wc3HhiSyDJTW9mFw4",

    "EejptuXaMsN96ocJG",

    "GERww6vYbc4Rx9DB8",

    "tSDaALidouq9drhrq",

    "5S7cENY37NKCigx4i",

    "XgnrKbfcekCKvoW8K",

    "fEFMJv29ptxc96qbA",

    "TbSMAyxtkGJ5GfyrK",

    "Js7qzPX4LBHM8Puvc",

    "KGarM2sR3PqujkPuh",

    "5tJPpPrjenZFHcz6r",

    "4yrD2zNdT64bX4sR7",

    "yGfrFEtnmT5unNG7z",

    "RaswCgn2DtFZ8xDby",

    "f3qMqmjfABq8KpvTj",

    "T7vR8DpBHxueCFusE",

    "Pu2rjeNFfSnYMND2f",

    "rGaCgkxWoFz4HFyK4",

    "DSQCbkSE347WHCdGL",

    "R8nT22bWL768HGHyz",

    "gohgA9EFdSREnyfWs",

    "CZQZR9xRaTMgMSTLF",

    "Ek5c66557dveB6WRD",

    "9gNeu4X4frn4NHaXE",

    "bhHx5BzcfZNESGfRa",

    "WhTJgKoqhJFHAikRe",

    "eLFPeWZjDraMhKSuP",

    "6jdKzndPoEaNNrjjA",

    "Abgt9Dz4GkThHyFrQ",

    "qnbskbJ7kcHqCRbRb",

    "9eBF7KHpzu3S9EjDq",

    "cqunCJmet3NdaYfuw",

    "39oJNcqwjXEc7ZaDi",

    "sSb6XSdf7P82ghMfh",

    "qM52tf6nn7KvTtzGC",

    "BifS32gLzqNyWTDbo",

    "d6BvGY5yNmeDfcAjb",

    "tXB2EbmSj2LwTycuQ",

    "YPbn3vqLgiHx4mLkv",

    "J6M2tDj7SYvdsdciH",

    "uL7veXsquCyKwbscp",

    "4pwQmXn6BiXkrLFER",

    "KgoogM6QXwMCuZe5M",

    "LdjhwbSaD9Rb3PoyQ",

    "6k75hs73szJ94NAwn",

    "674eFxDT6z2goahms",

    "LmcgbLN7gjwiSqRYj",

    "5w96ptCWnqaWQ4Wye",

    "GA37ugmCod5aaCnKz",

    "4rrPkHeT9Hk7apyPC",

    "6AntEawoq8sWrktdz",

    "osxtQi3aqdhqge7PJ",

    "SfX6z2bGWLmaJvJbP",

    "5S5BazpaCZC5o4hxM",

    "cnAMQEXSkoMx8Nk9A",

    "oZ2EM7qva6f5u4mtm",

    "CDdG43x4oGyynXHuy",

    "EyFpgj6Q4jNykE7mx",

    "u9uqAGrHas2HD38YM",

    "ikNjd3pYGz8HkQrmo",

    "yZYEZq6nkSpAgZyHE",

    "xm757j9rrxwAzw6Xq",

    "BLiivGRF2FJyYumas",

    "NTwyooMN5jbLcctt9",

    "J8pqorXTiRoFmwyLo",

    "qWzrSYnDCSMfFimks",

    "5xokmWvqAopX7pFEB",

    "oS2EwFHM9GZo4uxmy",

    "DALXAoj78oCC7c4ic",

    "7hzfHiCkgoLP7MQ9k",

    "Q5NPHTsJfxiFStxRe",

    "aLYFsaTzKNgQdcYrS",

    "j4qnYttXbfzofY9RZ",

    "vjHeMcCKetvEt3Dvo",

    "YJN3tSjKT3YQYMvLo",

    "qpFHc3RRaEG93p5SQ",

    "X72HKyD4aKmPcsTa4",

    "q65BW5qfLRXFxxqpR",

    "nJJNohym8keeqQkHi",

    "xPmc2tYNY8e7RnDkB",

    "tzQoShvju8smZ45w5",

    "N2o8rkunPMM2HWYbH",

    "ZYPpL8MFvEjoy8sYo",

    "XKYctFtzGpcpP68sJ",

    "GJyrN7rBM34XNoCTo",

    "b7ssaTD76Yzdaj72P",

    "NWYpbaurG6tWK3Esv",

    "5ka67fzDYkCnoKM8g",

    "hz9w3tTsaszh5YSBk",

    "eej4cHkL7hnGgHtm9",

    "ENZ3Cor2hveRWYqsf",

    "Zh6gEEnYWGD5thy6h",

    "2aJKL2wozXjZWYfYh",

    "Tkpr9P3eAPgoXb9cG",

    "xauSjDssL5HRecbZG",

    "5CfDkCeB8GH6f8Hey",

    "gMA3CRdjNkrLmfyGu",

    "rQgTXXbbhNMgFdkey",

    "snfSMzeXvgWLZiCBH",

    "L4oqxaDux8XJj5Gsx",

    "RmwMdnnXx3dPNvxkJ",

    "qiAadrtdC8ygAcBPe",

    "kN7Msaa4ssCjsA8mc",

    "YuDi4aSwnX2N6czvL",

    "7duG6TGpcp5AAaebF",

    "W8gpu2iSxRJEXzire",

    "cro7HYZjpxXC3Eprw",

    "pcS9wmEx847HvNdM4",

    "xSXrcijYpiejusEeZ",

    "kxueQrBXNuiRKPzaA",

    "jQzKDSzZRxmeRbXXH",

    "iASXeYXrwNPmQggsK",

    "F2qo6aCAkqw4cz8X3"
    ]




  [
    {
        "_id" : "nFp9WJZyEPJa6QuPa",
        "date" : ISODate("2018-02-20T14:20:28.577+07:00"),
        "paidAmont" : 26400,
        "user" : "yRT3PeBjPmgyyHB9h"
    },
    {
        "_id" : "c3efrz8hFEznupE7F",
        "date" : ISODate("2018-02-20T14:20:28.577+07:00"),
        "paidAmont" : 60000,
        "user" : "yRT3PeBjPmgyyHB9h"
    },
    {
        "_id" : "bHTzYbWoLtDeBEK8G",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 21600,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "FHr5xuXX6w32dH4sw",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 32800,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "fiwa7shaSsuc55XxW",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 16800,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "D9c3CuSzYzFTuhZrm",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 10400,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "mg3kgov7B5LoEgj9F",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 23200,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "Ksu3wsnsrcxu7hmea",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 7200,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "mSYFWMaDb2j3wmnu3",
        "date" : ISODate("2018-02-20T14:20:28.577+07:00"),
        "paidAmont" : 13600,
        "user" : "yRT3PeBjPmgyyHB9h"
    },
    {
        "_id" : "ErwhLkasPeXhCsgL8",
        "date" : ISODate("2018-02-27T15:13:29.341+07:00"),
        "paidAmont" : 37600,
        "user" : "BFaZM8NppKxLLs379"
    },
    {
        "_id" : "x5Apzhk3B9MPnWGkg",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 16800,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "myjbJzHnjSLnWDcPM",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 28000,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "cFSuFcWEWm3To3YSY",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 55200,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "YFw8ZgKsvqoNKS2Xq",
        "date" : ISODate("2018-02-20T14:20:28.577+07:00"),
        "paidAmont" : 4700,
        "user" : "yRT3PeBjPmgyyHB9h"
    },
    {
        "_id" : "aDj7Yrom8dHxs8Zwp",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 31200,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "MyxWipCtp73GFzeaH",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 228200,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "AjHmmJecZYdkiaQ8S",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 34400,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "PMxHorEWshp8EbkCY",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 29600,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "2Tajzvmiyqd4XNGWG",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 68000,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "EbHjtZXFBuesJ2GYz",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 13600,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "2df5uzFzh2QHFm7ar",
        "date" : ISODate("2018-02-16T15:57:38.231+07:00"),
        "paidAmont" : 63200,
        "user" : "7NqHQXGjWAnKeXed5"
    },
    {
        "_id" : "m76H4RDbWiRSoGjkD",
        "date" : ISODate("2018-02-20T14:20:28.577+07:00"),
        "paidAmont" : 39200,
        "user" : "yRT3PeBjPmgyyHB9h"
    }
]
