import { Component, Input, OnInit } from '@angular/core';
import { UsuariosService } from '../../Services/service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() usuarios: any 

  Usuario = {
    password: null,
    email: null
  }

  constructor(public UsuariosService: UsuariosService) { }

  ngOnInit(){
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.UsuariosService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
    }).catch((err) =>{
      console.log(err);
    })
    console.log(this.usuarios);
  }

  log(){
    for(let x = 0; x < this.usuarios.length; x++){
      if(this.Usuario.email == this.usuarios[x].email && this.Usuario.password == this.usuarios[x].password){
        console.log("si")
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Credenciales correctas',
          showConfirmButton: false,
          timer: 1500
        })
        break;
       
      }else{
        console.log("no")
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Credeciales incorrectas',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
    
  }

}
