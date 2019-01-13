let start=moment('2017-11-10').toDate();
let end=moment('2017-11-30').toDate();

let barcodes=
[
  {
    "barcode": "171110043",
    "dpc": "03031747001",
    "name": "អ៊ឹង ឡៃហុក"
  },
  {
    "barcode": "171110044",
    "dpc": "03031746701",
    "name": "ស៊ិន វ៉ាត"
  },
  {
    "barcode": "171110045",
    "dpc": "03031745801",
    "name": "សំ គីម"
  },
  {
    "barcode": "171110046",
    "dpc": "03031747501",
    "name": "ហេង ណែត"
  },
  {
    "barcode": "171110047",
    "dpc": "03031746101",
    "name": "ពុត ពៅ"
  },
  {
    "barcode": "171110048",
    "dpc": "03031746001",
    "name": "ប៉ែន សុគន្ធី"
  },
  {
    "barcode": "171110049",
    "dpc": "03031729801",
    "name": "ទែន ជំនិត"
  },
  {
    "barcode": "171110050",
    "dpc": "03031729701",
    "name": "គង់ ឆាយ (ខាងក្រៅ)"
  },
  {
    "barcode": "171110051",
    "dpc": "03031729601",
    "name": "គង់ ឆាយ (ខាងក្នុង)"
  },
  {
    "barcode": "171110052",
    "dpc": "03031729501",
    "name": "ប៊ុន ចាន់នី"
  },
  {
    "barcode": "171110053",
    "dpc": "03031729401",
    "name": "ស៊ិង យឿង"
  },
  {
    "barcode": "171110054",
    "dpc": "03031729301",
    "name": "សេក ឃីម"
  },
  {
    "barcode": "171110055",
    "dpc": "03031729201",
    "name": "គឹម ស៊្រុន"
  },
  {
    "barcode": "171110056",
    "dpc": "03031729101",
    "name": "មាស កាន"
  },
  {
    "barcode": "171110057",
    "dpc": "03031729001",
    "name": "ហេង ស៊ីថន"
  },
  {
    "barcode": "171110058",
    "dpc": "03031730001",
    "name": "បឹង ឡោម"
  },
  {
    "barcode": "171110059",
    "dpc": "03031728901",
    "name": "អ៊ឹម សូត្រ"
  },
  {
    "barcode": "171110060",
    "dpc": "03031730301",
    "name": "ញ៉ញ់ ជល"
  },
  {
    "barcode": "171110061",
    "dpc": "03031728801",
    "name": "នង ឃីម"
  },
  {
    "barcode": "171110062",
    "dpc": "03031730101",
    "name": "ថោង ឡាយ"
  },
  {
    "barcode": "171110063",
    "dpc": "03031728701",
    "name": "លិញ ម្លិៈ"
  },
  {
    "barcode": "171110064",
    "dpc": "03031728601",
    "name": "សុខ សុម៉ាលី"
  },
  {
    "barcode": "171110065",
    "dpc": "03031731701",
    "name": "អ៊ុំ សុខម៉េត"
  },
  {
    "barcode": "171110066",
    "dpc": "03031731801",
    "name": "ញ៉ែម យឿប"
  },
  {
    "barcode": "171110067",
    "dpc": "03031731901",
    "name": "វរ សានិត"
  },
  {
    "barcode": "171110068",
    "dpc": "03031730401",
    "name": "ម៉ៅ សុភាព"
  },
  {
    "barcode": "171110069",
    "dpc": "03031730501",
    "name": "អ៊ុក ស៊ីផាន់"
  },
  {
    "barcode": "171110070",
    "dpc": "03031730701",
    "name": "សូ សុង"
  },
  {
    "barcode": "171110071",
    "dpc": "03031730801",
    "name": "គុយ វង"
  },
  {
    "barcode": "171110072",
    "dpc": "03031730901",
    "name": "ចក់ ចរិយា"
  },
  {
    "barcode": "171110073",
    "dpc": "03031731001",
    "name": "អ៊ីវ សម្បត្តិ"
  },
  {
    "barcode": "171110074",
    "dpc": "03031731101",
    "name": "សែន ចាន់ដារ៉ា"
  },
  {
    "barcode": "171110075",
    "dpc": "03031731201",
    "name": "ស៊ិន ស៊ីថន"
  },
  {
    "barcode": "171110076",
    "dpc": "03031731301",
    "name": "ញ៉ែម សុផើន"
  },
  {
    "barcode": "171110077",
    "dpc": "03031731401",
    "name": "ទាវ អោម"
  },
  {
    "barcode": "171110078",
    "dpc": "03031731501",
    "name": "សុខ ជុំ"
  },
  {
    "barcode": "171110079",
    "dpc": "03031731601",
    "name": "គា សេង"
  },
  {
    "barcode": "171110080",
    "dpc": "03031729901",
    "name": "ញ៉ែម ឡី"
  },
  {
    "barcode": "171110081",
    "dpc": "03031728501",
    "name": "អ៊ិត តាន់"
  },
  {
    "barcode": "171110082",
    "dpc": "03031735701",
    "name": "រឿន មករា"
  },
  {
    "barcode": "171110083",
    "dpc": "03031730201",
    "name": "យន់ ថា"
  },
  {
    "barcode": "171110084",
    "dpc": "03031728301",
    "name": "កែវ វុត្ថា"
  },
  {
    "barcode": "171110085",
    "dpc": "03031728201",
    "name": "ជា ត្រឹក"
  },
  {
    "barcode": "171110086",
    "dpc": "03031728101",
    "name": "ញឹក ថន"
  },
  {
    "barcode": "171110087",
    "dpc": "03031727901",
    "name": "ជា ណៃ"
  },
  {
    "barcode": "171110088",
    "dpc": "03031727801",
    "name": "យ៉ត ប៊ុនវឿត"
  },
  {
    "barcode": "171110089",
    "dpc": "03031727701",
    "name": "ស៊ា សុគន្ធ"
  },
  {
    "barcode": "171110090",
    "dpc": "03031727601",
    "name": "ខៀវ វិន"
  },
  {
    "barcode": "171110091",
    "dpc": "03031727501",
    "name": "រុំ សឿត"
  },
  {
    "barcode": "171110092",
    "dpc": "03031727401",
    "name": "ហ៊ុន សាវុឌ្ឍ"
  },
  {
    "barcode": "171110093",
    "dpc": "03031727301",
    "name": "ជា ទ្រី"
  },
  {
    "barcode": "171110094",
    "dpc": "03031727201",
    "name": "លី ហួត"
  },
  {
    "barcode": "171110095",
    "dpc": "03031727101",
    "name": "ស៊ូ ស៊ានយន"
  },
  {
    "barcode": "171110096",
    "dpc": "03031727001",
    "name": "លីវ ស៊ុនលាង"
  },
  {
    "barcode": "171110097",
    "dpc": "03031726901",
    "name": "អ៊ុំ រ៉ុន"
  },
  {
    "barcode": "171110098",
    "dpc": "03031726801",
    "name": "យឹម ភក្តី"
  },
  {
    "barcode": "171110099",
    "dpc": "03031726701",
    "name": "ម៉ៅ ម៉ាលី"
  },
  {
    "barcode": "171110100",
    "dpc": "03031726601",
    "name": "គឹម រតនៈ"
  },
  {
    "barcode": "171110101",
    "dpc": "03031726501",
    "name": "សែម សំ"
  },
  {
    "barcode": "171110102",
    "dpc": "03031726401",
    "name": "ឃួន ស៊ីថា"
  },
  {
    "barcode": "171110103",
    "dpc": "03031726301",
    "name": "ប៉ែន ទូច"
  },
  {
    "barcode": "171110104",
    "dpc": "03031726201",
    "name": "លី សុខហ៊ុយ"
  },
  {
    "barcode": "171110105",
    "dpc": "03031726101",
    "name": "ប៉ោ ស៊ីណា"
  },
  {
    "barcode": "171110106",
    "dpc": "03031726001",
    "name": "វង្ស ហួត"
  },
  {
    "barcode": "171110107",
    "dpc": "03031725801",
    "name": "ឌុក ធារី"
  },
  {
    "barcode": "171110108",
    "dpc": "03031725901",
    "name": "សុខ អៀម"
  },
  {
    "barcode": "171110109",
    "dpc": "03031725701",
    "name": "យីន គឹមតឹង"
  },
  {
    "barcode": "171110110",
    "dpc": "03031725601",
    "name": "យូ វណ្ណៈ"
  },
  {
    "barcode": "171110111",
    "dpc": "03031725501",
    "name": "សឹង នី"
  },
  {
    "barcode": "171110112",
    "dpc": "03031725401",
    "name": "សុវណ្ណ វឿន"
  },
  {
    "barcode": "171110113",
    "dpc": "03031725301",
    "name": "ចាន់ កុសល់"
  },
  {
    "barcode": "171110114",
    "dpc": "03031725201",
    "name": "គឹម ឡុង"
  },
  {
    "barcode": "171110115",
    "dpc": "03031725101",
    "name": "គឹម លាង"
  },
  {
    "barcode": "171110116",
    "dpc": "03031725001",
    "name": "ថាច់ សាមិត"
  },
  {
    "barcode": "171110117",
    "dpc": "03031724901",
    "name": "ធឹម សុគន្ធ"
  },
  {
    "barcode": "171110118",
    "dpc": "03031724801",
    "name": "គឹម គិមអេង"
  },
  {
    "barcode": "171110119",
    "dpc": "03031724701",
    "name": "ផេង ភន"
  },
  {
    "barcode": "171110120",
    "dpc": "03031724601",
    "name": "ថាច់ ម៉ឹង"
  },
  {
    "barcode": "171110121",
    "dpc": "03031724501",
    "name": "ឆេង សម្បត្តិ"
  },
  {
    "barcode": "171110122",
    "dpc": "03031724401",
    "name": "ហុន ឃុនឆឺត"
  },
  {
    "barcode": "171110123",
    "dpc": "03031724301",
    "name": "ប៊ុត អៀម"
  },
  {
    "barcode": "171110124",
    "dpc": "03031724201",
    "name": "លីវ គឹមឆេង"
  },
  {
    "barcode": "171110125",
    "dpc": "03031724101",
    "name": "អ៊ិត ទៀង"
  },
  {
    "barcode": "171110126",
    "dpc": "03031724001",
    "name": "ហម សៀកឡាយ"
  },
  {
    "barcode": "171110127",
    "dpc": "03031723901",
    "name": "ប៉ូ សម្បត្តិ"
  },
  {
    "barcode": "171110128",
    "dpc": "03031745701",
    "name": "ចៅ សាន់ទី"
  },
  {
    "barcode": "171110129",
    "dpc": "03031746301",
    "name": "ឡូញ ឈៀង"
  },
  {
    "barcode": "171110130",
    "dpc": "03031746501",
    "name": "ឡុង ឌាល"
  },
  {
    "barcode": "171110131",
    "dpc": "03031746401",
    "name": "វ៉ា ភ្សេម"
  },
  {
    "barcode": "171110132",
    "dpc": "03031747701",
    "name": "សាំង យូហេង"
  },
  {
    "barcode": "171110133",
    "dpc": "03031747801",
    "name": "ឯក សារុំ"
  },
  {
    "barcode": "171110134",
    "dpc": "03031747601",
    "name": "ភេន  សុភា"
  },
  {
    "barcode": "171110135",
    "dpc": "03031746801",
    "name": "ហេង សំអាត"
  },
  {
    "barcode": "171110136",
    "dpc": "03031746901",
    "name": "អនុវិទ្យាល័យ ទួលតាឯក"
  },
  {
    "barcode": "171110137",
    "dpc": "03031747401",
    "name": "សាន ពលៈ"
  },
  {
    "barcode": "171110138",
    "dpc": "03031747101",
    "name": "គាម ងនលី"
  },
  {
    "barcode": "171110139",
    "dpc": "03031747301",
    "name": "ម៉ម រ័ត្នមុនី"
  },
  {
    "barcode": "171110140",
    "dpc": "03031747201",
    "name": "ដាញ់ សារី"
  },
  {
    "barcode": "171110141",
    "dpc": "03031745601",
    "name": "ប៊ុន ធឿម"
  },
  {
    "barcode": "171110142",
    "dpc": "03031745901",
    "name": "ហាក់ ស៊្រុន"
  },
  {
    "barcode": "171110143",
    "dpc": "03031747901",
    "name": "ជូ ហឹង"
  },
  {
    "barcode": "171110144",
    "dpc": "03031746201",
    "name": "យឿន  ស្រីសាប"
  },
  {
    "barcode": "171110145",
    "dpc": "03031715401",
    "name": "ស្រី អូន"
  },
  {
    "barcode": "171110146",
    "dpc": "03031742201",
    "name": "ទេព  ប៊ុនលី"
  },
  {
    "barcode": "171110147",
    "dpc": "03031742401",
    "name": "សាង  ភីន"
  },
  {
    "barcode": "171110148",
    "dpc": "03031741201",
    "name": "លឹម  គង់"
  },
  {
    "barcode": "171110149",
    "dpc": "03031742701",
    "name": "ធួន  រ៉ាវុធ"
  },
  {
    "barcode": "171110150",
    "dpc": "03031742601",
    "name": "ឈួយ  វណ្ណៈ"
  },
  {
    "barcode": "171110151",
    "dpc": "03031745101",
    "name": "ហាក់ ឡាយ ២"
  },
  {
    "barcode": "171110152",
    "dpc": "03031742301",
    "name": "យន់ សុគន្ធ"
  },
  {
    "barcode": "171110153",
    "dpc": "03031740601",
    "name": "ទួត   សំអាង"
  },
  {
    "barcode": "171110154",
    "dpc": "03031741701",
    "name": "គុយ  ម៉េង"
  },
  {
    "barcode": "171110155",
    "dpc": "03031741601",
    "name": "ឈុំ ឈុត"
  },
  {
    "barcode": "171110156",
    "dpc": "03031739801",
    "name": "ខាន់ ម៉ាណេ"
  },
  {
    "barcode": "171110157",
    "dpc": "03031735801",
    "name": "វ៉ាន់ ស៊ឹមវ៉ា"
  },
  {
    "barcode": "171110158",
    "dpc": "03031735901",
    "name": "អ៊ឹម បណ្ឌិត"
  },
  {
    "barcode": "171110159",
    "dpc": "03031736001",
    "name": "ហួត អៀងតុង"
  },
  {
    "barcode": "171110160",
    "dpc": "03031736101",
    "name": "តាន់ គឹមឡុង"
  },
  {
    "barcode": "171110161",
    "dpc": "03031736201",
    "name": "ហ៊ឹម យ៉ាន"
  },
  {
    "barcode": "171110162",
    "dpc": "03031736301",
    "name": "ជា នី"
  },
  {
    "barcode": "171110163",
    "dpc": "03031736401",
    "name": "ហ៊ឹម មហាម៉ាត់"
  },
  {
    "barcode": "171110164",
    "dpc": "03031736501",
    "name": "ចឹក  ម៉ៅ"
  },
  {
    "barcode": "171110165",
    "dpc": "03031736601",
    "name": "គង់ ចាន់ណា"
  },
  {
    "barcode": "171110166",
    "dpc": "03031736701",
    "name": "លឹម ហេង"
  },
  {
    "barcode": "171110167",
    "dpc": "03031736801",
    "name": "អឿន សំអាត"
  },
  {
    "barcode": "171110168",
    "dpc": "03031737001",
    "name": "ហេង លីម"
  },
  {
    "barcode": "171110169",
    "dpc": "03031737101",
    "name": "វង្ស វុទ្ធី"
  },
  {
    "barcode": "171110170",
    "dpc": "03031737201",
    "name": "ចេង ប៊ុនណាត"
  },
  {
    "barcode": "171110171",
    "dpc": "03031737501",
    "name": "ចាន់ សុភាព"
  },
  {
    "barcode": "171110172",
    "dpc": "03031737401",
    "name": "សុខ ប៊ុនដារ៉ា ២"
  },
  {
    "barcode": "171110173",
    "dpc": "03031737301",
    "name": "ហាន ធីតា"
  },
  {
    "barcode": "171110174",
    "dpc": "03031737601",
    "name": "ជា ដាវុធ"
  },
  {
    "barcode": "171110175",
    "dpc": "03031737701",
    "name": "ហេង រិទ្ធី"
  },
  {
    "barcode": "171110176",
    "dpc": "03031738601",
    "name": "ហុក រ៉ាវុធ"
  },
  {
    "barcode": "171110177",
    "dpc": "03031738501",
    "name": "ហេង រិទ្ធី"
  },
  {
    "barcode": "171110178",
    "dpc": "03031738801",
    "name": "អឿន សំអាត"
  },
  {
    "barcode": "171110179",
    "dpc": "03031738701",
    "name": "ព្រំ សុផល"
  },
  {
    "barcode": "171110180",
    "dpc": "03031738901",
    "name": "ឈៀង ឈុន"
  },
  {
    "barcode": "171110181",
    "dpc": "03031740201",
    "name": "សាយ ស៊ីណា"
  },
  {
    "barcode": "171110182",
    "dpc": "03031739001",
    "name": "ជា ហ្សីម"
  },
  {
    "barcode": "171110183",
    "dpc": "03031740401",
    "name": "កូវ ហុងឃៀង"
  },
  {
    "barcode": "171110184",
    "dpc": "03031739101",
    "name": "លឹម ឃុនឃាង"
  },
  {
    "barcode": "171110185",
    "dpc": "03031739601",
    "name": "យាំកាយីសាយមិន"
  },
  {
    "barcode": "171110186",
    "dpc": "03031739701",
    "name": "លឹម គុយហេង"
  },
  {
    "barcode": "171110187",
    "dpc": "03031739501",
    "name": "ផេង សុខុម"
  },
  {
    "barcode": "171110188",
    "dpc": "03031739201",
    "name": "ស៊ិន សុគន្ធា"
  },
  {
    "barcode": "171110189",
    "dpc": "03031740301",
    "name": "សុខ ភាព"
  },
  {
    "barcode": "171110190",
    "dpc": "03031739901",
    "name": "ហ៊ត តាំងវែង"
  },
  {
    "barcode": "171110191",
    "dpc": "03031740101",
    "name": "ឡាច សុភាព"
  },
  {
    "barcode": "171110192",
    "dpc": "03031739301",
    "name": "សយ បូរ៉ា"
  },
  {
    "barcode": "171110193",
    "dpc": "03031739401",
    "name": "ប៉េង ស៊ីប៉ូ"
  },
  {
    "barcode": "171110194",
    "dpc": "03031737801",
    "name": "ជូ ចាន់សុភ័ក្រ្ត ១"
  },
  {
    "barcode": "171110195",
    "dpc": "03031737901",
    "name": "ជូ ចាន់សុភ័ក្រ្ត ២"
  },
  {
    "barcode": "171110196",
    "dpc": "03031738001",
    "name": "ជា តាំង"
  },
  {
    "barcode": "171110197",
    "dpc": "03031738101",
    "name": "គិន ឆាន"
  },
  {
    "barcode": "171110198",
    "dpc": "03031738201",
    "name": "អឿន គុណភិរម្យ"
  },
  {
    "barcode": "171110199",
    "dpc": "03031738301",
    "name": "ស៊ឹម ហ្វូល"
  },
  {
    "barcode": "171110200",
    "dpc": "03031738401",
    "name": "ស៊ាន ផា"
  },
  {
    "barcode": "171110201",
    "dpc": "03031740001",
    "name": "តាន់ មុំ"
  },
  {
    "barcode": "171110202",
    "dpc": "03031744901",
    "name": "ចាយ ពណ្ណរី"
  },
  {
    "barcode": "171110203",
    "dpc": "03031744401",
    "name": "ធៀម  ប៊ុនធឿន"
  },
  {
    "barcode": "171110204",
    "dpc": "03031744501",
    "name": "រតនៈ ចាន់សេរី"
  },
  {
    "barcode": "171110205",
    "dpc": "03031745301",
    "name": "យន់ ប៊ុនរី"
  },
  {
    "barcode": "171110206",
    "dpc": "03031735501",
    "name": "ឈាង វីរៈ"
  },
  {
    "barcode": "171110207",
    "dpc": "03031735601",
    "name": "ខួច ស៊ុនហេង"
  },
  {
    "barcode": "171110208",
    "dpc": "03031745401",
    "name": "យូ ឆាយ"
  },
  {
    "barcode": "171110209",
    "dpc": "03031705301",
    "name": "សុខ តាំង"
  },
  {
    "barcode": "171110210",
    "dpc": "03031743401",
    "name": "ចៅ សុវណ្ណ"
  },
  {
    "barcode": "171110211",
    "dpc": "03031705001",
    "name": "មៀច ផេង ២"
  },
  {
    "barcode": "171110212",
    "dpc": "03031704901",
    "name": "មៀច ផេង ១"
  },
  {
    "barcode": "171110213",
    "dpc": "03031704701",
    "name": "សួន សុគន្ធ"
  },
  {
    "barcode": "171110214",
    "dpc": "03031704501",
    "name": "ហេង កង"
  },
  {
    "barcode": "171110215",
    "dpc": "03031704401",
    "name": "ប៉ឹង ឈុននី"
  },
  {
    "barcode": "171110216",
    "dpc": "03031704301",
    "name": "ប៉ឹង ខី"
  },
  {
    "barcode": "171110217",
    "dpc": "03031704201",
    "name": "ស៊ា សុផល២"
  },
  {
    "barcode": "171110218",
    "dpc": "03031704101",
    "name": "មុំ ក្រាត"
  },
  {
    "barcode": "171110219",
    "dpc": "03031704001",
    "name": "តាន់ សុជិត ២"
  },
  {
    "barcode": "171110220",
    "dpc": "03031703901",
    "name": "សៀង ណាវី"
  },
  {
    "barcode": "171110221",
    "dpc": "03031703801",
    "name": "ទាវ ជូឡុង"
  },
  {
    "barcode": "171110222",
    "dpc": "03031703701",
    "name": "ស៊ា សុផល ១"
  },
  {
    "barcode": "171110223",
    "dpc": "03031703601",
    "name": "ដួង រតនា"
  },
  {
    "barcode": "171110224",
    "dpc": "03031703501",
    "name": "ហួត តាំង"
  },
  {
    "barcode": "171110225",
    "dpc": "03031745501",
    "name": "ព្រំ សុផាន"
  },
  {
    "barcode": "171110226",
    "dpc": "03031703401",
    "name": "ម៉ៅ ឃីន"
  },
  {
    "barcode": "171110227",
    "dpc": "03031703201",
    "name": "ចេង  សុលីន"
  },
  {
    "barcode": "171110228",
    "dpc": "03031703101",
    "name": "តាន់ សុជិត ១"
  },
  {
    "barcode": "171110229",
    "dpc": "03031702801",
    "name": "ស៊ុន ប៊ុនស៊"
  },
  {
    "barcode": "171110230",
    "dpc": "03031703001",
    "name": "លី ហាក់"
  },
  {
    "barcode": "171110231",
    "dpc": "03031702901",
    "name": "កែ ទី"
  },
  {
    "barcode": "171110232",
    "dpc": "03031707601",
    "name": "មុំ ភា"
  },
  {
    "barcode": "171110233",
    "dpc": "03031707701",
    "name": "អែម ដារី"
  },
  {
    "barcode": "171110234",
    "dpc": "03031707801",
    "name": "កែវ ចាន់ណាវុធ"
  },
  {
    "barcode": "171110235",
    "dpc": "03031744201",
    "name": "នួន នារី"
  },
  {
    "barcode": "171110236",
    "dpc": "03031707901",
    "name": "ងេច ង៉ា"
  },
  {
    "barcode": "171110237",
    "dpc": "03031708001",
    "name": "ជុំ ណារេត"
  },
  {
    "barcode": "171110238",
    "dpc": "03031708101",
    "name": "សាំង ចិត្រា"
  },
  {
    "barcode": "171110239",
    "dpc": "03031708201",
    "name": "ឡុង សឿនអេន"
  },
  {
    "barcode": "171110240",
    "dpc": "03031708301",
    "name": "ជិន សាន់"
  },
  {
    "barcode": "171110241",
    "dpc": "03031708401",
    "name": "ឈឿប តៅ"
  },
  {
    "barcode": "171110242",
    "dpc": "03031708501",
    "name": "ជា សាន់"
  },
  {
    "barcode": "171110243",
    "dpc": "03031708601",
    "name": "ឯម សារិន"
  },
  {
    "barcode": "171110244",
    "dpc": "03031708701",
    "name": "យិន ម៉ាន់"
  },
  {
    "barcode": "171110245",
    "dpc": "03031709001",
    "name": "សុខ តាំង"
  },
  {
    "barcode": "171110246",
    "dpc": "03031700101",
    "name": "ផ្លុង វុឌ្ឍី"
  },
  {
    "barcode": "171110247",
    "dpc": "03031700201",
    "name": "គី សុខហួរ"
  },
  {
    "barcode": "171110248",
    "dpc": "03031700301",
    "name": "ប៊ូ គឹមឈាន"
  },
  {
    "barcode": "171110249",
    "dpc": "03031700401",
    "name": "ជា វ៉ាន់លួង"
  },
  {
    "barcode": "171110250",
    "dpc": "03031700501",
    "name": "ចឹក គង់"
  },
  {
    "barcode": "171110251",
    "dpc": "03031700601",
    "name": "រាជ វណ្ណារិទ្ធ"
  },
  {
    "barcode": "171110252",
    "dpc": "03031700701",
    "name": "ប៉ាន់ ប៊ុនរឿន"
  },
  {
    "barcode": "171110253",
    "dpc": "03031700901",
    "name": "សិត លុច"
  },
  {
    "barcode": "171110254",
    "dpc": "03031701001",
    "name": "សុគន្ធា រី"
  },
  {
    "barcode": "171110255",
    "dpc": "03031701101",
    "name": "លឹម​ ថាវ ១"
  },
  {
    "barcode": "171110256",
    "dpc": "03031701201",
    "name": "ឡុង សុភាព"
  },
  {
    "barcode": "171110257",
    "dpc": "03031701301",
    "name": "លឹម ថាវ ២"
  },
  {
    "barcode": "171110258",
    "dpc": "03031701401",
    "name": "ពៅ សុវណ្ណារី"
  },
  {
    "barcode": "171110259",
    "dpc": "03031701501",
    "name": "ម៉ាក់ ហ៊ាង"
  },
  {
    "barcode": "171110260",
    "dpc": "03031701601",
    "name": "សាន ខ"
  },
  {
    "barcode": "171110261",
    "dpc": "03031701701",
    "name": "ជា មន្ថា"
  },
  {
    "barcode": "171110262",
    "dpc": "03031701801",
    "name": "ឯម កន្យា"
  },
  {
    "barcode": "171110263",
    "dpc": "03031701901",
    "name": "សូផា រិន"
  },
  {
    "barcode": "171110264",
    "dpc": "03031702001",
    "name": "យាំ ខី"
  },
  {
    "barcode": "171110265",
    "dpc": "03031702101",
    "name": "ងួន ប៊ុនអឿន"
  },
  {
    "barcode": "171110266",
    "dpc": "03031702201",
    "name": "ឡេង ហេង"
  },
  {
    "barcode": "171110267",
    "dpc": "03031702301",
    "name": "ស៊ា យេង"
  },
  {
    "barcode": "171110268",
    "dpc": "03031702401",
    "name": "អែម ញើញ"
  },
  {
    "barcode": "171110269",
    "dpc": "03031702501",
    "name": "ដាញ់ ធឹង"
  },
  {
    "barcode": "171110270",
    "dpc": "03031702601",
    "name": "តាំង ទ្រី"
  },
  {
    "barcode": "171110271",
    "dpc": "03031741501",
    "name": "ចាន់ សូវង្ស"
  },
  {
    "barcode": "171110272",
    "dpc": "03031741401",
    "name": "ឈុន ឈន"
  },
  {
    "barcode": "171110273",
    "dpc": "03031742001",
    "name": "ឡៅ ទី"
  },
  {
    "barcode": "171110274",
    "dpc": "03031733301",
    "name": "វង់ ឌួង"
  },
  {
    "barcode": "171110275",
    "dpc": "03031732801",
    "name": "សាន ថាវន"
  },
  {
    "barcode": "171110276",
    "dpc": "03031732701",
    "name": "ម៉ែន សម្បត្តិ"
  },
  {
    "barcode": "171110277",
    "dpc": "03031732601",
    "name": "ស៊ឹម ង៉ោ"
  },
  {
    "barcode": "171110278",
    "dpc": "03031732501",
    "name": "គង់ គឿន"
  },
  {
    "barcode": "171110279",
    "dpc": "03031732401",
    "name": "នៅ ស៊ីថន"
  },
  {
    "barcode": "171110280",
    "dpc": "03031732301",
    "name": "ស៊ា ប៊ុនឃុន"
  },
  {
    "barcode": "171110281",
    "dpc": "03031732201",
    "name": "សុង សួ"
  },
  {
    "barcode": "171110282",
    "dpc": "03031732101",
    "name": "សូរ ឈិន"
  },
  {
    "barcode": "171110283",
    "dpc": "03031741301",
    "name": "ជិន តាប់"
  },
  {
    "barcode": "171110284",
    "dpc": "03031733401",
    "name": "លី តុហួរ"
  },
  {
    "barcode": "171110285",
    "dpc": "03031733501",
    "name": "ហ៊ុយ តោ"
  },
  {
    "barcode": "171110286",
    "dpc": "03031733601",
    "name": "មុយ ចាត"
  },
  {
    "barcode": "171110287",
    "dpc": "03031733701",
    "name": "ឡេង ប៊ុនឆន"
  },
  {
    "barcode": "171110288",
    "dpc": "03031733801",
    "name": "សុខ សេង"
  },
  {
    "barcode": "171110289",
    "dpc": "03031733901",
    "name": "ឆង សាវឌី"
  },
  {
    "barcode": "171110290",
    "dpc": "03031734101",
    "name": "អ៊ុក គង់"
  },
  {
    "barcode": "171110291",
    "dpc": "03031734201",
    "name": "ហ៊ាង ណែម"
  },
  {
    "barcode": "171110292",
    "dpc": "03031734301",
    "name": "ជា  កន្និកា ២"
  },
  {
    "barcode": "171110293",
    "dpc": "03031734401",
    "name": "អៀម សាខន"
  },
  {
    "barcode": "171110294",
    "dpc": "03031734501",
    "name": "កាត់ គឹមឡេង"
  },
  {
    "barcode": "171110295",
    "dpc": "03031734601",
    "name": "ឯម វរិទ្ធ"
  },
  {
    "barcode": "171110296",
    "dpc": "03031734701",
    "name": "បាន ណារិន"
  },
  {
    "barcode": "171110297",
    "dpc": "03031734801",
    "name": "សូ  លី"
  },
  {
    "barcode": "171110298",
    "dpc": "03031734901",
    "name": "ហោ គឹមសឿង"
  },
  {
    "barcode": "171110299",
    "dpc": "03031735001",
    "name": "កាយ ប៊ុនធី"
  },
  {
    "barcode": "171110300",
    "dpc": "03031735101",
    "name": "យ៉ាន់ បូផៃ"
  },
  {
    "barcode": "171110301",
    "dpc": "03031706001",
    "name": "ជា ប៊ន"
  },
  {
    "barcode": "171110302",
    "dpc": "03031706101",
    "name": "សុខ ហេង"
  },
  {
    "barcode": "171110303",
    "dpc": "03031706801",
    "name": "ឃឿត សុទ្ធាវី"
  },
  {
    "barcode": "171110304",
    "dpc": "03031744101",
    "name": "ជា វណ្ណី"
  },
  {
    "barcode": "171110305",
    "dpc": "03031707201",
    "name": "ម៉ៅ ស៊ុយ"
  },
  {
    "barcode": "171110306",
    "dpc": "03031707301",
    "name": "ទេព គន្ធ"
  },
  {
    "barcode": "171110307",
    "dpc": "03031707401",
    "name": "យី ឆន ១"
  },
  {
    "barcode": "171110308",
    "dpc": "03031707501",
    "name": "យី ឆន ២"
  },
  {
    "barcode": "171110309",
    "dpc": "03031744301",
    "name": "វ៉ា សំមុន្នី"
  },
  {
    "barcode": "171110310",
    "dpc": "03031705701",
    "name": "ឆាំង សុផាត"
  },
  {
    "barcode": "171110311",
    "dpc": "03031705801",
    "name": "អ៊ុយ ទិ"
  },
  {
    "barcode": "171110312",
    "dpc": "03031705901",
    "name": "ដួង សំ"
  },
  {
    "barcode": "171110313",
    "dpc": "03031711201",
    "name": "កាយ គន្ធជីវ"
  },
  {
    "barcode": "171110314",
    "dpc": "03031710801",
    "name": "ជី ឃី"
  },
  {
    "barcode": "171110315",
    "dpc": "03031710701",
    "name": "នូ នារី"
  },
  {
    "barcode": "171110316",
    "dpc": "03031710601",
    "name": "ពាង គឹមសៀង"
  },
  {
    "barcode": "171110317",
    "dpc": "03031710501",
    "name": "ឡេង ដារ៉ា"
  },
  {
    "barcode": "171110318",
    "dpc": "03031710401",
    "name": "ទ្រីវ ទី"
  },
  {
    "barcode": "171110319",
    "dpc": "03031710301",
    "name": "ឈិន សាលី"
  },
  {
    "barcode": "171110320",
    "dpc": "03031710201",
    "name": "ថាម ផេង"
  },
  {
    "barcode": "171110321",
    "dpc": "03031710101",
    "name": "ហ៊ិន ឆេងវ័ន"
  },
  {
    "barcode": "171110322",
    "dpc": "03031710001",
    "name": "ជុំ ចំរើន"
  },
  {
    "barcode": "171110323",
    "dpc": "03031709901",
    "name": "សេង ហុក"
  },
  {
    "barcode": "171110324",
    "dpc": "03031709801",
    "name": "រិន សុផាត"
  },
  {
    "barcode": "171110325",
    "dpc": "03031709701",
    "name": "នង គឹមស៊ុន"
  },
  {
    "barcode": "171110326",
    "dpc": "03031709601",
    "name": "យូវ វិចិត្រ"
  },
  {
    "barcode": "171110327",
    "dpc": "03031709501",
    "name": "គង វុទ្ធី"
  },
  {
    "barcode": "171110328",
    "dpc": "03031709401",
    "name": "ជុំ រ៉យ"
  },
  {
    "barcode": "171110329",
    "dpc": "03031709301",
    "name": "ផាន់ សំអុល"
  },
  {
    "barcode": "171110330",
    "dpc": "03031709201",
    "name": "ម៉េង ណាត"
  },
  {
    "barcode": "171110331",
    "dpc": "03031709101",
    "name": "កេតុ សឿ"
  },
  {
    "barcode": "171110332",
    "dpc": "03031708901",
    "name": "គាត ឃី"
  },
  {
    "barcode": "171110333",
    "dpc": "03031708801",
    "name": "ថោង សុផល"
  },
  {
    "barcode": "171110334",
    "dpc": "03031706901",
    "name": "សូ សំអាន"
  },
  {
    "barcode": "171110335",
    "dpc": "03031707001",
    "name": "ស៊ុន ណារ៉ាធិបតី"
  },
  {
    "barcode": "171110336",
    "dpc": "03031707101",
    "name": "សូ សំអាន ២"
  },
  {
    "barcode": "171110337",
    "dpc": "03031706701",
    "name": "សួន សុវណ្ណរ៉ា"
  },
  {
    "barcode": "171110338",
    "dpc": "03031706601",
    "name": "ប៉ែន សេរី"
  },
  {
    "barcode": "171110339",
    "dpc": "03031706501",
    "name": "ជា សុទ្ធា"
  },
  {
    "barcode": "171110340",
    "dpc": "03031706301",
    "name": "ខៀវ សំណាង ២"
  },
  {
    "barcode": "171110341",
    "dpc": "03031713101",
    "name": "កែវ ព្រំ"
  },
  {
    "barcode": "171110342",
    "dpc": "03031713001",
    "name": "រិះ វណ្ណា"
  },
  {
    "barcode": "171110343",
    "dpc": "03031712901",
    "name": "ជា ដាវុធ"
  },
  {
    "barcode": "171110344",
    "dpc": "03031712801",
    "name": "ជុក ម៉េងគង់ ៣"
  },
  {
    "barcode": "171110345",
    "dpc": "03031712601",
    "name": "ជុក ម៉េងគង់ ៣"
  },
  {
    "barcode": "171110346",
    "dpc": "03031712501",
    "name": "លឹម ស្រ៊ុន"
  },
  {
    "barcode": "171110347",
    "dpc": "03031712401",
    "name": "សៅ ទេពសត្ថា"
  },
  {
    "barcode": "171110348",
    "dpc": "03031712301",
    "name": "ទូច ឆាង"
  },
  {
    "barcode": "171110349",
    "dpc": "03031712101",
    "name": "យូ ស៊ីម"
  },
  {
    "barcode": "171110350",
    "dpc": "03031712001",
    "name": "ប្រាក់ ស៊ីម៉េតថា"
  },
  {
    "barcode": "171110351",
    "dpc": "03031711901",
    "name": "ធា ស៊ីវត្ថា"
  },
  {
    "barcode": "171110352",
    "dpc": "03031711801",
    "name": "ឈឹម ជិនណារី"
  },
  {
    "barcode": "171110353",
    "dpc": "03031711701",
    "name": "មឹក តារា"
  },
  {
    "barcode": "171110354",
    "dpc": "03031711601",
    "name": "សាន់ សំអាត"
  },
  {
    "barcode": "171110355",
    "dpc": "03031711501",
    "name": "សេង គឹមចេង"
  },
  {
    "barcode": "171110356",
    "dpc": "03031711401",
    "name": "សៀង ជឿន"
  },
  {
    "barcode": "171110357",
    "dpc": "03031711301",
    "name": "រៀល ថែម"
  },
  {
    "barcode": "171110358",
    "dpc": "03031705101",
    "name": "ណាំ សុវណ្ណ"
  },
  {
    "barcode": "171110359",
    "dpc": "03031743101",
    "name": "បែន ផន"
  },
  {
    "barcode": "171110360",
    "dpc": "03031744001",
    "name": "ជា ម៉ូល្លិកា"
  },
  {
    "barcode": "171110361",
    "dpc": "03031735201",
    "name": "សួន សាវឿន"
  },
  {
    "barcode": "171110362",
    "dpc": "03031735301",
    "name": "លឹម គឹមលី"
  },
  {
    "barcode": "171110363",
    "dpc": "03031745201",
    "name": "លឹម ស្រេង"
  },
  {
    "barcode": "171110364",
    "dpc": "03031745001",
    "name": "ចាន់ ប៊ុនទី"
  },
  {
    "barcode": "171110365",
    "dpc": "03031744801",
    "name": "ប៉ែន សំអូន"
  },
  {
    "barcode": "171110366",
    "dpc": "03031713701",
    "name": "កាយ  កិត្យា"
  },
  {
    "barcode": "171110367",
    "dpc": "03031715301",
    "name": "បាន់  សារុំ"
  },
  {
    "barcode": "171110368",
    "dpc": "03031715201",
    "name": "រិន  រ៉ា"
  },
  {
    "barcode": "171110369",
    "dpc": "03031715101",
    "name": "រស់  ជីវី"
  },
  {
    "barcode": "171110370",
    "dpc": "03031714901",
    "name": "អ៊ីម  ខៃ"
  },
  {
    "barcode": "171110371",
    "dpc": "03031714801",
    "name": "អែម  ញើង"
  },
  {
    "barcode": "171110372",
    "dpc": "03031714201",
    "name": "បាន់  លៀប"
  },
  {
    "barcode": "171110373",
    "dpc": "03031714101",
    "name": "លីវ    យាវ"
  },
  {
    "barcode": "171110374",
    "dpc": "03031714001",
    "name": "ហេង  ស៊ីម"
  },
  {
    "barcode": "171110375",
    "dpc": "03031713901",
    "name": "យក់  អឿ ២"
  },
  {
    "barcode": "171110376",
    "dpc": "03031705601",
    "name": "ផែន  វ៉ាន់ឌី"
  },
  {
    "barcode": "171110377",
    "dpc": "03031705501",
    "name": "គុយ  សំអាង"
  },
  {
    "barcode": "171110378",
    "dpc": "03031714301",
    "name": "ពុធ  សឿង"
  },
  {
    "barcode": "171110379",
    "dpc": "03031714401",
    "name": "គឹម  រ៉ា"
  },
  {
    "barcode": "171110380",
    "dpc": "03031719701",
    "name": "ចៅអធិការវត្តដំរីស"
  },
  {
    "barcode": "171110381",
    "dpc": "03031719601",
    "name": "ជាម  ច័ន្ទសោភ័ណ្ឌ"
  },
  {
    "barcode": "171110382",
    "dpc": "03031719501",
    "name": "ចាន់  កុសល់"
  },
  {
    "barcode": "171110383",
    "dpc": "03031719401",
    "name": "ស៊ឹង  សៀន"
  },
  {
    "barcode": "171110384",
    "dpc": "03031719301",
    "name": "ទេព  រី"
  },
  {
    "barcode": "171110385",
    "dpc": "03031719201",
    "name": "សុខ  តុលា"
  },
  {
    "barcode": "171110386",
    "dpc": "03031716601",
    "name": "អេង  លី ២"
  },
  {
    "barcode": "171110387",
    "dpc": "03031716701",
    "name": "ភេ  សុខា"
  },
  {
    "barcode": "171110388",
    "dpc": "03031716801",
    "name": "លឹម បញ្ញា"
  },
  {
    "barcode": "171110389",
    "dpc": "03031716401",
    "name": "អេង  លី ១"
  },
  {
    "barcode": "171110390",
    "dpc": "03031716301",
    "name": "ហ៊ាង  គឹមលាភ"
  },
  {
    "barcode": "171110391",
    "dpc": "03031716201",
    "name": "អឿ  ឃឿត"
  },
  {
    "barcode": "171110392",
    "dpc": "03031716101",
    "name": "ស៊ុន  ធឿន"
  },
  {
    "barcode": "171110393",
    "dpc": "03031715801",
    "name": "ម៉េង  ណារី"
  },
  {
    "barcode": "171110394",
    "dpc": "03031715601",
    "name": "ជា  វឿន"
  },
  {
    "barcode": "171110395",
    "dpc": "03031715501",
    "name": "តែ  វុទ្ធី"
  },
  {
    "barcode": "171110396",
    "dpc": "03031743801",
    "name": "អៀម  សុខហឿន"
  },
  {
    "barcode": "171110397",
    "dpc": "03031743701",
    "name": "គ្រី  ចំរើន"
  },
  {
    "barcode": "171110398",
    "dpc": "03031717801",
    "name": "ម៉ាន់  កែវ"
  },
  {
    "barcode": "171110399",
    "dpc": "03031717701",
    "name": "ឯល  សារ៉ាត់"
  },
  {
    "barcode": "171110400",
    "dpc": "03031717601",
    "name": "ប៉ិន  ឆុំ"
  },
  {
    "barcode": "171110401",
    "dpc": "03031717501",
    "name": "វែន  លី"
  },
  {
    "barcode": "171110402",
    "dpc": "03031717401",
    "name": "ចាន់  សូវង្ស"
  },
  {
    "barcode": "171110403",
    "dpc": "03031717301",
    "name": "យីវ  ពៅ"
  },
  {
    "barcode": "171110404",
    "dpc": "03031717201",
    "name": "ស៊ិន  សំប៊ូន"
  },
  {
    "barcode": "171110405",
    "dpc": "03031717001",
    "name": "សំ  ណារិន"
  },
  {
    "barcode": "171110406",
    "dpc": "03031717101",
    "name": "ពុធ  កយ ២"
  },
  {
    "barcode": "171110407",
    "dpc": "03031716901",
    "name": "សោម  ហ៊ុន"
  },
  {
    "barcode": "171110408",
    "dpc": "03031717901",
    "name": "អ៊ឹម  ហៃ"
  },
  {
    "barcode": "171110409",
    "dpc": "03031718001",
    "name": "មៀច  សុមន៍"
  },
  {
    "barcode": "171110410",
    "dpc": "03031718101",
    "name": "ផាន់  ស៊ុនបុប្ផា"
  },
  {
    "barcode": "171110411",
    "dpc": "03031718201",
    "name": "លឹម  ឈុនទៀង"
  },
  {
    "barcode": "171110412",
    "dpc": "03031718301",
    "name": "មន្ទីរពត៌មានខេត្ត"
  },
  {
    "barcode": "171110413",
    "dpc": "03031718401",
    "name": "នូវ  យូណា"
  },
  {
    "barcode": "171110414",
    "dpc": "03031718501",
    "name": "ហួន  ហៀង"
  },
  {
    "barcode": "171110415",
    "dpc": "03031718601",
    "name": "គួច  រ៉ុង"
  },
  {
    "barcode": "171110416",
    "dpc": "03031743501",
    "name": "ញ៉យ  សួង"
  },
  {
    "barcode": "171110417",
    "dpc": "03031743601",
    "name": "ឃឹម ដាវ៉ាន់"
  },
  {
    "barcode": "171110418",
    "dpc": "03031721701",
    "name": "រស់ ចាន់ថា"
  },
  {
    "barcode": "171110419",
    "dpc": "03031721901",
    "name": "សុខ គឹមសាន"
  },
  {
    "barcode": "171110420",
    "dpc": "03031720301",
    "name": "ហេង ឆាត"
  },
  {
    "barcode": "171110421",
    "dpc": "03031719901",
    "name": "ឆេង សុវណ្ណ"
  },
  {
    "barcode": "171110422",
    "dpc": "03031720001",
    "name": "វត្តដំរីស (កុដិលោកតា)"
  },
  {
    "barcode": "171110423",
    "dpc": "03031719801",
    "name": "វត្តដំរីស (សាលាឆាន់)"
  },
  {
    "barcode": "171110424",
    "dpc": "03031720101",
    "name": "វត្តដំរីស (ខាងត្បូង)"
  },
  {
    "barcode": "171110425",
    "dpc": "03031720401",
    "name": "ហួន ប៊ុនហាន (វត្តដំរីស)"
  },
  {
    "barcode": "171110426",
    "dpc": "03031721801",
    "name": "សឹន សាន់"
  },
  {
    "barcode": "171110427",
    "dpc": "03031721601",
    "name": "សៅ ម៉ៃ"
  },
  {
    "barcode": "171110428",
    "dpc": "03031721501",
    "name": "គឹម យ៉យ"
  },
  {
    "barcode": "171110429",
    "dpc": "03031721401",
    "name": "មាឃ វៃនី"
  },
  {
    "barcode": "171110430",
    "dpc": "03031721301",
    "name": "ភូ ពេជាដា"
  },
  {
    "barcode": "171110431",
    "dpc": "03031722101",
    "name": "សា  វ៉ាត់រ៉ាន់"
  },
  {
    "barcode": "171110432",
    "dpc": "03031721201",
    "name": "ហោ វុទ្ធី"
  },
  {
    "barcode": "171110433",
    "dpc": "03031721101",
    "name": "ម៉ែន ណន"
  },
  {
    "barcode": "171110434",
    "dpc": "03031720901",
    "name": "ជ្រុន ណារិន"
  },
  {
    "barcode": "171110435",
    "dpc": "03031720801",
    "name": "រស់ សាអ៊ីន"
  },
  {
    "barcode": "171110436",
    "dpc": "03031720601",
    "name": "ប្រាក់ បូរាណ"
  },
  {
    "barcode": "171110437",
    "dpc": "03031705201",
    "name": "ផ្លុង វ៉ៃ"
  },
  {
    "barcode": "171110438",
    "dpc": "03031720501",
    "name": "ម៉េង ហ៊ាង"
  },
  {
    "barcode": "171110439",
    "dpc": "03031722301",
    "name": "ហង្ស ម៉ាឡានី"
  },
  {
    "barcode": "171110440",
    "dpc": "03031722601",
    "name": "ខូវ យូឡុង"
  },
  {
    "barcode": "171110441",
    "dpc": "03031722701",
    "name": "ស៊្រុន   ហុង"
  },
  {
    "barcode": "171110442",
    "dpc": "03031722801",
    "name": "ចិន គឹមទូច"
  },
  {
    "barcode": "171110443",
    "dpc": "03031722901",
    "name": "ជាង សុខុម"
  },
  {
    "barcode": "171110444",
    "dpc": "03031723001",
    "name": "ប៊ុត ទឺ"
  },
  {
    "barcode": "171110445",
    "dpc": "03031723101",
    "name": "ព្រំ ស៊ន់"
  },
  {
    "barcode": "171110446",
    "dpc": "03031723201",
    "name": "កែវ សារុន"
  },
  {
    "barcode": "171110447",
    "dpc": "03031723301",
    "name": "គឹម ស្រេង"
  },
  {
    "barcode": "171110448",
    "dpc": "03031723401",
    "name": "ព្រំ ណូ"
  },
  {
    "barcode": "171110449",
    "dpc": "03031723501",
    "name": "លៀម តាំ"
  },
  {
    "barcode": "171110450",
    "dpc": "03031723601",
    "name": "ស៊ង ធី"
  },
  {
    "barcode": "171110451",
    "dpc": "03031723701",
    "name": "ទន់ ប៊ុនលី"
  },
  {
    "barcode": "171110452",
    "dpc": "03031723801",
    "name": "ខាត់ ថន"
  },
  {
    "barcode": "171110453",
    "dpc": "03031703301",
    "name": "លី  សុគុណ"
  },
  {
    "barcode": "171110454",
    "dpc": "03031705401",
    "name": "សេង  មឿន"
  },
  {
    "barcode": "171110455",
    "dpc": "03031713201",
    "name": "គង់  ស៊ីអេង"
  },
  {
    "barcode": "171110456",
    "dpc": "03031713301",
    "name": "អ៊ុក  កែវដាណា"
  },
  {
    "barcode": "171110457",
    "dpc": "03031713401",
    "name": "ហ៊ុន  ហ៊ាប"
  },
  {
    "barcode": "171110458",
    "dpc": "03031713501",
    "name": "ស៊ឹន  ណាវុធ"
  },
  {
    "barcode": "171110459",
    "dpc": "03031713601",
    "name": "អ៊ឹម  ចាន់រី"
  },
  {
    "barcode": "171110460",
    "dpc": "03031713801",
    "name": "យក់  អឿ ១"
  },
  {
    "barcode": "171110461",
    "dpc": "03031715701",
    "name": "ពុធ  កយ"
  },
  {
    "barcode": "171110462",
    "dpc": "03031715901",
    "name": "ម៉ម  សុភាព ១"
  },
  {
    "barcode": "171110463",
    "dpc": "03031716001",
    "name": "ម៉ម  សុភាព ២"
  },
  {
    "barcode": "171110464",
    "dpc": "03031716501",
    "name": "លី  កៅ"
  },
  {
    "barcode": "171110465",
    "dpc": "03031718801",
    "name": "សោម  សុខា"
  },
  {
    "barcode": "171110466",
    "dpc": "03031719001",
    "name": "ចេង  សាវិត"
  },
  {
    "barcode": "171110467",
    "dpc": "03031719101",
    "name": "គី  ទិត្យ"
  },
  {
    "barcode": "171110468",
    "dpc": "03031720701",
    "name": "ថាច់  សុវណ្ណផល្លា"
  },
  {
    "barcode": "171110469",
    "dpc": "03031722001",
    "name": "គង់  ឆេងលី"
  },
  {
    "barcode": "171110470",
    "dpc": "03031722201",
    "name": "បាន  ហួត"
  },
  {
    "barcode": "171110471",
    "dpc": "03031722401",
    "name": "ចាត សំបូរ"
  },
  {
    "barcode": "171110472",
    "dpc": "03031728001",
    "name": "ជ័យ  វឌ្ឍនា"
  },
  {
    "barcode": "171110473",
    "dpc": "03031732001",
    "name": "លឹម  អេង"
  },
  {
    "barcode": "171110474",
    "dpc": "03031740701",
    "name": "តាំង  គឹមអ៊ាម"
  },
  {
    "barcode": "171110475",
    "dpc": "03031740801",
    "name": "យ៉ាំ  ស៊ីងហ៊"
  },
  {
    "barcode": "171110476",
    "dpc": "03031740901",
    "name": "ទុយ  វីន"
  },
  {
    "barcode": "171110477",
    "dpc": "03031741001",
    "name": "តាំង  ឈុន ៨"
  },
  {
    "barcode": "171110478",
    "dpc": "03031741101",
    "name": "ហោ  ផល្លា"
  },
  {
    "barcode": "171110479",
    "dpc": "03031741801",
    "name": "កាំង ប៊ុនអេង"
  },
  {
    "barcode": "171110480",
    "dpc": "03031741901",
    "name": "តាន់  គឹមហ៊រ"
  },
  {
    "barcode": "171110481",
    "dpc": "03031742101",
    "name": "តាន់  អេង"
  },
  {
    "barcode": "171110482",
    "dpc": "03031742501",
    "name": "លឹម  ហួត"
  },
  {
    "barcode": "171110483",
    "dpc": "03031742801",
    "name": "យូ  ម៉ៅ"
  },
  {
    "barcode": "171110484",
    "dpc": "03031743001",
    "name": "នង  លីនណា"
  },
  {
    "barcode": "171110485",
    "dpc": "03031743301",
    "name": "ម៉ៅ  សុខុម"
  },
  {
    "barcode": "171110486",
    "dpc": "03031743901",
    "name": "អាត  សាវី"
  },
  {
    "barcode": "171110487",
    "dpc": "03031744601",
    "name": "នៅ  ម៉ាលី"
  },
  {
    "barcode": "171110488",
    "dpc": "03031744701",
    "name": "ហេង  ណេង"
  },
  {
    "barcode": "171110489",
    "dpc": "03031746601",
    "name": "ខៀវ  ខុន"
  },
  {
    "barcode": "171110490",
    "dpc": "03031715001",
    "name": "នៅ  ញិន"
  },
  {
    "barcode": "171110491",
    "dpc": "03031748001",
    "name": "គង់ វឆ័យ"
  }
];
 barcodes.forEach(function(bar){
 let customer=db.wb_customer.findOne({dpc:bar.dpc});
 db.wb_meterReadingJournalDetails.update({customerId:customer._id,newReadingDate:{$gt:start,$lte:end}},{$set:{subBarcode:bar.barcode}});
 });