mongo =>
mongodb is nosql database management system .
a. if you want to create database in mongodb
sytaxr :-use database_name
ex-use school
b. if you want to create collection
syntax:- db createCollection("student")
c.if you want to vheck how many collections.
syntax-> show collection

crud operations
d=> create
if you want to insert any document
syntax:-
db.collections_name.insertone({
"name":"Aniket singh",
"branch":"cse",
"age":"20"
});
IF YOU WANT to insert many documents in one time .

db.student.insertmany([
{name:"govinda",
bramch:"vd",
course:"basfbdf"
},
{
name:"g",
bramch:"vsd",
course:"basfgf"
},
{
name:"go",
bramch:"v",
course:"bar"
}
]
)

e. if you want to show documents .
syntax->
db.collection_name.find();
ex-> db.student.find();

I. if you want to find any document on the behalf of condition.
syntax=>
db.collection_name.find({fieldname:condition});
ex->
db.student.find({age:55})
db.student.find({city:"rbl"})

f.if you want to update any document
syntax=>
db.student.update({name:"aman"},{$set:{
name"runmachine",course:"sss"

}
})

practice sessions=>
a.create a database which name is company
use company
b.create a collection which name is employee
db.createcollection('employee")
c.create atleast 5 document in employee
db.employee.insertmany([
{
name:"shikhar dhavan",
department:"it",
salary:4000,
city:"delhi"
},
{
name:"smriti",
department:"sales",
salary:3500,
city:"Amritsar"
},
{
name:"shreyasciyear",
department:"it",
salary:30000,
city:"Mumbai"
},
{
name:"bhuvi",
department:"sales",
salary:32344,
city:"lko"
},
{
name:"Aniket singh"
department:"it"
salary:100,
city:"rbl"
}
])

                   d.find all employee on the behalf of department

db.employee.find({department:"it"});
e.update all employee department from sales to bd
db.employee.updatemany({department:"sales"},
{
$set{
department:"db"
}
})

query operators=>query oprators are used to help us to perform the query on the database
ex=> $lt,$gt,$lte,$gte,$ne etc;
1.$lt=>$lt use for less then query operatiors .
ex=>db.employee.find({age:{$lt:20}})
2.gt=> $ gt is used for greater then query operators
ex=> db.employee.find({age:{$gt:20}})
3.$lte=>
it is use for less then and equal .
ex=> db.employee.find({age:{$lte:20}})

aggregation pipline=>
aggregation pipline is a way to perform the computation on documnets in mongodb .
ex=>$gropu ,$match ,$limit,$skip,sort etc.

                     db.employee.aggregate([
                        {
                                $limit:3
                        }
                     ]);
                2.$skip:=>
                          skip are used to skip the documnet
                          ex-db.employee.aggregate([
                                {
                                        $skip:3
                                }
                          ])
                3.sort=> $sort are used to perform the sorting in accending decending orders .
                ex=>db.studet.aggregate([
                        {
                                $sort:{
                                        age:-1
                                }
                        }
                ])

normal operations=>
a.if you want to fetch limited documnets from db .
ex=> db.employee.find()limit(3);
it fetch only three documnets .  
b.if you want to skip any documnet
ex-db.employee.find().skip(3)
c.if you want to performing sorting for any documnets
ex-db.student.find().sort(-1)

d.if you want to find all dovumet aftewr that you want to sort them on the behalf of age then you want skip 2
documnets then you want find only 2 documnets
solution=>
db.student.find().sort({age:1}.skip(2).limit(2))
aggregation pipeline------------
db.student.aggregate([
{
$sort:{
age:1
}
},
{
$skip:2
}
])

delete=>
a.if you want to delete one documnet at a time
db.student.delete.one()//it delete first docu.
db.student.deleteone(conditon)//it delete particular docu.
b. if you want to delete all documnet at a time
db.school.deletemany()//it delte all docu
db.school.deletemany(condition)//it deelte many documnet on the bekalf of condition

db.employee.insertMany([
{
name:"aniket",
salary:3000,
city:"rbl",
branch:"lucknow",
department:"it"
},
{
name:"satyam",
salary:5000,
city:"rbl",
branch:"lucknow",
department:"sales"
},
{
name:"aman",
salary:4000,
city:"noida",
branch:"lucknow",
department:"it"
},
{
name:"shubham",
salary:6000,
city:"noida",
branch:"gujrat",
department:"sales"
},
{
name:"suman",
salary:3000,
city:"noida",
branch:"gut",
department:"it"
},
{
name:"utkarsh",
salary:300045,
city:"asam",
branch:"man",
department:"it"
}
])

$match=>
$match are used for find the documnet that is matched on the behalfof conditon
db.employee.aggregate([
{
$match:{
branch:"lucknow"
}
},
{
$group:{
_id:"$department",
"totalsalary":{
$sum:"$salry"
}
}
}
])

db.students.insertOne({
name:"Aman",
age:21,
city:"lucknow",
course:"MERN",
marks:78

})

db.students.insertMany([{
name:"riya",
age:22,
city:"kanpur",
course:"python",
marks:85
},
{
name:"karan",
age:20,
city:lucknow",
course:"MERN",
marks:62
},
{
name:"sneha",
age:23,
city:"delhi"
course:"java",
marks:91
},
{
name:"vikas",
age:19,
city:"kanpur"
course:"MERN",
marks:54
}
])

db.students.find({age:{$gt:20}})

db.students.find({marks:{$gte:60}},{name:1,marks:1,_id:0})
db.students.updateOne({"city":"lucknow"},{$set:{"city":noida}})
db.students.updateOne({name:"karan"},{$inc:{marks:5}})
db.students.updateOne({name:"sneha"},{$set:{password:"true"}})
db.students.deleteOne({name:"vikas"})
db.students.deleteMany({marks:{$lt:60}})

use library
db.createCollection("student")
db.student.inserTOne({
studentsid:1,9
})
db.createCollection("books")
db.createCollection("issuedbooks")
db.createCollection("libraines")
db.createCollection("return")
