function getAdmins(map) {
    let admins = [];
     for ([key, value] of map){
         if (value === 'Admin'){
             admins.push(key);
     }
 }
 return admins;
 }
  const usuarios = new Map ();
     usuarios.set ('Luan','Admin');
     usuarios.set('Gabriel','Admin');
     usuarios.set('Gustavo','Admin');
     usuarios.set('PH','Subgerente');
     usuarios.set('Lemuel','Conselheiro')
 
 console.log(getAdmins(usuarios));