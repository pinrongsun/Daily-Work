//db.wb_customer.find({$where:'this.streetNo.length>6'});
let customers=db.wb_customer.aggregate([{
     $project: {
                    street: { $substr: ["$streetNo", 3, -1] },
                    customerId:'$_id',
                    name:1
                }
},{
    $match:{street:{$gt: "480"}}
},
{
    $group:{
        _id:null,
        data:{
            $push:'$customerId'
        }
    }
}])
let customerIds=[];
db.wb_customer.remove({_id:{$in:customerIds}});
db.wb_meterReadingJournalDetails.remove({customerId:{$in:customerIds}});
db.wb_payment.remove({customerId:{$in:customerIds}});
db.wb_transaction.remove({customerId:{$in:customerIds}})
db.wb_transactionDetail.remove({customerId:{$in:customerIds}})