let blocks=
[];
blocks.forEach(function(cus){
    db.wb_customer.update({streetNo:cus.streetNo},{$set:{name:cus.name,khName:cus.name,address:cus.address}});
})
