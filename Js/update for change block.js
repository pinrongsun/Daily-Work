let customers =db.wb_customer.find({});
customers.forEach(function(customer){

    let changeBlock = [
        {
            "customerDistrict" : customer.district,
            "customerQuartier" : customer.quartier,
            "customerBlock" : customer.block,
            "customerFolio" : customer.folio,
            "customerSuccessor" :customer.successor,
            "customerStreet" : customer.streetNo,
            "customerDPC" : customer.dpc,
            "newDistrict" : customer.district,
            "newQuartier" : customer.quartier,
            "newBlock" : customer.block,
            "newFolio" : customer.folio,
            "newSuccessor" : customer.successor,
            "newStreet" : customer.streetNo,
            "newDPC" : customer.dpc,
            "customerId" : customer._id,
            "rolesArea" : "0203",
        }
    ];
    db.wb_customer.update({_id:customer._id},{$set:{changeBlock:changeBlock}});
});
/*
 let customers =db.wb_customer.find({});
 customers.forEach(function(customer){
 db.wb_meterReadingJournalDetails.update({customerId:customer._id},{$set:{dpc:customer.dpc,streetNo:customer.streetNo}},{multi:true});
 });*/