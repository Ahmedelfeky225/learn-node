## mongodb Query operator $or
اول مال__
npm
بيشتغل بتروح علي لينك الرئيسي اللي بدوره 
بيعمل 
get request 
للمسار الرئيسي
فا هيعمل 
find 
ويحصل علي جميع الداتا اللي بداخل قاعده البيانات
***
دلوقت احنا محتاجين نروح نخزن كذا 
customer 
في الداتابيز عشان يظهرو فيي المتصفح ومن ثم محتاجين لما نعمل سيرش وندخل اسم معين يقدر يبحث فعلا ويظهر الشخص اللي بيبحث عنه
فا اول ما تبحث يظهرلك الشخص دا بجميع البيانات بتاعته
طب لو مثلا ان عندي 
2 customer 
اسمهم 
Layla hassan 
و 
ali hassan
وانا كتبت في السيرش كلمه 
hassan
فالمفروض يظهرلي ال 
2 customer__
*** 
فالمفروض لما احط في السيرش واضغط علي الزرار الخاص بالسيرش يظهر التصميم اللي انا عامله في ملف ال__
search.ejs
اللي صممنا قبل كدا__

هذا الجزء كنت مخليه__
component
لوحده
اسمه 
nav.ejs__
***
__في الفيديو دا هشرحلك بعض الحاجات اللي تمكنك من انك اول ما تضغط علي 
search
يوديك لصفحه اخري فيها الاسم اللي انت بحثت عنه__

__فامثلا عايزين لما نضغط علي زرار ال 
search 
يروح يجيب جميع البيانات من قاعده البيانات
كنا بنعمل كدا ازاي عن طريق استخدمنا لل 
find
دي من خلالها كنا بنحصل علي جميع الداتا من قاعده البيانات__

__طبعا 
button 
ال 
search
اللي في ال 
navbar 
دا لازم يكون بداخل 
ال
form
لان محتاج اقوله ان لما اضغط علي زرار ال 
search 
دا اروح ل انهي مسار
ودا عن طريق 
attribute
اسمه
action
طب 
attribute 
اللي اسمه 
method
هتبقي قيمته اي
هو انا المفروض عايز اعمل حاجه اسمها 
query
اي استعلام
ودا معناه ان اول ما اضغط علي زرار ال 
search 
هيحصل اي هيروح لقاعده البيانات يعمل استعلام يعني 
query
فا لو مثلا كتب في حقل السيرش 
ali 
فا دا معناه هنا ان ببحث عن الشخص اللي ال
firstName
بتاعه
ali
وبالتالي انت كدا هتروح لقاعده البيانات تعمل 
query
يعني استعلااام اي تبحث عن داتا معينه فا انت بكدا هتعمل
post
لانك هتحتاج تروح لقاعده البيانات__
__method="post"__
فا دلوقت اول ما اضغط علي زرار السيرش هيروح للمسار اللي حددناه في ال 
action
ونعمل
post request

__<form action="/search" method="post" class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>__
***

__[
  {
    _id: new ObjectId('66e35359b4017676cc790167'),
    firstName: 'Layla',
    lastName: 'Hassan',
    email: 'Layla@gmail.com',
    phoneNumber: 1007898233,
    age: 25,
    country: 'Afghanistan',
    gender: 'Female',
    createdAt: 2024-09-12T20:47:21.235Z,
    updatedAt: 2024-09-12T20:48:26.964Z,
    __v: 0
  },
  {
    _id: new ObjectId('66e35391b4017676cc79016b'),
    firstName: 'Ali',
    lastName: 'Hassan',
    email: 'Ali@gmail.com',
    phoneNumber: 1005845202,
    age: 23,
    country: 'Egypt',
    gender: 'Male',
    createdAt: 2024-09-12T20:48:17.645Z,
    updatedAt: 2024-09-12T20:48:17.645Z,
    __v: 0
  }
]__
انا لما ضغط علي ال 
search
راح للمسار وجابلي كل البيانات من الداتابيز عن طريق استخدامي لل
find 
وانا بما مخزن 
2 customer 
في الداتا بيز فا جابلي ال
2 customers 
دول في ال
array
في 
array of object 
ولكن انا مش عاوز اعمل 
find 
لكل الداتا
انا عاوز وليكن الاوبجيكت اللي ال 
age 
بتاعه
وليكن 
23
فا في الحاله دي المفروض يحصل علي ال
customer
اللي ال 
age 
بتاعه 
23
فقط
هعمل دا عن طريق ان همرر لل
find --> object
ودا معناه ان هديله 
key ,value
ال 
key 
اللي هي 
age 
مثلا وال 
value
بتاعته اللي هي 
23
فا في الحاله دي الاستعلام بقا محدد 
اي عايز داتا معينه__


__app.post("/search", (req, res) => {
    MydataUser.find({ age: 23 })
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
})__

__[
  {
    _id: new ObjectId('66e35391b4017676cc79016b'),
    firstName: 'Ali',
    lastName: 'Hassan',
    email: 'Ali@gmail.com',
    phoneNumber: 1005845202,
    age: 23,
    country: 'Egypt',
    gender: 'Male',
    createdAt: 2024-09-12T20:48:17.645Z,
    updatedAt: 2024-09-12T20:48:17.645Z,
    __v: 0
  }
]__
فال__
result
بتاعتي في الحاله دي هي الشخص ال 
age 
بتاعه
__23
__وبالتالي الاراي بتاعي اصبحت تحتوي علي اوبجكت واحد فقط__
احنا ايضا ممكن نحددله ان يرجعلي كل الداتا للاشخاص ال__
age 
بتاعهم اكبر من 30
 سنه فا الحركه دي هنعملها عن طريق حاجه اسمه ال
 operator
 فا هنستخدم ال 
 gt
 اي ال 
 greater than
 $gt
 واي 
 operator 
 احنا هنستخدمه لازم يكون قبله علامه ال
 $
 وعندنا
operator 
 اخر
هو 
$gte--> greater than and equal
وايضا ال
$or
بما ان كلهم
operator 
فاذن قبلهم لازم نستخدم ال
$

__app.post("/search", (req, res) => {
    MydataUser.find({ age: { $gt: 23 } })
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
})__

__[
  {
    _id: new ObjectId('66e35359b4017676cc790167'),
    firstName: 'Layla',
    lastName: 'Hassan',
    email: 'Layla@gmail.com',
    phoneNumber: 1007898233,
    age: 25,
    country: 'Afghanistan',
    gender: 'Female',
    createdAt: 2024-09-12T20:47:21.235Z,
    updatedAt: 2024-09-12T20:48:26.964Z,
    __v: 0
  }
]__
هذا ال
customer 
اللي 
age
بتاعه اكبر من 23
صحيح ال
operator
دا هيكون بداخل اوبجيكت
هو كمان وال
key 
هو ال
operator
وال 
value
هو القيمه اللي عايز تجيب اكبر منها
وهيطبع الشخص اللي انت عايز لما تعمل  بوست ريكوست وتضغط علي السيرش__
***
__ممكن بقا نستخدم ال
operator
اللي فيه اكبر او يساوي
$gte__


__app.post("/search", (req, res) => {
    MydataUser.find({ age: { $gte: 23 } })
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
})__

__[
  {
    _id: new ObjectId('66e35359b4017676cc790167'),
    firstName: 'Layla',
    lastName: 'Hassan',
    email: 'Layla@gmail.com',
    phoneNumber: 1007898233,
    age: 25,
    country: 'Afghanistan',
    gender: 'Female',
    createdAt: 2024-09-12T20:47:21.235Z,
    updatedAt: 2024-09-12T20:48:26.964Z,
    __v: 0
  },
  {
    _id: new ObjectId('66e35391b4017676cc79016b'),
    firstName: 'Ali',
    lastName: 'Hassan',
    email: 'Ali@gmail.com',
    phoneNumber: 1005845202,
    age: 23,
    country: 'Egypt',
    gender: 'Male',
    createdAt: 2024-09-12T20:48:17.645Z,
    updatedAt: 2024-09-12T20:48:17.645Z,
    __v: 0
  },
  {
    _id: new ObjectId('66e365d31524e02c655bf4fe'),
    firstName: 'Osama',
    lastName: 'Mohamed',
    email: 'OsamaMohamed@gmail.com',
    phoneNumber: 1000564789,
    age: 40,
    country: 'Egypt',
    gender: 'Male',
    createdAt: 2024-09-12T22:06:12.012Z,
    updatedAt: 2024-09-12T22:06:12.012Z,
    __v: 0
  }
]__

فا كدا جابلك كل ال__
cusomers
اللي اعمارهم اكبر من او يساوي 23__

__عندك بقا هذا اللينك فيه العديد من ال
operators
اللي ممكن تستخدمها__
__https://www.mongodb.com/docs/manual/reference/operator/query/__

$lt -> less than 
$lte -> less than or equal
***

__تعالا بقا في الجزئيه المهمه دي__
مثلا انا عايز اكتب اسم__
ali
وعايزه بقا يروح قاعده البيانات يبحث عن الشخص اللي 
firstName
بتاعه
__ali
فا بالتالي هروح استخدم ال
find 
وبداخله هستخدم اوبجيكت يحتوي مثلا علي 
key 
اسمه 
firstName 
والقيمه بتاعته 
Ali

دلوقت لو انا استخدمت هذا البحث عن طريق ان قولتله ان يبحث ليا عن الشخص الل
firstName
بتاعه  اسمه 
hassan
وقتها مش هتلاقي حاجه رجعالك بل 
array
فاضيه
app.post("/search", (req, res) => {
    console.log("Ahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    MydataUser.find({ firstName: "Ali" })
        .then((result) => {
            res.render("user/search", { searchResult: result })
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
})

ودا لان كلمه
hassan 
دي في ال
lastName
وليس في ال
firstName
فا احنا في الحاله دي عشان نتأكد ان اكيد حاجه فيهم هتطلع صح  هستخدم ال
operator 
اللي اسمه
or
قولنا دا معناه ان هبحث عن الشخص اللي اسمه 
hassan
سواء 
في ال
firstName
أو في ال
lastName
app.post("/search", (req, res) => {
    console.log("Ahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    MydataUser.find({ $or: [{ firstName: "Hassan" }, { lastName: "Hassan" }] })
        .then((result) => {
            res.render("user/search", { searchResult: result })
            console.log(result)
        }).catch((err) => {
            console.log(err)
        })
})
وال 
or -> operator
دا قيمته بتكون 
array of object
[
  {
    _id: new ObjectId('66e35359b4017676cc790167'),
    firstName: 'Layla',
    lastName: 'Hassan',
    email: 'Layla@gmail.com',
    phoneNumber: 1007898233,
    age: 25,
    country: 'Afghanistan',
    gender: 'Female',
    createdAt: 2024-09-12T20:47:21.235Z,
    updatedAt: 2024-09-12T20:48:26.964Z,
    __v: 0
  },
  {
    _id: new ObjectId('66e35391b4017676cc79016b'),
    firstName: 'Ali',
    lastName: 'Hassan',
    email: 'Ali@gmail.com',
    phoneNumber: 1005845202,
    age: 23,
    country: 'Egypt',
    gender: 'Male',
    createdAt: 2024-09-12T20:48:17.645Z,
    updatedAt: 2024-09-12T20:48:17.645Z,
    __v: 0
  }
]
فا بكدا لما بحثت بطريقه ال
or
دا جابلي شخصين ال
lastName
بتاعهم 
"Hassan"
وحتي لو في شخص ال
firstName
بتاعه
Hassan 
هيجيبه
لانك حددت كده في طريقه الاستعلام__
***
محتاجين بقا في تاسك الفيديو الجاي__
ان لو كتب اي شئ في الحقل وليكن 
Ali 
عايزه يتحول للتصميم اللي اسمه 
search
اي يتعمله ريندر
والريندر دا هيحصل لما نحصل علي الداتا اي هنستخدم الريندر في ال 
then
بداخل ال
anfn


