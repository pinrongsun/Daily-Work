let start=moment('2018-01-01').toDate();
let end=moment('2018-01-30').toDate();

let barcodes=
    [
        {
            "barcode": "171146552",
            "dpc": "03062800101",
            "name": "សាលាខេត្តទី ១"
        },
        {
            "barcode": "171146553",
            "dpc": "03062800201",
            "name": "សាលាខេត្តទី ២"
        },
        {
            "barcode": "171146554",
            "dpc": "03062800301",
            "name": "មន្ទីរមុខងារសារធារណះខេត្ត"
        },
        {
            "barcode": "171146555",
            "dpc": "03062800401",
            "name": "សាលាក្រុងបាត់ដំបង"
        },
        {
            "barcode": "171146556",
            "dpc": "03062800501",
            "name": "ព្រះរាជដំណាក់"
        },
        {
            "barcode": "171146557",
            "dpc": "03062800601",
            "name": "មន្ទីរទេសចរណ៍ខេត្ត"
        },
        {
            "barcode": "171146558",
            "dpc": "03062800701",
            "name": "សាលាដំបូងខេត្តបាត់ដំបង"
        },
        {
            "barcode": "171146559",
            "dpc": "03062800801",
            "name": "មន្ទីរសាធារណៈការ និង ដឹកជញ្ជូន"
        },
        {
            "barcode": "171146560",
            "dpc": "03062800901",
            "name": "ម.សាធារណការ(ចំណតគ្រឿងចក្រ)"
        },
        {
            "barcode": "171146561",
            "dpc": "03062801001",
            "name": "មន្ទីរប្រៃណីយ៍និងទូរគមនាគមន៍"
        },
        {
            "barcode": "171146562",
            "dpc": "03062801101",
            "name": "មន្ទីរ កសិកម្មខេត្ត"
        },
        {
            "barcode": "171146563",
            "dpc": "03062801201",
            "name": "ម.សង្គមកិច្ចយុទ្ធជននិងយុវនីតិសម្បទា"
        },
        {
            "barcode": "171146564",
            "dpc": "03062801301",
            "name": "ម.ស្តារលទ្ធភាពពលកម្មកាយសម្បទា"
        },
        {
            "barcode": "171146565",
            "dpc": "03062801401",
            "name": "ម.ស្តារលទ្ធភាពពលកម្មរបួសខួរឆ្អឹងខ្នង"
        },
        {
            "barcode": "171146566",
            "dpc": "03062801501",
            "name": "មន្ទីរឧស្សាហកម្មរ៉ែនិងថាមពល"
        },
        {
            "barcode": "171146567",
            "dpc": "03062801601",
            "name": "មន្ទីរ បរិស្ថានខេត្ត"
        },
        {
            "barcode": "171146568",
            "dpc": "03062801701",
            "name": "មន្ទីរ  ពាណិជ្ជកម្ម"
        },
        {
            "barcode": "171146569",
            "dpc": "03062801901",
            "name": "ទូទស្សន៍ជាតិ"
        },
        {
            "barcode": "171146570",
            "dpc": "03062802001",
            "name": "មន្ទីរវប្បធម៌និងសីល្បៈ១(ពិពណ៏)"
        },
        {
            "barcode": "171146571",
            "dpc": "03062802101",
            "name": "មន្ទីរវប្បធម៌និងសីល្បៈ២បណ្ណាល័យ"
        },
        {
            "barcode": "171146572",
            "dpc": "03062802201",
            "name": "មន្ទីរវប្បធម៌និងសីល្បៈ៣"
        },
        {
            "barcode": "171146573",
            "dpc": "03062802301",
            "name": "មន្ទីរអភិវឌ្ឍន៍ជនបទ"
        },
        {
            "barcode": "171146574",
            "dpc": "03062802501",
            "name": "មន្ទីរ អប់រំយុវជន និង កីឡាខេត្ត"
        },
        {
            "barcode": "171146575",
            "dpc": "03062802601",
            "name": "ការិយាល័យអប់រំស្រុក បាត់ដំបង"
        },
        {
            "barcode": "171146576",
            "dpc": "03062802701",
            "name": "មណ្ឌលគរុកោសល្យភូមិភាគ១"
        },
        {
            "barcode": "171146577",
            "dpc": "03062802801",
            "name": "មណ្ឌលគរុកោសល្យភូមិភាគ២"
        },
        {
            "barcode": "171146578",
            "dpc": "03062802901",
            "name": "មណ្ឌលគរុកោសល្យភូមិភាគ៣"
        },
        {
            "barcode": "171146579",
            "dpc": "03062803001",
            "name": "សាលាគរុកោសល្យ"
        },
        {
            "barcode": "171146580",
            "dpc": "03062803101",
            "name": "សាលាកុមារពិការភ្នែកនិងកុមារគថ្លង់"
        },
        {
            "barcode": "171146581",
            "dpc": "03062803201",
            "name": "មន្ទីរ ធម្មការ និង សាសនាខេត្ត"
        },
        {
            "barcode": "171146582",
            "dpc": "03062803301",
            "name": "មន្ទីរសេដ្ឋកិច្ច និង ហិរញ្ញវត្ថុខេត្ត"
        },
        {
            "barcode": "171146583",
            "dpc": "03062803401",
            "name": "មន្ទីរពេទ្យ ធំខេត្ត"
        },
        {
            "barcode": "171146584",
            "dpc": "03062803501",
            "name": "មន្ទីរ សុខាភិបាលខត្ត"
        },
        {
            "barcode": "171146585",
            "dpc": "03062803601",
            "name": "ស្ថានីយ៍អនាម័យខេត្ត"
        },
        {
            "barcode": "171146586",
            "dpc": "03062803701",
            "name": "មណ្ឌលសុខភាព អូរចារ"
        },
        {
            "barcode": "171146587",
            "dpc": "03062803801",
            "name": "សាលាសិក្សាសុខាភិបាលភូមិភាគ"
        },
        {
            "barcode": "171146588",
            "dpc": "03062803901",
            "name": "មន្ទីរបណ្តុៈបណ្តាលវិជ្ចាជីវៈ១"
        },
        {
            "barcode": "171146589",
            "dpc": "03062804001",
            "name": "មន្ទីរបណ្តុៈបណ្តាលវិជ្ចាជីវៈ២"
        },
        {
            "barcode": "171146590",
            "dpc": "03062804201",
            "name": "អគារស្នងការដ្ឋាននគរបាលទី២"
        },
        {
            "barcode": "171146591",
            "dpc": "03062804301",
            "name": "ការិយាល័យការពារនិងអន្តរាគមន៍ទី២"
        },
        {
            "barcode": "171146592",
            "dpc": "03062804401",
            "name": "ធនធានទឹកនិងឧតុនិយម"
        },
        {
            "barcode": "171146593",
            "dpc": "03062804601",
            "name": "សាកលវិទ្យាល័យបាត់ដំបង"
        },
        {
            "barcode": "171146594",
            "dpc": "03062804701",
            "name": "សាកលវិទ្យាល័យបាត់ដំបង ទី ២"
        },
        {
            "barcode": "171146595",
            "dpc": "03062804801",
            "name": "អន្តេវាសិកដ្ឋាន សាកលវិទ្យាល័យ"
        },
        {
            "barcode": "171146596",
            "dpc": "03062804901",
            "name": "ពន្ធនាគារ ខេត្តបាត់ដំបង"
        },
        {
            "barcode": "171146597",
            "dpc": "03062805001",
            "name": "មន្ទីរផែនការខេត្ត"
        },
        {
            "barcode": "171146598",
            "dpc": "03062805101",
            "name": "ភូមិភាគ ៥"
        },
        {
            "barcode": "171146599",
            "dpc": "03062805301",
            "name": "សាលាស្រុកសង្កែ"
        },
        {
            "barcode": "171146600",
            "dpc": "03062805501",
            "name": "បញ្ជាការដ្ឋានកងរាជអាវុធហត្ថខេត្ត១"
        },
        {
            "barcode": "171146601",
            "dpc": "03062805601",
            "name": "ខណ្ឌរដ្ឋបាលជលផល"
        },
        {
            "barcode": "171146602",
            "dpc": "03062805701",
            "name": "ទំនាក់ទំនងរដ្ឋសភាព្រឹទ្ធសភា"
        },
        {
            "barcode": "171146603",
            "dpc": "03062806001",
            "name": "បុរីកុមារកំព្រាបាត់ដំបង"
        },
        {
            "barcode": "171146604",
            "dpc": "03062806101",
            "name": "មន្ទីរពេទ្យយោធភូមិភាគទី៥"
        },
        {
            "barcode": "171146605",
            "dpc": "03062806201",
            "name": "ខណ្ឌរដ្ឋបាលព្រៃឈើ"
        },
        {
            "barcode": "171146606",
            "dpc": "03062806301",
            "name": "អាគាររដ្ឋបាលពុទ្ធិកវិទ្យាល័យអ៊ឹងធួង"
        },
        {
            "barcode": "171146607",
            "dpc": "03062806401",
            "name": "សួនក្មេងនោម"
        },
        {
            "barcode": "171146608",
            "dpc": "03062806501",
            "name": "សួនផ្លូវលេខ៣"
        },
        {
            "barcode": "171146609",
            "dpc": "03062806601",
            "name": "សួននាគរាជបាញ់ទឹក"
        },
        {
            "barcode": "171146610",
            "dpc": "03062806701",
            "name": "សួនសាធារណះទី១"
        },
        {
            "barcode": "171146611",
            "dpc": "03062806801",
            "name": "សួនសាធារណៈមុខគណៈបក្ស"
        },
        {
            "barcode": "171146612",
            "dpc": "03062806901",
            "name": "សួនសាធារណះ"
        },
        {
            "barcode": "171146613",
            "dpc": "03062807001",
            "name": "សួនសាធារណៈ(តារែក ផ្លែក្រូច)"
        },
        {
            "barcode": "171146614",
            "dpc": "03062807201",
            "name": "សួនព្រែកមហាទេព"
        },
        {
            "barcode": "171146615",
            "dpc": "03062807401",
            "name": "សួនស្ទឹងខៀវ"
        },
        {
            "barcode": "171146616",
            "dpc": "03062807501",
            "name": "សួន នាគព័ន្ធ"
        },
        {
            "barcode": "171146617",
            "dpc": "03062807901",
            "name": "សួន មុខវត្តពោធិក្នុង"
        },
        {
            "barcode": "171146618",
            "dpc": "03062808301",
            "name": "សួន ក្តាន់"
        },
        {
            "barcode": "171146619",
            "dpc": "03062812601",
            "name": "សាលាពុទ្ធិព្រះសីហនុរាជ"
        },
        {
            "barcode": "171146620",
            "dpc": "03062812701",
            "name": "វិទ្យាស្ដានជាតិវិជ្ជាជីវះ"
        },
        {
            "barcode": "171146621",
            "dpc": "03062812801",
            "name": "ម.ស្ដារលទ្ធភាពពលកម្មជំងឺខួរឆ្អឹងខ្នងទី២"
        },
        {
            "barcode": "171146622",
            "dpc": "03062812901",
            "name": "មន្ទីរពណិជ្ជកម្មខេត្ត"
        }
    ];
barcodes.forEach(function(bar){
    let customer=db.wb_customer.findOne({dpc:bar.dpc});
    db.wb_meterReadingJournalDetails.update({customerId:customer._id,newReadingDate:{$gt:start,$lte:end}},{$set:{subBarcode:bar.barcode}});
});
