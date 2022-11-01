let users= [
    {
      Id: 1,
      Name: "Luciano",
      Lastname: "Perez",
      DNI: "34546768"
    },
    {
      Id: 2,
      Name: "Matias",
      Lastname: "Rodriguez",
      DNI: "39687304"
    },
    {
      Id: 3,
      Name: "Ivan",
      Lastname: "Perez",
      DNI: "30857103"
    },
    {
      Id: 4,
      Name: "Maria",
      Lastname: "Gomez",
      DNI: "43094758"
    }

]





const getUser = (req, res) => {
        console.log('Se ejecutó la funcion GET');
        res.status(200).send(users);
    }

const getUser1 = (req, res) => {
        console.log('Se buscó un usuario')
        const searchUser = users.find((users) => users.Id === parseInt(req.params.Id));
        if (!searchUser) {
            return res.status(404).send(`No se ha encontrado el usuario`)
        }
        res.status(200).send(searchUser);
    }
    
const createUser = (req, res) => {
        console.log('Se ejecutó la funcion POST');
        const newUser = { ...req.body, Id: users.length + 1 };
        users.push(newUser);
        res.status(201).send(users)
    }
    
const putUser = (req, res) => {
        console.log('Se ejecutó la funcion PUT');
        let newData = req.body;
        let userUpdate = users.find ((users) => users.Id === parseInt(req.params.Id));
        if (!userUpdate) {
            return res.status(404).send(`No se encontró el usuario a actualizar`)           
        }
        users = users.map((users) => users.Id === parseInt(req.params.Id) 
        ? { ...users, ...newData }
        : users
        );
        res.status(201).send(`El usuario se actualizó correctamente`)
    }
    
const deleteUser = (req, res) => {
        console.log('Se ejecutó la funcion DELETE');
        let userDelete = users.find ((users) => users.Id === parseInt(req.params.Id));

        if (!userDelete) {
            return res.status(404).send(`No se encontró el usuario a eliminar`);
        }
        users = users.filter( (users) => users.Id !== parseInt(req.params.Id));
        res.status(201).send(`El usuario ha sido eliminado`)
    }
    
    module.exports = {
        getUser,
        getUser1,
        createUser,
        putUser,
        deleteUser,
    }
    
    
    