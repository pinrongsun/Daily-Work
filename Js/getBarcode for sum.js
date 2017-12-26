let start=moment('2017-11-10').startOf('days').toDate();
let st=moment('2017-11-24').startOf('days').toDate();
let end=moment('2017-11-26').endOf('days').toDate();


//cashier1 7NqHQXGjWAnKeXed5
//cashier2 yRT3PeBjPmgyyHB9h
db.createView('vw_paymentCashier1Till', 'wb_payment',[
                {$match: {date:{$gt:st,$lt:end},createdBy:"yRT3PeBjPmgyyHB9h"}},
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
                    $match:{'meterReadingJournalDetailDoc.newReadingDate':{$gt:start}}
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
                        streetNo: { $substr: ["$customerDoc.streetNo", 3, -1] },
                        name:'$customerDoc.khName',
                        street:'$customerDoc.streetNo',
                        barcode:'$meterReadingJournalDetailDoc.barcode',
                        subBarcode:'$meterReadingJournalDetailDoc.subBarcode',
                        paidAmount: 1
                       
                    }
                },
               /* {
                    $match: { streetNo : {$lte: "480"}}
                },*/
                //----------------------------//

                /*
                {$unwind: {path: '$categoryDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$classDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$districtDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$quartierDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$blockDoc', preserveNullAndEmptyArrays: true}},
                {$unwind: {path: '$meterTypeDoc', preserveNullAndEmptyArrays: true}},*/
                {
                    $sort:{'customerDoc.dpc':1}
                },
              /*  {
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