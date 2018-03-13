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



 [

    "ZCaDLPWxtAuuv8PQr",
    "FkGfgPQ8dXPMiAwxP",
    "sbGE2KEptiPWqwPrY",
    "dFZa7mkqzhcaDgA3t",
    "mrnfuvchzWYCzmfvK",
    "awQSm3SXzQSRebxf5",
    "nFp9WJZyEPJa6QuPa",
    "c3efrz8hFEznupE7F",
    "bHTzYbWoLtDeBEK8G",
    "FHr5xuXX6w32dH4sw",
    "fiwa7shaSsuc55XxW",
    "D9c3CuSzYzFTuhZrm",
    "mg3kgov7B5LoEgj9F",
    "Ksu3wsnsrcxu7hmea",
    "mSYFWMaDb2j3wmnu3",
    "ErwhLkasPeXhCsgL8",
    "x5Apzhk3B9MPnWGkg",
    "myjbJzHnjSLnWDcPM",
    "cFSuFcWEWm3To3YSY",
    "YFw8ZgKsvqoNKS2Xq",
    "aDj7Yrom8dHxs8Zwp",
    "FGCjXFZfn9Jt6fiTY",
    "MyxWipCtp73GFzeaH",
    "uxfs38dhgqwXZeDpy",
    "AjHmmJecZYdkiaQ8S",
    "PMxHorEWshp8EbkCY",
    "2Tajzvmiyqd4XNGWG",
    "oN6h9w9fXQRC5SaGF",
    "EbHjtZXFBuesJ2GYz",
    "2df5uzFzh2QHFm7ar",
    "m76H4RDbWiRSoGjkD"
]