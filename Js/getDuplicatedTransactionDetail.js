let td= db.wb_transactionDetail.find({});
let tdIds=[];
td.forEach(function(t){
    let p=db.wb_payment.findOne({_id:t.refId});
    let j=db.wb_meterReadingJournalDetails.findOne({_id:t.refId});
    if(p==null && j==null){
        tdIds.push(t._id)
    }
})
tdIds