db.vw_customer.aggregate([
    {
        $project: {
            street: { $substr: ["$streetNo", 3, -1] },
            _id: 1,
            name: 1,
            khName: 1,
            dpc: 1,
            district: 1,
            quartier: 1,
            block: 1,
            folio: 1,
            successor: 1,
            category: 1,
            activity: 1,
            group: 1,
            tariff: 1,
            class: 1,
            position: 1,
            operationCode: 1,
            streetNo: 1,
            address: 1,
            newReading: 1,
            prevReading: 1,
            prevReadingDate: 1,
            newReadingDate: 1,
            avgWaterConsumption: 1,
            meterType: '$contract.meterTypeId',
            meterCode: '$contract.meterCode'

        }
    }, 
   /* {
        $match: { street: { $lt: "480" }, position: 'active' }
    },*/
  
    {
        $lookup: {
            from: 'wb_meterReadingJournalDetails',
            localField: '_id',
            foreignField: 'customerId',
            as: 'meterReadingJournalDetailDoc',
        }
    },
    
    { $unwind: { path: '$meterReadingJournalDetailDoc', preserveNullAndEmptyArrays: true } },
      {
        $match:{
            'meterReadingJournalDetailDoc.newReadingDate':{$gt:moment('2017-11-01').startOf('month').toDate(),$lt:moment('2017-11-01').endOf('month').toDate()}
      }
    },
      {
        $lookup: {
            from: 'wb_meterReadingJournal',
            localField: '_id',
            foreignField: 'meterReadingJournalId',
            as: 'meterReadingJournalDoc',
        }
    },
    { $unwind: { path: '$meterReadingJournalDoc', preserveNullAndEmptyArrays: true } },
    
    
  
    {
        $lookup: {
            from: 'wb_metercode',
            localField: 'meterCode',
            foreignField: '_id',
            as: 'meterCodeDoc',
        }
    },

    {
        $lookup: {
            from: 'wb_activity',
            localField: 'activity',
            foreignField: '_id',
            as: 'activityDoc',
        }
    },
    {
        $lookup: {
            from: 'wb_meterType',
            localField: 'meterType',
            foreignField: '_id',
            as: 'meterTypeDoc',
        }
    },
    {
        $lookup: {
            from: 'wb_tariff',
            localField: 'tariff',
            foreignField: '_id',
            as: 'tariffDoc',
        }
    },
    {
        $lookup: {
            from: 'wb_category',
            localField: 'category',
            foreignField: '_id',
            as: 'categoryDoc',
        }
    },
    {
        $lookup: {
            from: 'wb_district',
            localField: 'district',
            foreignField: '_id',
            as: 'districtDoc',
        }
    }, {
        $lookup: {
            from: 'wb_quartier',
            localField: 'quartier',
            foreignField: '_id',
            as: 'quartierDoc',
        }
    }, {
        $lookup: {
            from: 'wb_block',
            localField: 'block',
            foreignField: '_id',
            as: 'blockDoc',
        }
    },

    { $unwind: { path: '$activityDoc', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$meterCodeDoc', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$meterTypeDoc', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$tariffDoc', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$categoryDoc', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$districtDoc', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$quartierDoc', preserveNullAndEmptyArrays: true } },
    { $unwind: { path: '$blockDoc', preserveNullAndEmptyArrays: true } },
    {
        $project: {
            Name: '$name',
            //  khName: 1,
            'Search Name': '$streetNo',
            Street: '$streetNo',
            Address: '$address',
            DPC: '$dpc',
            'Prev Reading Date': '$prevReadingDate',
            'Prev Reading': '$prevReading',
            'Name (Khmer)': '$khName',
            'meterReadingJournalDoc':1,
            'meterReadingJournalDetailDoc':1

        }
    }
])
