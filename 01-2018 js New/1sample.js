let start=moment('2018-01-01').toDate();
let end=moment('2018-01-30').toDate();

let barcodes=



barcodes.forEach(function(bar){
    let customer=db.wb_customer.findOne({dpc:bar.dpc});
    db.wb_meterReadingJournalDetails.update({customerId:customer._id,newReadingDate:{$gt:start,$lte:end}},{$set:{subBarcode:bar.barcode}});
});
