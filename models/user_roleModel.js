import iduser from '../models/userModel.js';
class user_role {
    constructor(iduser_role, name_role, club_idclub, iduser) {
      (this.iduser_role = iduser_role),
        (this.naname_roleme = name_role),
        (this.club_idclub = club_idclub),
        (this.user_iduser = iduser);
    }
  }
  
export default user_role;   