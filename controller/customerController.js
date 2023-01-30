
const repo = require("../repositories/customerRepository");

const customers= [
    {
        "name":"Infosys",
        "website":"www.infosys.com",
        "ceo":"Uknown",
        "employees":"200000",
        "year":"1995",
        "turnover":"100000000"
    },
    {
        "name":"TCS",
        "website":"www.tcs.com",
        "ceo":"Uknown",
        "employees":"300000",
        "year":"1995",
        "turnover":"200000000"
    }
];

module.exports.get = (req, res)=>{
    repo.getAll((docs)=>{
        return res.status(200).send(docs);
    })
}

module.exports.add = (req, res)=>{
    const customer = req.body;
    repo.add(customer, ()=>{
        return res.status(200).send();
    });
}

module.exports.update = (req, res)=>{
    const customer = req.body;
    let foundCustomerIndex = customers.findIndex(c=> c.name==customer.name);
    customers[foundCustomerIndex]=customer;
    console.log(customers);
    res.status(200).send(customers);
}

module.exports.delete = (req, res)=>{
    const name = req.params.name;
    let foundCustomerIndex = customers.findIndex(c=> c.name==name);
    customers.splice(foundCustomerIndex, 1);
    console.log(customers);
    res.status(200).send(customers);
}
