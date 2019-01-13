let payment=

db.wb_payment.aggregate([
                {$match: {}},
                {
                    $lookup: {
                        from: 'wb_meterReadingJournalDetails',
                        localField: 'meterJournalId',
                        foreignField: '_id',
                        as: 'meterReadingJournalDetailDoc'
                    }
                },
                {$unwind: {path: '$meterReadingJournalDetailDoc', preserveNullAndEmptyArrays: true}},

                {
                    $match:{}
                },
                {
                    $lookup: {
                        from: 'wb_customer',
                        localField: 'meterReadingJournalDetailDoc.customerId',
                        foreignField: '_id',
                        as: 'customerDoc'
                    }
                },
              /*  {
                    $lookup: {
                        from: 'wb_category',
                        localField: 'category',
                        foreignField: '_id',
                        as: 'categoryDoc'
                    }
                },
                {
                    $lookup: {
                        from: 'wb_class',
                        localField: 'class',
                        foreignField: '_id',
                        as: 'classDoc'
                    }
                },
                {
                    $lookup: {
                        from: 'wb_district',
                        localField: 'district',
                        foreignField: '_id',
                        as: 'districtDoc'
                    }
                },
                {
                    $lookup: {
                        from: 'wb_quartier',
                        localField: 'quartier',
                        foreignField: '_id',
                        as: 'quartierDoc'
                    }
                },
                {
                    $lookup: {
                        from: 'wb_block',
                        localField: 'block',
                        foreignField: '_id',
                        as: 'blockDoc'
                    }
                },
                {
                    $lookup: {
                        from: 'wb_meterType',
                        localField: 'customerDoc.contract.meterTypeId',
                        foreignField: '_id',
                        as: 'meterTypeDoc'
                    }
                },*/
                {$unwind: {path: '$customerDoc', preserveNullAndEmptyArrays: true}},
                //Just custom will update later
                //----------------------------//
                {
                    $project: {
                       // streetNo: { $substr: ["$customerDoc.streetNo", 3, -1] },
                        //meterReadingJournalDetailDoc:1,
                       // customerDoc:1,
                       // paidAmount: 1,
                       // dueAmount: 1,
                      //  date: 1,
                      //  balance: 1,
                       // createdBy:1,
                       // waterConsumption:'$meterReadingJournalDetailDoc.waterConsumption',
                       // totalMaintenanceFee: '$meterReadingJournalDetailDoc.maintenanceFee',
                       // totalContributionFee:  '$meterReadingJournalDetailDoc.contributionFee',
                       // totalWaterUsage: '$meterReadingJournalDetailDoc.total',
                        grandTotalWaterUsage: '$meterReadingJournalDetailDoc.grandTotal',
                        totalPaidAmount:  '$paidAmount',
                        totalDueAmount:'$dueAmount',
                        totalBalance:'$balance',
                    }
                },
                {
                    $match: {}
                },
                //----------------------------//

                /*
                {$unwind: {path: '$categoryDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$classDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$districtDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$quartierDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$blockDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$meterTypeDoc', preserveNullAndEmptyArrays: true}},*/
               /* {
                    $sort:{'customerDoc.dpc':1}
                },
                {
                    $group: {
                        _id: {
                            blockId: '$meterReadingJournalDetailDoc.block',
                        },
                        blockId: {
                            $last: '$meterReadingJournalDetailDoc.block'
                        },
                        data: {
                            $push: '$$ROOT'
                        },
                        totalWaterConsumption: {
                            $sum: '$meterReadingJournalDetailDoc.waterConsumption'
                        },
                        totalMaintenanceFee: {
                            $sum: '$meterReadingJournalDetailDoc.maintenanceFee'
                        },
                        totalContributionFee: {
                            $sum: '$meterReadingJournalDetailDoc.contributionFee'
                        },
                        totalWaterUsage: {
                            $sum: '$meterReadingJournalDetailDoc.total'
                        },
                        totalPaidAmount: {
                            $sum: '$paidAmount'
                        },
                        totalDueAmount:{
                            $sum: '$dueAmount'
                        },
                        totalBalance:{
                            $sum: '$balance'
                        },
                        numberOfInvoice:{
                            $sum:1
                        }
                    }
                },
                {
                    $lookup: {
                        from: 'wb_block',
                        localField: 'blockId',
                        foreignField: '_id',
                        as: 'blockDoc'
                    }
                },

                {
                    $unwind: {
                        path: '$blockDoc',
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $lookup: {
                        from: 'wb_quartier',
                        localField: 'blockDoc.quartierId',
                        foreignField: '_id',
                        as: 'blockDoc.quartierDoc'
                    }},
                {
                    $lookup: {
                        from: 'wb_district',
                        localField: 'blockDoc.districtCode',
                        foreignField: '_id',
                        as: 'blockDoc.districtDoc'
                    }
                },
                {
                    $unwind: {
                        path: '$blockDoc.quartierDoc',
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $unwind: {
                        path: '$blockDoc.districtDoc',
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $sort:{
                        'blockDoc.code':1,
                    }
                },
                {
                    $group: {
                        _id:null,
                        blocks: {
                            $push: '$$ROOT'
                        },
                        totalWaterConsumption: {
                            $sum: '$totalWaterConsumption'
                        },
                        totalMaintenanceFee: {
                            $sum: '$totalMaintenanceFee'
                        },
                        totalContributionFee: {
                            $sum: '$totalContributionFee'
                        },
                        totalWaterUsage: {
                            $sum: '$totalWaterUsage'
                        },
                        totalPaidAmount: {
                            $sum: '$totalPaidAmount'
                        },
                        totalDueAmount:{
                            $sum: '$totalDueAmount'
                        },
                        totalBalance:{
                            $sum: '$totalBalance'
                        },
                        numberOfInvoice:{
                            $sum:'$numberOfInvoice'
                        }
                    }
                }*/
            ]);
            
       // payment.count()
        let ids=[];
        
        
    ids= payment.map(function(p){
         if(NumberInt(p.grandTotalWaterUsage)!=NumberInt(p.totalDueAmount)){
             return {_id:p._id,g:p.grandTotalWaterUsage,d:p.totalDueAmount};
         }
    });
    ids
