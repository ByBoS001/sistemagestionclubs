class User {
    constructor(iduser, name, email, cellphone, campus_idcampus, club_idclub, iduser_role) {
      (this.iduser = iduser),
        (this.name = name),
        (this.email = email),
        (this.cellphone = cellphone),
        (this.club_idclub = club_idclub),
        (this.campus_idcampus = campus_idcampus),
        (this.iduser_role = iduser_role);
    }
  }

export default User;

