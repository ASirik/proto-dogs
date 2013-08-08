if (typeof window.Speroteck == 'undefined') {
    window.Speroteck = {};
}

Speroteck.Dogs = Class.create({

    dogName:undefined,

    command: undefined,

    voice: undefined,


    initialize: function(name){
        if(!name){
            console.log('pleas put name of the dog')
        }
        if(name){
           this.addDog = [name];
        }
    },
    addDog:function(name){
      this.dogName.push(name);
        console.log(this.dogName);
        console.log('my dog name is '+ name);
    },
    dogsVoice: function(){
        for( i=0; i< this.dogName.length; i++ ){
        console.log('i am '+ this.dogName[i]);
        }
    },
    come: function(name){
        name = name || 0;
        if(name){
            if( this.dogName.indexOf(name) == 0){
                for( i=0; i< this.dogName.length; i++ ){
                    console.log('comes to me '+ this.dogName[i]);
                }
            }
               if( this.dogName.indexOf(name) == -1){
                   console.log('dog ' + name + ' not exist' )
               }
            }else{
                for( i=0; i< this.dogName.length; i++ ){
                    console.log('comes to me '+ this.dogName[i]);
                }
            }
    }
});

