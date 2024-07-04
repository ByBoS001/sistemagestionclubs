class User {
    constructor(iduser, name, email, cellphone, idcampus, idclub, iduser_role) {
      (this.iduser = iduser),
        (this.name = name),
        (this.email = email),
        (this.cellphone = cellphone),
        (this.idclub = idclub),
        (this.idcampus = idcampus),
        (this.iduser_role = iduser_role);
    }
  }

export default User;

