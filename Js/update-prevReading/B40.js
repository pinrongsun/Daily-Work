let mjs= db.wb_meterReadingJournalDetails.find({meterReadingJournalId:"020300000000229"});


mjs.forEach(function(mj){
    db.wb_meterReadingJournalDetails.update({meterReadingJournalId:'020300000000295',customerId:mj.customerId},{$set:{prevReading:mj.newReading,prevReadingDate:mj.newReadingDate}});
})
