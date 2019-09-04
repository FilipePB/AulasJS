var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        //o this puxa o valor clicado 
        this.remove(); //função de remoção
    });
})