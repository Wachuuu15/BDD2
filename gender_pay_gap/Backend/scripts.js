db.dataset.find() 

const collection = db.getCollection('dataset');
collection.updateMany({}, { $unset: { company_id: "" } });

let companyIdCounter = 1;
collection.find().forEach(function(doc) {
    collection.updateOne({ _id: doc._id }, { $set: { company_id: companyIdCounter } });
    companyIdCounter++;
});
//end

db.createCollection("employees");

const generateEmployeeId = () => uuidv4();
const employeesData = [
  {
    _id: generateEmployeeId(),
    employee_name: "Empleado 1",
    position: "Analista de Datos"
  },
  {
    _id: generateEmployeeId(),
    employee_name: "Empleado 2",
    position: "Gerente de Recursos Humanos"
  }
];

db.employees.insertMany(employeesData);

// Actualizar los documentos en la colección de empresas para hacer referencia a los IDs de empleados
db.dataset.find().forEach(function(company) {
    const employeeIds = db.employees.find().map(emp => emp._id);
    company.employees = employeeIds.slice(0, 2);
    db.dataset.save(company);
});


print("Los documentos en la colección de empresas han sido actualizados para hacer referencia a los IDs de empleados.");

