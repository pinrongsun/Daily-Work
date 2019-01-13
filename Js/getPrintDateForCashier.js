db.wb_meterReadingJournalDetails.aggregate([
    
    
      {
                $project: {
                    streetNo:1,
                    street: {$substr: ["$streetNo", 3, 3]},
                    prevReadingDate:1,
                    newReadingDate: 1,
                    printDate: { $add: [ "$newReadingDate", 25*24*60*60000 ] } 
                }
            },
            
            {
                $match:{street:{$lte:'001'},
                newReadingDate:{$gte:moment('2018-04-01').toDate(),$lte:moment('2018-04-30').toDate()}}
            }
    ])
