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