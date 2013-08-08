if (typeof window.Speroteck == 'undefined') {
    window.Speroteck = {};
}

Speroteck.Dogs = Class.create({

    dogNames:undefined,

    /**
     *
     * @param name
     */
    initialize: function(){
       this.dogNames = [];
    },

    /**
     *
     * @param name
     */
    addDog:function(name){
      this.dogNames.push(name);
        console.log('dog with name '+ name + ' was added');
    },

    /**
     *
     */
    voice: function(name){
        if (typeof name == 'undefined') {
            for (i = 0; i < this.dogNames.length; i++) {
                console.log('i am ' + this.dogNames[i]);
            }
        } else if (this.dogNames.indexOf(name) >= 0) {
            for (i = 0; i < this.dogNames.length; i++) {
                if(this.dogNames[i] == name) console.log('i am ' + this.dogNames[i]);
            }
        } else {
            console.log('dog ' + name + ' not exist')
        }
    },

    /**
     *
     * @param name
     */
    come: function(name){
        if (typeof name == 'undefined') {
            for (i = 0; i < this.dogNames.length; i++) {
                console.log('come to me ' + this.dogNames[i]);
            }
        } else if (this.dogNames.indexOf(name) >= 0) {
            for (i = 0; i < this.dogNames.length; i++) {
                if(this.dogNames[i] == name) console.log('come to me ' + this.dogNames[i]);
            }
        } else {
            console.log('dog ' + name + ' not exist')
        }
    }
});

