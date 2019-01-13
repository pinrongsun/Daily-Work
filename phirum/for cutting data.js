//db.wb_customer.find({$where:'this.streetNo.length>6'});
let customers=db.wb_customer.aggregate([{
     $project: {
                    street: { $substr: ["$streetNo", 3, -1] },
                    customerId:'$_id',
                    name:1,
                    block:1,
                }
},{
   //  $match:{street:{$gt: "299"},block:"0203022"}
    $match:{street:{$gt: "484"},block:{$nin:["0203022","0203036"]}}
},
{
    $group:{
        _id:null,
        data:{
            $push:'$customerId'
        }
    }
}]);
customers


let customerIds=customers[0].data;
db.wb_customer.remove({_id:{$in:customerIds}});
db.wb_meterReadingJournalDetails.remove({customerId:{$in:customerIds}});
db.wb_payment.remove({customerId:{$in:customerIds}});
db.wb_transaction.remove({customerId:{$in:customerIds}})
db.wb_transactionDetail.remove({customerId:{$in:customerIds}})


//cut data from March 2018
/*-----------------------------------*/




//db.wb_customer.find({$where:'this.streetNo.length>6'});
let customers=db.wb_customer.aggregate([{
    $project: {
        street: { $substr: ["$streetNo", 3, -1] },
        customerId:'$_id',
        name:1,
        block:1,
    }
},{
    //  $match:{street:{$gt: "299"},block:"0203022"}
    $match:{street:{$gt: "480"},block:{$nin:["0203022","0203036"]}}
},
    {
        $group:{
            _id:null,
            data:{
                $push:'$customerId'
            }
        }
    }]);
customers
let customerIds=[];
let mjs=db.wb_meterReadingJournalDetails.find({customerId:{$in:customerIds},newReadingDate:{$lt:moment('2018-03-01').toDate()}});
let mjsId=mjs.map(function(o){return o._id;});
let payments=db.wb_payment.find({meterJournalId:{$in:mjsId}})
let paymentsId=payments.map(function(obj){return obj._id;})
//mjsId
//paymentsId

let refIds=mjsId.concat(paymentsId);



db.wb_transactionDetail.remove({refId:{$in:refIds}})
db.wb_payment.remove({_id:{$in:paymentsId}});
db.wb_meterReadingJournalDetails.remove({_id:{$in:mjsId}});

/////////////////////////////////////////////////////////////

//db.wb_customer.find({$where:'this.streetNo.length>6'});
let customers=db.wb_customer.aggregate([{
    $project: {
        street: { $substr: ["$streetNo", 3, -1] },
        customerId:'$_id',
        name:1,
        block:1,
    }
},{
      $match:{street:{$gt: "299"},block:"0203022"}
   // $match:{street:{$gt: "480"},block:{$nin:["0203022","0203036"]}}
},
    {
        $group:{
            _id:null,
            data:{
                $push:'$customerId'
            }
        }
    }]);
customers
let customerIds=customers[0].data;
db.wb_customer.remove({_id:{$in:customerIds}});
db.wb_meterReadingJournalDetails.remove({customerId:{$in:customerIds}});
db.wb_payment.remove({customerId:{$in:customerIds}});
db.wb_transaction.remove({customerId:{$in:customerIds}})
db.wb_transactionDetail.remove({customerId:{$in:customerIds}})