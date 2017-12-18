

let start=moment('2017-11-10').toDate();
let end=moment('2017-11-30').toDate();

let barcodes=
    [
        {
            "barcode": "171114402",
            "dpc": "03014503201",
            "name": "សេក អាយ"
        },
        {
            "barcode": "171114403",
            "dpc": "03014500101",
            "name": "សាន គឹមឆេង"
        },
        {
            "barcode": "171114404",
            "dpc": "03014508101",
            "name": "ស្រី ម៉ាណេត"
        },
        {
            "barcode": "171114405",
            "dpc": "03014508201",
            "name": "ជឿន ស៊ីនឿន"
        },
        {
            "barcode": "171114406",
            "dpc": "03014508301",
            "name": "សំ វុន"
        },
        {
            "barcode": "171114407",
            "dpc": "03014508401",
            "name": "ជេត ស៊ន"
        },
        {
            "barcode": "171114408",
            "dpc": "03014508501",
            "name": "មិ សាមឿត"
        },
        {
            "barcode": "171114409",
            "dpc": "03014508601",
            "name": "វ៉ាន និមល"
        },
        {
            "barcode": "171114410",
            "dpc": "03014508701",
            "name": "ឡុច និមល"
        },
        {
            "barcode": "171114411",
            "dpc": "03014508801",
            "name": "យឿន យ៉ុន"
        },
        {
            "barcode": "171114412",
            "dpc": "03014508901",
            "name": "យ៉ុង យ៉ុន"
        },
        {
            "barcode": "171114413",
            "dpc": "03014509001",
            "name": "លុយ ដារ៉ា"
        },
        {
            "barcode": "171114414",
            "dpc": "03014509101",
            "name": "ឈយ រុន"
        },
        {
            "barcode": "171114415",
            "dpc": "03014509201",
            "name": "ម៉ា ស៊ីថា"
        },
        {
            "barcode": "171114416",
            "dpc": "03014509301",
            "name": "ឆាយ ណារី"
        },
        {
            "barcode": "171114417",
            "dpc": "03014509401",
            "name": "ទុយ សានិន"
        },
        {
            "barcode": "171114418",
            "dpc": "03014509501",
            "name": "គ្រួច សំអឿន"
        },
        {
            "barcode": "171114420",
            "dpc": "03014509701",
            "name": "ចាន់ ស៊ីណា"
        },
        {
            "barcode": "171114421",
            "dpc": "03014509801",
            "name": "ជំ ចំរើន"
        },
        {
            "barcode": "171114422",
            "dpc": "03014509901",
            "name": "ចេវ ឈើយ"
        },
        {
            "barcode": "171114423",
            "dpc": "03014510001",
            "name": "នួរ លីណា"
        },
        {
            "barcode": "171114424",
            "dpc": "03014510101",
            "name": "តែ ឈុន"
        },
        {
            "barcode": "171114425",
            "dpc": "03014510201",
            "name": "យ៉េម អែល"
        },
        {
            "barcode": "171114426",
            "dpc": "03014510301",
            "name": "ទេព សាមុន"
        },
        {
            "barcode": "171114427",
            "dpc": "03014510401",
            "name": "លន ស៊ីចែម"
        },
        {
            "barcode": "171114428",
            "dpc": "03014510501",
            "name": "ជុំ រិទ្ធី"
        },
        {
            "barcode": "171114430",
            "dpc": "03014510701",
            "name": "អ៊ឹង ខួង"
        },
        {
            "barcode": "171114431",
            "dpc": "03014510801",
            "name": "អ៊ី សាវុន"
        },
        {
            "barcode": "171114432",
            "dpc": "03014510901",
            "name": "ឌុក សារឿត"
        },
        {
            "barcode": "171114433",
            "dpc": "03014511001",
            "name": "សាលាជំនីក"
        },
        {
            "barcode": "171114435",
            "dpc": "03014511301",
            "name": "សុស សុវណ្ណ"
        },
        {
            "barcode": "171114436",
            "dpc": "03014511401",
            "name": "រៀម ដារា"
        },
        {
            "barcode": "171114437",
            "dpc": "03014511501",
            "name": "ម៉ៅ សាមឿន"
        },
        {
            "barcode": "171114438",
            "dpc": "03014511601",
            "name": "ទីសត្តឃាត ស/សង្កែរ"
        },
        {
            "barcode": "171114440",
            "dpc": "03014511801",
            "name": "លៀម ហ៊ុន"
        },
        {
            "barcode": "171114441",
            "dpc": "03014511901",
            "name": "ឆេង នឿត"
        },
        {
            "barcode": "171114443",
            "dpc": "03014512101",
            "name": "ណាម ឆាន់"
        },
        {
            "barcode": "171114444",
            "dpc": "03014512201",
            "name": "យុត ប្រុស"
        },
        {
            "barcode": "171114445",
            "dpc": "03014512301",
            "name": "ស្វាយ យ៉េន"
        },
        {
            "barcode": "171114447",
            "dpc": "03014512501",
            "name": "សឿន ស៊ាប"
        },
        {
            "barcode": "171114450",
            "dpc": "03014512801",
            "name": "ឯក ស៊ន"
        },
        {
            "barcode": "171114456",
            "dpc": "03014513401",
            "name": "សឿន សឿម"
        },
        {
            "barcode": "171114458",
            "dpc": "03014513601",
            "name": "កែវ សារ៉ា"
        },
        {
            "barcode": "171114459",
            "dpc": "03014513701",
            "name": "ផល វាសនា"
        },
        {
            "barcode": "171114460",
            "dpc": "03014513801",
            "name": "ឡាច វីឡា"
        },
        {
            "barcode": "171114461",
            "dpc": "03014513901",
            "name": "សត់ ឡី"
        },
        {
            "barcode": "171114462",
            "dpc": "03014514001",
            "name": "រឿម ឈន"
        },
        {
            "barcode": "171114463",
            "dpc": "03014514101",
            "name": "ម៉ាន សំណាងហាន"
        },
        {
            "barcode": "171114464",
            "dpc": "03014514201",
            "name": "ពេជ្រ វើន"
        },
        {
            "barcode": "171114465",
            "dpc": "03014500201",
            "name": "អ៊ុក វី"
        },
        {
            "barcode": "171114466",
            "dpc": "03014500301",
            "name": "ស៊ុយ សឿប"
        },
        {
            "barcode": "171114467",
            "dpc": "03014500401",
            "name": "តា កួយ"
        },
        {
            "barcode": "171114468",
            "dpc": "03014500501",
            "name": "កែវ លីយ៉េន"
        },
        {
            "barcode": "171114469",
            "dpc": "03014500601",
            "name": "ហួរ ហួន"
        },
        {
            "barcode": "171114470",
            "dpc": "03014500701",
            "name": "ឆុន សុគង់"
        },
        {
            "barcode": "171114471",
            "dpc": "03014500801",
            "name": "សោម វុទ្ធី"
        },
        {
            "barcode": "171114472",
            "dpc": "03014500901",
            "name": "ប្លង សេដ្ឋា"
        },
        {
            "barcode": "171114473",
            "dpc": "03014501001",
            "name": "ព្រាប សារឿន"
        },
        {
            "barcode": "171114474",
            "dpc": "03014501101",
            "name": "យ៉ូន យ៉ាន"
        },
        {
            "barcode": "171114475",
            "dpc": "03014501201",
            "name": "យ៉ូន យ៉ាន២"
        },
        {
            "barcode": "171114476",
            "dpc": "03014501301",
            "name": "គឹម សុង"
        },
        {
            "barcode": "171114477",
            "dpc": "03014501401",
            "name": "ញឹក ឆាត"
        },
        {
            "barcode": "171114478",
            "dpc": "03014501501",
            "name": "រ៉េត ឆុន"
        },
        {
            "barcode": "171114479",
            "dpc": "03014501601",
            "name": "កាំ ស៊ាន"
        },
        {
            "barcode": "171114480",
            "dpc": "03014501801",
            "name": "សេង សាវឿន"
        },
        {
            "barcode": "171114481",
            "dpc": "03014501701",
            "name": "ម៉ក់ ទូច"
        },
        {
            "barcode": "171114482",
            "dpc": "03014501901",
            "name": "កៅ ប៊ួយ"
        },
        {
            "barcode": "171114483",
            "dpc": "03014502201",
            "name": "វ៉ាន សាវឿង"
        },
        {
            "barcode": "171114484",
            "dpc": "03014502001",
            "name": "ឡេង ណារី"
        },
        {
            "barcode": "171114485",
            "dpc": "03014502101",
            "name": "ជឿម ពុធហេង"
        },
        {
            "barcode": "171114486",
            "dpc": "03014502301",
            "name": "តូ ទុំ"
        },
        {
            "barcode": "171114487",
            "dpc": "03014502401",
            "name": "រ័ត្ន សារ៉ុម"
        },
        {
            "barcode": "171114488",
            "dpc": "03014502501",
            "name": "មាន ញ៉ាន"
        },
        {
            "barcode": "171114490",
            "dpc": "03014502701",
            "name": "ឡាប ឡាង"
        },
        {
            "barcode": "171114491",
            "dpc": "03014502801",
            "name": "លៀប លឿម"
        },
        {
            "barcode": "171114492",
            "dpc": "03014502901",
            "name": "ឯក សេង"
        },
        {
            "barcode": "171114493",
            "dpc": "03014503001",
            "name": "វ៉ាន ស៊ីនួន"
        },
        {
            "barcode": "171114494",
            "dpc": "03014503101",
            "name": "ហ៊ាន ធឿន"
        },
        {
            "barcode": "171114495",
            "dpc": "03014503301",
            "name": "ឈឺន វើន"
        },
        {
            "barcode": "171114496",
            "dpc": "03014503401",
            "name": "ឆ សុធឿត"
        },
        {
            "barcode": "171114497",
            "dpc": "03014503501",
            "name": "ហ៊ាន តឹកលី"
        },
        {
            "barcode": "171114498",
            "dpc": "03014503601",
            "name": "អ៊ុក សុធី"
        },
        {
            "barcode": "171114499",
            "dpc": "03014503701",
            "name": "ម៉ម មួន"
        },
        {
            "barcode": "171114500",
            "dpc": "03014503801",
            "name": "ឆិន ចន្ទ័សុធី"
        },
        {
            "barcode": "171114501",
            "dpc": "03014503901",
            "name": "ងិន ខេមរិទ្ធ"
        },
        {
            "barcode": "171114502",
            "dpc": "03014504001",
            "name": "ខាន់ ផល្លា"
        },
        {
            "barcode": "171114503",
            "dpc": "03014504101",
            "name": "ម៉ុក ដារ៉ាឌីកា"
        },
        {
            "barcode": "171114504",
            "dpc": "03014504201",
            "name": "វិត្ត កូឡា"
        },
        {
            "barcode": "171114505",
            "dpc": "03014504301",
            "name": "អេង ស៊ីផា"
        },
        {
            "barcode": "171114506",
            "dpc": "03014504401",
            "name": "នី រស្មី"
        },
        {
            "barcode": "171114507",
            "dpc": "03014504501",
            "name": "អ៊ំ ម៉ាញ"
        },
        {
            "barcode": "171114508",
            "dpc": "03014504601",
            "name": "ឡី ឡា"
        },
        {
            "barcode": "171114509",
            "dpc": "03014504701",
            "name": "ឆន ឡី"
        },
        {
            "barcode": "171114510",
            "dpc": "03014504801",
            "name": "មាស សាវ៉ន"
        },
        {
            "barcode": "171114511",
            "dpc": "03014504901",
            "name": "ស៊ុន ស៊ែម"
        },
        {
            "barcode": "171114512",
            "dpc": "03014505001",
            "name": "ឈឿត សារឿត"
        },
        {
            "barcode": "171114513",
            "dpc": "03014505101",
            "name": "វ៉ាន សុខុន"
        },
        {
            "barcode": "171114514",
            "dpc": "03014505201",
            "name": "ជូន រឿត"
        },
        {
            "barcode": "171114515",
            "dpc": "03014505301",
            "name": "គង់ លន"
        },
        {
            "barcode": "171114516",
            "dpc": "03014505401",
            "name": "អំ ពុទ្ធារី"
        },
        {
            "barcode": "171114517",
            "dpc": "03014505501",
            "name": "អ៊ូរ ហឿង"
        },
        {
            "barcode": "171114518",
            "dpc": "03014505601",
            "name": "ទុយ ផល"
        },
        {
            "barcode": "171114519",
            "dpc": "03014505701",
            "name": "វ៉ាន់ ណាវី"
        },
        {
            "barcode": "171114520",
            "dpc": "03014505801",
            "name": "អ៊ុក ស៊ីនួន"
        },
        {
            "barcode": "171114521",
            "dpc": "03014505901",
            "name": "វ៉ៃ ប៉ូ"
        },
        {
            "barcode": "171114522",
            "dpc": "03014506001",
            "name": "ភិន សុវណ្ណដាវី"
        },
        {
            "barcode": "171114523",
            "dpc": "03014506101",
            "name": "អែវ និមល"
        },
        {
            "barcode": "171114524",
            "dpc": "03014506201",
            "name": "យ៉ាន ឧស្មាន"
        },
        {
            "barcode": "171114525",
            "dpc": "03014506301",
            "name": "យ៉ើ សោហ្វី"
        },
        {
            "barcode": "171114526",
            "dpc": "03014506401",
            "name": "នេះ យាកតូក"
        },
        {
            "barcode": "171114527",
            "dpc": "03014506501",
            "name": "ម៉ែន ធារ៉ា"
        },
        {
            "barcode": "171114528",
            "dpc": "03014506601",
            "name": "វី ចំរើន"
        },
        {
            "barcode": "171114529",
            "dpc": "03014506801",
            "name": "ប៊ី ហន"
        },
        {
            "barcode": "171114530",
            "dpc": "03014506701",
            "name": "ផាត ចាន់រិទ្ធ"
        },
        {
            "barcode": "171114531",
            "dpc": "03014506901",
            "name": "ហូវ ហៀប"
        },
        {
            "barcode": "171114532",
            "dpc": "03014507001",
            "name": "ប៊ូរ វណ្ណនី"
        },
        {
            "barcode": "171114533",
            "dpc": "03014507101",
            "name": "ចាន់ សេង"
        },
        {
            "barcode": "171114534",
            "dpc": "03014507201",
            "name": "អោប សាវឿន"
        },
        {
            "barcode": "171114535",
            "dpc": "03014507301",
            "name": "ហុង ហោ"
        },
        {
            "barcode": "171114536",
            "dpc": "03014507501",
            "name": "ឈិន សុចិត្រា"
        },
        {
            "barcode": "171114537",
            "dpc": "03014507401",
            "name": "ខៀវ វិចិត្ត"
        },
        {
            "barcode": "171114538",
            "dpc": "03014507701",
            "name": "សុង ញឹប"
        },
        {
            "barcode": "171114539",
            "dpc": "03014507801",
            "name": "លិក ហ្វិចលាង"
        },
        {
            "barcode": "171114540",
            "dpc": "03014507901",
            "name": "សុត សុជាតិ"
        },
        {
            "barcode": "171114541",
            "dpc": "03014508001",
            "name": "បឹង រាត្រី"
        },
        {
            "barcode": "171114542",
            "dpc": "03014511101",
            "name": "សុស សាវន្ត័"
        }
    ];
barcodes.forEach(function(bar){
    let customer=db.wb_customer.findOne({dpc:bar.dpc});
    db.wb_meterReadingJournalDetails.update({customerId:customer._id,newReadingDate:{$gt:start,$lte:end}},{$set:{subBarcode:bar.barcode}});
});